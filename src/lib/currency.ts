"use client";

import { useState, useEffect, useCallback } from 'react';

// TypeScript interfaces
export interface Country {
  code: string;
  name: string;
  currency: Currency;
  flag: string;
  locale: string;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  exchangeRate: number; // Rate relative to EUR
}

export interface GeolocationResponse {
  country_code: string;
  country_name: string;
  error?: boolean;
}

export interface CurrencyState {
  currentCountry: Country;
  isLoading: boolean;
  error: string | null;
  isManuallySet: boolean;
  detectionMethod?: string; // For debugging
}

// Supported currencies and countries
export const currencies: Record<string, Currency> = {
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    exchangeRate: 1, // Base currency
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    exchangeRate: 1.05, // Approximate rate
  },
  PEN: {
    code: 'PEN',
    symbol: 'S/',
    name: 'Nuevo Sol',
    exchangeRate: 4.0, // Updated rate
  },
  COP: {
    code: 'COP',
    symbol: '$',
    name: 'Peso Colombiano',
    exchangeRate: 4200, // Updated rate
  },
};

export const countries: Record<string, Country> = {
  ES: {
    code: 'ES',
    name: 'España',
    currency: currencies.EUR,
    flag: '🇪🇸',
    locale: 'es-ES',
  },
  // European Union countries - all use EUR
  FR: {
    code: 'FR',
    name: 'Francia',
    currency: currencies.EUR,
    flag: '🇫🇷',
    locale: 'fr-FR',
  },
  DE: {
    code: 'DE',
    name: 'Alemania',
    currency: currencies.EUR,
    flag: '🇩🇪',
    locale: 'de-DE',
  },
  IT: {
    code: 'IT',
    name: 'Italia',
    currency: currencies.EUR,
    flag: '🇮🇹',
    locale: 'it-IT',
  },
  PT: {
    code: 'PT',
    name: 'Portugal',
    currency: currencies.EUR,
    flag: '🇵🇹',
    locale: 'pt-PT',
  },
  NL: {
    code: 'NL',
    name: 'Países Bajos',
    currency: currencies.EUR,
    flag: '🇳🇱',
    locale: 'nl-NL',
  },
  BE: {
    code: 'BE',
    name: 'Bélgica',
    currency: currencies.EUR,
    flag: '🇧🇪',
    locale: 'fr-BE',
  },
  AT: {
    code: 'AT',
    name: 'Austria',
    currency: currencies.EUR,
    flag: '🇦🇹',
    locale: 'de-AT',
  },
  // Latin American countries
  PE: {
    code: 'PE',
    name: 'Perú',
    currency: currencies.PEN,
    flag: '🇵🇪',
    locale: 'es-PE',
  },
  CO: {
    code: 'CO',
    name: 'Colombia',
    currency: currencies.COP,
    flag: '🇨🇴',
    locale: 'es-CO',
  },
  // USA and other countries default to USD
  US: {
    code: 'US',
    name: 'Estados Unidos',
    currency: currencies.USD,
    flag: '🇺🇸',
    locale: 'en-US',
  },
  GLOBAL: {
    code: 'GLOBAL',
    name: 'Global',
    currency: currencies.USD,
    flag: '🌎',
    locale: 'en-US',
  },
};

// Default country (Spain/EUR)
const DEFAULT_COUNTRY = countries.ES;
const STORAGE_KEY = 'fin-currency-preference';

// IP detection is DISABLED by default to prevent runtime errors
let IP_DETECTION_ENABLED = false;

// Utility functions
export const formatPrice = (
  amount: number,
  currency: Currency,
  locale: string = 'es-ES'
): string => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch (error) {
    // Fallback formatting
    return `${currency.symbol}${Math.round(amount).toLocaleString()}`;
  }
};

export const convertPrice = (
  baseAmount: number,
  fromCurrency: Currency,
  toCurrency: Currency
): number => {
  // Convert to EUR first, then to target currency
  const eurAmount = baseAmount / fromCurrency.exchangeRate;
  let convertedAmount = eurAmount * toCurrency.exchangeRate;
  
  // Apply special rounding for different currencies to get "normal prices"
  if (toCurrency.code === 'COP') {
    // For Colombian pesos, round down to nearest 1000 for amounts over 10,000
    if (convertedAmount >= 10000) {
      convertedAmount = Math.floor(convertedAmount / 1000) * 1000;
    } else if (convertedAmount >= 1000) {
      convertedAmount = Math.floor(convertedAmount / 100) * 100;
    } else {
      convertedAmount = Math.floor(convertedAmount);
    }
  } else if (toCurrency.code === 'PEN') {
    // For Peruvian soles, round down to nice numbers
    if (convertedAmount >= 100) {
      convertedAmount = Math.floor(convertedAmount / 10) * 10;
    } else if (convertedAmount >= 10) {
      convertedAmount = Math.floor(convertedAmount / 5) * 5;
    } else {
      convertedAmount = Math.floor(convertedAmount);
    }
  } else if (toCurrency.code === 'USD') {
    // For USD, round down to nearest dollar for clean pricing
    convertedAmount = Math.floor(convertedAmount);
  } else {
    // For EUR and others, keep original rounding
    convertedAmount = Math.round(convertedAmount);
  }
  
  return convertedAmount;
};

export const formatConvertedPrice = (
  baseAmount: number,
  baseCurrency: Currency,
  targetCurrency: Currency,
  locale: string
): string => {
  const convertedAmount = convertPrice(baseAmount, baseCurrency, targetCurrency);
  return formatPrice(convertedAmount, targetCurrency, locale);
};

// Safe logging function
const logDetection = (method: string, result: Country | null, details?: any) => {
  try {
    if (typeof window !== 'undefined' && typeof console !== 'undefined') {
      const message = `[Currency Detection] ${method}: ${result ? result.code : 'null'}`;
      console.log(`%c${message}`, 'color: orange; font-weight: bold;', details || '');
      
      // Also show in page if localhost for easier debugging
      if (window.location && window.location.hostname === 'localhost') {
        try {
          const debugEl = document.getElementById('currency-debug') || (() => {
            const el = document.createElement('div');
            el.id = 'currency-debug';
            el.style.cssText = 'position:fixed;top:10px;right:10px;background:rgba(0,0,0,0.8);color:white;padding:10px;font-size:12px;max-width:300px;z-index:9999;border-radius:5px;';
            if (document.body) document.body.appendChild(el);
            return el;
          })();
          
          if (debugEl) {
            debugEl.innerHTML = `<strong>Currency Detection:</strong><br/>${message}<br/>${JSON.stringify(details || {}, null, 2)}`;
          }
        } catch (domError) {
          // Ignore DOM errors
        }
      }
    }
  } catch (logError) {
    // Completely silent - no errors allowed
  }
};

// COMPLETELY FAIL-SAFE IP detection - no errors can escape
const detectCountryFromIP = async (): Promise<{ country: Country | null; method: string }> => {
  // Return immediately if disabled
  if (!IP_DETECTION_ENABLED) {
    return { country: null, method: 'ip-disabled' };
  }

  // Multiple layers of environment checks
  try {
    if (typeof window === 'undefined') {
      return { country: null, method: 'ip-no-window' };
    }
    
    if (!window.fetch) {
      return { country: null, method: 'ip-no-fetch' };
    }

    // Check for problematic browser extensions
    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      const ua = navigator.userAgent.toLowerCase();
      if (ua.includes('extension') || ua.includes('addon')) {
        logDetection('Skipping IP detection - browser extension detected', null);
        return { country: null, method: 'ip-extension-blocked' };
      }
    }

  } catch (envError) {
    return { country: null, method: 'ip-env-error' };
  }

  // Simple, reliable IP services with no AbortController
  const ipServices = [
    'https://api.country.is/',
    'https://ipapi.co/json/',
  ];

  logDetection('Starting safe IP detection', null);

  for (let i = 0; i < ipServices.length; i++) {
    try {
      const url = ipServices[i];
      logDetection(`Trying service ${i + 1}/${ipServices.length}`, null, { url });

      // Create a race between fetch and timeout - no AbortController
      const fetchPromise = window.fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
        cache: 'no-cache',
      });

      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => resolve(null), 3000);
      });

      const response = await Promise.race([fetchPromise, timeoutPromise]);

      if (!response || typeof response !== 'object' || !response.ok) {
        logDetection(`Service ${i + 1} failed - no valid response`, null);
        continue;
      }

      const data = await response.json();
      
      if (!data || typeof data !== 'object') {
        logDetection(`Service ${i + 1} failed - invalid data`, null);
        continue;
      }

      // Try different response formats
      let countryCode = null;
      if (data.country) countryCode = data.country;
      else if (data.country_code) countryCode = data.country_code;
      else if (data.countryCode) countryCode = data.countryCode;

      if (countryCode && typeof countryCode === 'string') {
        const upperCountryCode = countryCode.toUpperCase().trim();
        
        // Priority for VPN targets
        if (upperCountryCode === 'CO' && countries.CO) {
          logDetection(`✅ IP SUCCESS: Colombia detected`, countries.CO);
          return { country: countries.CO, method: `ip-service-${i + 1}-colombia` };
        }
        
        if (upperCountryCode === 'PE' && countries.PE) {
          logDetection(`✅ IP SUCCESS: Peru detected`, countries.PE);
          return { country: countries.PE, method: `ip-service-${i + 1}-peru` };
        }
        
        // Other supported countries
        if (countries[upperCountryCode]) {
          logDetection(`✅ IP SUCCESS: ${upperCountryCode} detected`, countries[upperCountryCode]);
          return { country: countries[upperCountryCode], method: `ip-service-${i + 1}-${upperCountryCode}` };
        }
        
        logDetection(`Service ${i + 1} - Unsupported country: ${upperCountryCode}`, null);
      } else {
        logDetection(`Service ${i + 1} - No country code found`, null, data);
      }
      
    } catch (serviceError) {
      logDetection(`Service ${i + 1} error`, null, { error: serviceError.message || 'Unknown error' });
      continue; // Try next service
    }
  }
  
  logDetection('All IP services failed - using fallback', null);
  return { country: null, method: 'ip-all-failed' };
};

// Enhanced browser detection - primary method
const detectCountryFromBrowser = (): { country: Country | null; method: string } => {
  try {
    if (typeof navigator === 'undefined') {
      return { country: null, method: 'browser-no-navigator' };
    }
    
    // Safely get all available language information
    const languages = [];
    try {
      if (navigator.language) languages.push(navigator.language);
      if (navigator.languages && Array.isArray(navigator.languages)) {
        languages.push(...navigator.languages);
      }
      if ((navigator as any).userLanguage) languages.push((navigator as any).userLanguage);
      if ((navigator as any).browserLanguage) languages.push((navigator as any).browserLanguage);
      if ((navigator as any).systemLanguage) languages.push((navigator as any).systemLanguage);
    } catch (langError) {
      // Ignore language detection errors
    }

    const uniqueLanguages = [...new Set(languages.filter(Boolean))];
    logDetection('Browser Languages', null, { languages: uniqueLanguages });

    for (const language of uniqueLanguages) {
      if (!language || typeof language !== 'string') continue;
      
      const lowerLang = language.toLowerCase();
      
      // Direct country code detection (es-CO, es-PE, etc)
      const countryMatch = language.match(/-([A-Z]{2})$/i);
      if (countryMatch) {
        const countryCode = countryMatch[1].toUpperCase();
        
        if (countries[countryCode]) {
          logDetection('Browser Direct Match', countries[countryCode], { language, countryCode });
          return { country: countries[countryCode], method: `browser-direct-${countryCode}` };
        }
        
        // Check EU countries and default to EUR
        const euCountries = ['GR', 'FI', 'IE', 'LU', 'MT', 'CY', 'SK', 'SI', 'EE', 'LV', 'LT'];
        if (euCountries.includes(countryCode)) {
          return { country: countries.ES, method: `browser-eu-${countryCode}` };
        }
      }

      // Specific patterns for Latin American countries
      if (lowerLang.includes('co') && lowerLang.includes('es')) {
        return { country: countries.CO, method: 'browser-pattern-co' };
      }
      
      if (lowerLang.includes('pe') && lowerLang.includes('es')) {
        return { country: countries.PE, method: 'browser-pattern-pe' };
      }

      // Prefix patterns
      if (lowerLang.startsWith('es-co')) {
        return { country: countries.CO, method: 'browser-prefix-co' };
      }
      if (lowerLang.startsWith('es-pe')) {
        return { country: countries.PE, method: 'browser-prefix-pe' };
      }
      if (lowerLang.startsWith('es')) {
        return { country: countries.ES, method: 'browser-prefix-es' };
      }
      if (lowerLang.startsWith('en-us')) {
        return { country: countries.US, method: 'browser-prefix-us' };
      }
    }

    return { country: null, method: 'browser-no-match' };
  } catch (error) {
    return { country: null, method: 'browser-error' };
  }
};

// Timezone detection
const detectCountryFromTimezone = (): { country: Country | null; method: string } => {
  try {
    if (typeof Intl === 'undefined' || !Intl.DateTimeFormat) {
      return { country: null, method: 'timezone-unavailable' };
    }

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timezone && typeof timezone === 'string') {
      if (timezone.includes('America/Bogota')) {
        return { country: countries.CO, method: 'timezone-bogota' };
      }
      if (timezone.includes('America/Lima')) {
        return { country: countries.PE, method: 'timezone-lima' };
      }
      if (timezone.includes('Europe/Madrid') || timezone.includes('Europe/')) {
        return { country: countries.ES, method: 'timezone-europe' };
      }
      if (timezone.includes('America/New_York') || timezone.includes('America/Los_Angeles') || timezone.includes('America/Chicago')) {
        return { country: countries.US, method: 'timezone-us' };
      }
    }

    return { country: null, method: 'timezone-no-match' };
  } catch (error) {
    return { country: null, method: 'timezone-error' };
  }
};

// Storage functions with complete error handling
const getStoredPreference = (): Country | null => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const countryCode = JSON.parse(stored);
      return countries[countryCode] || null;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const storePreference = (country: Country): void => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(country.code));
  } catch (error) {
    // Ignore storage errors
  }
};

// Enhanced debug function
export const debugCurrencyDetection = async () => {
  try {
    if (typeof window === 'undefined' || typeof console === 'undefined') return;
    
    console.log('%c🔍 === CURRENCY DETECTION DEBUG ===', 'color: lime; font-size: 18px; font-weight: bold;');
    
    // Show current state
    const stored = getStoredPreference();
    console.log('%c📁 Stored Preference:', 'color: cyan; font-weight: bold;', stored);
    
    // Show IP detection status
    console.log('%c🌐 IP Detection Status:', 'color: yellow; font-weight: bold;', IP_DETECTION_ENABLED ? 'ENABLED' : 'DISABLED');
    
    // Test IP detection (for VPN) if enabled
    if (IP_DETECTION_ENABLED) {
      console.log('%c🌐 Testing IP Detection...', 'color: yellow; font-weight: bold;');
      const ipResult = await detectCountryFromIP();
      console.log('%c🌐 IP Detection Result:', 'color: cyan; font-weight: bold;', ipResult);
      
      if (ipResult.country) {
        console.log('%c✅ IP DETECTION SUCCESS!', 'color: lime; font-size: 14px; font-weight: bold;');
        console.log(`Country: ${ipResult.country.name} (${ipResult.country.code})`);
        console.log(`Currency: ${ipResult.country.currency.code} (${ipResult.country.currency.symbol})`);
      } else {
        console.log('%c❌ IP Detection failed - Try forceCountry("CO") or forceCountry("PE")', 'color: red; font-weight: bold;');
      }
    } else {
      console.log('%c❌ IP Detection DISABLED - Use enableIPDetection() first', 'color: red; font-weight: bold;');
    }
    
    // Test other methods
    const browserResult = detectCountryFromBrowser();
    console.log('%c🌍 Browser Detection:', 'color: cyan; font-weight: bold;', browserResult);
    
    const timezoneResult = detectCountryFromTimezone();
    console.log('%c🕐 Timezone Detection:', 'color: cyan; font-weight: bold;', timezoneResult);
    
    // Environment info
    console.log('%c📊 Environment Info:', 'color: magenta; font-weight: bold;');
    console.log('Languages:', navigator.languages);
    console.log('Timezone:', Intl.DateTimeFormat().resolvedOptions().timeZone);
    
    // Instructions
    console.log('%c🛠️  MANUAL TESTING COMMANDS:', 'color: orange; font-size: 14px; font-weight: bold;');
    console.log('%cenableIPDetection() - Enable VPN testing', 'color: yellow;');
    console.log('%cforceCountry("CO") - Force Colombia', 'color: yellow;');
    console.log('%cforceCountry("PE") - Force Peru', 'color: yellow;');
    console.log('%cresetCurrency() - Reset to auto-detect', 'color: yellow;');
    
  } catch (debugError) {
    // Even debug function must not throw errors
  }
};

// Manual override functions with complete error handling
export const forceCountry = (countryCode: string) => {
  try {
    if (countries[countryCode]) {
      storePreference(countries[countryCode]);
      console.log(`%c✅ FORCED CURRENCY: ${countries[countryCode].name} (${countries[countryCode].currency.code})`, 'color: lime; font-weight: bold; font-size: 14px;');
      console.log('Page will reload in 1 second...');
      setTimeout(() => {
        try {
          if (window && window.location) window.location.reload();
        } catch (reloadError) {
          // Ignore reload errors
        }
      }, 1000);
    } else {
      console.error(`❌ Country ${countryCode} not supported. Available: ES, CO, PE, US`);
    }
  } catch (error) {
    console.error('Failed to force country:', error);
  }
};

export const resetCurrency = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    IP_DETECTION_ENABLED = false;
    console.log('%cCurrency preference reset. Page will reload.', 'color: lime; font-weight: bold;');
    setTimeout(() => {
      try {
        if (window && window.location) window.location.reload();
      } catch (reloadError) {
        // Ignore reload errors
      }
    }, 500);
  } catch (error) {
    console.error('Failed to reset currency:', error);
  }
};

// IP detection control functions
export const enableIPDetection = () => {
  try {
    IP_DETECTION_ENABLED = true;
    console.log('%cIP Detection ENABLED. Use debugCurrencyDetection() to test VPN.', 'color: lime; font-weight: bold;');
  } catch (error) {
    // Ignore errors
  }
};

export const disableIPDetection = () => {
  try {
    IP_DETECTION_ENABLED = false;
    console.log('%cIP Detection DISABLED.', 'color: orange; font-weight: bold;');
  } catch (error) {
    // Ignore errors
  }
};

// Global functions for easier testing
if (typeof window !== 'undefined') {
  try {
    // Use setTimeout to avoid blocking initial load
    setTimeout(() => {
      (window as any).debugCurrencyDetection = debugCurrencyDetection;
      (window as any).forceCountry = forceCountry;
      (window as any).resetCurrency = resetCurrency;
      (window as any).enableIPDetection = enableIPDetection;
      (window as any).disableIPDetection = disableIPDetection;
      
      // Quick test functions
      (window as any).testColombia = () => forceCountry('CO');
      (window as any).testPeru = () => forceCountry('PE');
      (window as any).testSpain = () => forceCountry('ES');
      
      console.log('%c🚀 CURRENCY TESTING READY (NO RUNTIME ERRORS):', 'color: orange; font-weight: bold; font-size: 14px;');
      console.log('%cenableIPDetection() - Enable VPN testing', 'color: cyan;');
      console.log('%cdebugCurrencyDetection() - Test all methods', 'color: cyan;');
      console.log('%ctestColombia() - Quick test Colombia', 'color: yellow;');
      console.log('%ctestPeru() - Quick test Peru', 'color: yellow;');
      console.log('%cresetCurrency() - Reset to auto-detect', 'color: yellow;');
    }, 0);
  } catch (windowError) {
    // Ignore window assignment errors
  }
}

// COMPLETELY FAIL-SAFE useCurrency hook
export const useCurrency = () => {
  const [state, setState] = useState<CurrencyState>({
    currentCountry: DEFAULT_COUNTRY,
    isLoading: true,
    error: null,
    isManuallySet: false,
    detectionMethod: 'initial',
  });

  const detectCountry = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      logDetection('🚀 Starting fail-safe detection', null);

      // 1. Check stored preference first (manual overrides)
      const storedCountry = getStoredPreference();
      if (storedCountry) {
        logDetection('✅ Using stored preference', storedCountry);
        setState({
          currentCountry: storedCountry,
          isLoading: false,
          error: null,
          isManuallySet: true,
          detectionMethod: 'stored-preference',
        });
        return;
      }

      // 2. Browser language detection (primary method - no network calls)
      const browserResult = detectCountryFromBrowser();
      if (browserResult.country) {
        logDetection('✅ Browser detection success', browserResult.country);
        setState({
          currentCountry: browserResult.country,
          isLoading: false,
          error: null,
          isManuallySet: false,
          detectionMethod: browserResult.method,
        });
        return;
      }

      // 3. Timezone detection (secondary - no network calls)
      const timezoneResult = detectCountryFromTimezone();
      if (timezoneResult.country) {
        logDetection('✅ Timezone detection success', timezoneResult.country);
        setState({
          currentCountry: timezoneResult.country,
          isLoading: false,
          error: null,
          isManuallySet: false,
          detectionMethod: timezoneResult.method,
        });
        return;
      }

      // 4. IP detection (optional - only if enabled for VPN testing)
      if (IP_DETECTION_ENABLED) {
        try {
          logDetection('🌐 Trying IP detection...', null);
          const ipResult = await detectCountryFromIP();
          if (ipResult.country) {
            logDetection('✅ IP detection success!', ipResult.country);
            setState({
              currentCountry: ipResult.country,
              isLoading: false,
              error: null,
              isManuallySet: false,
              detectionMethod: ipResult.method,
            });
            return;
          }
        } catch (ipError) {
          logDetection('❌ IP detection error - continuing with fallback', null, ipError);
          // Continue to fallback
        }
      }

      // 5. Final fallback (Spain/EUR)
      logDetection('⚠️ Using default fallback (Spain/EUR)', DEFAULT_COUNTRY);
      setState({
        currentCountry: DEFAULT_COUNTRY,
        isLoading: false,
        error: null,
        isManuallySet: false,
        detectionMethod: 'default-fallback',
      });

    } catch (error) {
      logDetection('❌ Detection error - using fail-safe default', DEFAULT_COUNTRY, error);
      try {
        setState({
          currentCountry: DEFAULT_COUNTRY,
          isLoading: false,
          error: null,
          isManuallySet: false,
          detectionMethod: 'error-fallback',
        });
      } catch (stateError) {
        // If even setState fails, component will use initial state
      }
    }
  }, []);

  const setCountry = useCallback((country: Country) => {
    try {
      setState({
        currentCountry: country,
        isLoading: false,
        error: null,
        isManuallySet: true,
        detectionMethod: 'manual-selection',
      });
      storePreference(country);
      logDetection('Manual country selection', country);
    } catch (error) {
      // Ignore manual setting errors
    }
  }, []);

  const resetToDetected = useCallback(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(STORAGE_KEY);
      }
      detectCountry();
    } catch (error) {
      // Ignore reset errors
    }
  }, [detectCountry]);

  // Initialize on mount with ultimate fail-safe
  useEffect(() => {
    try {
      detectCountry();
    } catch (initError) {
      // If even initialization fails, use default state
      try {
        setState({
          currentCountry: DEFAULT_COUNTRY,
          isLoading: false,
          error: null,
          isManuallySet: false,
          detectionMethod: 'init-error-fallback',
        });
      } catch (stateError) {
        // Component will use initial state
      }
    }
  }, [detectCountry]);

  // Utility functions with complete error handling
  const formatPriceLocal = useCallback((amount: number): string => {
    try {
      return formatPrice(amount, state.currentCountry.currency, state.currentCountry.locale);
    } catch (error) {
      return `€${amount}`;
    }
  }, [state.currentCountry]);

  const convertFromEUR = useCallback((eurAmount: number): number => {
    try {
      return convertPrice(eurAmount, currencies.EUR, state.currentCountry.currency);
    } catch (error) {
      return eurAmount;
    }
  }, [state.currentCountry.currency]);

  const formatFromEUR = useCallback((eurAmount: number): string => {
    try {
      const converted = convertFromEUR(eurAmount);
      return formatPrice(converted, state.currentCountry.currency, state.currentCountry.locale);
    } catch (error) {
      return `€${eurAmount}`;
    }
  }, [convertFromEUR, state.currentCountry]);

  return {
    ...state,
    setCountry,
    resetToDetected,
    detectCountry,
    formatPrice: formatPriceLocal,
    convertFromEUR,
    formatFromEUR,
    availableCountries: Object.values(countries),
    debugDetection: debugCurrencyDetection,
  };
};
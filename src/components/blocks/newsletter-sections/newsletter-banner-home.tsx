"use client";

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface NewsletterBannerHomeProps {
  description?: string;
  buttonLabel?: string;
  placeholder?: string;
  locale?: string;
}

export const NewsletterBannerHome = ({
  buttonLabel = "Unirme",
  placeholder = "Tu email",
  locale = "es"
}: NewsletterBannerHomeProps) => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [lastSubmit, setLastSubmit] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  // RFC5322 practical email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const validateEmail = useCallback((email: string) => {
    return emailRegex.test(email);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      return;
    }
    const now = Date.now();
    if (now - lastSubmit < 10000) {
      setState('error');
      setErrorMessage(locale === 'en' ? 'Wait a few seconds before trying again' : 'Espera unos segundos antes de intentar de nuevo');
      return;
    }
    if (!email || !validateEmail(email)) {
      setState('error');
      setErrorMessage(locale === 'en' ? 'Please enter a valid email' : 'Por favor, introduce un email válido');
      return;
    }
    setState('loading');
    setLastSubmit(now);
    try {
      const response = await fetch('/api/contact-mautic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'newsletter',
          email,
          locale,
        }),
      });

      if (response.ok) {
        setState('success');
        setEmail('');
      } else {
        const errorData = await response.json();
        console.error('Newsletter subscription error:', errorData);
        setState('error');
        setErrorMessage(locale === 'en' ? 'An error occurred, please try again in a few seconds' : 'Ocurrió un error, prueba de nuevo en unos segundos');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setState('error');
      setErrorMessage(locale === 'en' ? 'An error occurred, please try again in a few seconds' : 'Ocurrió un error, prueba de nuevo en unos segundos');
    }
  };

  const resetState = () => {
    setState('idle');
    setErrorMessage('');
  };

  return (
    <div className="w-full flex justify-end items-center">
      <div className="w-full max-w-md">
        {state === 'success' ? (
          <div
            className="relative overflow-hidden bg-gradient-to-r from-[#FF6634] to-[#FF8A5B] rounded-lg p-4 animate-fadeInUp"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="font-bold text-lg">{locale === 'en' ? 'Successfully subscribed!' : '¡Suscrito con éxito!'}</span>
                <p className="text-sm text-white/90">{locale === 'en' ? 'Thank you for subscribing to our newsletter' : 'Gracias por suscribirte a nuestro boletín'}</p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-row gap-2 w-full">
            <div className="flex-1 relative min-w-[120px] max-w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 text-base rounded-lg bg-[#1A1F2E] border border-[#2A3441] text-white placeholder-[#FF6634] font-medium focus:ring-2 focus:ring-[#FF6634] focus:border-[#FF6634] transition-all duration-200 outline-none min-w-[120px] max-w-full"
                name="email"
                autoComplete="email"
                disabled={state === 'loading'}
                aria-invalid={state === 'error' && errorMessage.includes('email válido')}
                aria-describedby={state === 'error' ? 'email-error' : undefined}
              />
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="_honey"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                tabIndex={-1}
                aria-hidden="true"
              />
            </div>
            <Button
              type="submit"
              disabled={state === 'loading' || !email}
              className="bg-[#FF6634] text-white hover:bg-[#e55f32] font-medium px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-60 border border-[#FF6634] text-[16px] mt-[6px]"
              style={{ minWidth: 110 }}
            >
              {state === 'loading' ? (
                <>
                  <Loader className="h-4 w-4 animate-spin mr-2" />
                  {locale === 'en' ? 'Sending...' : 'Enviando...'}
                </>
              ) : (
                buttonLabel
              )}
            </Button>
          </form>
        )}
        {/* Mostrar error debajo para máxima visibilidad */}
        {state === 'error' && (
          <div
            className="flex items-center justify-center gap-2 mt-2 bg-red-100 border border-red-600 rounded text-red-800 p-2 text-sm font-semibold"
            id="email-error"
            role="alert"
            aria-live="polite"
          >
            <AlertCircle className="h-4 w-4 text-red-600" />
            <span>{errorMessage}</span>
            <button
              onClick={resetState}
              className="ml-2 underline hover:no-underline text-xs"
              aria-label={locale === 'en' ? 'Retry subscription' : 'Reintentar suscripción'}
              type="button"
            >
              {locale === 'en' ? 'Retry' : 'Reintentar'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
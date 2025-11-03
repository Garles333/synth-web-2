/**
 * Mautic API Integration Library
 * Handles all interactions with Mautic CRM
 */

const MAUTIC_BASE_URL = process.env.MAUTIC_BASE_URL || 'http://72.61.33.97:8080';
const MAUTIC_CLIENT_ID = process.env.MAUTIC_CLIENT_ID || '';
const MAUTIC_CLIENT_SECRET = process.env.MAUTIC_CLIENT_SECRET || '';

interface MauticContact {
  email: string;
  firstname?: string;
  lastname?: string;
  company?: string;
  tags?: string[];
  locale?: 'es' | 'en';
  [key: string]: any;
}

interface MauticResponse {
  success: boolean;
  contact?: any;
  error?: string;
}

/**
 * Get OAuth2 access token from Mautic
 */
async function getMauticToken(): Promise<string> {
  try {
    // Validar credenciales
    if (!MAUTIC_CLIENT_ID || !MAUTIC_CLIENT_SECRET) {
      console.error('Mautic credentials missing:', {
        hasUrl: !!MAUTIC_BASE_URL,
        hasClientId: !!MAUTIC_CLIENT_ID,
        hasSecret: !!MAUTIC_CLIENT_SECRET
      });
      throw new Error('Mautic credentials not configured');
    }

    const tokenUrl = `${MAUTIC_BASE_URL}/oauth/v2/token`;
    const params = new URLSearchParams({
      client_id: MAUTIC_CLIENT_ID,
      client_secret: MAUTIC_CLIENT_SECRET,
      grant_type: 'client_credentials',
    });

    console.log('Requesting Mautic token from:', tokenUrl);

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Mautic token error:', response.status, errorText);
      throw new Error(`Failed to get Mautic token: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Mautic token obtained successfully');
    return data.access_token;
  } catch (error) {
    console.error('Error getting Mautic token:', error);
    throw error;
  }
}

/**
 * Create or update a contact in Mautic
 */
export async function createOrUpdateContact(contactData: MauticContact): Promise<MauticResponse> {
  try {
    const token = await getMauticToken();
    
    // Build contact payload
    const payload: any = {
      email: contactData.email,
    };

    if (contactData.firstname) payload.firstname = contactData.firstname;
    if (contactData.lastname) payload.lastname = contactData.lastname;
    if (contactData.company) payload.company = contactData.company;
    if (contactData.locale) payload.preferred_locale = contactData.locale;

    // Add custom fields
    Object.keys(contactData).forEach(key => {
      if (!['email', 'firstname', 'lastname', 'company', 'tags', 'locale'].includes(key)) {
        payload[key] = contactData[key];
      }
    });

    console.log('Creating/updating Mautic contact:', { email: contactData.email, tags: contactData.tags });

    // Create/update contact
    const contactUrl = `${MAUTIC_BASE_URL}/api/contacts/new`;
    const contactResponse = await fetch(contactUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!contactResponse.ok) {
      const errorText = await contactResponse.text();
      console.error('Mautic contact creation error:', contactResponse.status, errorText);
      throw new Error(`Failed to create contact: ${contactResponse.statusText}`);
    }

    const contactResult = await contactResponse.json();
    const contactId = contactResult.contact?.id;

    console.log('Contact created/updated:', contactId);

    // Add tags if provided
    if (contactData.tags && contactData.tags.length > 0 && contactId) {
      await addTagsToContact(contactId, contactData.tags, token);
    }

    return {
      success: true,
      contact: contactResult.contact,
    };
  } catch (error) {
    console.error('Error creating/updating Mautic contact:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Add tags to a contact
 */
async function addTagsToContact(contactId: number, tags: string[], token: string): Promise<void> {
  try {
    console.log('📌 Adding tags to contact:', { contactId, tags });
    
    // CORRECCIÓN: Mautic requiere PATCH al endpoint del contacto con tags como array
    const updateUrl = `${MAUTIC_BASE_URL}/api/contacts/${contactId}`;
    
    const response = await fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tags }), // Enviar tags como array directamente
    });

    const responseData = await response.text();
    
    if (!response.ok) {
      console.error('❌ Failed to add tags:', { 
        status: response.status, 
        statusText: response.statusText,
        response: responseData 
      });
    } else {
      console.log('✅ Tags added successfully:', { tags, contactId, response: responseData });
    }
  } catch (error) {
    console.error('❌ Error adding tags to contact:', error);
  }
}

/**
 * Track newsletter subscription
 */
export async function trackNewsletterSubscription(email: string, locale: 'es' | 'en' = 'es'): Promise<MauticResponse> {
  return createOrUpdateContact({
    email,
    locale,
    tags: ['newsletter_suscrito', `idioma_${locale}`],
  });
}

/**
 * Track demo request
 */
export async function trackDemoRequest(
  email: string,
  firstName: string,
  lastName: string,
  company: string,
  companyType: string,
  country: string,
  locale: 'es' | 'en' = 'es'
): Promise<MauticResponse> {
  return createOrUpdateContact({
    email,
    firstname: firstName,
    lastname: lastName,
    company,
    companyType,
    country,
    locale,
    tags: ['demo_solicitado', `idioma_${locale}`],
  });
}

/**
 * Track free trial start
 */
export async function trackFreeTrialStart(email: string, locale: 'es' | 'en' = 'es'): Promise<MauticResponse> {
  return createOrUpdateContact({
    email,
    locale,
    tags: ['free_trial_iniciado', `idioma_${locale}`],
  });
}

/**
 * Track onboarding completion
 */
export async function trackOnboardingComplete(
  email: string,
  data: Record<string, any>,
  locale: 'es' | 'en' = 'es'
): Promise<MauticResponse> {
  return createOrUpdateContact({
    email,
    locale,
    ...data,
    tags: ['onboarding_completado', `idioma_${locale}`],
  });
}
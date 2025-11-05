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
    
    // IMPORTANTE: Incluir tags directamente en el payload de creación
    if (contactData.tags && contactData.tags.length > 0) {
      payload.tags = contactData.tags;
    }

    // Add custom fields
    Object.keys(contactData).forEach(key => {
      if (!['email', 'firstname', 'lastname', 'company', 'tags', 'locale'].includes(key)) {
        payload[key] = contactData[key];
      }
    });

    console.log('Creating/updating Mautic contact:', { email: contactData.email, tags: contactData.tags, payload });

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

    // Si los tags no se agregaron en la creación, intentar agregarlos por separado
    if (contactData.tags && contactData.tags.length > 0 && contactId) {
      const createdTags = contactResult.contact?.tags || [];
      console.log('Tags en el contacto creado:', createdTags);
      
      // Solo agregar tags si no se incluyeron en la respuesta
      if (createdTags.length === 0) {
        console.log('⚠️ Tags no incluidos en creación, agregando por separado...');
        await addTagsToContact(contactId, contactData.tags, token);
      } else {
        console.log('✅ Tags incluidos correctamente en la creación');
      }
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
    
    // CORRECCIÓN: Usar POST al endpoint /edit con formato correcto de Mautic
    const updateUrl = `${MAUTIC_BASE_URL}/api/contacts/${contactId}/edit`;
    
    const response = await fetch(updateUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tags }), // Mautic acepta tags como array en el body
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
  // Mapear companyType a tags rol_*
  const companyTypeTagMap: Record<string, string> = {
    'creative': 'rol_agencia_creativa',
    'media': 'rol_agencia_medios',
    'consulting': 'rol_consultoria',
    'market': 'rol_investigacion',
    'client': 'rol_marca_empresa',
    'education': 'rol_educacion',
    'other': 'rol_otros',
  };

  // Mapear country a tags pais_*
  const countryTagMap: Record<string, string> = {
    'spain': 'pais_es',
    'argentina': 'pais_ar',
    'bolivia': 'pais_bo',
    'chile': 'pais_cl',
    'colombia': 'pais_co',
    'mexico': 'pais_mx',
    'paraguay': 'pais_py',
    'peru': 'pais_pe',
    'other': 'pais_otro_latam',
  };

  // Preparar tags base
  const tags: string[] = ['demo_solicitado', `idioma_${locale}`];

  // Agregar tag de tipo de empresa si existe
  if (companyType && companyTypeTagMap[companyType]) {
    tags.push(companyTypeTagMap[companyType]);
  }

  // Agregar tag de país si existe
  if (country && countryTagMap[country]) {
    tags.push(countryTagMap[country]);
  }

  // Preparar datos del contacto
  const contactData: MauticContact = {
    email,
    firstname: firstName,
    lastname: lastName,
    locale,
    tags,
  };

  // Solo agregar company si tiene valor
  if (company && company.trim()) {
    contactData.company = company;
  }

  return createOrUpdateContact(contactData);
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
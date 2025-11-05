import { NextRequest, NextResponse } from 'next/server';
import {
  trackNewsletterSubscription,
  trackDemoRequest,
  trackFreeTrialStart,
  trackOnboardingComplete,
  createOrUpdateContact
} from '@/lib/mautic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, email, firstName, lastName, company, companyType, country, locale = 'es', data, tags, fields } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    let result;

    // Handle different actions
    switch (action) {
      case 'newsletter':
        result = await trackNewsletterSubscription(email, locale);
        break;

      case 'demo':
        if (!firstName || !lastName) {
          return NextResponse.json(
            { error: 'First name and last name are required for demo requests' },
            { status: 400 }
          );
        }
        result = await trackDemoRequest(
          email, 
          firstName, 
          lastName, 
          company || '', 
          companyType || '', 
          country || '', 
          locale
        );
        break;

      case 'free_trial':
        result = await trackFreeTrialStart(email, locale);
        break;

      case 'onboarding':
        result = await trackOnboardingComplete(email, data || {}, locale);
        break;

      case 'educational_institution':
        // Handle educational institution inquiries
        result = await createOrUpdateContact({
          email,
          firstname: firstName,
          lastname: lastName,
          locale,
          tags: tags || ['educational_institution', `idioma_${locale}`],
          ...fields
        });
        break;

      default:
        // Generic contact creation with custom tags/fields
        result = await createOrUpdateContact({
          email,
          firstname: firstName,
          lastname: lastName,
          company,
          locale,
          tags,
          ...fields
        });
        break;
    }

    if (!result.success) {
      console.error('Mautic API error:', result.error);
      return NextResponse.json(
        { error: 'Failed to sync with Mautic', details: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data: result.contact },
      { status: 200 }
    );
  } catch (error) {
    console.error('Mautic contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
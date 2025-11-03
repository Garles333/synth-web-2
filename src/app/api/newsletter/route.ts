import { NextRequest, NextResponse } from 'next/server';
import { trackNewsletterSubscription } from '@/lib/mautic';

export async function POST(request: NextRequest) {
  try {
    const { email, locale = 'es' } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Track newsletter subscription in Mautic
    const result = await trackNewsletterSubscription(email, locale);

    if (!result.success) {
      console.error('Mautic newsletter error:', result.error);
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter', details: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data: result.contact },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
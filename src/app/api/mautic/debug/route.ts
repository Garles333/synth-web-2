import { NextResponse } from 'next/server';

export async function GET() {
  const MAUTIC_BASE_URL = process.env.MAUTIC_BASE_URL || 'http://72.61.33.97:8080';
  const MAUTIC_CLIENT_ID = process.env.MAUTIC_CLIENT_ID || '';
  const MAUTIC_CLIENT_SECRET = process.env.MAUTIC_CLIENT_SECRET || '';

  try {
    // Intenta obtener el token
    const tokenUrl = `${MAUTIC_BASE_URL}/oauth/v2/token`;
    const params = new URLSearchParams({
      client_id: MAUTIC_CLIENT_ID,
      client_secret: MAUTIC_CLIENT_SECRET,
      grant_type: 'client_credentials',
    });

    console.log('Attempting to get Mautic token...');
    console.log('Token URL:', tokenUrl);

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const responseText = await response.text();
    
    return NextResponse.json({
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      response: responseText,
      config: {
        url: MAUTIC_BASE_URL,
        hasClientId: !!MAUTIC_CLIENT_ID,
        hasClientSecret: !!MAUTIC_CLIENT_SECRET,
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    }, { status: 500 });
  }
}

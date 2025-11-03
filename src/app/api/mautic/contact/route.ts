import { NextRequest, NextResponse } from 'next/server';

interface MauticContactData {
  email: string;
  firstname?: string;
  lastname?: string;
  tags?: string[];
  fields?: Record<string, any>;
}

export async function POST(request: NextRequest) {
  try {
    const data: MauticContactData = await request.json();
    
    const { email, firstname, lastname, tags = [], fields = {} } = data;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const mauticUrl = process.env.MAUTIC_URL;
    const mauticUser = process.env.MAUTIC_USERNAME;
    const mauticPassword = process.env.MAUTIC_PASSWORD;

    if (!mauticUrl || !mauticUser || !mauticPassword) {
      console.error('Mautic credentials not configured');
      return NextResponse.json(
        { error: 'Mautic not configured' },
        { status: 500 }
      );
    }

    // Preparar datos del contacto para Mautic
    const contactData: Record<string, any> = {
      email,
      ...(firstname && { firstname }),
      ...(lastname && { lastname }),
      ...fields
    };

    // Agregar tags si existen
    if (tags.length > 0) {
      contactData.tags = tags;
    }

    // Autenticación básica para Mautic API
    const auth = Buffer.from(`${mauticUser}:${mauticPassword}`).toString('base64');

    // Primero intentar buscar si el contacto existe
    const searchResponse = await fetch(
      `${mauticUrl}/api/contacts?search=email:${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!searchResponse.ok) {
      console.error('Mautic search error:', await searchResponse.text());
      return NextResponse.json(
        { error: 'Failed to search contact in Mautic' },
        { status: 500 }
      );
    }

    const searchResult = await searchResponse.json();
    const existingContact = searchResult.contacts && Object.values(searchResult.contacts)[0];

    let mauticResponse;
    
    if (existingContact) {
      // Actualizar contacto existente
      const contactId = (existingContact as any).id;
      mauticResponse = await fetch(
        `${mauticUrl}/api/contacts/${contactId}/edit`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        }
      );
    } else {
      // Crear nuevo contacto
      mauticResponse = await fetch(
        `${mauticUrl}/api/contacts/new`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        }
      );
    }

    if (!mauticResponse.ok) {
      const errorText = await mauticResponse.text();
      console.error('Mautic API error:', errorText);
      return NextResponse.json(
        { error: 'Failed to sync with Mautic', details: errorText },
        { status: 500 }
      );
    }

    const result = await mauticResponse.json();

    return NextResponse.json(
      { success: true, data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Mautic contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

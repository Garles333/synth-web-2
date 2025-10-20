import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, locale } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Enviar email a carlos@synth-insights.com con la info del suscriptor
    const { data, error } = await resend.emails.send({
      from: 'Synth Newsletter <onboarding@resend.dev>',
      to: ['carlos@synth-insights.com'],
      subject: `Nueva suscripción al newsletter - ${locale === 'en' ? 'English' : 'Español'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6634;">Nueva suscripción al newsletter</h2>
          <p><strong>Email del suscriptor:</strong> ${email}</p>
          <p><strong>Idioma:</strong> ${locale === 'en' ? 'Inglés (English)' : 'Español'}</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Este email fue generado automáticamente desde el formulario de newsletter de Synth Insights.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
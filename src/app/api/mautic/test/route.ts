import { NextResponse } from 'next/server';

export async function GET() {
  const config = {
    MAUTIC_BASE_URL: process.env.MAUTIC_BASE_URL || 'not set',
    MAUTIC_CLIENT_ID: process.env.MAUTIC_CLIENT_ID ? 'set (hidden)' : 'not set',
    MAUTIC_CLIENT_SECRET: process.env.MAUTIC_CLIENT_SECRET ? 'set (hidden)' : 'not set',
  };

  return NextResponse.json(config);
}

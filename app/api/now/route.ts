import { NextResponse } from 'next/server';
import { getCurrentTimeInRFC3339 } from '@/lib/time';

export async function GET() {
  return NextResponse.json({ now: getCurrentTimeInRFC3339() });
}

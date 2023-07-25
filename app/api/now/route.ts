import { getCurrentTimeInRFC3339 } from '@/lib/time';
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ now: getCurrentTimeInRFC3339() });
}

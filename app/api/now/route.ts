import { getCurrentTimeInRFC3339 } from '@/lib/time';
import { NextResponse } from 'next/server';

export async function POST() {
  // return NextResponse.json({ detail: 'Item not found' }, { status: 422 }); // error test
  // return NextResponse.json('Very Bad Request', { status: 500 }); // error test2
  return NextResponse.json({ now: getCurrentTimeInRFC3339() });
}

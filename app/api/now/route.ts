import { getCurrentTimeInRFC3339 } from '@/lib/time';
import { NextResponse } from 'next/server';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST() {
  // return NextResponse.json({ detail: 'Item not found' }, { status: 422 }); // error test
  // return NextResponse.json('Very Bad Request', { status: 500 }); // error test2
  await sleep(2000); // slow API emulation
  return NextResponse.json({ now: getCurrentTimeInRFC3339() });
}

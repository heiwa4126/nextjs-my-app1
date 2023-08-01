import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
const noto = Noto_Sans_JP({ subsets: ['latin'], weight: '400' });

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '(no title)',
  description: 'Generated by create next app'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${noto.className} prose`} data-theme="light">
        <nav className="mx-4 mt-2">
          <Link href="/">home</Link> | <Link href="/page0">page0</Link> | <Link href="/fetch0">fetch0</Link> |{' '}
          <Link href="/fetch1">fetch1</Link> | <Link href="/headers">headers</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

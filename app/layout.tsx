import { Roboto } from 'next/font/google';
import './globals.css';
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '(no title)',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className + ' prose'} data-theme="light">
        {children}
      </body>
    </html>
  );
}

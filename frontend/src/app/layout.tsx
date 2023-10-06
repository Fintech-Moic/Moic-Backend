import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import ReactQueryProvider from '@/providers/reactQueryProviders';
import JotaiProvider from '@/providers/jotaiProviders';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'moic',
  description: '이익이 모인다. 모익!',
  manifest: '/manifest.json',
  icons: { apple: '/icon-192x192.png' },
  themeColor: '#fff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JotaiProvider>
          <ReactQueryProvider>
            <div id="modal" />
            {children}
            <Link href="not-found" />
          </ReactQueryProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}

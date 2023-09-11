import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider as JotaiProvider } from 'jotai';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <Providers>{children}</Providers>
        </JotaiProvider>
      </body>
    </html>
  );
}
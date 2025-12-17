import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

import Loading from './loading';
import Navbar from './components/layout/navbar';
import DynamicFavicon from './components/DynamicFavicon';

import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
  title: 'Dieter Nielandt',
  description: 'Portfolio app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-caveat bg-white text-slate-600 antialiased dark:bg-gray-900 dark:text-slate-400">
        <DynamicFavicon />
        <Navbar />
        <main className="mx-auto h-auto max-w-6xl p-4">
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}

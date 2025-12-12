import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import DynamicFavicon from './components/DynamicFavicon';

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
      <body className="bg-white font-sans antialiased dark:bg-gray-900">
        <DynamicFavicon />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Navbar from './components/layout/navbar';
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
      <body className="font-caveat bg-white text-slate-600 antialiased dark:bg-gray-900 dark:text-slate-400">
        <DynamicFavicon />
        <Navbar />
        <main className="mx-auto h-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}

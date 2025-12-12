'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/projects', label: 'Projecten' },
    { href: '/resume', label: 'CV' },
  ];

  return (
    <nav className="px-4 py-2.5">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            alt={'logo'}
            src={'/logo.png'}
            width={35}
            height={25}
            className="dark:hidden"
          />
          <Image
            alt={'logo'}
            src={'/logo_dark.png'}
            width={35}
            height={25}
            className="hidden dark:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 transition-colors hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col items-center justify-center gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all dark:bg-gray-300 ${
              isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all dark:bg-gray-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all dark:bg-gray-300 ${
              isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 transition-colors hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

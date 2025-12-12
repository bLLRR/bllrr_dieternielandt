'use client';

import { useEffect } from 'react';

export default function DynamicFavicon() {
  useEffect(() => {
    const updateFavicon = (isDark: boolean) => {
      const link = document.querySelector(
        "link[rel~='icon']",
      ) as HTMLLinkElement;
      if (link) {
        link.href = isDark ? '/favicon_dark.ico' : '/favicon.ico';
      }
    };

    // Check initial dark mode state
    const isDark = document.documentElement.classList.contains('dark');
    updateFavicon(isDark);

    // Listen for dark mode changes
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      updateFavicon(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

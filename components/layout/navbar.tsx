'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { siteConfig } from '@/config/site';
import { navLinks } from '@/lib/links';
import { settings } from '@/config/settings';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleClick = async () => {
    setNavbar(false);
  };

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [navbar]);

  return (
    <header className="select-none">
      <nav className="relative mx-auto flex items-center justify-between px-4 md:px-8 lg:max-w-7xl">
        <div className="flex items-center justify-between py-3 md:py-5">
          <Link href="/" onClick={handleClick}>
            <h1 className="text-2xl font-bold duration-200 lg:hover:scale-[1.10]">
              {siteConfig.name}
            </h1>
          </Link>
          <div className="flex gap-1 md:hidden">
            <button
              className="text-primary focus:border-primary rounded-md p-2 outline-none focus:border"
              aria-label="Hamburger Menu"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <ModeToggle />
          </div>
        </div>

        {/* Desktop links absolutely centered relative to page */}
        <div className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center md:flex">
          <ul className="text-primary flex items-center space-x-6 opacity-60">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link className="hover:underline" href={link.path}>
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`bg-background absolute top-full right-0 left-0 z-10 m-auto rounded-md border p-4 shadow md:hidden ${
            navbar ? 'block' : 'hidden'
          }`}
          style={{ width: '100%', maxWidth: '20rem' }}
        >
          <ul className="text-primary flex flex-col items-center space-y-4 opacity-60">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link
                  className="hover:underline"
                  href={link.path}
                  onClick={handleClick}
                >
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {settings.themeToggleEnabled && (
          <div className="hidden md:flex md:justify-end">
            <ModeToggle />
          </div>
        )}
      </nav>
    </header>
  );
}

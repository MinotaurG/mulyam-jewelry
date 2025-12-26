/**
 * Navbar Component - Mulyam Jewelry
 * 
 * Clean, minimal navigation inspired by Uniqlo.
 * Features:
 * - Logo on left
 * - Navigation links center
 * - CTA (Instagram) on right
 * - Mobile responsive (hamburger menu)
 */

import Link from 'next/link';

/**
 * Navigation link data
 * Keeping data separate from JSX makes it easy to update
 */
const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Pets', href: '/collections/pets' },
  { label: 'About', href: '/about' },
  { label: 'Size Guide', href: '/size-guide' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      {/* 
        Container with max-width and padding
        - max-w-7xl: Limits width on large screens
        - mx-auto: Centers the container
        - px-6: Horizontal padding
      */}
      <nav className="max-w-7xl mx-auto px-6">
        {/* 
          Flex container for navbar items
          - h-16: Fixed height (64px)
          - items-center: Vertically center items
          - justify-between: Space between logo, links, and CTA
        */}
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo - Left Side */}
          <Link 
            href="/" 
            className="text-xl font-light tracking-[0.3em] text-neutral-800 hover:text-brand transition-colors"
          >
            MULYAM
          </Link>

          {/* Navigation Links - Center (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Right Side (Hidden on mobile) */}
          <div className="hidden md:block">
            <a
              href="https://instagram.com/mulyamjewelry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide bg-neutral-900 text-white px-5 py-2 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Shop on Instagram
            </a>
          </div>

          {/* Mobile Menu Button (Visible only on mobile) */}
          <button 
            className="md:hidden p-2"
            aria-label="Open menu"
          >
            {/* 
              Hamburger icon using CSS
              Three horizontal lines
            */}
            <div className="w-6 flex flex-col gap-1.5">
              <span className="block h-0.5 w-full bg-neutral-800"></span>
              <span className="block h-0.5 w-full bg-neutral-800"></span>
              <span className="block h-0.5 w-full bg-neutral-800"></span>
            </div>
          </button>

        </div>
      </nav>
    </header>
  );
}
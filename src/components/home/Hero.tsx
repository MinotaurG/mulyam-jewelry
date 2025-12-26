/**
 * Hero Component - Mulyam Jewelry
 * 
 * The main banner section on the homepage.
 * Uniqlo-style: Clean, minimal, strong typography, clear CTA.
 * 
 * Features:
 * - Full viewport height
 * - Centered content
 * - Clear value proposition
 * - Two CTA buttons (primary + secondary)
 */

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      {/* 
        Content container
        - max-w-3xl: Limits text width for readability
        - text-center: Centers all text
      */}
      <div className="max-w-3xl text-center">
        
        {/* Eyebrow text - small label above main heading */}
        <p className="text-sm tracking-widest text-brand uppercase mb-4">
          India's First
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900 leading-tight">
          Fashion Jewelry for
          <span className="block mt-2 font-normal">
            You & Your Pets
          </span>
        </h1>

        {/* Subheading / Description */}
        <p className="mt-6 text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Elegant, affordable jewelry crafted for women, kids, and your furry 
          friends. Because everyone deserves to shine.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary CTA */}
          <a
            href="https://instagram.com/mulyamjewelry"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide rounded-full hover:bg-neutral-800 transition-colors"
          >
            Shop on Instagram
          </a>

          {/* Secondary CTA */}
          <Link
            href="/collections/pets"
            className="w-full sm:w-auto px-8 py-4 border border-neutral-300 text-neutral-700 text-sm tracking-wide rounded-full hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            Explore Pet Collection
          </Link>

        </div>

        {/* Trust indicator */}
        <p className="mt-12 text-xs text-neutral-400 tracking-wide">
          Trusted by 500+ pet parents across India
        </p>

      </div>
    </section>
  );
}
/**
 * Homepage - Mulyam Jewelry
 * 
 * The main landing page featuring:
 * - Hero section (above the fold)
 * - Featured collections
 * - Why choose us (trust builders)
 * - CTA (final conversion push)
 */

import Hero from '@/components/home/Hero';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main>
      {/* Hero Section - Main banner */}
      <Hero />

      {/* Featured Collections - Shop by category */}
      <FeaturedCollections />

      {/* Why Choose Us - Trust builders and USP */}
      <WhyChooseUs />

      {/* CTA - Final conversion push */}
      <CTA />
    </main>
  );
}
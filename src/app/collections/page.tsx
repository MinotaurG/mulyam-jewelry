/**
 * Collections Index Page - Mulyam Jewelry
 * 
 * URL: /collections
 * 
 * Shows all three collections in one view.
 * Entry point for browsing products.
 */

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Collections',
  description: 'Browse all Mulyam Jewelry collections - fashion jewelry for women, kids, and pets. India\'s first pet jewelry brand.',
};

/**
 * Collections data
 */
const collections = [
  {
    name: 'Pets',
    description: "India's first fashion jewelry for your furry friends. Necklaces, collar charms, and accessories for dogs and cats.",
    href: '/collections/pets',
    bgColor: 'bg-amber-100',
    icon: '🐾',
    tag: 'NEW IN INDIA',
    productCount: '20+ designs',
  },
  {
    name: 'Women',
    description: 'Elegant everyday jewelry that makes you shine. From minimal pieces to statement makers.',
    href: '/collections/women',
    bgColor: 'bg-rose-100',
    icon: '💎',
    tag: null,
    productCount: '50+ designs',
  },
  {
    name: 'Kids',
    description: 'Safe, playful, and adorable accessories for little ones. Made with child-safe materials.',
    href: '/collections/kids',
    bgColor: 'bg-sky-100',
    icon: '🦋',
    tag: null,
    productCount: '30+ designs',
  },
];

export default function CollectionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 py-16 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-500">
              <li>
                <Link href="/" className="hover:text-neutral-900">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900">Collections</li>
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900">
            Our Collections
          </h1>
          
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Beautiful jewelry for everyone in your family — including your pets!
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.name}
                href={collection.href}
                className="group block"
              >
                {/* Card */}
                <div className={`relative aspect-[4/5] rounded-2xl ${collection.bgColor} overflow-hidden`}>
                  {/* Tag */}
                  {collection.tag && (
                    <span className="absolute top-4 left-4 bg-brand text-white text-xs font-medium px-3 py-1 rounded-full">
                      {collection.tag}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                      {collection.icon}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                    <h2 className="text-2xl font-medium text-white">
                      {collection.name}
                    </h2>
                    <p className="mt-2 text-sm text-white/80 line-clamp-2">
                      {collection.description}
                    </p>
                    <p className="mt-3 text-xs text-white/60">
                      {collection.productCount}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* View Collection Link */}
                <p className="mt-4 text-sm text-neutral-600 group-hover:text-brand transition-colors">
                  View Collection →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USP Banner */}
      <section className="px-6 py-16 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light">
            Why Shop with Mulyam?
          </h2>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <p className="text-sm text-neutral-300">Free Shipping</p>
              <p className="text-xs text-neutral-500">Above ₹499</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💳</div>
              <p className="text-sm text-neutral-300">COD Available</p>
              <p className="text-xs text-neutral-500">Pay on delivery</p>
            </div>
            <div>
              <div className="text-3xl mb-2">↩️</div>
              <p className="text-sm text-neutral-300">Easy Returns</p>
              <p className="text-xs text-neutral-500">7-day returns</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✨</div>
              <p className="text-sm text-neutral-300">Quality Promise</p>
              <p className="text-xs text-neutral-500">Premium materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light text-neutral-900">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-neutral-600">
            Our pet collection is what makes us unique! Check out India's first 
            fashion jewelry for furry friends.
          </p>
          <Link
            href="/collections/pets"
            className="inline-block mt-8 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors"
          >
            Explore Pet Jewelry
          </Link>
        </div>
      </section>
    </main>
  );
}
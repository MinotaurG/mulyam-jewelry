/**
 * Women Collection Page - Mulyam Jewelry
 * 
 * URL: /collections/women
 */

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Women\'s Jewelry Collection',
  description: 'Elegant and affordable fashion jewelry for women. Discover necklaces, earrings, bracelets and more at Mulyam Jewelry.',
  keywords: ['women jewelry india', 'fashion jewelry', 'affordable jewelry', 'artificial jewelry'],
};

/**
 * Sample women's products
 */
const womenProducts = [
  {
    id: 'women-001',
    name: 'Pearl Drop Earrings',
    price: 249,
    description: 'Classic pearl drops for everyday elegance',
    tag: 'Bestseller',
    bgColor: 'bg-rose-50',
  },
  {
    id: 'women-002',
    name: 'Gold Layered Necklace',
    price: 399,
    description: 'Delicate layered chains with minimalist charm',
    tag: 'New',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'women-003',
    name: 'Crystal Stud Set',
    price: 199,
    description: 'Set of 3 sparkling crystal studs',
    tag: null,
    bgColor: 'bg-purple-50',
  },
  {
    id: 'women-004',
    name: 'Charm Bracelet',
    price: 349,
    description: 'Adjustable bracelet with cute charms',
    tag: 'New',
    bgColor: 'bg-pink-50',
  },
  {
    id: 'women-005',
    name: 'Statement Hoops',
    price: 299,
    description: 'Bold hoops that make a statement',
    tag: null,
    bgColor: 'bg-orange-50',
  },
  {
    id: 'women-006',
    name: 'Dainty Ring Set',
    price: 279,
    description: 'Set of 5 stackable minimal rings',
    tag: 'Bestseller',
    bgColor: 'bg-teal-50',
  },
];

export default function WomenCollectionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 py-16 bg-rose-50">
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
              <li>
                <Link href="/collections" className="hover:text-neutral-900">
                  Collections
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900">Women</li>
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900">
            Women's Collection
          </h1>
          
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Elegant, everyday jewelry that doesn't break the bank. 
            From minimal pieces to statement makers.
          </p>

          {/* Filter Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">
              All
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              Earrings
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              Necklaces
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              Bracelets
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              Rings
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {womenProducts.map((product) => (
              <div 
                key={product.id}
                className="group cursor-pointer"
              >
                {/* Product Image Placeholder */}
                <div className={`relative aspect-square rounded-2xl ${product.bgColor} overflow-hidden`}>
                  {product.tag && (
                    <span className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full ${
                      product.tag === 'New' 
                        ? 'bg-brand text-white' 
                        : 'bg-neutral-900 text-white'
                    }`}>
                      {product.tag}
                    </span>
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">💎</span>
                  </div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Product Info */}
                <div className="mt-4">
                  <h3 className="font-medium text-neutral-900 group-hover:text-brand transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {product.description}
                  </p>
                  <p className="mt-2 text-brand font-medium">
                    ₹{product.price}
                  </p>
                </div>

                {/* Order Button */}
                <a
                  href="https://instagram.com/mulyamjewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full py-3 text-center text-sm border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Order on Instagram
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-neutral-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light text-neutral-900">
            Want to Twin with Your Pet?
          </h2>
          <p className="mt-4 text-neutral-600">
            Check out our matching sets - coordinated jewelry for you and your furry friend!
          </p>
          <Link
            href="/collections/pets"
            className="inline-block mt-8 px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide rounded-full hover:bg-neutral-800 transition-colors"
          >
            Explore Pet Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
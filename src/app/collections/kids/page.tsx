/**
 * Kids Collection Page - Mulyam Jewelry
 * 
 * URL: /collections/kids
 */

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kids Jewelry Collection',
  description: 'Safe, playful, and adorable jewelry for kids. Discover cute accessories perfect for little ones at Mulyam Jewelry.',
  keywords: ['kids jewelry india', 'children accessories', 'girls jewelry', 'safe kids jewelry'],
};

/**
 * Sample kids products
 */
const kidsProducts = [
  {
    id: 'kids-001',
    name: 'Rainbow Bracelet',
    price: 149,
    description: 'Colorful beaded bracelet kids love',
    tag: 'Bestseller',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 'kids-002',
    name: 'Butterfly Clips Set',
    price: 129,
    description: 'Set of 4 sparkly butterfly hair clips',
    tag: 'New',
    bgColor: 'bg-pink-50',
  },
  {
    id: 'kids-003',
    name: 'Star Pendant Necklace',
    price: 179,
    description: 'Cute star pendant on safe cord',
    tag: null,
    bgColor: 'bg-purple-50',
  },
  {
    id: 'kids-004',
    name: 'Flower Ring Set',
    price: 99,
    description: 'Adjustable rings with flower designs',
    tag: 'New',
    bgColor: 'bg-green-50',
  },
  {
    id: 'kids-005',
    name: 'Princess Tiara',
    price: 249,
    description: 'Sparkling tiara for special occasions',
    tag: null,
    bgColor: 'bg-blue-50',
  },
  {
    id: 'kids-006',
    name: 'Charm Anklet',
    price: 129,
    description: 'Cute anklet with dangling charms',
    tag: 'Bestseller',
    bgColor: 'bg-orange-50',
  },
];

export default function KidsCollectionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 py-16 bg-sky-50">
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
              <li className="text-neutral-900">Kids</li>
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900">
            Kids Collection
          </h1>
          
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Playful, safe, and absolutely adorable. Jewelry that makes 
            little ones smile.
          </p>

          {/* Filter Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">
              All
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              Bracelets
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              Hair Accessories
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              Necklaces
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
            {kidsProducts.map((product) => (
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
                    <span className="text-6xl">🦋</span>
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

      {/* Safety Note Section */}
      <section className="px-6 py-16 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <h2 className="text-2xl font-light text-neutral-900">
            Safety First
          </h2>
          <p className="mt-4 text-neutral-600">
            All our kids jewelry is made with child-safe materials. 
            No sharp edges, no small detachable parts, and hypoallergenic.
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            Recommended for ages 3 and above. Adult supervision advised.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light text-neutral-900">
            Family Matching Sets
          </h2>
          <p className="mt-4 text-neutral-600">
            Get matching jewelry for mom, daughter, and even the family pet!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collections/women"
              className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide rounded-full hover:bg-neutral-800 transition-colors"
            >
              Women's Collection
            </Link>
            <Link
              href="/collections/pets"
              className="w-full sm:w-auto px-8 py-4 border border-neutral-300 text-neutral-700 text-sm tracking-wide rounded-full hover:border-neutral-900 transition-colors"
            >
              Pet Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
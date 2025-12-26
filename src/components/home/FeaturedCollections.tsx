/**
 * Featured Collections Component - Mulyam Jewelry
 * 
 * Displays the three main product categories as clickable cards.
 * Uniqlo-style: Large images, minimal text, clean grid.
 * 
 * Note: Using placeholder backgrounds until real images are added.
 */

import Link from 'next/link';

/**
 * Collection data
 * Each collection has a name, description, href, and background color.
 * Later we'll replace bgColor with actual images.
 */
const collections = [
  {
    name: 'Pets',
    description: "India's first fashion jewelry for your furry friends",
    href: '/collections/pets',
    bgColor: 'bg-amber-100', // Placeholder - will be image later
    tag: 'NEW',
  },
  {
    name: 'Women',
    description: 'Elegant everyday pieces that make you shine',
    href: '/collections/women',
    bgColor: 'bg-rose-100',
    tag: null,
  },
  {
    name: 'Kids',
    description: 'Playful, safe, and adorable accessories',
    href: '/collections/kids',
    bgColor: 'bg-sky-100',
    tag: null,
  },
];

export default function FeaturedCollections() {
  return (
    <section className="px-6 py-20">
      {/* 
        Container
        - max-w-7xl: Limits width on large screens
        - mx-auto: Centers horizontally
      */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900">
            Shop by Collection
          </h2>
          <p className="mt-4 text-neutral-600">
            Find the perfect piece for everyone in your family
          </p>
        </div>

        {/* 
          Collections Grid
          - 1 column on mobile
          - 3 columns on medium screens and up
          - gap-6: Space between cards
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative block"
            >
              {/* 
                Card Container
                - aspect-[4/5]: Maintains 4:5 aspect ratio (taller than wide)
                - overflow-hidden: Clips content that exceeds bounds
                - rounded-2xl: Rounded corners
              */}
              <div
                className={`
                  relative aspect-[4/5] overflow-hidden rounded-2xl
                  ${collection.bgColor}
                  transition-transform duration-300
                  group-hover:scale-[1.02]
                `}
              >
                {/* Tag Badge (if exists) */}
                {collection.tag && (
                  <span className="absolute top-4 left-4 bg-brand text-white text-xs font-medium px-3 py-1 rounded-full">
                    {collection.tag}
                  </span>
                )}

                {/* 
                  Content at bottom of card
                  - absolute bottom-0: Positions at bottom
                  - inset-x-0: Stretches full width
                  - gradient: Creates fade effect for readability
                */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-2xl font-medium text-white">
                    {collection.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

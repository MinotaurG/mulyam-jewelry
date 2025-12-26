/**
 * CTA (Call to Action) Component - Mulyam Jewelry
 * 
 * Final push before footer to convert visitors.
 * Simple, focused message with clear action.
 */

export default function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Message */}
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
          Ready to make your pet the 
          <span className="block mt-2">most stylish in the park?</span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-neutral-600 max-w-xl mx-auto">
          Follow us on Instagram to see our latest collections and order directly via DM. 
          New pieces added every week!
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="https://instagram.com/mulyamjewelry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors"
          >
            {/* Instagram Icon */}
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @mulyamjewelry
          </a>
        </div>

        {/* Trust Note */}
        <p className="mt-8 text-xs text-neutral-400">
          Free shipping on orders above ₹499 • Easy returns • COD available
        </p>

      </div>
    </section>
  );
}

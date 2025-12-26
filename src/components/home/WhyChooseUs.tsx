/**
 * Why Choose Us Component - Mulyam Jewelry
 * 
 * Highlights key selling points and builds trust.
 * Features icons with short descriptions.
 * 
 * USP Focus: Pet jewelry uniqueness in India
 */

/**
 * Feature data
 * Each feature has an icon (emoji for now), title, and description
 * Later we can replace emojis with custom SVG icons
 */
const features = [
  {
    icon: '🐾',
    title: 'First in India',
    description: 'Pioneering fashion jewelry for pets. Your furry friends deserve to shine too.',
  },
  {
    icon: '✨',
    title: 'Premium Quality',
    description: 'Carefully crafted pieces that look expensive but are surprisingly affordable.',
  },
  {
    icon: '🛡️',
    title: 'Pet Safe',
    description: 'All pet jewelry is lightweight, comfortable, and safe for your furry companions.',
  },
  {
    icon: '💝',
    title: 'Matching Sets',
    description: 'Twin with your pet! Coordinated pieces for the whole family.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-brand uppercase mb-4">
            Why Mulyam
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900">
            What Makes Us Different
          </h2>
        </div>

        {/* 
          Features Grid
          - 1 column on mobile
          - 2 columns on medium screens
          - 4 columns on large screens
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="text-center"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/**
 * Dynamic OG Image Generator - Mulyam Jewels
 * 
 * Generates social preview images automatically.
 * Next.js calls this when someone shares your link.
 * 
 * Accessible at: /opengraph-image
 */

import { ImageResponse } from 'next/og';

// Image dimensions (recommended by Facebook/LinkedIn)
export const size = {
  width: 1200,
  height: 630,
};

// Image metadata
export const contentType = 'image/png';

// Generate the image
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          // Full size container
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // Brand gradient background
          background: 'linear-gradient(135deg, #1C1917 0%, #292524 100%)',
          // Padding
          padding: '60px',
        }}
      >
        {/* Brand Name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 300,
            letterSpacing: '0.3em',
            color: '#FAFAF9',
            marginBottom: '20px',
          }}
        >
          MULYAM
        </div>

        {/* Decorative Line */}
        <div
          style={{
            width: '120px',
            height: '2px',
            background: '#D97706',
            marginBottom: '30px',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 400,
            color: '#D97706',
            marginBottom: '20px',
          }}
        >
          Fashion Jewelry
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: '#A8A29E',
          }}
        >
          For Women, Kids & Pets
        </div>

        {/* Pet Emoji Accent */}
        <div
          style={{
            fontSize: '48px',
            marginTop: '40px',
          }}
        >
          ✨ 🐾 💎
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

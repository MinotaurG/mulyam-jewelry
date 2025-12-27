/**
 * Twitter/X Image Generator - Mulyam Jewels
 * 
 * Same as OG image but specifically for Twitter.
 * Twitter prefers slightly different dimensions.
 */

import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1C1917 0%, #292524 100%)',
          padding: '60px',
        }}
      >
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

        <div
          style={{
            width: '120px',
            height: '2px',
            background: '#D97706',
            marginBottom: '30px',
          }}
        />

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

        <div
          style={{
            fontSize: '24px',
            color: '#A8A29E',
          }}
        >
          For Women, Kids & Pets
        </div>

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

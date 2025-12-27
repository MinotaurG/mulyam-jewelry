/**
 * robots.txt Generator - Mulyam Jewels
 * 
 * Tells search engines:
 * - What pages to crawl
 * - Where to find sitemap
 * 
 * Accessible at: /robots.txt
 */

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Applies to all search engines
      allow: '/',     // Allow crawling everything
    },
    sitemap: 'https://mulyam-jewels.vercel.app/sitemap.xml',
  };
}

/**
 * sitemap.xml Generator - Mulyam Jewels
 * 
 * Lists all pages for search engines to crawl.
 * Next.js auto-generates XML from this file.
 * 
 * Accessible at: /sitemap.xml
 */

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL - update this when you get a custom domain
  const baseUrl = 'https://mulyam-jewels.vercel.app';

  // Current timestamp for lastModified
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage = highest priority
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/collections/pets`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9, // High priority - your USP!
    },
    {
      url: `${baseUrl}/collections/women`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/collections/kids`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/size-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7, // Good for SEO - informational content
    },
  ];
}

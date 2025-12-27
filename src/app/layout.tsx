/**
 * Root Layout - Mulyam Jewelry
 * 
 * This file wraps ALL pages in the application.
 * Contains:
 * - HTML document structure
 * - Font configuration
 * - Global components (Navbar, Footer)
 * - Metadata for SEO
 */

// Import vercel Analytics
import { Analytics } from '@vercel/analytics/next';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Font Configuration
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadata Configuration
 */
export const metadata: Metadata = {
  title: {
    default: "Mulyam Jewelry | Fashion Jewelry for Women, Kids & Pets",
    template: "%s | Mulyam Jewelry",
  },
  description: "India's first fashion jewelry brand for pets. Discover elegant, affordable jewelry for women, kids, and your furry friends.",
  keywords: ["pet jewelry india", "dog necklace", "cat accessories", "fashion jewelry", "women jewelry", "kids jewelry"],
};

/**
 * Root Layout Component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation - appears on all pages */}
        <Navbar />
        
        {/* 
          Main content wrapper
          - pt-16: Padding for fixed navbar
          - min-h-screen: Ensures footer stays at bottom
        */}
        <div className="pt-16 min-h-screen">
          {children}
        </div>

        {/* Footer - appears on all pages */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
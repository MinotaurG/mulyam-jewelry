/**
 * Utility Functions - Mulyam Jewelry
 * 
 * Helper functions used across the application.
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names and merges Tailwind classes intelligently.
 * 
 * Why we need this:
 * - clsx: Handles conditional classes
 * - twMerge: Resolves Tailwind conflicts (e.g., "px-2 px-4" → "px-4")
 * 
 * @example
 * cn("px-4 py-2", isActive && "bg-brand", "px-6")
 * // → "py-2 px-6 bg-brand" (if isActive is true)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
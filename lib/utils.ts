import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function for merging Tailwind classes conditionally.
 * 
 * @param inputs - A list of class values that can be strings or conditions.
 * @returns A string of merged and deduplicated class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

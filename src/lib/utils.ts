import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAyahRef(surah: string, ayah: number): string {
  return `${surah} ${ayah}:${ayah}`;
}

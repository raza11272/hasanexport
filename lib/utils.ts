import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStrapiMediaUrl(url?: string) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  
  let strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!strapiUrl && process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL) {
    try {
      const parsed = new URL(process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL);
      strapiUrl = parsed.origin;
    } catch (e) {
      // ignore
    }
  }
  if (!strapiUrl) {
    strapiUrl = "http://localhost:1337";
  }
  return `${strapiUrl}${url}`;
}

export function resolveImage(imageField: any, imageUrlField: string | null | undefined) {
  if (imageField?.url) {
    return getStrapiMediaUrl(imageField.url);
  }
  return imageUrlField || "";
}

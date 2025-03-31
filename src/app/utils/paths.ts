/**
 * Returns the correct path for static assets accounting for base path differences
 * between development and production environments
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Add the base path in production only
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';
  
  return `${basePath}${normalizedPath}`;
}

/**
 * Returns the correct route path for navigation links
 * accounting for base path differences between environments
 * This is specifically for use with Next.js Link components
 */
export function getRoutePath(path: string): string {
  return getAssetPath(path);
} 
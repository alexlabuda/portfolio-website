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
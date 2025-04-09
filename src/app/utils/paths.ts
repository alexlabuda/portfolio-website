/**
 * Returns the correct path for static assets accounting for base path differences
 * between development and production environments
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // No longer need to add a base path for production with custom domain
  return normalizedPath;
} 
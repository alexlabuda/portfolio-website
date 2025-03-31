/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static HTML export
  
  // GitHub Pages configuration - enabled only in production
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '',
  
  // Enable trailing slashes for consistent URL handling
  trailingSlash: true,
  
  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
  }
}

module.exports = nextConfig 
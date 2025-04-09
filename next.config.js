/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static HTML export
  
  // Remove portfolio-website base path for custom domain
  trailingSlash: true,
  
  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Disable asset prefix for custom domain
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
}

module.exports = nextConfig 
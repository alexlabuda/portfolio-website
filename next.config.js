/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  // Get the repository name from package.json or environment
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
  // If using a custom domain, you can remove the basePath
  // trailingSlash: true, // Optional: ensure trailing slashes
}

module.exports = nextConfig 
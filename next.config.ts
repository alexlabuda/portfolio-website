/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

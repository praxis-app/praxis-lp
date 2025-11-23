import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  devIndicators: false,
  turbopack: {
    root: __dirname,
  },
  images: {
    domains: ['picsum.photos'],
  },
};

export default nextConfig;

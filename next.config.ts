import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Site is served from https://andriilisovyi.com
  images: { unoptimized: true },
};

export default nextConfig;

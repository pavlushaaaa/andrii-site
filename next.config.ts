import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Site is served from https://andriilisovyi.com
  images: { unoptimized: true },
};

export default nextConfig;

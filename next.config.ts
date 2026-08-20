import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Site is served from https://pavlushaaaa.github.io/andrii-site
  basePath: process.env.NODE_ENV === 'production' ? '/andrii-site' : '',
  images: { unoptimized: true },
};

export default nextConfig;

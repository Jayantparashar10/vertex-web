import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    // Match these breakpoints to your Tailwind screens
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  experimental: {
    // Reduces CSS bundle size
    optimizeCss: true, 
    // optimizationPackage: 'cssnano', // Optional: requires installing cssnano
  },
};

export default nextConfig;

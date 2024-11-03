import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Add assetPrefix for production only
  assetPrefix: 'https://ai-chatbot-yoz3.onrender.com',
  experimental: {
    ppr: true,
  },
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-id'
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
        ],
      },
    ];
  },
};

export default nextConfig;

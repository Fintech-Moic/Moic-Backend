/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    customWorkerDir: 'src/worker',
  }),
};

module.exports = nextConfig;

module.exports = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
};

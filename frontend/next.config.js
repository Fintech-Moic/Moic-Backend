/** @type {import('next').NextConfig} */
const nextConfig = {};

const withPWA = require('next-pwa')({
  customWorkerDir: 'src/worker',
  dest: 'public',
});

module.exports = withPWA(nextConfig);

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

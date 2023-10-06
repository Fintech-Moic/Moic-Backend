const withPWA = require('next-pwa');

const nextConfig = {
  ...withPWA({
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
    },
  }),
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

module.exports = nextConfig;

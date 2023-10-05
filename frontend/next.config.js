/** @type {import('next').NextConfig} */
const nextConfig = {};

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

// module.exports = nextConfig;

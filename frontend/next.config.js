/** @type {import('next').NextConfig} */
const nextConfig = {};

const withPWA = require('next-pwa')({
  customWorkerDir: 'src/worker',
  dest: 'public',
})


module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
};

module.exports = withPWA(nextConfig);

/** @type {import('next').NextConfig} */

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      '127.0.0.1:8000',
    ]
  },
  experimental: {
    appDir: true,
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  })
})

module.exports = nextConfig

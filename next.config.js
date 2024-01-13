/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https',
      }
    ]
  }
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  basePath: '/portfolio_website',
  assetPrefix: '/portfolio_website/',

  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig

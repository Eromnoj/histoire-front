/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname:'localhost',
        port:'5000',
        pathname:'/uploads/**'
      }
      ]
  }
}


module.exports = nextConfig

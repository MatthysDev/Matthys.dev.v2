/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Screenshots are large PNGs; these are the widths the layout actually asks for.
    deviceSizes: [320, 420, 640, 828, 1080, 1206],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
  // The v2 site is hand-written HTML in public/. `beforeFiles` runs ahead of the
  // filesystem routes, so these win over any src/pages entry of the same name —
  // which is what lets the new home ship without deleting the old page first.
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/home.html' },
        { source: '/projects', destination: '/projects.html' },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
}

module.exports = nextConfig

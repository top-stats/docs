import { createMDX } from 'fumadocs-mdx/next'

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/avatars/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/authentication/:path*',
        destination: '/docs/api/authentication/:path*',
        permanent: true,
      },
      {
        source: '/reference/:path*',
        destination: '/docs/api/reference/:path*',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
})

export default withMDX(config)

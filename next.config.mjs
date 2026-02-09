import { createMDX } from 'fumadocs-mdx/next'

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/authentication/:path*',
        destination: '/docs/api/authentication/:path*',
        permanent: true,
      },
      {
        source: '/docs/api/reference',
        destination: '/docs/api/reference/search',
        permanent: true,
      },
      {
        source: '/docs/reference/:path*',
        destination: '/docs/api/reference/:path*',
        permanent: true,
      },
      {
        source: '/docs/libraries/:path*',
        destination: '/docs/api/libraries/:path*',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/docs/api',
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

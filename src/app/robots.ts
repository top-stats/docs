import type { MetadataRoute } from 'next'

const siteUrl = 'https://docs.topstats.gg'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

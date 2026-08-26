import type { MetadataRoute } from 'next'
import { source } from '@/lib/source'

const siteUrl = 'https://docs.topstats.gg'

// Every docs page from the content source, so crawlers stop depending on
// link discovery to find the long tail.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages().map((page) => ({
    url: `${siteUrl}${page.url}`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...pages,
  ]
}

import { docs } from 'fumadocs-mdx:collections/server'
import { type InferPageType, loader } from 'fumadocs-core/source'
import { createOpenAPI, openapiPlugin } from 'fumadocs-openapi/server'
import { icons } from 'lucide-react'
import { createElement } from 'react'

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [openapiPlugin()],
  icon(icon) {
    if (!icon) {
      return
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons])
  },
})

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png']
  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  }
}

export const openapi = createOpenAPI({})

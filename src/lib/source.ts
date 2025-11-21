import { docs } from 'fumadocs-mdx:collections/server'
import { loader } from 'fumadocs-core/source'
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

export const openapi = createOpenAPI({})

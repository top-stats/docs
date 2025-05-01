import { docs } from '@/.source'
import { loader } from 'fumadocs-core/source'
import { attachFile, createOpenAPI } from 'fumadocs-openapi/server'
import { icons } from 'lucide-react';
import { createElement } from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  pageTree: {
    // adds a badge to each page item in page tree
    attachFile,
  },
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
})

export const openapi = createOpenAPI({})

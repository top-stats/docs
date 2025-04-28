import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  pageTree: {
    // adds a badge to each page item in page tree
    attachFile,
  },
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const openapi = createOpenAPI({
  // options
});

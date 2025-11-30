import defaultMdxComponents from 'fumadocs-ui/mdx'
import { APIPage } from '@/components/api-page'
import type { MDXComponents } from 'mdx/types'

// make sure you can use it in MDX files
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    APIPage,
    ...components,
  }
}

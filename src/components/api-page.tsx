import { openapi } from '@/lib/openapi'
import type { OpenAPIPageProps_Spec } from 'fumadocs-openapi/ui'

import { APIPageClient } from './api-page.client'

// fumadocs-openapi v11 splits the API page: this server component bundles the
// OpenAPI document (referenced by the `document` path from MDX) and hands the
// bundled spec to the client renderer. Everything else (operations, webhooks,
// hasHead) passes straight through.
type APIPageProps = Omit<OpenAPIPageProps_Spec, 'payload'> & {
  document: string
}

export async function APIPage({ document, ...props }: APIPageProps) {
  const { bundled } = await openapi.getSchema(document)

  return <APIPageClient {...props} payload={{ bundled }} />
}

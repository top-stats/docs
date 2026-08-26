import { source } from '@/lib/source'

const siteUrl = 'https://docs.topstats.gg'

// llmstxt.org-format index of every docs page, grouped by top-level section.
// Generated from the same content source as the site, so it never drifts.
export function GET() {
  const sections = new Map<string, string[]>()

  for (const page of source.getPages()) {
    const [section = 'docs'] = page.slugs
    const lines = sections.get(section) ?? []
    const note = page.data.description ? `: ${page.data.description}` : ''
    lines.push(`- [${page.data.title}](${siteUrl}${page.url})${note}`)
    sections.set(section, lines)
  }

  const body = [
    '# TopStats Documentation',
    '',
    '> Documentation for TopStats: product analytics for backends, Discord bots, game servers and websites (topstats.gg), and the TopStats Discord bot statistics site (bots.topstats.gg). Covers the analytics platform, the HTTP API, SDKs and integrations.',
    '',
    ...[...sections.entries()].flatMap(([section, lines]) => [
      `## ${section}`,
      '',
      ...lines,
      '',
    ]),
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

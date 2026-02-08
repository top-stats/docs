import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { TopStatsIcon } from '@/components/icons'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <TopStatsIcon />
        TopStats.gg
      </>
    ),
  },
  githubUrl: 'https://github.com/top-stats/docs',
}

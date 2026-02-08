import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import {
  TopStatsIconWhite,
  TopStatsIcon,
  DiscordIcon,
} from '@/components/icons'

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/top-stats/docs',
    links: [
      {
        type: 'icon',
        url: 'https://topstats.gg',
        text: 'topstats.gg',
        icon: <TopStatsIconWhite />,
        external: true,
      },
      {
        type: 'icon',
        url: 'https://discord.gg/x48WXcTFVD',
        text: 'API Docs',
        icon: <DiscordIcon />,
        external: true,
      },
    ],
    nav: {
      title: (
        <>
          <TopStatsIcon />
          TopStats.gg
        </>
      ),
    },
  }
}

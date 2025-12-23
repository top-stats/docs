import type { ReactNode } from 'react'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/app/layout.config'
import { BookIcon, BotIcon, ServerIcon } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Docs | TopStats.gg',
  description: 'Documentation and Guides for TopStats.gg',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          icon: <BotIcon />,
          text: 'Bots',
          url: '/docs/bots',
        },
        {
          icon: <BookIcon />,
          text: 'API',
          url: '/docs/api',
        },
        {
          icon: <ServerIcon />,
          text: 'Servers',
          url: '/docs/servers',
        },
        {
          type: 'icon',
          url: 'https://topstats.gg',
          text: 'topstats.gg',
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='36'
              viewBox='0 0 36 36'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 21.7279V23.0071L12 15.0071V15H10.7279L4 21.7279ZM14 14H14.7574L18.2426 17.4853L21.7279 14H22V15.0794L18 19L14 15.0057V14ZM14 17.5057V32H22V17.572L18 21.5L14 17.5057ZM24 15.608V32C28.4183 32 32 28.4183 32 24V12H27.6741L24 15.608ZM25.1417 12L24 13.119V12H25.1417ZM12 17.5071L4.11985 25.3873C4.7767 29.1443 8.05486 32 12 32V17.5071Z'
                fill='currentColor'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 0C5.37258 0 0 5.37258 0 12V24C0 30.6274 5.37258 36 12 36H24C30.6274 36 36 30.6274 36 24V0H12ZM12 2C6.47715 2 2 6.47715 2 12V24C2 29.5228 6.47715 34 12 34H24C29.5228 34 34 29.5228 34 24V2H12Z'
                fill='currentColor'
              />
              <path
                d='M13 14L4 23V20.5L13 11.5L18 16.4929L30.2429 4.49292L30.8679 5.11792L31.4929 5.74292L18 18.9929L13 14Z'
                fill='currentColor'
              />
              <path d='M32 4L27 4L32 9L32 4Z' fill='currentColor' />
            </svg>
          ),
          external: true,
        },
      ]}
    >
      {children}
    </HomeLayout>
  )
}

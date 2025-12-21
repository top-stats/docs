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
      ]}
    >
      {children}
    </HomeLayout>
  )
}

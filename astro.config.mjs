// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.topstats.gg',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    starlight({
      title: 'TopStats',
      social: {
        github: 'https://github.com/top-stats',
        discord: 'https://discord.com/invite/jjEauJXuZc',
      },
      logo: {
        src: './src/assets/favicon.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/top-stats/docs/edit/master/',
      },
      customCss: [
        './src/styles/landing.css',
      ],
      favicon: './src/assets/favicon.svg',
      sidebar: [
        {
          label: 'Introduction',
          autogenerate: { directory: 'introduction' },
        },
        {
          label: 'Authentication',
          autogenerate: { directory: 'authentication' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Libraries',
          autogenerate: { directory: 'libraries' },
        },
      ],
    }),
  ],
})

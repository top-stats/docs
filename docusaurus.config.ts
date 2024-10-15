import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'
import tailwindPlugin from './plugins/tailwind-config.cjs'

const config: Config = {
  title: 'TopStats.gg API Docs',
  tagline: 'Documentation for the TopStats.gg APIs',
  favicon: 'img/favicon.ico',
  url: 'https://docs.topstats.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [],
  plugins: [tailwindPlugin],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dbl-statistics/docs/tree/master',
        },
        blog: {
          /* Meta */
          blogTitle: 'TopStats.gg Blog!',
          blogDescription: 'Everything you need to know about TopStats.gg!',
          postsPerPage: 5,
          sortPosts: 'ascending',
          /* Sidebar */
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          /* Misc */
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/top-stats/docs/tree/master',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-NPC9BT76N7',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params
            const items = await defaultCreateSitemapItems(rest)
            return items.filter((item) => !item.url.includes('/page/'))
          },
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    metadata: [
      {
        name: 'keywords',
        content:
          'topstats.gg docs, topstats docs, docs, topstats documentation, documentation, topstats documentation',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    image: 'img/dblstats-dark.png',
    navbar: {
      title: 'TopStats.gg',
      logo: {
        alt: 'TopStats.gg Site Icon',
        src: 'img/dblstats-dark.png',
        srcDark: 'img/dblstats-light.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          label: 'Website',
          href: 'https://dblstatistics.com',
          position: 'right',
        },
        {
          label: 'Discord',
          href: 'https://discord.com/invite/jjEauJXuZc',
          position: 'right',
        },
        {
          href: 'https://github.com/top-stats',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.duotoneDark,
    },
  } satisfies Preset.ThemeConfig,
}

export default config

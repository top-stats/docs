import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TopStats.gg API Docs',
  tagline: 'TopStats API Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://docs.topstats.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
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
          blogTitle: 'Top Stats Blog!',
          blogDescription: 'Everything you need to know about TopStats.gg!',
          postsPerPage: 5,
          sortPosts: "ascending",
          /* Sidebar */
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          /* Misc */
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/dbl-statistics/docs/tree/master',
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
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        }
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content: 'topstats docs, topstats.gg docs, docs, topstats.gg documentation, documentation, topstats documentation'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
    ],
    image: 'img/logo.png',
    navbar: {
      title: 'Top Stats',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
        {
          to: 'https://topstats.gg/rankings',
          label: 'Rankings',
          position: 'left'
        },
        {
          to: '/compare',
          label: 'Compare',
          position: 'left'
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'API',
        },
        {
          label: '...',
          type: 'dropdown',
          position: 'left',
          items: [
            {
              to: 'https://topstats.gg',
              label: 'v3',
              target: '_blank'
            },
          ],
        },
        {
          label: 'Discord',
          href: 'https://discord.com/invite/jjEauJXuZc',
          position: 'right',
        },
        {
          href: 'https://github.com/dbl-statistics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

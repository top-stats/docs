import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DBL Statistics API Docs',
  tagline: 'DBLStatistics API Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://docs.dblstatistics.com',
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
    announcementBar: {
      id: `announcementBar`,
      content: `🎉️ <b>Something new is brewing... <a target="_blank" href="https://discord.com/invite/jjEauJXuZc">Join Our Discord</a> to find out more!</b> 🥳️`,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'dblstats docs, dblstatistics docs, docs, dblstatistics documentation, documentation, dblstats documentation'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
    ],
    image: 'img/dblstats-dark.png',
    navbar: {
      title: 'DBL Statistics',
      logo: {
        alt: 'My Site Logo',
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
          to: 'https://blog.topstats.gg',
          label: 'Blog',
          position: 'left'
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

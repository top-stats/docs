// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.topstats.gg',
	integrations: [
		starlight({
			title: 'TopStats.gg',
			social: {
				github: 'https://github.com/top-stats',
				discord: 'https://discord.com/invite/jjEauJXuZc'
			},
			logo: {
				src: './src/assets/favicon.svg',
			},
			editLink: {
				baseUrl: 'https://github.com/top-stats/docs/edit/master/',
			},
			favicon: './src/assets/favicon.svg',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
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
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs | TopStats.gg',
			social: {
				github: 'https://github.com/top-stats/web',
				discord: 'https://discord.com/invite/jjEauJXuZc'
			},
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

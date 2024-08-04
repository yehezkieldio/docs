import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'yehezkieldio',
			social: {
				github: 'https://github.com/yehezkieldio',
			},
			sidebar: [
				{
					slug: ''
				},
				{
					label: 'Commands',
					autogenerate: { directory: 'commands' },
				},
			],
			customCss: ['./src/tailwind.css'],
			pagination: false,
			tableOfContents: false
		}),
		tailwind({ applyBaseStyles: false }),
	],
});

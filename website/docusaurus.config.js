/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const { join } = require('path');
const { npm2yarn2pnpm } = require('@sapphire/docusaurus-plugin-npm2yarn2pnpm');
const { ts2esm2cjs } = require('@sapphire/docusaurus-plugin-ts2esm2cjs');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {string[]} */
const versions = require('./versions.json');

const Description = "discord-api-types is a simple Node/Deno module that brings up to date typings for Discord's API";
const BaseUrl = 'https://discord-api-types.dev';
const Email = 'vlad@discord-api-types.dev';
const Title = 'discord-api-types documentation';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'discord-api-types documentation',
	url: BaseUrl,
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	onDuplicateRoutes: 'throw',
	favicon: '/favicon.ico',
	tagline: Description,
	organizationName: 'discordjs',
	projectName: 'discord-api-types',

	themes: [],

	plugins: [
		'docusaurus-plugin-sass',
		[
			'@docusaurus/plugin-pwa',
			{
				offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/android-chrome-192x192.png'
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.webmanifest'
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: '#2563EB'
					}
				]
			}
		],
		[
			'docusaurus-plugin-typedoc-api',
			/** @type {Parameters<import('docusaurus-plugin-typedoc-api')['default']>[1]} */ ({
				projectRoot: join(__dirname, '../'),
				packages: [
					{
						path: './',
						entry: {
							globals: { path: 'globals.ts', label: 'Global Types' },
							'gateway/common': { path: 'gateway/common.ts', label: 'Gateway - Common Types' },
							'payloads/common': { path: 'payloads/common.ts', label: 'Payloads - Common Types' },
							'rest/common': { path: 'rest/common.ts', label: 'REST - Common Types' },
							'rpc/common': { path: 'rpc/common.ts', label: 'RPC - Common Types' },
							v6: { path: 'v6.ts', label: 'API v6 - Deprecated' },
							v8: { path: 'v8.ts', label: 'API v8 - Deprecated' },
							v9: { path: 'v9.ts', label: 'API v9' },
							v10: { path: 'v10.ts', label: 'API v10' },
							'rpc/v8': { path: 'rpc/v8.ts', label: 'RPC v8' },
							'rpc/v9': { path: 'rpc/v9.ts', label: 'RPC v9' },
							'rpc/v10': { path: 'rpc/v10.ts', label: 'RPC v10' },
							'voice/v4': { path: 'voice/v4.ts', label: 'Voice v4' },
							'utils/v8': { path: 'utils/v8.ts', label: 'Utils v8' },
							'utils/v9': { path: 'utils/v9.ts', label: 'Utils v9' },
							'utils/v10': { path: 'utils/v10.ts', label: 'Utils v10' }
						},
						slug: 'discord-api-types'
					}
				]
			})
		]
	],

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					showLastUpdateAuthor: false,
					showLastUpdateTime: false,
					remarkPlugins: [npm2yarn2pnpm, ts2esm2cjs]
				},
				blog: false,
				theme: {
					customCss: [
						require.resolve('./src/css/custom.scss'),
						require.resolve('./src/css/tippy-discord.css'),
						require.resolve('./src/css/discordjs.scss')
					]
				}
			})
		]
	],

	themeConfig:
		/** @type {Partial<import('@docusaurus/preset-classic').ThemeConfig>} */
		({
			image: 'https://discord-api-types.dev/opengraph.png',
			colorMode: {
				defaultMode: 'dark',
				respectPrefersColorScheme: true
			},
			metadata: [
				// Tags from realfavicongenerator
				{ name: 'apple-mobile-web-app-title', content: Title },
				{ name: 'application-name', content: Title },
				{ name: 'msapplication-TileColor', content: '#2563EB' },
				{ name: 'msapplication-TileImage', content: '/mstile-144x144.png' },
				{ name: 'theme-color', content: '#2563EB' },

				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'audience', content: 'all' },
				{ name: 'author', content: `Vlad Frangu, ${Email}` },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'description', content: Description },
				{ name: 'designer', content: `Vlad Frangu, ${Email}` },
				{ name: 'distribution', content: 'Global' },
				{ name: 'googlebot', content: 'index,follow' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'identifier-URL', content: BaseUrl },
				{ name: 'keywords', content: 'discord, bot, discord api, documentation, guide, discord-api-types' },
				{ name: 'msapplication-config', content: '/browserconfig.xml' },
				{ name: 'owner', content: `Vlad Frangu, ${Email}` },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: Email },
				{ name: 'revisit-after', content: '7 days' },
				{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
				{ name: 'shortlink', content: BaseUrl },
				{ name: 'subject', content: 'Documentation website for discord-api-types' },
				{ name: 'summary', content: Description },
				{ name: 'target', content: 'all' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:creator', content: '@WolfgalVlad' },
				{ name: 'twitter:site', content: '@WolfgalVlad' },
				{ name: 'twitter:title', content: Title },
				{ name: 'twitter:description', content: Description },
				{ name: 'url', content: BaseUrl },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ property: 'og:description', content: Description },
				{ property: 'og:email', content: Email },
				{ property: 'og:image:alt', content: 'OpenGraphImage' },
				{ property: 'og:image:height', content: '512' },
				{ property: 'og:image:width', content: '1024' },
				{ property: 'og:locale', content: 'en_US' },
				{ property: 'og:site_name', content: Title },
				{ property: 'og:title', content: Title },
				{ property: 'og:type', content: 'article' },
				{ property: 'og:url', content: BaseUrl }
			],
			navbar: {
				title: 'discord-api-types',
				logo: {
					alt: 'Discord API Types Logo',
					src: 'svgs/logo_light.svg'
				},
				items: [
					{
						to: '/',
						label: 'Home',
						position: 'left',
						activeBaseRegex: '^/$'
					},
					{
						to: 'docs/introduction_to_discord-api-types',
						label: 'Introduction to the module',
						position: 'left'
					},
					{
						type: 'dropdown',
						to: 'api',
						label: 'API',
						position: 'left',
						items: [
							{ label: versions.length === 0 ? 'Development Time' : 'next 🚧', to: versions.length === 0 ? 'api' : 'api/next' },
							...versions.map((version, i) => ({
								label: version,
								to: i === 0 ? 'api' : `api/${version}`
							}))
						]
					},

					// Right
					{
						href: 'https://github.com/discordjs/discord-api-types',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository'
					}
				]
			},
			footer: {
				style: 'dark',
				logo: {
					alt: 'Powered By Vercel',
					src: '/powered-by-vercel.svg',
					href: 'https://vercel.com/?utm_source=sapphiredev&utm_campaign=oss'
				},
				links: [
					{
						title: 'Donate',
						items: [
							{
								label: 'Ko-fi',
								href: 'https://discord-api-types.dev/kofi'
							},
							{
								label: 'Patreon',
								href: 'https://discord-api-types.dev/patreon'
							},
							{
								label: 'GitHub Sponsors',
								href: 'https://discord-api-types.dev/sponsor'
							}
						]
					},
					{
						title: 'Our Platforms',
						items: [
							{
								label: 'Discord Server',
								href: 'https://discord-api-types.dev/discord'
							},
							{
								label: 'GitHub Organization',
								href: 'https://discord-api-types.dev/ghorg'
							}
						]
					}
				],
				copyright: `Copyright © 2021 - ${new Date().getFullYear()} The discord.js Community and its contributors.`
			},
			prism: {
				defaultLanguage: 'typescript',
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['powershell', 'batch']
			}
			// algolia: {
			// 	appId: 'TO_BE_DONE',
			// 	apiKey: 'TO_BE_DONE',
			// 	indexName: 'TO_BE_DONE',
			// 	contextualSearch: false
			// }
		})
};

module.exports = config;

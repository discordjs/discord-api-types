const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const { npm2yarn2pnpm } = require('@sapphire/docusaurus-plugin-npm2yarn2pnpm');
const { ts2esm2cjs } = require('@sapphire/docusaurus-plugin-ts2esm2cjs');
const { join } = require('path');
const versions = require('./versions.json');

const Description = "Discord API Types is a simple Node/Deno module that brings up to date typings for Discord's API";
const BaseUrl = 'https://discord-api-types.dev';
const Email = 'vlad@sapphirejs.dev';
const Title = 'Discord API Types';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Discord API Types',
	url: BaseUrl,
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	onDuplicateRoutes: 'throw',
	favicon: 'img/favicon.ico',
	tagline: Description,
	organizationName: 'discordjs',
	projectName: 'discord-api-types',

	themes: [],

	plugins: [
		[
			'@docusaurus/plugin-pwa',
			{
				offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/icons/android-chrome-192x192.png'
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.webmanifest'
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: '#23529B'
					}
				]
			}
		],
		[
			'docusaurus-plugin-typedoc-api',
			{
				projectRoot: join(__dirname, '../'),
				packages: [
					{
						path: './',
						entry: {
							globals: { path: 'globals.ts', label: 'Global Types' },
							v6: { path: 'v6.ts', label: 'API v6 - Deprecated' },
							v8: { path: 'v8.ts', label: 'API v8' },
							v9: { path: 'v9.ts', label: 'API v9' },
							'rpc/v8': { path: 'rpc/v8.ts', label: 'RPC v8' },
							'rpc/v9': { path: 'rpc/v9.ts', label: 'RPC v9' },
							'voice/v4': { path: 'voice/v4.ts', label: 'Voice v4' },
							'utils/v8': { path: 'utils/v8.ts', label: 'Utils v8' },
							'utils/v9': { path: 'utils/v9.ts', label: 'Utils v9' }
						},
						slug: 'discord-api-types'
					}
				]
			}
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
						require.resolve('./src/css/custom.css'),
						require.resolve('./src/css/tippy-discord.css'),
						require.resolve('./src/css/discordjs.css')
					]
				}
			})
		]
	],

	themeConfig:
		/** @type {Partial<import('@docusaurus/preset-classic').ThemeConfig>} */
		({
			image: 'https://discord-api-types.dev/icons/opengraph.png',
			colorMode: {
				defaultMode: 'dark',
				respectPrefersColorScheme: true
			},
			metadata: [
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: Title },
				{ name: 'application-name', content: Title },
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
				{ name: 'msapplication-TileColor', content: '#242526' },
				{ name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' },
				{ name: 'owner', content: `Vlad Frangu, ${Email}` },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: Email },
				{ name: 'revisit-after', content: '7 days' },
				{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
				{ name: 'shortlink', content: BaseUrl },
				{ name: 'subject', content: 'Documentation website for Discord API Types' },
				{ name: 'summary', content: Description },
				{ name: 'target', content: 'all' },
				{ name: 'theme-color', content: '#242526' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:creator', content: '@WolfgalVlad' },
				{ name: 'twitter:site', content: '@WolfgalVlad' },
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
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: BaseUrl }
			],
			navbar: {
				title: 'Discord API Types',
				logo: {
					alt: 'Discord API Types Logo',
					src: 'img/logo.svg'
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
							{ label: versions.length === 0 ? 'Development Time' : '@next', to: versions.length === 0 ? 'api' : 'api/next' },
							...versions.map((version, i) => ({
								label: version,
								to: i === 0 ? 'api' : `api/${version}`
							}))
						]
					}
				]
			},
			footer: {
				style: 'dark',
				logo: {
					alt: 'Powered By Vercel',
					src: 'img/powered-by-vercel.svg',
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

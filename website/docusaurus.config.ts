/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type typedocPluginFunction from 'docusaurus-plugin-typedoc-api';
import { convertNpmToPackageManagers } from '@sapphire/docusaurus-plugin-npm2yarn2pnpm';
import { ts2esm2cjs } from '@sapphire/docusaurus-plugin-ts2esm2cjs';
import { themes } from 'prism-react-renderer';
import { URL, fileURLToPath } from 'node:url';

import versions from './versions.json' with { type: 'json' };

const { github: lightCodeTheme, vsDark: darkCodeTheme } = themes;

type TypedocPluginOptions = Parameters<typeof typedocPluginFunction>[1];

const Description = "discord-api-types is a simple Node/Deno module that brings up to date typings for Discord's API";
const BaseUrl = 'https://discord-api-types.dev';
const Email = 'vlad@discord-api-types.dev';
const Title = 'discord-api-types documentation';

const defaultApiVersion = 'v10';

const config: Config = {
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
			{
				projectRoot: fileURLToPath(new URL('../', import.meta.url)),
				packages: [
					{
						path: './',
						entry: {
							v10: { path: 'v10.ts', label: 'API v10' },
							v9: { path: 'v9.ts', label: 'API v9' },
							'voice/v4': { path: 'voice/v4.ts', label: 'Voice v4' },
							globals: { path: 'globals.ts', label: 'Global Types' }
						},
						slug: 'discord-api-types'
					}
				],
				gitRefName: 'main',
				rehypePlugins: [],
				remarkPlugins: []
			} satisfies Partial<TypedocPluginOptions>
		]
	],

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					showLastUpdateAuthor: false,
					showLastUpdateTime: false,
					remarkPlugins: [convertNpmToPackageManagers, ts2esm2cjs]
				},
				blog: false,
				theme: {
					customCss: [
						require.resolve('./src/css/custom.scss'),
						require.resolve('./src/css/tippy-discord.css'),
						require.resolve('./src/css/discordjs.scss'),
						require.resolve('./src/css/font.scss')
					]
				}
			} satisfies Preset.Options
		]
	],

	themeConfig: {
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
			{ name: 'twitter:title', content: 'discord-api-types - Imagine typings' },
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
			{ property: 'og:title', content: 'discord-api-types - Imagine typings' },
			{ property: 'og:type', content: 'article' },
			{ property: 'og:url', content: BaseUrl }
		],
		navbar: {
			logo: {
				src: '/svgs/mini_logo.svg'
			},
			items: [
				{
					to: '/',
					label: 'discord-api-types',
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
					to: `api/discord-api-types-${defaultApiVersion}`,
					label: 'API',
					position: 'left',
					items: [
						{
							label: versions.length === 0 ? 'Development Time' : 'next 🚧',
							to:
								versions.length === 0
									? `api/discord-api-types-${defaultApiVersion}`
									: `api/next/discord-api-types-${defaultApiVersion}`
						},
						...versions.map((version, index) => ({
							activeBaseRegex: `api/(${version}/)${index === 0 ? '?' : ''}discord-api-types.*`,
							label: version,
							to: index === 0 ? `api/discord-api-types-${version}` : `api/${version}/discord-api-types-${version}`
						}))
					]
				},

				// Right
				{
					href: 'https://github.com/discordjs/discord-api-types',
					position: 'right',
					className: 'header-github-link',
					'aria-label': 'GitHub repository',
					label: 'GitHub'
				}
			]
		},
		footer: {
			style: 'dark',
			logo: {
				alt: 'Powered By Vercel',
				src: '/powered-by-vercel.svg',
				href: 'https://vercel.com/?utm_source=discordjs&utm_campaign=oss'
			},
			links: [
				{
					title: 'Donate',
					items: [
						{
							label: 'GitHub Sponsors',
							href: 'https://discord-api-types.dev/sponsor'
						},
						{
							label: 'Ko-fi',
							href: 'https://discord-api-types.dev/kofi'
						},
						{
							label: 'Patreon',
							href: 'https://discord-api-types.dev/patreon'
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
		},
		algolia: {
			appId: 'TR1O0DBFL9',
			apiKey: '6822440beca69053ab122881d75064dc',
			indexName: 'discord-api-types',
			contextualSearch: true
		}
	} satisfies Preset.ThemeConfig
};

export default config;

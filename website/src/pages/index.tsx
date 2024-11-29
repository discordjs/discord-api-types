import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { SWRConfig } from 'swr';
import HeadTags from '../components/Home/HeadTags';
import HomePageHeader from '../components/Home/HomePageHeader';
import HomePageFeatures from '../components/Home/HomepageFeatures';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	return (
		<>
			<HeadTags />
			<Layout description={siteConfig.tagline} title="Home">
				<SWRConfig
					value={{
						// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, promise/prefer-await-to-then
						fetcher: async (resource: string, init: RequestInit) => fetch(resource, init).then(async (res) => res.json())
					}}
				>
					<HomePageHeader />
					<main>
						<HomePageFeatures />
					</main>
				</SWRConfig>
			</Layout>
		</>
	);
}

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useEffect } from 'react';
import { SWRConfig } from 'swr';
import HeadTags from '../components/Home/HeadTags';
import HomePageHeader from '../components/Home/HomePageHeader';
import HomePageFeatures from '../components/Home/HomepageFeatures';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	useEffect(() => {
		console.log('%cHold Up!', `color: #23529B; font-size: 72px; font-weight: bold; -webkit-text-stroke: 2px #23529B`);
		console.log(
			[
				'%cIf someone told you to copy/paste something here,',
				'it is likely that you are being tricked and/or scammed.',
				'For more information check out\n\nhttps://en.wikipedia.org/wiki/Self-XSS'
			].join(' '),
			'font-size: 16px;'
		);
		console.log(
			[
				'%cWhile we do everything in our power to ensure your security,',
				'pasting anything in here could give attackers access to your private information!'
			].join(' '),
			'font-size: 18px; font-weight: bold; color: red;'
		);
	}, []);

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

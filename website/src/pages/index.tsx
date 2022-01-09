import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useEffect } from 'react';
import { SWRConfig } from 'swr';
import HeadTags from '../components/Home/HeadTags';
import HomePageFeatures from '../components/Home/HomepageFeatures';
import HomePageHeader from '../components/Home/HomePageHeader';

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
			<Layout title="Home" description={siteConfig.tagline}>
				<SWRConfig
					value={{
						fetcher: (resource: string, init: RequestInit) => fetch(resource, init).then((res) => res.json())
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

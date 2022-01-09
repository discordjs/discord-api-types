import useIsBrowser from '@docusaurus/useIsBrowser';
import { formatNumber } from '@site/src/utils/Intl';
import React, { FC, memo } from 'react';
import useSWR from 'swr';
import styles from './Statistics.module.css';
import type { ContributorsData, NpmData, RepoData } from './Types';

const Statistics: FC = () => {
	const isBrowser = useIsBrowser();

	const { data: repoData } = useSWR<RepoData>('https://api.github.com/repos/discordjs/discord-api-types', {
		suspense: isBrowser
	});

	const { data: contributorsData } = useSWR<ContributorsData[]>('https://api.github.com/repos/discordjs/discord-api-types/contributors', {
		suspense: isBrowser
	});

	const { data: npmData } = useSWR<NpmData>('https://api.npmjs.org/downloads/range/2020-01-01:2100-12-31/discord-api-types', {
		suspense: isBrowser
	});

	return (
		<ul>
			{npmData && (
				<li className={styles.downloads}>
					{formatNumber(npmData.downloads.reduce((acc: number, curr) => (acc += curr.downloads), 0))}+ downloads
				</li>
			)}
			{repoData && (
				<>
					<li className={styles.stars}>{formatNumber(repoData['stargazers_count'])}+ stars</li>
					<li className={styles.forks}>{formatNumber(repoData['forks_count'])}+ forks</li>
				</>
			)}
			{contributorsData && <li className={styles.contributors}>{formatNumber(contributorsData.length)}+ contributors</li>}
		</ul>
	);
};

export default memo(Statistics);

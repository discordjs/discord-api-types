import clsx from 'clsx';
import type { FC } from 'react';
import React, { memo } from 'react';
import styles from './HomePageHeader.module.css';
import InstallTabs from './InstallButton/InstallTabs';

const HomePageHeader: FC = () => (
	<header className={clsx('hero', styles.heroBanner)}>
		<div className="container">
			<img alt="Discord API Types Logo" className={styles.logo} src="/svgs/logo_long_blurple.svg" />
			<h1 className={styles.fontSemiTitle}>In-depth typings you can use when working with Discord&#39;s API</h1>
			<InstallTabs />
		</div>
	</header>
);

export default memo(HomePageHeader);

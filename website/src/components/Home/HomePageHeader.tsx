import clsx from 'clsx';
import React, { FC, memo } from 'react';
import styles from './HomePageHeader.module.css';
import InstallTabs from './InstallButton/InstallTabs';

const HomePageHeader: FC = () => (
	<>
		<header className={clsx('hero', styles.heroBanner)}>
			<div className="container">
				<img src="/svgs/logo_long_blurple.svg" alt="Discord API Types Logo" className={styles.logo}></img>
				<h1 className={styles.fontSemiTitle}>In-depth typings you can use when working with Discord&#39;s API</h1>
				<InstallTabs />
			</div>
		</header>
	</>
);

export default memo(HomePageHeader);

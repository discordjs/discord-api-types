import Head from '@docusaurus/Head';
import React, { FC, memo } from 'react';

const HeadTags: FC = () => {
	return (
		<Head>
			<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
			<meta httpEquiv="Expires" content="1y" />
			<meta httpEquiv="Pragma" content="1y" />
			<meta httpEquiv="Cache-Control" content="1y" />
			<meta httpEquiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
			<meta httpEquiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
			<link rel="canonical" href="https://discord-api-types.dev" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" />
			<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
			<link rel="icon" type="image/png" sizes="194x194" href="/icons/android-chrome-194x194.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
			<link rel="manifest" href="/manifest.webmanifest" />
			<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#23529B" />
			<link rel="shortcut icon" href="/icons/favicon.ico" />
			<link rel="apple-touch-startup-image" href="/icons/apple-startup.png" />
		</Head>
	);
};

export default memo(HeadTags);

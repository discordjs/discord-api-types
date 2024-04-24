import Head from '@docusaurus/Head';
import type { FC } from 'react';
import React, { memo } from 'react';

const HeadTags: FC = () => (
	<Head>
		<meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
		<meta content="1y" httpEquiv="Expires" />
		<meta content="1y" httpEquiv="Pragma" />
		<meta content="1y" httpEquiv="Cache-Control" />
		<meta content="RevealTrans(Duration=2.0,Transition=2)" httpEquiv="Page-Enter" />
		<meta content="RevealTrans(Duration=3.0,Transition=12)" httpEquiv="Page-Exit" />
		<link href="https://discord-api-types.dev" rel="canonical" />
		<link href="https://fonts.googleapis.com" rel="preconnect" />
		<link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
		<link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
		<link href="/android-chrome-192x192.png" rel="icon" sizes="192x192" type="image/png" />
		<link href="/android-chrome-194x194.png" rel="icon" sizes="194x194" type="image/png" />
		<link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
		<link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
		<link href="/manifest.webmanifest" rel="manifest" />
		<link color="#23529B" href="/safari-pinned-tab.svg" rel="mask-icon" />
		<link href="/favicon.ico" rel="shortcut icon" />
		{/* eslint-disable-next-line react/no-invalid-html-attribute */}
		<link href="/apple-startup.png" rel="apple-touch-startup-image" />
	</Head>
);

export default memo(HeadTags);

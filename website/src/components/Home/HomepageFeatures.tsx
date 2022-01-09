/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { FC } from 'react';
import Feature from './Features/Feature';
import StatisticsFeature from './Features/StatisticsFeature';
import type { FeatureItem } from './Features/Types';
import styles from './HomepageFeatures.module.css';

const FeatureList: FeatureItem[] = [
	{
		title: 'About',
		description: (
			<>
				discord-api-types is a simple module that helps you work with the data returned from Discord's API.
				<br />
				<br />
				With this module, you're able to work with raw data while also making sure what you access exists, and what type it may be.
			</>
		)
	},
	{
		title: 'Key Features',
		description: (
			<>
				<ul>
					<li>Supports both Node.js and Deno</li>
					<li>Supports both CommonJS and ESM</li>
					<li>Receives updates as fast as they are documented</li>
				</ul>
			</>
		)
	}
];

const HomePageFeatures: FC = () => (
	<section className={styles.features}>
		<div className="container">
			<div className="row">
				{FeatureList.map((props, idx) => (
					<Feature key={idx} {...props} />
				))}
				<StatisticsFeature />
			</div>
		</div>
	</section>
);

export default HomePageFeatures;

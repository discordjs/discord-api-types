import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import type { CSSProperties, FC } from 'react';
import React, { memo } from 'react';
import styles from './LoadingSkeleton.module.css';

const LoadingSkeleton: FC<CSSProperties> = (props) => {
	const { colorMode } = useColorMode();

	return (
		<div
			className={clsx(styles.loadingSkeleton, {
				[styles.lightLoadingSkeleton]: colorMode !== 'dark',
				[styles.darkLoadingSkeleton]: colorMode === 'dark'
			})}
			style={props}
		/>
	);
};

export default memo(LoadingSkeleton);

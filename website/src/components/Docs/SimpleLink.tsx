import { ExternalLinkIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';
import styles from './Link.module.css';

interface Props {
	href: string;
	linkName: string;
	noRightMargin: boolean;
}

const SimpleLink: FC<Props> = ({ href, linkName, noRightMargin = false }) => (
	<a className={styles.link} href={href}>
		{linkName}
		<ExternalLinkIcon className={clsx(styles.linkIcon, { [styles.linkIconNoMarginRight]: noRightMargin })} />
	</a>
);

export default SimpleLink;

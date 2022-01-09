import { ExternalLinkIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './Link.module.css';

interface Props {
	linkName: string;
	href: string;
	noRightMargin: boolean;
}

const SimpleLink: FC<Props> = ({ href, linkName, noRightMargin = false }) => {
	return (
		<a href={href} className={styles.link}>
			{linkName}
			<ExternalLinkIcon className={clsx(styles.linkIcon, { [styles.linkIconNoMarginRight]: noRightMargin })} />
		</a>
	);
};

export default SimpleLink;

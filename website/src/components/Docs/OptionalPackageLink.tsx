import { ExternalLinkIcon } from '@heroicons/react/outline';
import type { FC, ReactNode } from 'react';
import React from 'react';
import styles from './Link.module.css';

interface Props {
	description: ReactNode;
	href: string;
	linkName: string;
}

const OptionalPackageLink: FC<Props> = ({ description, href, linkName }) => (
	<span className={styles.block}>
		<a className={styles.link} href={href}>
			<strong>{linkName}</strong>
			<ExternalLinkIcon className={styles.linkIcon} />
		</a>
		{description}
	</span>
);

export default OptionalPackageLink;

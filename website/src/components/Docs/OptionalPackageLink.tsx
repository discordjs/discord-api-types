import { ExternalLinkIcon } from '@heroicons/react/outline';
import React, { FC, ReactNode } from 'react';
import styles from './Link.module.css';

interface Props {
	linkName: string;
	href: string;
	description: ReactNode;
}

const OptionalPackageLink: FC<Props> = ({ description, href, linkName }) => {
	return (
		<span className={styles.block}>
			<a href={href} className={styles.link}>
				<strong>{linkName}</strong>
				<ExternalLinkIcon className={styles.linkIcon} />
			</a>
			{description}
		</span>
	);
};

export default OptionalPackageLink;

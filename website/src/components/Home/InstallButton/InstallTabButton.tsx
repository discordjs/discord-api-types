import { ClipboardCopyIcon } from '@heroicons/react/outline';
import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import styles from './InstallTabButton.module.css';

interface Props {
	installCommand: string;
	handleClickInstallButton(): void;
}

const InstallTabButton: FC<Props> = ({ installCommand, handleClickInstallButton }) => {
	const [showTippy, setShowTippy] = useState(false);

	const toggleTippy = () => {
		setShowTippy(true);

		setTimeout(() => {
			setShowTippy(false);
		}, 1000);
	};

	return (
		<Tippy visible={showTippy} content="Copied!" placement="auto" arrow theme="discord">
			<button
				className={clsx('button', 'button--secondary', 'button--lg', styles.button)}
				onClick={() => {
					handleClickInstallButton();
					toggleTippy();
				}}
			>
				<div className={clsx(styles.buttonContent)}>
					{installCommand}
					<ClipboardCopyIcon className={styles.copyIcon} />
				</div>
			</button>
		</Tippy>
	);
};

export default InstallTabButton;

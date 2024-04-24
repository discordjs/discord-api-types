import { ClipboardCopyIcon } from '@heroicons/react/outline';
import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import type { FC } from 'react';
import React, { useState } from 'react';
import styles from './InstallTabButton.module.css';

interface Props {
	handleClickInstallButton(): void;
	installCommand: string;
}

const InstallTabButton: FC<Props> = ({ installCommand, handleClickInstallButton }) => {
	const [showTippy, setShowTippy] = useState(false);

	const toggleTippy = () => {
		setShowTippy(true);

		setTimeout(() => {
			setShowTippy(false);
		}, 1_000);
	};

	return (
		<Tippy arrow content="Copied!" placement="auto" theme="discord" visible={showTippy}>
			<button
				className={clsx('button', 'button--secondary', 'button--lg', styles.button)}
				onClick={() => {
					handleClickInstallButton();
					toggleTippy();
				}}
				type="button"
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

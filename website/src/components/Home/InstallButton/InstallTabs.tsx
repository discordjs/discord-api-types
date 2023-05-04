import { npmToPnpm } from '@sapphire/docusaurus-plugin-npm2yarn2pnpm';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import npmToYarn from 'npm-to-yarn';
import type { FC } from 'react';
import React from 'react';
import InstallTabButton from './InstallTabButton';
import styles from './InstallTabs.module.css';

async function handleClickInstallButton(command: string) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
	await window.navigator.clipboard.writeText(command);
}

const InstallTabs: FC = () => {
	const npmInstallCommand = 'npm install discord-api-types';
	const yarnInstallCommand = npmToYarn(npmInstallCommand, 'yarn');
	const pnpmInstallCommand = npmToPnpm(npmInstallCommand);

	return (
		<div className={styles.buttons}>
			<Tabs className={styles.tabs} groupId="npm2yarn2pnpm">
				<TabItem default label="npm" value="npm">
					<InstallTabButton
						handleClickInstallButton={() => {
							void handleClickInstallButton(npmInstallCommand);
						}}
						installCommand={npmInstallCommand}
					/>
				</TabItem>
				<TabItem label="yarn" value="yarn">
					<InstallTabButton
						handleClickInstallButton={() => {
							void handleClickInstallButton(yarnInstallCommand);
						}}
						installCommand={yarnInstallCommand}
					/>
				</TabItem>
				<TabItem label="pnpm" value="pnpm">
					<InstallTabButton
						handleClickInstallButton={() => {
							void handleClickInstallButton(pnpmInstallCommand);
						}}
						installCommand={pnpmInstallCommand}
					/>
				</TabItem>
			</Tabs>
		</div>
	);
};

export default InstallTabs;

import { npmToPnpm } from '@sapphire/docusaurus-plugin-npm2yarn2pnpm';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import npmToYarn from 'npm-to-yarn';
import React, { FC } from 'react';
import InstallTabButton from './InstallTabButton';
import styles from './InstallTabs.module.css';

const InstallTabs: FC = () => {
	const npmInstallCommand = 'npm install discord-api-types';
	const yarnInstallCommand = npmToYarn(npmInstallCommand, 'yarn');
	const pnpmInstallCommand = npmToPnpm(npmInstallCommand);

	const handleClickInstallButton = async (command: string) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		await window.navigator.clipboard.writeText(command);
	};

	return (
		<div className={styles.buttons}>
			<Tabs groupId="npm2yarn2pnpm" className={styles.tabs}>
				<TabItem value="npm" label="npm" default>
					<InstallTabButton
						installCommand={npmInstallCommand}
						handleClickInstallButton={() => {
							void handleClickInstallButton(npmInstallCommand);
						}}
					/>
				</TabItem>
				<TabItem value="yarn" label="yarn">
					<InstallTabButton
						installCommand={yarnInstallCommand}
						handleClickInstallButton={() => {
							void handleClickInstallButton(yarnInstallCommand);
						}}
					/>
				</TabItem>
				<TabItem value="pnpm" label="pnpm">
					<InstallTabButton
						installCommand={pnpmInstallCommand}
						handleClickInstallButton={() => {
							void handleClickInstallButton(pnpmInstallCommand);
						}}
					/>
				</TabItem>
			</Tabs>
		</div>
	);
};

export default InstallTabs;

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions */
import { readFile } from 'node:fs/promises';
import { Octokit } from '@octokit/action';

const packageJson = JSON.parse(await readFile(new URL('../../package.json', import.meta.url), { encoding: 'utf8' }));
const octokit = new Octokit();
const [OWNER, REPOSITORY] = process.env.GITHUB_REPOSITORY.split('/');

console.log('👀 Getting the previous release version');
const previousReleases = await octokit.repos.listReleases({
	owner: OWNER,
	repo: REPOSITORY,
});

// Releases are sorted from newest to oldest, this should work™️
const previousRelease = previousReleases.data.find((release) => !release.draft);
console.log('👀 Previous release version:', previousRelease?.tag_name);

const pullRequestBody = [
	'**Please describe the changes this PR makes and why it should be merged:**',
	'',
	`This pull request bumps discord-api-types from **${previousRelease?.tag_name ?? 'unknown'}** to **${
		packageJson.version
	}**.`,
	'',
	'⚠️ **Do not change the commit message when merging. It must stay in the format `chore(release): ...`!**',
	'⚠️ Maintainers, make sure everything is alright in this PR before merging it. This is still a beta test, so things may break.',
];

console.log(`🎉 Creating pull request for discord-api-types ${packageJson.version}`);

const pullRequest = await octokit.pulls.create({
	base: 'main',
	// The format must stay in sync with the one in create-pr-for-release-and-publish.yml
	head: `chore/release/${packageJson.version}`,
	owner: OWNER,
	repo: REPOSITORY,
	maintainer_can_modify: true,
	title: `chore(release): ${packageJson.version} 🎉`,
	body: pullRequestBody.join('\n'),
});

console.log(`✅ Done! Created pull request ${pullRequest.data.html_url}`);

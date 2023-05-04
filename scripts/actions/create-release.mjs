/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions */
import { readFile } from 'node:fs/promises';
import process from "node:process";
import { URL } from "node:url";
import { Octokit } from '@octokit/action';

const packageJson = JSON.parse(await readFile(new URL('../../package.json', import.meta.url), { encoding: 'utf8' }));
const octokit = new Octokit();
const [OWNER, REPOSITORY] = process.env.GITHUB_REPOSITORY.split('/');
const prPattern = new RegExp(
	`\\(\\[#(?<prNumber>\\d+)\\]\\(https:\\/\\/github\\.com\\/${OWNER}\\/${REPOSITORY}\\/(?:issues|pulls)\\/(?:\\d+)\\)\\)`,
	'gi',
);

console.log('👀 Getting the previous release version');
const previousReleases = await octokit.repos.listReleases({
	owner: OWNER,
	repo: REPOSITORY,
});

// Releases are sorted from newest to oldest, this should work™️
const previousRelease = previousReleases.data.find((release) => !release.draft);
console.log('👀 Previous release version:', previousRelease?.tag_name);

const releaseChangelog = [];
const changelogContent = await readFile(new URL('../../CHANGELOG.md', import.meta.url), { encoding: 'utf8' });

let contentToParseAndAdd = '';

if (previousRelease) {
	// find difference between previous release and current version
	const maybeMinorIndex = changelogContent.indexOf(`## [${previousRelease.tag_name}](https://github.com`);

	if (maybeMinorIndex === -1) {
		// find major version
		const maybeMajorIndex = changelogContent.indexOf(`# [${previousRelease.tag_name}](https://github.com`);
		contentToParseAndAdd = changelogContent.slice(0, maybeMajorIndex);
	} else {
		contentToParseAndAdd = changelogContent.slice(0, maybeMinorIndex);
	}
} else {
	contentToParseAndAdd = changelogContent;
}

for (const [input, prNumber] of contentToParseAndAdd.matchAll(prPattern)) {
	try {
		const prData = await octokit.pulls.get({
			owner: OWNER,
			repo: REPOSITORY,
			pull_number: Number(prNumber),
		});

		const replaced = input.replace('))', `) by @${prData.data.user?.login ?? 'ghost'})`);

		contentToParseAndAdd = contentToParseAndAdd.replace(input, replaced);
	} catch (error) {
		console.error(`Failed to fetch PR #${prNumber}`, error);
	}
}

releaseChangelog.push(contentToParseAndAdd);

const { data } = await octokit.repos.generateReleaseNotes({
	owner: OWNER,
	repo: REPOSITORY,
	tag_name: packageJson.version,
});

// Include new contributors
const possibleNewContributors = data.body.indexOf('## New Contributors');

if (possibleNewContributors === -1) {
	releaseChangelog.push('', data.body.slice(data.body.indexOf('**Full Changelog**')));
} else {
	releaseChangelog.push('', data.body.slice(possibleNewContributors));
}

console.log(`🎉 Creating new release for discord-api-types ${packageJson.version}`);

const release = await octokit.repos.createRelease({
	owner: OWNER,
	repo: REPOSITORY,
	tag_name: packageJson.version,
	name: packageJson.version,
	body: releaseChangelog.join('\n'),
});

console.log(`✅ Done! Release created at ${release.data.html_url}`);

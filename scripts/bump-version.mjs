/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { execSync } from 'node:child_process';
import { promisify } from 'node:util';
import { Octokit } from '@octokit/action';
import conventionalRecommendedBump from 'conventional-recommended-bump';

const lastCommitMessage = execSync('git log -1 --pretty=%B', { encoding: 'utf8' });

if (lastCommitMessage.startsWith('chore(release)')) {
	console.log('Preventing the action from completing as there are no new commits to release.');
	process.exit(1);
}

const conventionalReleaseTypesTo0Ver = new Map([
	['major', 'minor'],
	['minor', 'patch'],
	['patch', 'patch'],
]);

/** @type {(options: import('conventional-recommended-bump').Options) => Promise<import('conventional-recommended-bump').Callback.Recommendation>} */
const asyncConventionalRecommendBump = promisify(conventionalRecommendedBump);

const result = await asyncConventionalRecommendBump({ preset: 'angular' });

if (!result.releaseType) {
	throw new Error('No recommended bump level found');
}

const expectedBumpType = conventionalReleaseTypesTo0Ver.get(result.releaseType);

if (!expectedBumpType) {
	throw new Error(`Unexpected release type: ${result.releaseType}`);
}

console.info(`ℹ️ Bumping the ${expectedBumpType} version: ${result.reason}`);

execSync(`npm version ${expectedBumpType}`);

const newVersion = JSON.parse(execSync('npm version --json', { encoding: 'utf8' }));

console.info(
	`✅ Done! discord-api-types was bumped to ${newVersion['discord-api-types']}! Checking if there was a pull request open already and closing it if so...`,
);

if (!process.env.GITHUB_TOKEN) {
	console.info('🙉 Skipping the pull request checks as no GITHUB_TOKEN was provided.');
	process.exit(0);
}

const octokit = new Octokit();
const [OWNER, REPOSITORY] = process.env.GITHUB_REPOSITORY.split('/');

const pullRequests = await octokit.pulls.list({
	owner: OWNER,
	repo: REPOSITORY,
	state: 'open',
});

const previousPullRequest = pullRequests.data.find(
	// Find release PRs made by GitHub actions
	({ title, user }) => title.startsWith(`chore(release):`) && user?.id === 41898282,
);

if (previousPullRequest) {
	console.log('ℹ️ Closing previous pull request to re-create it...');

	// Warn the PR
	await octokit.issues.createComment({
		owner: OWNER,
		repo: REPOSITORY,
		issue_number: previousPullRequest.number,
		body: '👀 This pull request will be closed and re-created as there may have been new changes between the commit this pull request was opened for and the latest commit.',
	});

	// Close the PR
	await octokit.pulls.update({
		owner: OWNER,
		repo: REPOSITORY,
		pull_number: previousPullRequest.number,
		state: 'closed',
	});

	// Delete the branch
	// https://github.community/t/how-to-delete-a-branch-through-the-api/211792
	await octokit.request('DELETE /repos/{owner}/{repo}/git/refs/{ref}', {
		owner: OWNER,
		repo: REPOSITORY,
		ref: `heads/${previousPullRequest.head.ref}`,
	});

	console.log(`✅ Done. Pull request ${previousPullRequest.number} was closed and will be recreated.`);
}

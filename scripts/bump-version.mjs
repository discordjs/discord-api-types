/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { execSync, spawnSync } from 'node:child_process';
import process from 'node:process';
import { Octokit } from '@octokit/action';
import { Bumper } from 'conventional-recommended-bump';

const IGNORED_COMMIT_AUTHORS = ['renovate[bot]', 'dependabot[bot]'];
const RELEASE_COMMIT_PREFIX = 'chore(release):';

console.log('🚀 Running the release script...');

const lastCommitMessage = execSync('git log -1 --pretty=%B', { encoding: 'utf8' });

console.log(`ℹ️ Last commit message: ${lastCommitMessage}`);

if (lastCommitMessage.startsWith(RELEASE_COMMIT_PREFIX)) {
	console.log('Preventing the action from completing as there are no new commits to release.');
	process.exit(1);
}

const lastReleaseCommitHash = execSync(`git log -1 --grep="${RELEASE_COMMIT_PREFIX}" --pretty=%H`, {
	encoding: 'utf8',
});

if (lastReleaseCommitHash) {
	console.log(`ℹ️ Last release commit hash: ${lastReleaseCommitHash}`);

	const commitAuthorsAfterLastReleaseProcess = spawnSync(
		'git',
		['log', `${lastReleaseCommitHash.trim()}..HEAD`, '--pretty=%an'],
		{ encoding: 'utf8' },
	);

	const commitAuthorsAfterLastRelease = commitAuthorsAfterLastReleaseProcess.stdout.split('\n').filter(Boolean);

	console.log(`ℹ️ Authors after the last release: ${commitAuthorsAfterLastRelease.join(', ')}`);

	if (commitAuthorsAfterLastRelease.every((author) => IGNORED_COMMIT_AUTHORS.includes(author))) {
		console.log(
			'Preventing the action from completing as all commits after the last release were made by ignored authors.',
		);
		process.exit(1);
	}
}

const conventionalReleaseTypesTo0Ver = new Map([
	['major', 'minor'],
	['minor', 'patch'],
	['patch', 'patch'],
]);

console.log('ℹ️ Getting the recommended bump level...');

const bumper = new Bumper().loadPreset({ name: 'angular' });

const result = await bumper.bump();

console.log('ℹ️ Got the recommended bump level:', result);

if (!('releaseType' in result)) {
	console.log('help');
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
	({ title, user }) => title.startsWith(RELEASE_COMMIT_PREFIX) && user?.id === 41_898_282,
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

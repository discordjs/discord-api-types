import { Octokit } from '@octokit/action';
import type { PullRequestOpenedEvent, PullRequestSynchronizeEvent } from '@octokit/webhooks-types';
import { execSync } from 'child_process';
import { readFile } from 'fs/promises';

const octokit = new Octokit();
const [OWNER, REPOSITORY] = process.env.GITHUB_REPOSITORY!.split('/');

async function main() {
	const commitUrl = `https://github.com/${OWNER}/${REPOSITORY}/commit/${process.env.GITHUB_SHA!}`;

	const prEvent = JSON.parse(await readFile(process.env.GITHUB_EVENT_PATH!, 'utf8')) as
		| PullRequestOpenedEvent
		| PullRequestSynchronizeEvent;

	const {
		pull_request: {
			number,
			user: { login },
		},
	} = prEvent;

	console.info(`👀 Verifying that deno types are up to date with commit ${process.env.GITHUB_SHA!}`);
	console.debug('Running build:deno script');
	execSync(`npm run build:deno`);

	console.debug('Getting the difference between clone and deno build output.');
	const diff = execSync(`git diff --name-only ${process.env.GITHUB_SHA!}`)
		.toString()
		.split('\n')
		.filter((line) => line.startsWith('deno/'));

	if (!diff.length) {
		console.info('✅ Nothing to do here!');
		const allReviews = await octokit.pulls.listReviews({
			owner: OWNER,
			pull_number: number,
			repo: REPOSITORY,
		});

		const lastReviewByBot = allReviews.data.filter((item) => item.user?.id === 41898282).at(-1);

		if (lastReviewByBot?.state === 'CHANGES_REQUESTED') {
			await octokit.pulls.dismissReview({
				owner: OWNER,
				repo: REPOSITORY,
				pull_number: number,
				message: 'No longer applicable as deno types are in sync once again! 🎉',
				review_id: lastReviewByBot.id,
			});
		}
		return;
	}

	console.debug(`⚠️ Found ${diff.length} different files.`, { diff });

	const messageBody = [
		`Hey @${login}! Taking a look at commit ${commitUrl}, it seems that you forgot to run \`npm run build:deno\`. Here are the files that are different from the base:`,
		'',
	];

	for (const file of diff) {
		messageBody.push(
			`- [Node: \`${file.slice(5)}\`](https://github.com/${process.env.GITHUB_REPOSITORY!}/blob/${process.env
				.GITHUB_SHA!}/${file.slice(5)}) - [Deno: \`${file}\`](https://github.com/${process.env
				.GITHUB_REPOSITORY!}/blob/${process.env.GITHUB_SHA!}/${file})`,
		);
	}

	messageBody.push('', 'Please run `npm run build:deno` and commit the results to update the deno types.');

	console.info('🔈 Requesting changes in the pull request');
	await octokit.pulls.createReview({
		event: 'REQUEST_CHANGES',
		body: messageBody.join('\n'),
		owner: OWNER,
		repo: REPOSITORY,
		pull_number: number,
	});

	console.info('✅ Done!');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

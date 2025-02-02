import { readFile } from 'node:fs/promises';
import process from "node:process";
import { Octokit } from '@octokit/action';

const octokit = new Octokit();
const [OWNER, REPOSITORY] = process.env.GITHUB_REPOSITORY.split('/');

/** @type {import('@octokit/webhooks-types').PullRequestOpenedEvent | import('@octokit/webhooks-types').PullRequestSynchronizeEvent} */
const prEvent = JSON.parse(await readFile(process.env.GITHUB_EVENT_PATH, 'utf8'));
const { pull_request: { number } } = prEvent;

await octokit.pulls.createReview({
	event: "REQUEST_CHANGES",
	body: "Please only update supported API versions.",
	owner: OWNER,
	repo: REPOSITORY,
	pull_number: number,
});

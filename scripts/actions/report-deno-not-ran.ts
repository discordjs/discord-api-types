// import { Octokit } from '@octokit/action';

import { readFile } from 'fs/promises';

// const octokit = new Octokit();
/*
|   GITHUB_TOKEN: '',
|   GITHUB_ENV: '/var/run/act/workflow/envs.txt',
|   GITHUB_EVENT_PATH: '/var/run/act/workflow/event.json',
|   ACT: 'true',
|   GITHUB_REPOSITORY_OWNER: 'vladfrangu',
|   GITHUB_RETENTION_DAYS: '0',
|   GITHUB_HEAD_REF: '',
|   GITHUB_GRAPHQL_URL: 'https://api.github.com/graphql',
|   GITHUB_API_URL: 'https://api.github.com',
|   GITHUB_WORKFLOW: 'Check Deno',
|   GITHUB_RUN_ID: '1',
|   GITHUB_BASE_REF: '',
|   GITHUB_ACTION_REPOSITORY: '',
|   GITHUB_ACTION: '3',
|   GITHUB_RUN_NUMBER: '1',
|   GITHUB_REPOSITORY: 'vladfrangu/discord-api-types',
|   GITHUB_ACTION_REF: '',
|   GITHUB_ACTIONS: 'true',
|   GITHUB_WORKSPACE: '/mnt/f/Development/Discord/forked-discord-api-types',
|   GITHUB_JOB: 'Ensure Deno types are up to date',
|   GITHUB_SHA: 'a43fc0584b1b787f3512652c752e32b6e14795dc',
|   GITHUB_REF: 'refs/heads/chore/changelogs-cis-labels-oh-my',
|   GITHUB_ACTOR: 'nektos/act',
|   GITHUB_PATH: '/var/run/act/workflow/paths.txt',
|   GITHUB_EVENT_NAME: 'pull_request',
|   GITHUB_SERVER_URL: 'https://github.com',
*/
async function main() {
	console.log(await readFile(process.env.GITHUB_EVENT_PATH!, 'utf8'));
}

main().catch(console.error);

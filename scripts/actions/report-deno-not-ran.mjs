import { execSync } from 'node:child_process';
import process from 'node:process';

const [OWNER, REPOSITORY] = process.env.GITHUB_REPOSITORY.split('/');

const commitUrl = `https://github.com/${OWNER}/${REPOSITORY}/commit/${process.env.GITHUB_SHA}`;

console.info(`👀 Verifying that deno types are up to date with commit ${process.env.GITHUB_SHA}`);
console.debug('Running build:deno script');
execSync(`pnpm run build:deno`);

console.debug('Getting the difference between clone and deno build output.');
const diff = execSync(`git diff --name-only ${process.env.GITHUB_SHA}`)
	.toString()
	.split('\n')
	.filter((line) => line.startsWith('deno/'));

if (!diff.length) {
	console.info('✅ Nothing to do here!');

	process.exit(0);
}

console.debug(`⚠️ Found ${diff.length} different files.`, { diff });

const messageBody = [
	`Taking a look at commit ${commitUrl}, it seems that you forgot to run \`pnpm run build:deno\`. Here are the files that are different from the base:`,
	'',
];

for (const file of diff) {
	messageBody.push(
		`- \`${file.slice(5)}\`: Node (https://github.com/${process.env.GITHUB_REPOSITORY}/blob/${
			process.env.GITHUB_SHA
		}/${file.slice(5)}) - Deno (https://github.com/${process.env.GITHUB_REPOSITORY}/blob/${
			process.env.GITHUB_SHA
		}/${file})`,
	);
}

messageBody.push('', 'Please run `pnpm run build:deno` and commit the results to update the deno types.');

console.error('❌ Deno types are not up to date with the commit!');
console.error(messageBody.join('\n'));

process.exit(1);

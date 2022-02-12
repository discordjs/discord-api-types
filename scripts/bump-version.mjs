/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import conventionalRecommendedBump from 'conventional-recommended-bump';
import { execSync } from 'node:child_process';
import { promisify } from 'node:util';

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

console.info(`✅ Done! discord-api-types was bumped to ${newVersion['discord-api-types']}!`);

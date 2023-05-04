/* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { execSync } from 'node:child_process';
import { readFile, rm, writeFile } from 'node:fs/promises';

const cwd = new URL('../website/', import.meta.url);
const json = JSON.parse(await readFile(new URL('../package.json', import.meta.url), { encoding: 'utf8' }));

console.log(`⌛ Creating website version for ${json.version}`);

execSync(`npm run docusaurus docs:version ${json.version}`, { cwd, encoding: 'utf8' });
execSync(`npm run docusaurus api:version ${json.version}`, { cwd, encoding: 'utf8' });

const bigJsonPath = new URL(`../website/versioned_docs/version-${json.version}/api-typedoc.json`, import.meta.url);

const parsed = JSON.parse(await readFile(bigJsonPath, { encoding: 'utf8' }));

await writeFile(bigJsonPath, JSON.stringify(parsed));

console.log(`✅ Website version created for ${json.version}`);

const versionsJsonPath = new URL('versions.json', cwd);

/** @type {string[]} */
const allVersions = JSON.parse(await readFile(versionsJsonPath, 'utf8'));

const versionToDelete = allVersions.pop();

await writeFile(versionsJsonPath, JSON.stringify(allVersions, null, 2));

await rm(new URL(`versioned_docs/version-${versionToDelete}`, cwd), { force: true, recursive: true });
await rm(new URL(`versioned_sidebars/version-${versionToDelete}-sidebars.json`, cwd), {
	force: true,
	recursive: true,
});

console.log(`♻️ Removed old website version ${versionToDelete}`);

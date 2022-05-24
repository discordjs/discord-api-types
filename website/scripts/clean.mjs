import { rm } from 'node:fs/promises';

const rootDir = new URL('../', import.meta.url);
const documentationDir = new URL('docs/Documentation/', rootDir);
const docusaurusOutputDir = new URL('.docusaurus/', rootDir);
const nodeModulesCacheDir = new URL('node_modules/.cache/', rootDir);
const buildDir = new URL('build/', rootDir);

/** @type {import('node:fs').RmOptions} */
const rmOptions = { recursive: true, force: true };

await Promise.all([
	rm(docusaurusOutputDir, rmOptions), //
	rm(documentationDir, rmOptions),
	rm(nodeModulesCacheDir, rmOptions),
	rm(buildDir, rmOptions)
]);

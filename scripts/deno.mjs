/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { copyFile, mkdir, opendir, readFile, rm, writeFile } from 'node:fs/promises';

const baseDirectory = new URL('../', import.meta.url);
const denoPath = new URL('deno/', baseDirectory);

// Remove existing deno built files
try {
	await rm(denoPath, { recursive: true });
} catch {}

// Create deno folder
await mkdir(denoPath);

/**
 * @param {string} source The raw source
 */
function convertImports(source) {
	return source.replace(
		/from '(.*)'/g,
		/**
		 * @param {string} importPath The path to import from
		 */ (_, importPath) => {
			if (importPath === '..' || importPath === '../') importPath = '../mod.ts';
			if (importPath.includes('index')) importPath = importPath.replace('index', 'mod');
			if (!importPath.endsWith('.ts')) importPath += '.ts';

			return `from '${importPath}'`;
		},
	);
}

/**
 * @param {string} source The raw source
 */
function convertConstEnums(source) {
	return source.replace(/const enum/gi, 'enum');
}

const transformers = [convertImports, convertConstEnums];

/**
 * @param {string} folderName The folder name
 * @param {URL} node The node path
 * @param {URL} deno The deno path
 */
async function adaptFolderToDeno(folderName, node = baseDirectory, deno = denoPath) {
	const nodeDirectory = new URL(folderName, node);
	const denoDirectory = new URL(folderName, deno);

	await mkdir(denoDirectory, { recursive: true });

	for await (const file of await opendir(nodeDirectory)) {
		if (file.isDirectory()) {
			await adaptFolderToDeno(`${file.name}/`, nodeDirectory, denoDirectory);
			continue;
		}

		if (!file.name.endsWith('.ts')) continue;

		const fullFilePath = new URL(file.name, nodeDirectory);
		const finalDenoPath = new URL(file.name.includes('index') ? 'mod.ts' : file.name, denoDirectory);

		const originalFile = await readFile(fullFilePath, { encoding: 'utf8' });

		const finalFile = transformers.reduce((code, transformer) => transformer(code), originalFile);

		await writeFile(finalDenoPath, finalFile);
	}
}

const folderResults = await Promise.allSettled(
	[
		'gateway/', //
		'payloads/',
		'rest/',
		'rpc/',
		'shortcuts/',
		'utils/',
		'voice/',
	].map((item) => adaptFolderToDeno(item)),
);

for (const result of folderResults) {
	if (result.status === 'rejected') console.error(result.reason);
}

const copyResults = await Promise.allSettled(
	[
		'LICENSE', //
		'README.md',
		'globals.ts',
	].map((item) => copyFile(new URL(item, baseDirectory), new URL(item, denoPath))),
);

for (const result of copyResults) {
	if (result.status === 'rejected') console.error(result.reason);
}

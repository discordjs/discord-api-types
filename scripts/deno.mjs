/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
	copyFile, //
	mkdir,
	readdir,
	readFile,
	rm,
	stat,
	writeFile,
} from 'fs/promises';

const baseDirectory = new URL('../', import.meta.url);
const denoPath = new URL('.deno/', baseDirectory);

// Remove existing deno built files
try {
	await rm(denoPath, { recursive: true });
} catch {}

// Create .deno folder
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
 * @param {string} folderName The folder name
 * @param {URL} node The node path
 * @param {URL} deno The deno path
 */
async function adaptFolderToDeno(folderName, node = baseDirectory, deno = denoPath) {
	const nodeDirectory = new URL(folderName, node);
	const denoDirectory = new URL(folderName, deno);

	await mkdir(denoDirectory, { recursive: true });

	for (const file of await readdir(nodeDirectory)) {
		const fullFilePath = new URL(file, nodeDirectory);
		const finalDenoPath = new URL(file.includes('index') ? 'mod.ts' : file, denoDirectory);

		if ((await stat(fullFilePath)).isDirectory()) {
			await adaptFolderToDeno(`${file}/`, new URL(folderName, node), new URL(folderName, deno));
		}

		if (!file.endsWith('.ts')) continue;

		const originalFile = await readFile(fullFilePath, { encoding: 'utf8' });

		await writeFile(finalDenoPath, convertImports(originalFile));
	}
}

async function createModTS() {
	const defaultFile = await readFile(new URL('./default/index.ts', baseDirectory), { encoding: 'utf8' });

	const converted = convertImports(defaultFile).replace('../v', './v');

	await writeFile(new URL('mod.ts', denoPath), converted);
}

// Create mod.ts which is the default/index.ts
await createModTS();

await Promise.all(
	[
		'common/', //
		'v6/',
		'v8/',
	].map((item) => adaptFolderToDeno(item)),
);

await Promise.all(
	[
		'LICENSE', //
		'README.md',
	].map((item) => copyFile(new URL(item, baseDirectory), new URL(item, denoPath))),
);

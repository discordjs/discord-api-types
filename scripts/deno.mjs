/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { readdir, mkdir, readFile, writeFile, rm, stat, copyFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDirectory = join(__dirname, '..');
const denoPath = join(baseDirectory, '.deno');

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
 * @param {string} node The node path
 * @param {string} deno The deno path
 */
async function adaptFolderToDeno(folderName, node = baseDirectory, deno = denoPath) {
	const nodeDirectory = join(node, folderName);
	const denoDirectory = join(deno, folderName);

	await mkdir(denoDirectory, { recursive: true });

	for (const file of await readdir(nodeDirectory)) {
		const fullFilePath = join(nodeDirectory, file);
		const finalDenoPath = join(denoDirectory, file.includes('index') ? 'mod.ts' : file);

		if ((await stat(fullFilePath)).isDirectory()) {
			await adaptFolderToDeno(file, join(node, folderName), join(deno, folderName));
		}

		if (!file.endsWith('.ts')) continue;

		const originalFile = await readFile(fullFilePath, { encoding: 'utf8' });

		await writeFile(finalDenoPath, convertImports(originalFile));
	}
}

async function createModTS() {
	const defaultFile = await readFile(join(baseDirectory, 'default', 'index.ts'), { encoding: 'utf8' });

	const converted = convertImports(defaultFile).replace('../v', './v');

	await writeFile(join(denoPath, 'mod.ts'), converted);
}

// Create mod.ts which is the default/index.ts
await createModTS();

await Promise.all(
	[
		'common', //
		'v6',
		'v8',
	].map((item) => adaptFolderToDeno(item)),
);

await Promise.all(
	[
		'LICENSE', //
		'README.md',
	].map((item) => copyFile(join(baseDirectory, item), join(denoPath, item))),
);

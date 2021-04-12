import { exec } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const execAsync = promisify(exec);

const fileToESMWrapperCall = (path, version) =>
	execAsync(`npx gen-esm-wrapper "${join(rootDir, path, `${version}.js`)}" "${join(rootDir, path, `${version}.mjs`)}"`);

await Promise.allSettled(
	[
		'v6', //
		'v8',

		// Voice
		'v4',
	]
		.map((version) => [
			fileToESMWrapperCall('gateway', version),
			fileToESMWrapperCall(`payloads/${version}`, 'index'),
			fileToESMWrapperCall(`rest/${version}`, 'index'),

			// Voice
			fileToESMWrapperCall('voice', version),

			// RPC
			fileToESMWrapperCall('rpc', version),

			// Utils
			fileToESMWrapperCall('utils', version),

			// Shortcuts
			fileToESMWrapperCall('', version),
		])
		.flat(),
);

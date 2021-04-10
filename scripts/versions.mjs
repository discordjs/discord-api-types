import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

const fileToESMWrapperCall = (path, version) =>
	execAsync(`npx gen-esm-wrapper ./${path}/${version}.js ./${path}/${version}.mjs`);

Promise.allSettled(
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
		])
		.flat(),
);

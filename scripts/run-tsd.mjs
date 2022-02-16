/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
// @ts-nocheck

import tsd from 'tsd';
import formatter from 'tsd/dist/lib/formatter.js';

const diagnostics = await tsd.default({
	cwd: process.cwd(),
	typingsFile: './v10.d.ts',
});

if (diagnostics.length > 0) {
	console.error(formatter.default(diagnostics));
	process.exit(1);
}

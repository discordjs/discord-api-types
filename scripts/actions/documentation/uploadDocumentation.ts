// TODO: rely on cloned djs in the near future

import { readFile } from 'node:fs/promises';
import process from 'node:process';
import { create } from '@actions/glob';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import Cloudflare from 'cloudflare';
import pLimit from 'p-limit';

if (
	!process.env.CF_R2_DOCS_URL ||
	!process.env.CF_R2_DOCS_ACCESS_KEY_ID ||
	!process.env.CF_R2_DOCS_SECRET_ACCESS_KEY ||
	!process.env.CF_R2_DOCS_BUCKET ||
	!process.env.CF_R2_DOCS_BUCKET_URL ||
	!process.env.CF_D1_DOCS_API_KEY ||
	!process.env.CF_D1_DOCS_ID ||
	!process.env.CF_ACCOUNT_ID
) {
	throw new Error('Missing environment variables');
}

const version = process.env.ACTION_VERSION || 'main';

const S3 = new S3Client({
	region: 'auto',
	endpoint: process.env.CF_R2_DOCS_URL!,
	credentials: {
		accessKeyId: process.env.CF_R2_DOCS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.CF_R2_DOCS_SECRET_ACCESS_KEY!,
	},
	requestChecksumCalculation: 'WHEN_REQUIRED',
	responseChecksumValidation: 'WHEN_REQUIRED',
});

const client = new Cloudflare({
	apiToken: process.env.CF_D1_DOCS_API_KEY,
});

const limit = pLimit(10);
const promises: Promise<void>[] = [];

const globber = await create(`docs/docs.api.json`);
console.log('Glob: ', await globber.glob());
for await (const file of globber.globGenerator()) {
	const data = await readFile(file, 'utf8');
	try {
		promises.push(
			limit(async () => {
				console.log(`Uploading ${file} with ${version}...`);
				const json = JSON.parse(data);
				const name = json.name ?? json.n;

				const key = `${name.replace('@discordjs/', '')}/${version}.json`;

				await S3.send(
					new PutObjectCommand({
						Bucket: process.env.CF_R2_DOCS_BUCKET,
						Key: key,
						Body: data,
					}),
				);

				await client.d1.database.raw(process.env.CF_D1_DOCS_ID!, {
					account_id: process.env.CF_ACCOUNT_ID!,
					sql: `insert into documentation (name, version, url) values (?, ?, ?) on conflict (name, version) do update set url = excluded.url;`,
					params: [name.replace('@discordjs/', ''), version, process.env.CF_R2_DOCS_BUCKET_URL + '/' + key],
				});
			}),
		);
	} catch (error) {
		console.log(error);
	}
}

try {
	await Promise.all(promises);
} catch (error) {
	console.log(error);
}

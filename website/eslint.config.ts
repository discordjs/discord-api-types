import common from 'eslint-config-neon/common';
import jsx from 'eslint-config-neon/jsx';
import jsxA11y from 'eslint-config-neon/jsx-a11y';
import node from 'eslint-config-neon/node';
import prettier from 'eslint-config-neon/prettier';
import react from 'eslint-config-neon/react';
import ts from 'eslint-config-neon/typescript';
import { config } from 'typescript-eslint';

const commonFiles = '{js,mjs,cjs,ts,mts,cts,jsx,tsx}';

export default config([
	{
		ignores: ['projects/', 'docs/Documentation/', '.docusaurus/', 'src/index.d.ts', 'docs/Guide/code/', 'build/']
	},
	{
		files: [`**/*.${commonFiles}`],
		extends: [...common, ...node, ...ts, ...react, ...jsx, ...jsxA11y, ...prettier],
		languageOptions: {
			parserOptions: {
				warnOnUnsupportedTypeScriptVersion: false,
				allowAutomaticSingleRunInference: true,
				project: './tsconfig.eslint.json'
			}
		},
		settings: {
			react: {
				// Explicit version: `detect` crashes eslint-plugin-react 7.x under eslint 10
				// (it still calls the removed `context.getFilename()` in that path).
				version: '18.3'
			}
		},
		rules: {
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'@typescript-eslint/unbound-method': 'off',
			'import-x/extensions': 'off',
			'import-x/order': 'off',
			'no-restricted-globals': 'off',
			'tsdoc/syntax': 'off'
		}
	},
	{
		files: ['docusaurus.config.ts', 'babel.config.js', 'sidebars.ts'],
		rules: {
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-require-imports': 'off'
		}
	}
]);

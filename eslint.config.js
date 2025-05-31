import { AST_NODE_TYPES, ESLintUtils, TSESTree } from '@typescript-eslint/utils';
import common from 'eslint-config-neon/common';
import node from 'eslint-config-neon/node';
import prettier from 'eslint-config-neon/prettier';
import ts from 'eslint-config-neon/typescript';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import merge from 'lodash.merge';
import * as tsutils from 'tsutils';
import * as typescript from 'typescript';
import { config } from 'typescript-eslint';

/**
 * @param {import('@typescript-eslint/utils').TSESTree.TSPropertySignature} eslNode
 * @param {string[]} interfaceEndings
 * @returns {boolean}
 */
function shouldRun(eslNode, interfaceEndings) {
	// The first parent is the TSInterfaceBody, the second is the TSInterfaceDeclaration
	const interfaceNode = eslNode.parent?.parent;
	if (!(interfaceNode && 'id' in interfaceNode && interfaceNode.id?.type === AST_NODE_TYPES.Identifier)) {
		return false;
	}

	const { name } = interfaceNode.id;
	if (typeof name !== 'string') {
		return false;
	}

	return interfaceEndings.some((ending) => name.endsWith(ending));
}

const REST_TYPE_NAME_REGEX =
	/^REST(?:Get|Patch|Post|Put|Delete)[\dA-Za-z]+(?:JSONBody|FormDataBody|URLEncodedData|Result|Query)$/;

/**
 * @typedef {[{ interfaceEndings: string[] }]} Options
 */

/** @type {typeof ESLintUtils.RuleCreator.withoutDocs<Options, 'missingOptional'>} */
const MissingOptionalRuleCreator = ESLintUtils.RuleCreator.withoutDocs;

/** @type {typeof ESLintUtils.RuleCreator.withoutDocs<Options, 'missingUndefined'>} */
const MissingUndefinedRuleCreator = ESLintUtils.RuleCreator.withoutDocs;

/** @type {typeof ESLintUtils.RuleCreator.withoutDocs<[{ whitelist: string[] }], 'invalidName'>} */
const RestTypeNameConventionRuleCreator = ESLintUtils.RuleCreator.withoutDocs;

const localPlugin = {
	rules: {
		'explicitly-optional-undefined-properties': MissingOptionalRuleCreator({
			create: (context) => {
				const { interfaceEndings } = context.options[0];
				return {
					TSPropertySignature: (eslNode) => {
						if (!shouldRun(eslNode, interfaceEndings)) {
							return;
						}

						if (eslNode.optional) {
							return;
						}

						const parserServices = ESLintUtils.getParserServices(context);
						const checker = parserServices.program.getTypeChecker();
						const tsNode = parserServices.esTreeNodeToTSNodeMap.get(eslNode);
						const type = checker.getApparentType(checker.getTypeAtLocation(tsNode));
						const unionParts = tsutils.unionTypeParts(type);

						// If our prop is not optional, but has undefined in its union, we should report
						if (!unionParts.some((ty) => tsutils.isTypeFlagSet(ty, typescript.TypeFlags.Undefined))) {
							return;
						}

						context.report({
							node: eslNode,
							messageId: 'missingOptional',
							fix: (fixer) => fixer.insertTextAfter(eslNode.key, '?'),
						});
					},
				};
			},
			meta: {
				fixable: 'code',
				messages: {
					missingOptional: 'When a property has `| undefined`, it should be marked as optional.',
				},
				type: 'problem',
				schema: [
					{
						type: 'object',
						properties: {
							interfaceEndings: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
				],
			},
			defaultOptions: [{ interfaceEndings: [] }],
		}),
		'explicit-undefined-on-optional-properties': MissingUndefinedRuleCreator({
			create: (context) => {
				const { interfaceEndings } = context.options[0];
				return {
					// This is done naively because type-checking the node will always include `| undefined`
					// due to it being optional. ideally, we'd have a way to get the type of the node disregarding
					// the optional flag, which would make this check a lot more trivial
					TSPropertySignature: (eslNode) => {
						if (!shouldRun(eslNode, interfaceEndings)) {
							return;
						}

						// If our prop is't optional or if it doesn't have a type annotation, we don't need to do anything
						if (!eslNode.optional || !eslNode.typeAnnotation) {
							return;
						}

						const { typeAnnotation } = eslNode.typeAnnotation;
						switch (typeAnnotation.type) {
							case AST_NODE_TYPES.TSUnionType: {
								if (typeAnnotation.types.some((t) => t.type === AST_NODE_TYPES.TSUndefinedKeyword)) {
									return;
								}

								break;
							}

							case AST_NODE_TYPES.TSUndefinedKeyword: {
								return;
							}
						}

						context.report({
							node: eslNode,
							messageId: 'missingUndefined',
							fix: (fixer) =>
								fixer.insertTextAfter(
									/** @type {Exclude<typeof eslNode.typeAnnotation, undefined>} */ (
										eslNode.typeAnnotation
									),
									' | undefined',
								),
						});
					},
				};
			},
			meta: {
				fixable: 'code',
				messages: {
					missingUndefined: 'When a property is optional, explicitly include `undefined` in the union.',
				},
				type: 'suggestion',
				schema: [
					{
						type: 'object',
						properties: {
							interfaceEndings: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
				],
			},
			defaultOptions: [{ interfaceEndings: [] }],
		}),
		'rest-type-naming-convention': RestTypeNameConventionRuleCreator({
			create: (context) => {
				const { whitelist } = context.options[0];
				const whitelistSet = new Set(whitelist);

				return {
					'TSTypeAliasDeclaration, TSInterfaceDeclaration': (_node) => {
						const node = /** @type {TSESTree.TSTypeAliasDeclaration | TSESTree.TSInterfaceDeclaration} */ (
							_node
						);

						if (node.id.type !== AST_NODE_TYPES.Identifier) {
							return;
						}

						const { name } = node.id;
						if (whitelistSet.has(name)) {
							return;
						}

						if (!REST_TYPE_NAME_REGEX.test(name)) {
							context.report({
								node: node.id,
								messageId: 'invalidName',
								data: { name },
							});
						}
					},
				};
			},
			meta: {
				messages: {
					invalidName: `{{ name }} does not match REST type naming convention. Must match ${REST_TYPE_NAME_REGEX.source}.`,
				},
				type: 'problem',
				schema: [
					{
						type: 'object',
						properties: {
							whitelist: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
				],
			},
			defaultOptions: [{ whitelist: [] }],
		}),
	},
};

const commonFiles = '{js,mjs,cjs,ts,mts,cts}';

const commonRuleset = merge(...common, { files: [`**/*.${commonFiles}`] });

const nodeRuleset = merge(...node, { files: [`**/*${commonFiles}`] });

const prettierRuleset = merge(...prettier, { files: [`**/*${commonFiles}`] });

const tsRuleset = merge(...ts, {
	files: [`**/*.${commonFiles}`],
	languageOptions: {
		parserOptions: {
			warnOnUnsupportedTypeScriptVersion: false,
			allowAutomaticSingleRunInference: true,
			project: 'tsconfig.eslint.json',
		},
	},
	settings: {
		'import-x/resolver-next': [
			createTypeScriptImportResolver({
				project: 'tsconfig.eslint.json',
			}),
		],
	},
});

export default config([
	{
		ignores: [
			'deno/',

			'gateway/v6/',
			'payloads/v6/',
			'rest/v6/',
			'v6.ts',

			'gateway/v8/',
			'payloads/v8/',
			'rest/v8/',
			'utils/v8.ts',
			'v8.ts',

			'djs/**/*',
			'.yarn/*',
		],
	},
	commonRuleset,
	nodeRuleset,
	tsRuleset,
	prettierRuleset,
	{
		rules: {
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'@typescript-eslint/prefer-literal-enum-member': 'off',
			'@typescript-eslint/sort-type-union-intersection-members': 'off',
			'import/extensions': 'off',
			'tsdoc/syntax': 'off',
			'typescript-sort-keys/interface': 'off',
			'typescript-sort-keys/string-enum': 'off',
			'unicorn/prefer-math-trunc': 'off',
			'jsdoc/no-undefined-types': 'off',
			'@typescript-eslint/no-empty-object-type': [
				'error',
				{
					allowInterfaces: 'always',
				},
			],
		},
	},
	{
		plugins: {
			local: localPlugin,
		},
		rules: {
			'local/explicit-undefined-on-optional-properties': ['error', { interfaceEndings: ['JSONBody'] }],
			'local/explicitly-optional-undefined-properties': ['error', { interfaceEndings: ['JSONBody'] }],
		},
	},
	{
		files: ['rest/v10/*.ts', 'rest/v9/*.ts'],
		ignores: ['rest/v10/index.ts', 'rest/v9/index.ts'],
		plugins: {
			local: localPlugin,
		},
		rules: {
			'local/rest-type-naming-convention': [
				'error',
				{
					whitelist: [
						'RESTAPIAttachment',
						'RESTAPIChannelPatchOverwrite',
						'RESTAPIGuildChannelResolvable',
						'RESTAPIGuildCreateOverwrite',
						'RESTAPIGuildCreatePartialChannel',
						'RESTAPIGuildCreateRole',
						'RESTAPIGuildOnboardingPrompt',
						'RESTAPIGuildOnboardingPromptOption',
						'RESTAPIInteractionCallbackActivityInstanceResource',
						'RESTAPIInteractionCallbackObject',
						'RESTAPIInteractionCallbackResourceObject',
						'RESTAPIMessageReference',
						'RESTAPIPartialCurrentUserGuild',
						'RESTAPIPoll',
						'RESTOAuth2TokenOptionalClientCredentials',

						'RESTOAuth2AdvancedBotAuthorizationQuery',
						'RESTOAuth2AdvancedBotAuthorizationQueryResult',
						'RESTOAuth2AuthorizationQuery',
						'RESTOAuth2BotAuthorizationQuery',
						'RESTOAuth2ImplicitAuthorizationQuery',
						'RESTOAuth2ImplicitAuthorizationURLFragmentResult',

						// Deprecated types
						'APIChannelPatchOverwrite',
						'APIGuildChannelResolvable',
						'APIGuildCreateOverwrite',
						'APIGuildCreatePartialChannel',
						'APIGuildCreateRole',
						'APIMessageReferenceSend',
						'GetAPIVoiceRegionsResult',
						'RESTAPIModifyGuildOnboardingPromptData',
						'RESTAPIModifyGuildOnboardingPromptOptionData',
						'RESTAPIPollCreate',
						'RESTDeleteAPIChannelMessageOwnReaction',
						'RESTGetAPIStickerPack',
						'RESTOAuth2AuthorizationQueryResult',
						'RESTPostAPIEntitlementBody',
					],
				},
			],
		},
	},
]);

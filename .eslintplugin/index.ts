import { AST_NODE_TYPES, ESLintUtils } from '@typescript-eslint/utils';
import * as typescript from 'typescript';
import * as tsutils from 'tsutils';

export = {
	rules: {
		'explicitly-optional-undefined-properties': ESLintUtils.RuleCreator.withoutDocs({
			create: (context) => {
				return {
					TSPropertySignature: (eslNode) => {
						// If our prop is optional, we don't need to do anything
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

						context.report({ node: eslNode, messageId: 'missingOptional' });
					},
				};
			},
			meta: {
				fixable: 'code',
				messages: {
					missingOptional: 'When a property has `| undefined`, it should be marked as optional.',
				},
				type: 'problem',
				schema: [],
			},
			defaultOptions: [],
		}),
		'explicit-undefined-on-optional-properties': ESLintUtils.RuleCreator.withoutDocs({
			create: (context) => {
				return {
					// This is done naively because type-checking the node will always include `| undefined`
					// due to it being optional. ideally, we'd have a way to get the type of the node disregarding
					// the optional flag, which would make this check a lot more trivial
					TSPropertySignature: (eslNode) => {
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
							fix: (fixer) => fixer.insertTextAfter(eslNode.typeAnnotation!, ' | undefined'),
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
				schema: [],
			},
			defaultOptions: [],
		}),
	},
};
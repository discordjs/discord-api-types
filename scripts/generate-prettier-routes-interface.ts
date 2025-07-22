import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import type {
	InterfaceDeclaration,
	ObjectLiteralExpression,
	ParameterDeclaration,
	ParameterDeclarationStructure,
	TypeParameterDeclaration,
	TypeParameterDeclarationStructure,
} from 'ts-morph';
import { Project, SyntaxKind } from 'ts-morph';

const RoutesInterfaceName = 'RoutesDeclarations';
const CDNRoutesInterfaceName = 'CDNRoutesDeclarations';

const versions = readdirSync(join(__dirname, '../rest')).filter((dir) => /^v\d+$/.exec(dir));

const generatedRestDirectory = join(__dirname, '../_generated_/rest');
const globalsFilePath = join(__dirname, '../globals.ts');

function parameterDeclarationToStructure(parameter: ParameterDeclaration): ParameterDeclarationStructure {
	const obj = parameter.getStructure();

	// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
	obj.hasQuestionToken = obj.hasQuestionToken || Boolean(obj.initializer);

	delete obj.initializer;

	return obj;
}

function typeParameterToStructure(typeParameter: TypeParameterDeclaration): TypeParameterDeclarationStructure {
	// eslint-disable-next-line sonarjs/prefer-immediate-return
	const obj = typeParameter.getStructure();

	return obj;
}

function handleTypeParameter(typeParameter: TypeParameterDeclaration, allSeen: Set<string>) {
	const extendsClause = typeParameter.getConstraint();

	if (!extendsClause) {
		return;
	}

	const type = extendsClause.getText();

	if (allSeen.has(type)) {
		return;
	}

	allSeen.add(type);

	if (type === 'StorePageAssetFormat') {
		allSeen.add('ImageFormat');
	}
}

function handleObject(object: ObjectLiteralExpression, interfaceToAddTo: InterfaceDeclaration) {
	const seenTypeParameters = new Set<string>();

	for (const property of object.getPropertiesWithComments()) {
		const castedMethod = property.asKindOrThrow(SyntaxKind.MethodDeclaration);

		const methodName = castedMethod.getName();
		const methodParameters = castedMethod.getParameters();
		let methodReturnType = castedMethod.getReturnType().getText();
		const methodDocs = castedMethod.getJsDocs();

		const returnBody = castedMethod
			.getChildren()
			?.at(-1)
			?.getChildren()
			?.at(1)
			?.getChildren()
			?.at(-1)
			?.asKindOrThrow(SyntaxKind.ReturnStatement);

		const asExpression = returnBody?.getChildrenOfKind(SyntaxKind.AsExpression)[0];

		const unionType = asExpression?.getChildrenOfKind(SyntaxKind.UnionType)?.[0];

		// Override with union if it exists in the cast
		if (unionType) {
			methodReturnType = unionType
				.getText()
				.split('\n')
				.map((line) => line.trim())
				.join(' ');
		}

		if (methodReturnType.startsWith('| ')) {
			methodReturnType = methodReturnType.slice(2);
		}

		const typeParameters = castedMethod.getTypeParameters();

		for (const typeParameter of typeParameters) {
			handleTypeParameter(typeParameter, seenTypeParameters);
		}

		interfaceToAddTo.addMethod({
			name: methodName,
			parameters: methodParameters.map(parameterDeclarationToStructure),
			typeParameters: typeParameters.map(typeParameterToStructure),
			returnType: methodReturnType,
			leadingTrivia:
				methodDocs
					.map((doc) => doc.getText())
					.join('\n')
					.replaceAll('\t', '') + '\n',
		});

		for (const overload of castedMethod.getOverloads()) {
			const typeParameters = overload.getTypeParameters();

			for (const typeParameter of typeParameters) {
				handleTypeParameter(typeParameter, seenTypeParameters);
			}

			interfaceToAddTo.addMethod({
				name: overload.getName(),
				parameters: overload.getParameters().map(parameterDeclarationToStructure),
				typeParameters: typeParameters.map(typeParameterToStructure),
				returnType: overload.getReturnType().getText(),
				leadingTrivia:
					overload
						.getJsDocs()
						.map((doc) => doc.getText())
						.join('\n')
						.replaceAll('\t', '') + '\n',
			});
		}
	}

	return seenTypeParameters;
}

for (const version of versions) {
	console.log(`Generating interfaces for ${version}...`);

	const inputFilePath = join(__dirname, `../rest/${version}/index.ts`);
	const generatedRestInterfacesFilePath = join(__dirname, `../_generated_/rest/${version}/interfaces.ts`);

	const project = new Project({});

	project.addSourceFileAtPathIfExists(inputFilePath);
	project.addSourceFileAtPathIfExists(globalsFilePath);
	project.createDirectory(generatedRestDirectory);

	const generatedRestInterfacesFile = project.createSourceFile(generatedRestInterfacesFilePath, undefined, {
		overwrite: true,
	});

	const routesDeclarationInterface = generatedRestInterfacesFile.addInterface({
		name: RoutesInterfaceName,
		leadingTrivia: '// Automatically generated interface from the Routes object.\n',
		isExported: true,
	});

	const cdnRoutesDeclarationInterface = generatedRestInterfacesFile.addInterface({
		name: CDNRoutesInterfaceName,
		leadingTrivia: '// Automatically generated interface from the CDN Routes object.\n',
		isExported: true,
	});

	generatedRestInterfacesFile.addImportDeclaration({
		moduleSpecifier: '../../../globals',
		namedImports: ['Snowflake'],
		isTypeOnly: true,
	});

	const routesObjectFile = project.getSourceFileOrThrow(inputFilePath);

	routesObjectFile.addImportDeclaration({
		moduleSpecifier: `../../_generated_/rest/${version}/interfaces`,
		isTypeOnly: true,
		namedImports: [RoutesInterfaceName, CDNRoutesInterfaceName],
	});

	routesObjectFile.addExportDeclaration({
		isTypeOnly: true,
		moduleSpecifier: `../../_generated_/rest/${version}/interfaces`,
		leadingTrivia: '// Exports all generated interfaces from the REST API.\n',
	});

	const routesObject = routesObjectFile.getVariableDeclarationOrThrow('Routes');
	const cdnRoutesObject = routesObjectFile.getVariableDeclaration('CDNRoutes');

	if (!cdnRoutesObject) {
		console.log('Skipping type generation for', version);
		continue;
	}

	const routesObjectChildren = routesObject.getChildren();
	const cdnRoutesObjectChildren = cdnRoutesObject.getChildren();

	const [routesIdentifier] = routesObjectChildren;

	const routesObjectDeclaration = routesObject.getInitializerOrThrow();
	const [cdnRoutesIdentifier] = cdnRoutesObjectChildren;
	const cdnRoutesObjectDeclaration = cdnRoutesObject.getInitializerOrThrow();

	const importsNeededForRoutes = handleObject(
		routesObjectDeclaration.asKindOrThrow(SyntaxKind.ObjectLiteralExpression),
		routesDeclarationInterface,
	);

	const importsNeededForCDNRoutes = handleObject(
		cdnRoutesObjectDeclaration.asKindOrThrow(SyntaxKind.ObjectLiteralExpression),
		cdnRoutesDeclarationInterface,
	);

	const typesToImportFromOriginalFile = new Set<string>([...importsNeededForRoutes, ...importsNeededForCDNRoutes]);

	if (typesToImportFromOriginalFile.size > 0) {
		generatedRestInterfacesFile.addImportDeclaration({
			moduleSpecifier: `../../../rest/${version}/index`,
			isTypeOnly: true,
			namedImports: [...typesToImportFromOriginalFile].sort((a, b) => a.localeCompare(b)),
		});
	}

	routesIdentifier.replaceWithText(`Routes: ${RoutesInterfaceName}`);
	cdnRoutesIdentifier.replaceWithText(`CDNRoutes: ${CDNRoutesInterfaceName}`);

	project.saveSync();
}

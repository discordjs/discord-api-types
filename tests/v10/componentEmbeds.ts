import type {
	APIActionRowComponent,
	APIButtonComponentWithCustomId,
	APIComponentEmbed,
	APIComponentEmbedButton,
	APIComponentInEmbed,
	APIComponentInEmbedContainer,
	APIEmbed,
	APIFileComponent,
	APILabelComponent,
	APIStringSelectComponent,
} from '../../v10';
import { ButtonStyle, ComponentType, EmbedType } from '../../v10';
import { expectAssignable } from '../__utils__/type-assertions';

const payload: APIComponentEmbed = {
	component: {
		type: ComponentType.Container,
		components: [
			{
				type: ComponentType.ActionRow,
				components: [
					{ type: ComponentType.Button, style: ButtonStyle.Link, url: 'https://example.com', label: 'Open' },
				],
			},
			{
				type: ComponentType.Section,
				components: [{ type: ComponentType.TextDisplay, content: 'Preview' }],
				accessory: {
					type: ComponentType.Button,
					style: ButtonStyle.Link,
					url: 'https://example.com',
					emoji: { name: '🔗' },
				},
			},
			{ type: ComponentType.MediaGallery, items: [{ media: { url: 'https://example.com/image.png' } }] },
			{ type: ComponentType.Separator },
			{ type: ComponentType.TextDisplay, content: 'More information' },
		],
	},
};

expectAssignable<APIEmbed>({ type: EmbedType.Components, components: [payload.component] });

// Discriminating an embed action row narrows its children to link buttons.
for (const component of payload.component.components) {
	if (component.type === ComponentType.ActionRow) {
		expectAssignable<ButtonStyle.Link>(component.components[0].style);
	}
}

declare const customButton: APIButtonComponentWithCustomId;
declare const selectRow: APIActionRowComponent<APIStringSelectComponent>;
declare const file: APIFileComponent;
declare const label: APILabelComponent;

// @ts-expect-error - Component embeds cannot contain interactive buttons.
expectAssignable<APIComponentEmbedButton>(customButton);
// @ts-expect-error - A component embed button requires a label or an emoji.
expectAssignable<APIComponentEmbedButton>({
	type: ComponentType.Button,
	style: ButtonStyle.Link,
	url: 'https://example.com',
});
// @ts-expect-error - Select menus cannot be nested in component embed action rows.
expectAssignable<APIComponentInEmbedContainer>(selectRow);
// @ts-expect-error - Containers cannot be nested in component embeds.
expectAssignable<APIComponentInEmbedContainer>(payload.component);
// @ts-expect-error - File components are not supported in component embeds.
expectAssignable<APIComponentInEmbed>(file);
// @ts-expect-error - Modal components are not supported in component embeds.
expectAssignable<APIComponentInEmbed>(label);
// @ts-expect-error - The website payload requires a container at its root.
expectAssignable<APIComponentEmbed>({ component: { type: ComponentType.TextDisplay, content: 'Preview' } });

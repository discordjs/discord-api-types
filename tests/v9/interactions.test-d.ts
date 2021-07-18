import { expectType } from 'tsd';
import {
	APIApplicationCommandInteraction,
	APIApplicationCommandInteractionData,
	APIInteraction,
	APIMessageButtonInteractionData,
	APIMessageComponentInteraction,
	APIMessageSelectMenuInteractionData,
	ComponentType,
	InteractionType,
} from '../../v9';

declare const interaction: APIInteraction;

if (interaction.type === InteractionType.ApplicationCommand) {
	expectType<APIApplicationCommandInteraction>(interaction);

	const { data } = interaction;
	expectType<APIApplicationCommandInteractionData>(data);
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- Technically not wrong, but safety
} else if (interaction.type === InteractionType.MessageComponent) {
	expectType<APIMessageComponentInteraction>(interaction);

	const { data } = interaction;
	if (data.component_type === ComponentType.Button) {
		expectType<APIMessageButtonInteractionData>(data);
	} else {
		expectType<APIMessageSelectMenuInteractionData>(data);
		expectType<string[]>(data.values);
	}
}

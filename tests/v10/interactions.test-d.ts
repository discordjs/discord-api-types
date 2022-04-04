import { expectType } from 'tsd';
import type { Snowflake } from '../../globals';
import {
	APIApplicationCommandAutocompleteInteraction,
	APIApplicationCommandInteraction,
	APIApplicationCommandInteractionData,
	APIDMInteraction,
	APIGuildInteraction,
	APIInteraction,
	APIInteractionGuildMember,
	APIMessageComponentInteraction,
	APIModalSubmission,
	APIUser,
	ComponentType,
	InteractionType,
} from '../../v10';

declare const interaction: APIInteraction;

if (interaction.type === InteractionType.ApplicationCommand) {
	expectType<APIApplicationCommandInteraction>(interaction);

	const { data } = interaction;
	expectType<APIApplicationCommandInteractionData>(data);
	expectType<Snowflake | undefined>(data.guild_id);
}

if (interaction.type === InteractionType.MessageComponent) {
	expectType<APIMessageComponentInteraction>(interaction);

	const { data } = interaction;
	if (data.component_type === ComponentType.Button) {
		// TODO: For some reason, tsd yields a `Parameter type APIMessageButtonInteractionData is not identical to argument type APIMessageButtonInteractionData.` error
		// expectType<APIMessageButtonInteractionData>(data);
	}

	if (data.component_type === ComponentType.SelectMenu) {
		// TODO: for some reason, tsd yields a `Parameter type APIMessageSelectMenuInteractionData is not identical to argument type APIMessageSelectMenuInteractionData.` error
		// expectType<APIMessageSelectMenuInteractionData>(data);
		expectType<string[]>(data.values);
	}
}

if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
	expectType<APIApplicationCommandAutocompleteInteraction['data']>(interaction.data);
}

if (interaction.type === InteractionType.ModalSubmit) {
	expectType<APIModalSubmission>(interaction.data);
}

declare const dmInteraction: APIDMInteraction;

expectType<APIUser>(dmInteraction.user);

declare const guildInteraction: APIGuildInteraction;

expectType<APIInteractionGuildMember>(guildInteraction.member);

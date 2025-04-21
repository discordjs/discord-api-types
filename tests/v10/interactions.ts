import type { Snowflake } from '../../globals';
import type {
	APIApplicationCommandAutocompleteInteraction,
	APIApplicationCommandInteraction,
	APIApplicationCommandInteractionData,
	APIDMInteraction,
	APIGuildInteraction,
	APIInteraction,
	APIInteractionGuildMember,
	APIMessageButtonInteractionData,
	APIMessageComponentInteraction,
	APIMessageSelectMenuInteractionData,
	APIModalSubmission,
	APIUser,
} from '../../v10';
import { ApplicationCommandOptionType, ApplicationCommandType, ComponentType, InteractionType } from '../../v10';
import { expectAssignable } from '../__utils__/type-assertions';

declare const interaction: APIInteraction;

if (interaction.type === InteractionType.ApplicationCommand) {
	expectAssignable<APIApplicationCommandInteraction>(interaction);

	const { data } = interaction;
	expectAssignable<APIApplicationCommandInteractionData>(data);
	expectAssignable<Snowflake | undefined>(data.guild_id);

	if (data.type === ApplicationCommandType.ChatInput) {
		if (data.options?.[0]?.type === ApplicationCommandOptionType.String) {
			expectAssignable<string>(data.options[0].value);
		}

		if (data.options?.[0]?.type === ApplicationCommandOptionType.Integer) {
			expectAssignable<number>(data.options[0].value);
		}

		if (data.options?.[0]?.type === ApplicationCommandOptionType.Number) {
			expectAssignable<number>(data.options[0].value);
		}
	}
}

if (interaction.type === InteractionType.MessageComponent) {
	expectAssignable<APIMessageComponentInteraction>(interaction);

	const { data } = interaction;
	if (data.component_type === ComponentType.Button) {
		expectAssignable<APIMessageButtonInteractionData>(data);
	}

	if (data.component_type === ComponentType.StringSelect) {
		expectAssignable<APIMessageSelectMenuInteractionData>(data);
		expectAssignable<string[]>(data.values);
	}
}

if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
	expectAssignable<APIApplicationCommandAutocompleteInteraction['data']>(interaction.data);

	if (interaction.data.options[0]?.type === ApplicationCommandOptionType.String) {
		expectAssignable<string>(interaction.data.options[0].value);
	}

	if (interaction.data.options[0]?.type === ApplicationCommandOptionType.Integer) {
		expectAssignable<string>(interaction.data.options[0].value);
	}

	if (interaction.data.options[0]?.type === ApplicationCommandOptionType.Number) {
		expectAssignable<string>(interaction.data.options[0].value);
	}
}

if (interaction.type === InteractionType.ModalSubmit) {
	expectAssignable<APIModalSubmission>(interaction.data);
}

declare const dmInteraction: APIDMInteraction;

expectAssignable<APIUser>(dmInteraction.user);

declare const guildInteraction: APIGuildInteraction;

expectAssignable<APIInteractionGuildMember>(guildInteraction.member);

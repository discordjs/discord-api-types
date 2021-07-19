import { expectType } from 'tsd';
import {
	APIApplicationCommandInteraction,
	APIApplicationCommandInteractionData,
	APIDMInteraction,
	APIGuildInteraction,
	APIInteraction,
	APIInteractionGuildMember,
	APIMessageButtonInteractionData,
	APIMessageComponentInteraction,
	APIMessageSelectMenuInteractionData,
	APIUser,
	ComponentType,
	InteractionType,
} from '../../v9';

declare const interaction: APIInteraction;

if (interaction.type === InteractionType.ApplicationCommand) {
	expectType<APIApplicationCommandInteraction>(interaction);

	const { data } = interaction;
	expectType<APIApplicationCommandInteractionData>(data);
}

if (interaction.type === InteractionType.MessageComponent) {
	expectType<APIMessageComponentInteraction>(interaction);

	const { data } = interaction;
	if (data.component_type === ComponentType.Button) {
		expectType<APIMessageButtonInteractionData>(data);
	}

	if (data.component_type === ComponentType.SelectMenu) {
		expectType<APIMessageSelectMenuInteractionData>(data);
		expectType<string[]>(data.values);
	}
}

declare const dmInteraction: APIDMInteraction;

expectType<APIUser>(dmInteraction.user);

declare const guildInteraction: APIGuildInteraction;

expectType<APIInteractionGuildMember>(guildInteraction.member);

import type {
	APIBaseInteraction,
	APIChatInputApplicationCommandInteractionData,
	APIDMInteractionWrapper,
	APIGuildInteractionWrapper,
	InteractionType,
} from '../index';

export type APIApplicationCommandAutocompleteInteraction = APIBaseInteraction<
	InteractionType.ApplicationCommandAutocomplete,
	APIChatInputApplicationCommandInteractionData
>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIApplicationCommandAutocompleteDMInteraction =
	APIDMInteractionWrapper<APIApplicationCommandAutocompleteInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIApplicationCommandAutocompleteGuildInteraction =
	APIGuildInteractionWrapper<APIApplicationCommandAutocompleteInteraction>;

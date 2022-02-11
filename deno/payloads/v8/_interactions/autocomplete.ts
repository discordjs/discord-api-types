import type {
	APIBaseInteraction,
	APIChatInputApplicationCommandInteractionData,
	APIDMInteractionWrapper,
	APIGuildInteractionWrapper,
	InteractionType,
} from '../mod.ts';

export type APIApplicationCommandAutocompleteInteraction = APIBaseInteraction<
	InteractionType.ApplicationCommandAutocomplete,
	APIChatInputApplicationCommandInteractionData
> &
	Required<
		Pick<
			APIBaseInteraction<InteractionType.ApplicationCommandAutocomplete, APIChatInputApplicationCommandInteractionData>,
			'data'
		>
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

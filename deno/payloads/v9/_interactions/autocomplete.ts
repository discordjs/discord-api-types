import type {
	APIBaseInteraction,
	APIAutocompleteApplicationCommandInteractionData,
	APIDMInteractionWrapper,
	APIGuildInteractionWrapper,
	InteractionType,
} from '../mod.ts';

export type APIApplicationCommandAutocompleteInteraction = APIBaseInteraction<
	InteractionType.ApplicationCommandAutocomplete,
	APIAutocompleteApplicationCommandInteractionData
> &
	Required<
		Pick<
			APIBaseInteraction<
				InteractionType.ApplicationCommandAutocomplete,
				Required<Pick<APIAutocompleteApplicationCommandInteractionData, 'options'>>
			>,
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

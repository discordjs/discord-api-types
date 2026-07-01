import type {
	APIBaseInteraction,
	APIAutocompleteApplicationCommandInteractionData,
	APIDMInteractionWrapper,
	APIGuildInteractionWrapper,
	InteractionType,
} from '../index';

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
 * @see {@link https://docs.discord.com/developers/interactions/receiving-and-responding#interaction-object}
 */
export type APIApplicationCommandAutocompleteDMInteraction =
	APIDMInteractionWrapper<APIApplicationCommandAutocompleteInteraction>;

/**
 * @see {@link https://docs.discord.com/developers/interactions/receiving-and-responding#interaction-object}
 */
export type APIApplicationCommandAutocompleteGuildInteraction =
	APIGuildInteractionWrapper<APIApplicationCommandAutocompleteInteraction>;

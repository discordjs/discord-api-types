import type { APIApplicationCommandInteractionData, APIBaseInteraction, InteractionType } from '../index';

export type APIApplicationCommandAutocompleteInteraction = APIBaseInteraction<
	InteractionType.ApplicationCommandAutocomplete,
	APIApplicationCommandInteractionData
>;

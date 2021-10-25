import type { APIApplicationCommandInteractionData, APIBaseInteraction, InteractionType } from '../mod.ts';

export type APIApplicationCommandAutocompleteInteraction = APIBaseInteraction<
	InteractionType.ApplicationCommandAutocomplete,
	APIApplicationCommandInteractionData
>;

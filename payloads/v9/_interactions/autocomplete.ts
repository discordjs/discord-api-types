import type { APIBaseInteraction, APIChatInputApplicationCommandInteractionData, InteractionType } from '../index';

export type APIApplicationCommandAutocompleteInteraction = APIBaseInteraction<
	InteractionType.ApplicationCommandAutocomplete,
	APIChatInputApplicationCommandInteractionData
>;

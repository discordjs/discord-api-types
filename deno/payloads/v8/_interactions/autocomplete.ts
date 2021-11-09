import type { APIBaseInteraction, APIChatInputApplicationCommandInteractionData, InteractionType } from '../mod.ts';

export type APIApplicationCommandAutocompleteInteraction = APIBaseInteraction<
	InteractionType.ApplicationCommandAutocomplete,
	APIChatInputApplicationCommandInteractionData
>;

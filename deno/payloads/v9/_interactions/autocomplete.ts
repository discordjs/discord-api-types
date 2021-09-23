import type { APIBaseInteraction, ApplicationCommandOptionType, InteractionType } from '../mod.ts';

export type APICommandAutocompleteInteraction = APIBaseInteraction<
	InteractionType.ApplicationCommandAutocomplete,
	APICommandAutocompleteInteractionData
>;

export interface APICommandAutocompleteInteractionData {
	/**
	 * The name of the parameter
	 */
	name: string;
	/**
	 * Value of application command option type
	 */
	type: ApplicationCommandOptionType;
	/**
	 * Value of the command option
	 */
	value?: string;
	/**
	 * Whether the field is focused by the user
	 */
	focused: boolean;
}

import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper,
	APIInteractionDataOptionBase,
} from './base.ts';
import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared.ts';

interface APIApplicationCommandStringOptionBase
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.String> {
	/**
	 * For option type `STRING`, the minimum allowed length (minimum of 0).
	 */
	min_length?: number;
	/**
	 * For option type `STRING`, the maximum allowed length (minimum of 1).
	 */
	max_length?: number;
}

export type APIApplicationCommandStringOption = APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	APIApplicationCommandStringOptionBase,
	APIApplicationCommandOptionChoice<string>
>;

export interface APIApplicationCommandInteractionDataStringOption
	extends APIInteractionDataOptionBase<ApplicationCommandOptionType.String, string> {
	focused?: boolean;
}

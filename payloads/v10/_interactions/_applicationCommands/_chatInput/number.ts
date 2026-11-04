import type { InteractionType } from '../../responses';
import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper,
	APIInteractionDataOptionBase,
} from './base';
import type {
	APIApplicationCommandOptionChoice,
	APIApplicationCommandOptionChoiceResponse,
	ApplicationCommandOptionType,
} from './shared';

export interface APIApplicationCommandNumberOptionBase extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Number> {
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	min_value?: number;
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the maximum value permitted.
	 */
	max_value?: number;
}

export type APIApplicationCommandNumberOption = APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	APIApplicationCommandNumberOptionBase,
	APIApplicationCommandOptionChoice<number>
>;

export interface APIApplicationCommandNumberOptionResponseBase extends APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.Number> {
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	min_value?: number;
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the maximum value permitted.
	 */
	max_value?: number;
}

export type APIApplicationCommandNumberOptionResponse = APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	APIApplicationCommandNumberOptionResponseBase,
	APIApplicationCommandOptionChoiceResponse<number>
>;

export interface APIApplicationCommandInteractionDataNumberOption<
	Type extends InteractionType = InteractionType,
> extends APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Number,
	Type extends InteractionType.ApplicationCommandAutocomplete ? string : number
> {
	focused?: boolean;
}

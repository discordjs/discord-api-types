import type { InteractionType } from '../../responses.ts';
import type {
	APIApplicationCommandBasicOptionBase,
	APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper,
	APIInteractionDataOptionBase,
} from './base.ts';
import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared.ts';

export interface APIApplicationCommandIntegerOptionBase extends APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Integer> {
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	min_value?: number;
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the maximum value permitted.
	 */
	max_value?: number;
}

export type APIApplicationCommandIntegerOption = APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	APIApplicationCommandIntegerOptionBase,
	APIApplicationCommandOptionChoice<number>
>;

export interface APIApplicationCommandInteractionDataIntegerOption<
	Type extends InteractionType = InteractionType,
> extends APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Integer,
	Type extends InteractionType.ApplicationCommandAutocomplete ? string : number
> {
	focused?: boolean;
}

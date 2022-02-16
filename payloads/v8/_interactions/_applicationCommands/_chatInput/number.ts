import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper,
	APIInteractionDataOptionBase,
} from './base';
import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared';

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
interface APIApplicationCommandNumberOptionBase
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Number> {
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	min_value?: number;
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	max_value?: number;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandNumberOption = APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	APIApplicationCommandNumberOptionBase,
	APIApplicationCommandOptionChoice<number>
>;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandInteractionDataNumberOption
	extends APIInteractionDataOptionBase<ApplicationCommandOptionType.Number, number> {
	focused?: boolean;
}

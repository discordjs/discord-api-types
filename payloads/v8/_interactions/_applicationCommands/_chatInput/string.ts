import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper,
	APIInteractionDataOptionBase,
} from './base';
import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandStringOption = APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	APIApplicationCommandOptionBase<ApplicationCommandOptionType.String>,
	APIApplicationCommandOptionChoice<string>
>;

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandInteractionDataStringOption
	extends APIInteractionDataOptionBase<ApplicationCommandOptionType.String, string> {
	focused?: boolean;
}

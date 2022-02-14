import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandBooleanOption = APIApplicationCommandOptionBase<ApplicationCommandOptionType.Boolean>;

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandInteractionDataBooleanOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Boolean,
	boolean
>;

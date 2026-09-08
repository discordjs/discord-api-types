import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';

export type APIApplicationCommandBooleanOption =
	APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Boolean>;

export type APIApplicationCommandInteractionDataBooleanOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Boolean,
	boolean
>;

import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export type APIApplicationCommandBooleanOption =
	APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Boolean>;

export type APIApplicationCommandInteractionDataBooleanOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Boolean,
	boolean
>;

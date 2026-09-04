import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIInteractionDataOptionBase,
} from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export type APIApplicationCommandBooleanOption = APIApplicationCommandOptionBase<ApplicationCommandOptionType.Boolean>;

export type APIApplicationCommandBooleanOptionResponse =
	APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.Boolean>;

export type APIApplicationCommandInteractionDataBooleanOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Boolean,
	boolean
>;

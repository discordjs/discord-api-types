import type { Snowflake } from '../../../../../globals.ts';
import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIInteractionDataOptionBase,
} from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export type APIApplicationCommandRoleOption = APIApplicationCommandOptionBase<ApplicationCommandOptionType.Role>;

export type APIApplicationCommandRoleOptionResponse =
	APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.Role>;

export type APIApplicationCommandInteractionDataRoleOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Role,
	Snowflake
>;

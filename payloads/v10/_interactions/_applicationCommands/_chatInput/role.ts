import type { Snowflake } from '../../../../../globals';
import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIInteractionDataOptionBase,
} from './base';
import type { ApplicationCommandOptionType } from './shared';

export type APIApplicationCommandRoleOption = APIApplicationCommandOptionBase<ApplicationCommandOptionType.Role>;

export type APIApplicationCommandRoleOptionResponse =
	APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.Role>;

export type APIApplicationCommandInteractionDataRoleOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Role,
	Snowflake
>;

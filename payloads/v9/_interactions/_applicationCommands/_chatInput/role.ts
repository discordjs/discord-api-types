import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';
import type { Snowflake } from '../../../../../globals';

export type APIApplicationCommandRoleOption = APIApplicationCommandOptionBase<ApplicationCommandOptionType.Role>;

export type APIApplicationCommandInteractionDataRoleOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Role,
	Snowflake
>;

import type { Snowflake } from '../../../../../globals.ts';
import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export type APIApplicationCommandRoleOption = APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Role>;

export type APIApplicationCommandInteractionDataRoleOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Role,
	Snowflake
>;

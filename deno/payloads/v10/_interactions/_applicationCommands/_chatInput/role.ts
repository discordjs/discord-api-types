import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type { Snowflake } from '../../../../../globals.ts';

export type APIApplicationCommandRoleOption = APIApplicationCommandOptionBase<ApplicationCommandOptionType.Role>;

export type APIApplicationCommandInteractionDataRoleOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Role,
	Snowflake
>;

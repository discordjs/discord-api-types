import type { Snowflake } from '../../../../../globals.ts';
import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export type APIApplicationCommandUserOption = APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.User>;

export type APIApplicationCommandInteractionDataUserOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.User,
	Snowflake
>;

import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type { Snowflake } from '../../../../../globals.ts';

export type APIApplicationCommandUserOption = APIApplicationCommandOptionBase<ApplicationCommandOptionType.User>;

export type APIApplicationCommandInteractionDataUserOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.User,
	Snowflake
>;

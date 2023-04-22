import type { Snowflake } from '../../../../../globals.ts';
import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export type APIApplicationCommandUserOption = APIApplicationCommandOptionBase<ApplicationCommandOptionType.User>;

export type APIApplicationCommandInteractionDataUserOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.User,
	Snowflake
>;

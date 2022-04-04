import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';
import type { Snowflake } from '../../../../../globals';

export type APIApplicationCommandUserOption = APIApplicationCommandOptionBase<ApplicationCommandOptionType.User>;

export type APIApplicationCommandInteractionDataUserOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.User,
	Snowflake
>;

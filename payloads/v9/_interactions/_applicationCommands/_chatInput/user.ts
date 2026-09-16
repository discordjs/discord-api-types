import type { Snowflake } from '../../../../../globals';
import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';

export type APIApplicationCommandUserOption = APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.User>;

export type APIApplicationCommandInteractionDataUserOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.User,
	Snowflake
>;

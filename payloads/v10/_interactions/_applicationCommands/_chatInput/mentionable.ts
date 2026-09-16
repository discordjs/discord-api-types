import type { Snowflake } from '../../../../../globals';
import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';

export type APIApplicationCommandMentionableOption =
	APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Mentionable>;

export type APIApplicationCommandInteractionDataMentionableOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Mentionable,
	Snowflake
>;

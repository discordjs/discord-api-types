import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';
import type { Snowflake } from '../../../../../globals';

export type APIApplicationCommandMentionableOption =
	APIApplicationCommandOptionBase<ApplicationCommandOptionType.Mentionable>;

export type APIApplicationCommandInteractionDataMentionableOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Mentionable,
	Snowflake
>;

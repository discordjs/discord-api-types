import type { Snowflake } from '../../../../../globals.ts';
import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export type APIApplicationCommandMentionableOption =
	APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Mentionable>;

export type APIApplicationCommandInteractionDataMentionableOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Mentionable,
	Snowflake
>;

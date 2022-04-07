import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type { Snowflake } from '../../../../../globals.ts';

export type APIApplicationCommandMentionableOption =
	APIApplicationCommandOptionBase<ApplicationCommandOptionType.Mentionable>;

export type APIApplicationCommandInteractionDataMentionableOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Mentionable,
	Snowflake
>;

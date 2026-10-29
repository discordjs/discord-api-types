import type { Snowflake } from '../../../../../globals.ts';
import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIInteractionDataOptionBase,
} from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export type APIApplicationCommandMentionableOption =
	APIApplicationCommandOptionBase<ApplicationCommandOptionType.Mentionable>;

export type APIApplicationCommandMentionableOptionResponse =
	APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.Mentionable>;

export type APIApplicationCommandInteractionDataMentionableOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Mentionable,
	Snowflake
>;

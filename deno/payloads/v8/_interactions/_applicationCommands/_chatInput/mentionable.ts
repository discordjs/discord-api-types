import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type { Snowflake } from '../../../../../globals.ts';

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandMentionableOption =
	APIApplicationCommandOptionBase<ApplicationCommandOptionType.Mentionable>;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandInteractionDataMentionableOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Mentionable,
	Snowflake
>;

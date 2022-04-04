import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type { Snowflake } from '../../../../../globals.ts';

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandAttachmentOption =
	APIApplicationCommandOptionBase<ApplicationCommandOptionType.Attachment>;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandInteractionDataAttachmentOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Attachment,
	Snowflake
>;

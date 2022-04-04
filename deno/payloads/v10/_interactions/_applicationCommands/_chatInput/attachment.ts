import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type { Snowflake } from '../../../../../globals.ts';

export type APIApplicationCommandAttachmentOption =
	APIApplicationCommandOptionBase<ApplicationCommandOptionType.Attachment>;

export type APIApplicationCommandInteractionDataAttachmentOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Attachment,
	Snowflake
>;

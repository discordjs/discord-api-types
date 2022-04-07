import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';
import type { Snowflake } from '../../../../../globals';

export type APIApplicationCommandAttachmentOption =
	APIApplicationCommandOptionBase<ApplicationCommandOptionType.Attachment>;

export type APIApplicationCommandInteractionDataAttachmentOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Attachment,
	Snowflake
>;

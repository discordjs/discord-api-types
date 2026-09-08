import type { Snowflake } from '../../../../../globals';
import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';

export type FileUploadType = 'audio' | 'image' | 'video' | `.${string}`;

export interface APIApplicationCommandAttachmentOption extends APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Attachment> {
	file_types?: FileUploadType[];
}

export type APIApplicationCommandInteractionDataAttachmentOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Attachment,
	Snowflake
>;

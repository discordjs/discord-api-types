import type { Snowflake } from '../../../../../globals';
import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';

export type FileUploadType = 'audio' | 'image' | 'video' | `.${string}`;

export interface APIApplicationCommandAttachmentOption extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Attachment> {
	/**
	 * Allowed file types that can be uploaded; max 10
	 *
	 * If only dot-prefixed extensions is specified, due to mobile limitation, you must include `.jpg` for image uploads,
	 * and both `.mp4` and `.mov` for video uploads
	 */
	file_types?: FileUploadType[];
}

export type APIApplicationCommandInteractionDataAttachmentOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Attachment,
	Snowflake
>;

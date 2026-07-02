import type { Snowflake } from '../../../../../globals.ts';
import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

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

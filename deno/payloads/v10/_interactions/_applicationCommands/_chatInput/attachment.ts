import type { Snowflake } from '../../../../../globals.ts';
import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIInteractionDataOptionBase,
} from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export type FileUploadType = 'audio' | 'image' | 'video' | `.${string}`;

export interface APIApplicationCommandAttachmentOption extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Attachment> {
	file_types?: FileUploadType[];
}

export interface APIApplicationCommandAttachmentOptionResponse extends APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.Attachment> {
	file_types?: FileUploadType[];
}

export type APIApplicationCommandInteractionDataAttachmentOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Attachment,
	Snowflake
>;

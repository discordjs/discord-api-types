import type { Snowflake } from '../../../../../globals';
import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIInteractionDataOptionBase,
} from './base';
import type { ApplicationCommandOptionType } from './shared';

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

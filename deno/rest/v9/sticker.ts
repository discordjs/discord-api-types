import type { APISticker, APIStickerPack } from '../../payloads/v9/mod.ts';

export interface RESTGetNitroStickerPacksResult {
	sticker_packs: APIStickerPack[];
}

export type RESTGetAPIStickersResult = APISticker[];

export type RESTGetAPIStickerResult = APISticker;

export interface RESTPostAPIStickerFormDataBody {
	/**
	 * Name of the sticker (2-30 characters)
	 */
	name: string;
	/**
	 * Description of the sticker (up to 100 characters)
	 */
	description?: string;
	/**
	 * The name of a unicode emoji representing the sticker's expression
	 */
	tags: string;
	/**
	 * The sticker file to upload
	 */
	file: unknown;
}

export type RESTPostAPIStickerResult = APISticker;

export interface RESTPatchAPIStickerJSONBody {
	/**
	 * Name of the sticker (2-30 characters)
	 */
	name?: string;
	/**
	 * Description of the sticker (up to 100 characters)
	 */
	description?: string;
	/**
	 * The name of a unicode emoji representing the sticker's expression
	 */
	tags: string;
}

export type RESTPatchAPIStickerResult = APISticker;

export type RESTDeleteAPIStickerResult = never;

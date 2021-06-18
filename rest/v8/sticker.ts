import type { APISticker, APIStickerPack } from '../../payloads/v8/index';

export type RESTGetAPIStickerResult = APISticker;

export interface RESTGetNitroStickerPacksResult {
	sticker_packs: APIStickerPack[];
}

export type RESTGetAPIGuildStickersResult = APISticker[];

export type RESTGetAPIGuildStickerResult = APISticker;

export interface RESTPostAPIGuildStickerFormDataBody {
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

export type RESTPostAPIGuildStickerResult = APISticker;

export interface RESTPatchAPIGuildStickerJSONBody {
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
	tags?: string;
}

export type RESTPatchAPIGuildStickerResult = APISticker;

export type RESTDeleteAPIGuildStickerResult = never;

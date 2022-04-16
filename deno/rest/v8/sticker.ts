import type { APISticker, APIStickerPack } from '../../payloads/v8/mod.ts';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface } from '../../utils/internals.ts';

/**
 * https://discord.com/developers/docs/resources/sticker#get-sticker
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIStickerResult = APISticker;

/**
 * https://discord.com/developers/docs/resources/sticker#list-nitro-sticker-packs
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface RESTGetNitroStickerPacksResult {
	sticker_packs: APIStickerPack[];
}

/**
 * https://discord.com/developers/docs/resources/sticker#list-guild-stickers
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGuildStickersResult = APISticker[];

/**
 * https://discord.com/developers/docs/resources/sticker#get-guild-sticker
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGuildStickerResult = APISticker;

/**
 * https://discord.com/developers/docs/resources/sticker#create-guild-sticker
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface RESTPostAPIGuildStickerFormDataBody {
	/**
	 * Name of the sticker (2-30 characters)
	 */
	name: string;
	/**
	 * Description of the sticker (empty or 2-100 characters)
	 */
	description: string;
	/**
	 * The Discord name of a unicode emoji representing the sticker's expression (2-200 characters)
	 */
	tags: string;
	/**
	 * The sticker file to upload, must be a PNG, APNG, or Lottie JSON file, max 500 KB
	 */
	file: unknown;
}

/**
 * https://discord.com/developers/docs/resources/sticker#create-guild-sticker
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPostAPIGuildStickerResult = APISticker;

/**
 * https://discord.com/developers/docs/resources/sticker#modify-guild-sticker
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPatchAPIGuildStickerJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * Name of the sticker (2-30 characters)
	 */
	name?: string;
	/**
	 * Description of the sticker (2-100 characters)
	 */
	description?: string | null;
	/**
	 * The Discord name of a unicode emoji representing the sticker's expression (2-200 characters)
	 */
	tags?: string;
}>;

/**
 * https://discord.com/developers/docs/resources/sticker#modify-guild-sticker
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPatchAPIGuildStickerResult = APISticker;

/**
 * https://discord.com/developers/docs/resources/sticker#delete-guild-sticker
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTDeleteAPIGuildStickerResult = never;

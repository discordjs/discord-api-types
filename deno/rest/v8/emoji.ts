import type { Snowflake } from '../../globals.ts';
import type { APIEmoji } from '../../payloads/v8/mod.ts';

/**
 * https://docs.discord.com/developers/resources/emoji#list-guild-emojis
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGuildEmojisResult = APIEmoji[];

/**
 * https://docs.discord.com/developers/resources/emoji#get-guild-emoji
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGuildEmojiResult = APIEmoji;

/**
 * https://docs.discord.com/developers/resources/emoji#create-guild-emoji-json-params
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface RESTPostAPIGuildEmojiJSONBody {
	/**
	 * Name of the emoji
	 */
	name: string;
	/**
	 * The 128x128 emoji image
	 *
	 * https://docs.discord.com/developers/reference#image-data
	 */
	image: string;
	/**
	 * Roles for which this emoji will be whitelisted
	 */
	roles?: Snowflake[] | undefined;
}

/**
 * https://docs.discord.com/developers/resources/emoji#create-guild-emoji
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPostAPIGuildEmojiResult = APIEmoji;

/**
 * https://docs.discord.com/developers/resources/emoji#modify-guild-emoji
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface RESTPatchAPIGuildEmojiJSONBody {
	/**
	 * Name of the emoji
	 */
	name?: string | undefined;
	/**
	 * Roles for which this emoji will be whitelisted
	 */
	roles?: Snowflake[] | null | undefined;
}

/**
 * https://docs.discord.com/developers/resources/emoji#modify-guild-emoji
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPatchAPIGuildEmojiResult = APIEmoji;

/**
 * https://docs.discord.com/developers/resources/emoji#delete-guild-emoji
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTDeleteAPIGuildEmojiResult = never;

import type { APIEmoji } from '../../payloads/v6/index';

/**
 * https://docs.discord.com/developers/resources/emoji#list-guild-emojis
 *
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type RESTGetAPIGuildEmojisResult = APIEmoji[];

/**
 * https://docs.discord.com/developers/resources/emoji#get-guild-emoji
 *
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type RESTGetAPIGuildEmojiResult = APIEmoji;

/**
 * https://docs.discord.com/developers/resources/emoji#create-guild-emoji-json-params
 *
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface RESTPostAPIGuildEmojiJSONBody {
	name: string;
	/**
	 * The image data, read more [here](https://docs.discord.com/developers/reference#image-data)
	 */
	image: string;
	roles?: string[] | undefined;
}

/**
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type RESTPostAPIGuildEmojiResult = APIEmoji;

/**
 * https://docs.discord.com/developers/resources/emoji#modify-guild-emoji
 *
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface RESTPatchAPIGuildEmojiJSONBody {
	name?: string | undefined;
	roles?: string[] | null | undefined;
}

/**
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type RESTPatchAPIGuildEmojiResult = APIEmoji;

/**
 * https://docs.discord.com/developers/resources/emoji#delete-guild-emoji
 *
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type RESTDeleteAPIGuildEmojiResult = never;

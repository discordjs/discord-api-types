import type { APIEmoji } from '../payloads';

/**
 * https://discord.com/developers/docs/resources/emoji#list-guild-emojis
 */
export type RESTGetAPIGuildEmojisResult = APIEmoji[];

/**
 * https://discord.com/developers/docs/resources/emoji#get-guild-emoji
 */
export type RESTGetAPIGuildEmojiResult = APIEmoji;

/**
 * https://discord.com/developers/docs/resources/emoji#create-guild-emoji-json-params
 */
export interface RESTPostAPIGuildEmojiJSONBody {
	name: string;
	/**
	 * The image data, read more [here](https://discord.com/developers/docs/reference#image-data)
	 */
	image: string;
	roles?: string[];
}

export type RESTPostAPIGuildEmojiResult = APIEmoji;

/**
 * https://discord.com/developers/docs/resources/emoji#modify-guild-emoji
 */
export interface RESTPatchAPIGuildEmojiJSONBody {
	name?: string;
	roles?: string[] | null;
}

export type RESTPatchAPIGuildEmojiResult = APIEmoji;

/**
 * https://discord.com/developers/docs/resources/emoji#delete-guild-emoji
 */
export type RESTDeleteAPIGuildEmojiResult = never;

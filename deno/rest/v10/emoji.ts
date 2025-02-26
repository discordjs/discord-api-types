import type { Snowflake } from '../../globals.ts';
import type { APIEmoji } from '../../payloads/v10/mod.ts';

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#list-guild-emojis}
 */
export type RESTGetAPIGuildEmojisResult = APIEmoji[];

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#get-guild-emoji}
 */
export type RESTGetAPIGuildEmojiResult = APIEmoji;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji-json-params}
 */
export interface RESTPostAPIGuildEmojiJSONBody {
	/**
	 * Name of the emoji
	 */
	name: string;
	/**
	 * The 128x128 emoji image
	 *
	 * @see {@link https://discord.com/developers/docs/reference#image-data}
	 */
	image: string;
	/**
	 * Roles for which this emoji will be whitelisted
	 */
	roles?: Snowflake[] | undefined;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji}
 */
export type RESTPostAPIGuildEmojiResult = APIEmoji;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji}
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
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji}
 */
export type RESTPatchAPIGuildEmojiResult = APIEmoji;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#delete-guild-emoji}
 */
export type RESTDeleteAPIGuildEmojiResult = never;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#list-application-emojis}
 */
export interface RESTGetAPIApplicationEmojisResult {
	items: APIEmoji[];
}

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#get-application-emoji}
 */
export type RESTGetAPIApplicationEmojiResult = APIEmoji;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-application-emoji-json-params}
 */
export type RESTPostAPIApplicationEmojiJSONBody = Pick<RESTPostAPIGuildEmojiJSONBody, 'image' | 'name'>;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-application-emoji}
 */
export type RESTPostAPIApplicationEmojiResult = APIEmoji;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-application-emoji}
 */
export type RESTPatchAPIApplicationEmojiJSONBody = Pick<RESTPatchAPIGuildEmojiJSONBody, 'name'>;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-application-emoji}
 */
export type RESTPatchAPIApplicationEmojiResult = APIEmoji;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#delete-application-emoji}
 */
export type RESTDeleteAPIApplicationEmojiResult = never;

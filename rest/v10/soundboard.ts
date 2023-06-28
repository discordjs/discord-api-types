import type { Snowflake } from '../../globals';
import type { APISoundboardSound } from '../../payloads/v10/index';

/**
 * https://discord.com/developers/docs/resources/soundboard#list-soundboard-default-sounds
 */
export type RESTGetSoundboardDefaultSoundsResult = APISoundboardSound[];

/**
 * https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export interface RESTPostAPIGuildSoundboardSoundJSONBody {
	/**
	 * Name of the soundboard sound (2-32 characters)
	 */
	name: string;
	/**
	 * Data URI of the mp3 sound data, base64 encoded, similar to image data
	 *
	 * See https://discord.com/developers/docs/reference#image-data
	 */
	sound: string;
	/**
	 * Volume of the soundboard sound, from 0 to 1
	 *
	 * @default 1
	 */
	volume?: number | null | undefined;
	/**
	 * ID of the custom emoji for the soundboard sound
	 */
	emoji_id?: Snowflake | null | undefined;
	/**
	 * Unicode character of a standard emoji for the soundboard sound
	 */
	emoji_name?: string | null | undefined;
}

/**
 * https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound
 */
export type RESTPostAPIGuildSoundboardSoundResult = APISoundboardSound;

/**
 * https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
 */
export interface RESTPatchAPIGuildSoundboardSoundJSONBody {
	/**
	 * Name of the soundboard sound (2-32 characters)
	 */
	name?: string | undefined;
	/**
	 * Volume of the soundboard sound, from 0 to 1
	 *
	 * @default 1
	 */
	volume?: number | null | undefined;
	/**
	 * ID of the custom emoji for the soundboard sound
	 */
	emoji_id?: Snowflake | null | undefined;
	/**
	 * Unicode character of a standard emoji for the soundboard sound
	 */
	emoji_name?: string | null | undefined;
}

/**
 * https://discord.com/developers/docs/resources/soundboard#modify-guild-soundboard-sound
 */
export type RESTPatchAPIGuildSoundboardSoundResult = APISoundboardSound;

/**
 * https://discord.com/developers/docs/resources/soundboard#delete-guild-soundboard-sound
 */
export type RESTDeleteAPIGuildSoundboardSoundResult = never;

/**
 * Types extracted from https://discord.com/developers/docs/resources/soundboard
 */

import type { Snowflake } from '../../globals';
import type { APIUser } from './user';

/**
 * https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object
 */
export interface APISoundboardSound {
	/**
	 * Name of this sound
	 */
	name: string;
	/**
	 * ID of this sound
	 */
	sound_id: Snowflake;
	/**
	 * ID of this sound
	 */
	id?: Snowflake;
	/**
	 * Volume of this sound, from 0 to 1
	 */
	volume: number;
	/**
	 * ID of this sound's custom emoji
	 */
	emoji_id: Snowflake | null;
	/**
	 * Unicode character of this sound's standard emoji
	 */
	emoji_name: string | null;
	/**
	 * Filename of this sound (for default sounds)
	 */
	override_path: string | null;
	/**
	 * ID of the guild that this sound is in
	 */
	guild_id?: Snowflake;
	/**
	 * ID of the user who created this sound
	 */
	user_id: Snowflake;
	/**
	 * Whether this sound can be used (for guild sounds), may be false due to loss of Server Boosts
	 */
	available?: boolean;
	/**
	 * The user who created this sound
	 */
	user?: APIUser;
}

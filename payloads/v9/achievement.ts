/**
 * Types extracted from https://discord.com/developers/docs/game-sdk/achievements
 */

import type { Snowflake } from '../../globals';

export interface APIAchievement {
	/**
	 * Unique id of the application
	 */
	application_id: Snowflake;
	/**
	 * Name of this achievement
	 */
	name: string;
	/**
	 * The description of this achievement
	 */
	description: string;
	/**
	 * Whether this achievement is secret
	 */
	secret: boolean;
	/**
	 * Whether this achievement is secure
	 */
	secure: boolean;
	/**
	 * Unique id of this achievement
	 */
	id: Snowflake;
	/**
	 * The achievement icon hash
	 */
	icon_hash: string;
}

/**
 * Types extracted from https://discord.com/developers/docs/game-sdk/achievements
 */

import type { Snowflake } from '../../globals';
import type { LocalizationMap } from '../common';

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
	 * Localization dictionary for the `name` field
	 */
	name_localizations: LocalizationMap | null;
	/**
	 * The description of this achievement
	 */
	description: string;
	/**
	 * Localization dictionary for the `description` field
	 */
	description_localizations: LocalizationMap | null;
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

import type { Snowflake } from '../../globals';
import type { APIGuildMember } from './guild';

/**
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object
 */
export interface APIStageInstance {
	/**
	 * The id of the stage instance
	 */
	id: Snowflake;
	/**
	 * The guild id of the associated stage channel
	 */
	guild_id: Snowflake;
	/**
	 * The id of the associated stage channel
	 */
	channel_id: Snowflake;
	/**
	 * The topic of the stage instance (1-120 characters)
	 */
	topic: string;
	/**
	 * The privacy level of the stage instance
	 *
	 * See https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
	 */
	privacy_level: StageInstancePrivacyLevel;
	/**
	 * Whether or not stage discovery is disabled
	 */
	discoverable_disabled: boolean;
}

/**
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
 */
export const enum StageInstancePrivacyLevel {
	/**
	 * The stage instance is visible publicly, such as on stage discovery
	 */
	PUBLIC = 1,
	/**
	 * The stage instance is visible to only guild members
	 */
	GUILD_ONLY,
}

export interface APIInviteStageInstance {
	topic: string;

	participant_count: number;

	speaker_count: number;

	members: APIGuildMember[];
}

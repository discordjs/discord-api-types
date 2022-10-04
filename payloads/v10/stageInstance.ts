import type { Snowflake } from '../../globals';

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
	 * @deprecated
	 */
	discoverable_disabled: boolean;
	/**
	 * The id of the scheduled event for this stage instance
	 */
	guild_scheduled_event_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
 */
export enum StageInstancePrivacyLevel {
	/**
	 * The stage instance is visible to only guild members
	 */
	GuildOnly = 2,
}

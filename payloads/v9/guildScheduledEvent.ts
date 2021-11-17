import type { Snowflake } from '../../globals';

export interface APIGuildScheduledEvent {
	/**
	 * The id of the guild event
	 */
	id: Snowflake;
	/**
	 * The guild id of the event
	 */
	guild_id: Snowflake;
	/**
	 * The stage channel id of the guild event
	 */
	channel_id: Snowflake | null;
	/**
	 * The name of the guild event
	 */
	name: string;
	/**
	 * The description of the guild event
	 */
	description?: string;
	/**
	 * The time at which the guild event will start
	 */
	scheduled_start_time: string;
	/**
	 * The time at which the guild event will end, or `null` if the event does not have a scheduled time to end
	 */
	scheduled_end_time: string | null;
	/**
	 * The privacy level of the guild event
	 */
	privvacy_level: GuildScheduledEventPrivacyLevel;
	/**
	 * The scheduled status of the guild event
	 */
	status: GuildScheduledEventStatus;
	/**
	 * The scheduled entity type of the guild event
	 */
	entity_type: GuildScheduledEventEntityType;
	/**
	 * The id of the guild event entity
	 */
	entity_id: Snowflake | null;
	/**
	 * The metadata for the guild event
	 */
	entity_metadata: APIGuildScheduledEventEntityMetadata;
	/**
	 * The number of users subscribed to the guild event
	 */
	user_count?: number;
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata
 */
export interface APIGuildScheduledEventEntityMetadata {
	location?: string;
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types
 */
export const enum GuildScheduledEventEntityType {
	None = 0,
	StageInstance,
	Voice,
	External,
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status
 */
export const enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active,
	Completed,
	Canceled,
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level
 */
export const enum GuildScheduledEventPrivacyLevel {
	/**
	 * the scheduled event is public and available in discovery
	 */
	Public = 1,
	/**
	 * The scheduled event is only accessible to guild members
	 */
	GuildOnly,
}

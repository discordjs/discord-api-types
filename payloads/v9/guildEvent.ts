import type { Snowflake } from '../../globals';
import type { StageInstancePrivacyLevel } from './stageInstance';

export interface APIGuildEvent {
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
	 * The image of the guild event
	 */
	image: string | null;
	/**
	 * The time at which the guild event will start
	 */
	scheduled_start_time: Date;
	/**
	 * The time at which the guild event will end, or `null` if the event does not have a scheduled time to end
	 */
	scheduled_end_time: Date | null;
	/**
	 * The privacy level of the guild event
	 */
	privvacy_level: StageInstancePrivacyLevel;
	/**
	 * The scheduled status of the guild event
	 */
	status: GuildEventStatus;
	/**
	 * The scheduled entity type of the guild event
	 */
	entity_type: GuildEventEntityType;
	/**
	 * The id of the guild event entity
	 */
	entity_id: Snowflake | null;
	/**
	 * The metadata for the guild event
	 */
	entity_metadata: APIGuildEventEntityMetadata;
	/**
	 * The sku ids
	 */
	sku_ids: Snowflake[];
	/**
	 * The skus
	 */
	skus: Array<unknown>; // for now
	/**
	 * The number of users subscribed to the guild event
	 */
	user_count?: number;
}

export const enum GuildEventEntityType {
	None = 0,
	StageInstance,
	Voice,
	External,
}

export const enum GuildEventStatus {
	Scheduled = 1,
	Active,
	Completed,
	Canceled,
}

export interface APIGuildEventEntityMetadata {
	speaker_ids?: Snowflake[];
}

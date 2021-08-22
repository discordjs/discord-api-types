import type { Snowflake } from '../../globals';
import type { APIGuildEvent, GuildEventEntityType, StageInstancePrivacyLevel } from '../../payloads/v8';

export interface RESTGetAPIGuildEventsQuery {
	with_user_count?: boolean;
}

export type RESTGetAPIGuildEventsResult = APIGuildEvent[];

export interface RESTPostAPIGuildEventJSONBody {
	/**
	 * The stage channel id of the guild event
	 */
	channel_id?: Snowflake;
	/**
	 * The name of the guild event
	 */
	name: string;
	/**
	 * The privacy level of the guild event
	 */
	privacy_level: StageInstancePrivacyLevel;
	/**
	 * The time to schedule the guild event at
	 */
	scheduled_start_time: Date;
	/**
	 * The description of the guild event
	 */
	description?: string;
	/**
	 * The scheduled entity type of the guild event
	 */
	entity_type?: GuildEventEntityType;
}

export type RESTPostAPIGuildEventResult = APIGuildEvent;

export type RESTGetAPIGuildEventResult = APIGuildEvent;

export type RESTDeleteAPIGuildEventResult = never;

export type RESTPatchAPIGuildEventJSONBody = Partial<RESTPostAPIGuildEventJSONBody>;

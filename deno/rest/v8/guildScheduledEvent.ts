import type { Snowflake } from '../../globals.ts';
import type {
	APIGuildScheduledEvent,
	GuildScheduledEventEntityType,
	GuildScheduledEventPrivacyLevel,
	APIGuildScheduledEventEntityMetadata,
	GuildScheduledEventStatus,
} from '../../payloads/v8.ts';

export interface RESTGetAPIGuildScheduledEventsQuery {
	with_user_count?: boolean;
}

export type RESTGetAPIGuildScheduledEventsResult = APIGuildScheduledEvent[];

export interface RESTPostAPIGuildScheduledEventJSONBody {
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
	privacy_level: GuildScheduledEventPrivacyLevel;
	/**
	 * The time to schedule the guild event at
	 */
	scheduled_start_time: string;
	/**
	 * The time when the scheduled event is scheduled to end
	 */
	scheduled_end_time?: string;
	/**
	 * The description of the guild event
	 */
	description?: string;
	/**
	 * The scheduled entity type of the guild event
	 */
	entity_type?: GuildScheduledEventEntityType;
	/**
	 * The entity metadata of the scheduled event
	 */
	entity_metadata?: APIGuildScheduledEventEntityMetadata;
}

export type RESTPostAPIGuildScheduledEventResult = APIGuildScheduledEvent;

export type RESTGetAPIGuildScheduledEventResult = APIGuildScheduledEvent;

export type RESTDeleteAPIGuildScheduledEventResult = never;

export interface RESTPatchAPIGuildScheduledEventJSONBody extends Partial<RESTPostAPIGuildScheduledEventJSONBody> {
	status?: GuildScheduledEventStatus;
}

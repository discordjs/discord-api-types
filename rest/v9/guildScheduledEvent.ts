import type { Snowflake } from '../../globals';
import type {
	APIGuildScheduledEvent,
	GuildScheduledEventEntityType,
	GuildScheduledEventPrivacyLevel,
	APIGuildScheduledEventEntityMetadata,
	GuildScheduledEventStatus,
	APIGuildMember,
	APIUser,
} from '../../payloads/v9';

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild
 */
export interface RESTGetAPIGuildScheduledEventsQuery {
	/**
	 * Whether to include number of users subscribed to each event
	 */
	with_user_count?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild
 */
export type RESTGetAPIGuildScheduledEventsResult = APIGuildScheduledEvent[];

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event
 */
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

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event
 */
export type RESTPostAPIGuildScheduledEventResult = APIGuildScheduledEvent;

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event
 */
export type RESTGetAPIGuildScheduledEventResult = APIGuildScheduledEvent;

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event
 */
export interface RESTPatchAPIGuildScheduledEventJSONBody extends Partial<RESTPostAPIGuildScheduledEventJSONBody> {
	/**
	 * The status of the scheduled event
	 */
	status?: GuildScheduledEventStatus;
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event
 */
export type RESTPatchAPIGuildScheduledEventResult = APIGuildScheduledEvent;

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event
 */
export type RESTDeleteAPIGuildScheduledEventResult = never;

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users
 */
export interface RESTGetAPIGuildScheduledEventUsersQuery {
	/**
	 * Number of users to receive from the event
	 *
	 * @default 100
	 */
	limit?: number;
	/**
	 * Whether to include guild member data. attaches `guild_member` property to the user object
	 */
	with_member?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users
 */
export interface RESTGetAPIGuildScheduledEventUsersResult {
	/**
	 * Array of user objects with an optional `guild_member` property for each user
	 */
	users: APIGuildScheduledEventUser[];
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users
 */
export interface APIGuildScheduledEventUser extends APIUser {
	guild_member?: APIGuildMember;
}

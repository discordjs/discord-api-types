import type { Snowflake } from '../../globals';
import type { _Nullable, _StrictPartial } from '../../utils/internals';
import type {
	APIGuildScheduledEvent,
	APIGuildScheduledEventException,
	APIGuildScheduledEventEntityMetadata,
	APIGuildScheduledEventRecurrenceRule,
	APIGuildScheduledEventUser,
	GuildScheduledEventEntityType,
	GuildScheduledEventPrivacyLevel,
	GuildScheduledEventStatus,
} from '../../v9';

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild}
 */
export interface RESTGetAPIGuildScheduledEventsQuery {
	/**
	 * Whether to include number of users subscribed to each event
	 */
	with_user_count?: boolean;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild}
 */
export type RESTGetAPIGuildScheduledEventsResult = APIGuildScheduledEvent[];

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event}
 */
export interface RESTPostAPIGuildScheduledEventJSONBody {
	/**
	 * The stage channel id of the guild event
	 */
	channel_id?: Snowflake | undefined;
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
	scheduled_end_time?: string | undefined;
	/**
	 * The description of the guild event
	 */
	description?: string | undefined;
	/**
	 * The scheduled entity type of the guild event
	 */
	entity_type: GuildScheduledEventEntityType;
	/**
	 * The entity metadata of the scheduled event
	 */
	entity_metadata?: APIGuildScheduledEventEntityMetadata | undefined;
	/**
	 * The cover image of the scheduled event
	 */
	image?: string | null | undefined;
	/**
	 * The definition for how often this event should recur
	 */
	recurrence_rule?: APIGuildScheduledEventRecurrenceRule | undefined;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event}
 */
export type RESTPostAPIGuildScheduledEventResult = APIGuildScheduledEvent;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event}
 */
export interface RESTGetAPIGuildScheduledEventQuery {
	/**
	 * Whether to include number of users subscribed to this event
	 */
	with_user_count?: boolean;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event}
 */
export type RESTGetAPIGuildScheduledEventResult = APIGuildScheduledEvent;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event}
 */
export interface RESTPatchAPIGuildScheduledEventJSONBody
	extends
		_Nullable<Pick<RESTPostAPIGuildScheduledEventJSONBody, 'description' | 'entity_metadata' | 'recurrence_rule'>>,
		_StrictPartial<
			Omit<
				RESTPostAPIGuildScheduledEventJSONBody,
				'channel_id' | 'description' | 'entity_metadata' | 'recurrence_rule'
			>
		> {
	channel_id?: Snowflake | null | undefined;
	/**
	 * The status of the scheduled event
	 */
	status?: GuildScheduledEventStatus | undefined;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event}
 */
export type RESTPatchAPIGuildScheduledEventResult = APIGuildScheduledEvent;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event}
 */
export type RESTDeleteAPIGuildScheduledEventResult = never;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users}
 */
export interface RESTGetAPIGuildScheduledEventUsersQuery {
	/**
	 * Number of users to receive from the event
	 *
	 * @defaultValue `100`
	 */
	limit?: number;
	/**
	 * Whether to include guild member data if it exists
	 */
	with_member?: boolean;
	/**
	 * Consider only users before given user id
	 */
	before?: Snowflake;
	/**
	 * Consider only users after given user id
	 */
	after?: Snowflake;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users}
 */
export type RESTGetAPIGuildScheduledEventUsersResult = APIGuildScheduledEventUser[];

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#create-guild-scheduled-event-exception}
 */
export interface RESTPostAPIGuildScheduledEventExceptionJSONBody {
	/**
	 * The original time at when the scheduled event would've started
	 */
	original_scheduled_start_time: string;
	/**
	 * The new scheduled start time for the scheduled event's recurrence
	 */
	scheduled_start_time?: string | null | undefined;
	/**
	 * The new scheduled end time for the scheduled event's recurrence
	 */
	scheduled_end_time?: string | null | undefined;
	/**
	 * Whether the scheduled event should be skipped on this recurrence
	 */
	is_canceled?: boolean | undefined;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#create-guild-scheduled-event-exception}
 */
export type RESTPostAPIGuildScheduledEventExceptionResult = APIGuildScheduledEventException;

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#modify-guild-scheduled-event-exception}
 */
export type RESTPatchAPIGuildScheduledEventExceptionJSONBody = Omit<
	RESTPostAPIGuildScheduledEventExceptionJSONBody,
	'original_scheduled_start_time'
>;

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#modify-guild-scheduled-event-exception}
 */
export type RESTPatchAPIGuildScheduledEventExceptionResult = APIGuildScheduledEventException;

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#delete-guild-scheduled-event-exception}
 */
export type RESTDeleteAPIGuildScheduledEventExceptionResult = undefined;

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#get-guild-scheduled-event-exception-users}
 */
export interface RESTGetAPIGuildScheduledEventExceptionUsersQuery {
	/**
	 * Number of users to return (up to maximum 100)
	 *
	 * @defaultValue 100
	 */
	limit?: number;
	/**
	 * Include guild member data if it exists
	 *
	 * @defaultValue false
	 */
	with_member?: boolean;
	/**
	 * Consider only users before given user id
	 *
	 * @defaultValue null
	 * @remarks Provide a user id to `before` and `after` for pagination. Users will always be returned in ascending order by `user_id`.
	 * If both `before` and `after` are provided, only `before` is respected. Fetching users in-between `before` and `after` is not supported.
	 */
	before?: Snowflake;
	/**
	 * Consider only users after given user id
	 *
	 * @defaultValue null
	 * @remarks Provide a user id to `before` and `after` for pagination. Users will always be returned in ascending order by `user_id`.
	 * If both `before` and `after` are provided, only `before` is respected. Fetching users in-between `before` and `after` is not supported.
	 */
	after?: Snowflake;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#get-guild-scheduled-event-exception-users}
 */
export type RESTGetAPIGuildScheduledEventExceptionUsersResult = APIGuildScheduledEventUser[];

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#get-guild-scheduled-event-user-counts}
 */
export interface RESTGetAPIGuildScheduledEventUserCountQuery {
	/**
	 * The ids of the guild scheduled event exceptions to return user counts for (maximum of 10)
	 */
	guild_scheduled_event_exception_ids?: Snowflake[];
}

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#get-guild-scheduled-event-user-counts}
 */
export interface RESTGetAPIGuildScheduledEventUserCountResult {
	/**
	 * The amount of users that are subscribed to the guild scheduled event
	 */
	guild_scheduled_event_count: number;
	/**
	 * An object mapping guild scheduled event exception ids to the number of users that are subscribed to the exception
	 */
	guild_scheduled_event_exception_counts: Record<Snowflake, number>;
}

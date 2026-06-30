import type { Snowflake } from '../../globals.ts';
import type { APIGuildMember } from './guild.ts';
import type { APIUser } from './user.ts';

export interface APIGuildScheduledEventBase<Type extends GuildScheduledEventEntityType> {
	/**
	 * The id of the scheduled event
	 */
	id: Snowflake;
	/**
	 * The guild id which the scheduled event belongs to
	 */
	guild_id: Snowflake;
	/**
	 * The channel id in which the scheduled event will be hosted, or `null` if entity type is `EXTERNAL`
	 *
	 * @remarks See {@link https://docs.discord.com/developers/resources/guild-scheduled-event#guild-scheduled-event-object-field-requirements-by-entity-type | field requirements by entity type} to understand the relationship between `entity_type` and the following fields: `channel_id`, `entity_metadata`, and `scheduled_end_time`
	 */
	channel_id: Snowflake | null;
	/**
	 * The id of the user that created the scheduled event
	 *
	 * @remarks `creator_id` will be null and `creator` will not be included for events created before October 25th, 2021, when the concept of `creator_id` was introduced and tracked.
	 */
	creator_id?: Snowflake | null;
	/**
	 * The name of the scheduled event (1-100 characters)
	 */
	name: string;
	/**
	 * The description of the scheduled event (1-1000 characters)
	 */
	description?: string | null;
	/**
	 * The time the scheduled event will start
	 */
	scheduled_start_time: string;
	/**
	 * The time at which the guild event will end, required if entity_type is `EXTERNAL`
	 *
	 * @remarks See {@link https://docs.discord.com/developers/resources/guild-scheduled-event#guild-scheduled-event-object-field-requirements-by-entity-type | field requirements by entity type} to understand the relationship between `entity_type` and the following fields: `channel_id`, `entity_metadata`, and `scheduled_end_time`
	 */
	scheduled_end_time: string | null;
	/**
	 * The privacy level of the scheduled event
	 */
	privacy_level: GuildScheduledEventPrivacyLevel;
	/**
	 * The status of the scheduled event
	 */
	status: GuildScheduledEventStatus;
	/**
	 * The type of the scheduled event
	 */
	entity_type: Type;
	/**
	 * The id of an entity associated with a guild scheduled event
	 */
	entity_id: Snowflake | null;
	/**
	 * Additional metadata for the guild scheduled event
	 */
	entity_metadata: APIGuildScheduledEventEntityMetadata | null;
	/**
	 * The user that created the scheduled event
	 *
	 * @remarks See {@link https://docs.discord.com/developers/resources/guild-scheduled-event#guild-scheduled-event-object-field-requirements-by-entity-type | field requirements by entity type} to understand the relationship between `entity_type` and the following fields: `channel_id`, `entity_metadata`, and `scheduled_end_time`
	 */
	creator?: APIUser;
	/**
	 * The number of users subscribed to the scheduled event
	 */
	user_count?: number;
	/**
	 * The cover image hash of the scheduled event
	 */
	image?: string | null;
	/**
	 * The definition for how often this event should recur
	 */
	recurrence_rule: APIGuildScheduledEventRecurrenceRule | null;
	/**
	 * The exceptions to the recurrence rule of the guild scheduled event
	 */
	guild_scheduled_event_exceptions: APIGuildScheduledEventException[];
}

/**
 * @see {@link https://docs.discord.com/developers/resources/guild-scheduled-event#guild-scheduled-event-exception-object-guild-scheduled-event-exception-structure}
 */
export interface APIGuildScheduledEventException {
	/**
	 * The id of the scheduled event the exception belongs to
	 */
	event_id: Snowflake;
	/**
	 * A snowflake containing the original scheduled start time of the scheduled event recurrence
	 *
	 * @remarks The snowflake in this field is not guaranteed to be globally unique.
	 */
	event_exception_id: Snowflake;
	/**
	 * The new time at when the scheduled event recurrence will start, if applicable
	 */
	scheduled_start_time: number | null;
	/**
	 * The new time at when the scheduled event recurrence will end, if applicable
	 */
	scheduled_end_time: number | null;
	/**
	 * Whether or not the scheduled event will be skipped on the recurrence
	 */
	is_canceled: boolean;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-structure}
 */
export interface APIGuildScheduledEventRecurrenceRule {
	/**
	 * Starting time of the recurrence interval
	 */
	start: string;
	/**
	 * Ending time of the recurrence interval
	 */
	end: string | null;
	/**
	 * How often the event occurs
	 */
	frequency: GuildScheduledEventRecurrenceRuleFrequency;
	/**
	 * The spacing between the events, defined by `frequency`.
	 * For example, `frequency` of {@link GuildScheduledEventRecurrenceRuleFrequency.Weekly} and an `interval` of `2`
	 * would be "every-other week"
	 */
	interval: number;
	/**
	 * Set of specific days within a week for the event to recur on
	 */
	by_weekday: GuildScheduledEventRecurrenceRuleWeekday[] | null;
	/**
	 * List of specific days within a specific week (1-5) to recur on
	 */
	by_n_weekday: APIGuildScheduledEventRecurrenceRuleNWeekday[] | null;
	/**
	 * Set of specific months to recur on
	 */
	by_month: GuildScheduledEventRecurrenceRuleMonth[] | null;
	/**
	 * Set of specific dates within a month to recur on
	 */
	by_month_day: number[] | null;
	/**
	 * Set of days within a year to recur on (1-364)
	 */
	by_year_day: number[] | null;
	/**
	 * The total amount of times that the event is allowed to recur before stopping
	 */
	count: number | null;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-frequency}
 */
export enum GuildScheduledEventRecurrenceRuleFrequency {
	Yearly,
	Monthly,
	Weekly,
	Daily,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-weekday}
 */
export enum GuildScheduledEventRecurrenceRuleWeekday {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-month}
 */
export enum GuildScheduledEventRecurrenceRuleMonth {
	January = 1,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-nweekday-structure}
 */
export interface APIGuildScheduledEventRecurrenceRuleNWeekday {
	/**
	 * The week to reoccur on.
	 */
	n: 1 | 2 | 3 | 4 | 5;
	/**
	 * The day within the week to reoccur on
	 */
	day: GuildScheduledEventRecurrenceRuleWeekday;
}

/**
 * @deprecated Use {@link APIGuildScheduledEventRecurrenceRuleNWeekday} instead
 */
export type GuildScheduledEventRecurrenceRuleNWeekday = APIGuildScheduledEventRecurrenceRuleNWeekday;

export interface APIStageInstanceGuildScheduledEvent extends APIGuildScheduledEventBase<GuildScheduledEventEntityType.StageInstance> {
	channel_id: Snowflake;
	entity_metadata: null;
}

export interface APIVoiceGuildScheduledEvent extends APIGuildScheduledEventBase<GuildScheduledEventEntityType.Voice> {
	channel_id: Snowflake;
	entity_metadata: null;
}

export interface APIExternalGuildScheduledEvent extends APIGuildScheduledEventBase<GuildScheduledEventEntityType.External> {
	channel_id: null;
	entity_metadata: Required<APIGuildScheduledEventEntityMetadata>;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure}
 */
export type APIGuildScheduledEvent =
	| APIExternalGuildScheduledEvent
	| APIStageInstanceGuildScheduledEvent
	| APIVoiceGuildScheduledEvent;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata}
 */
export interface APIGuildScheduledEventEntityMetadata {
	/**
	 * The location of the scheduled event
	 */
	location?: string;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types}
 */
export enum GuildScheduledEventEntityType {
	StageInstance = 1,
	Voice,
	External,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status}
 */
export enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active,
	Completed,
	Canceled,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level}
 */
export enum GuildScheduledEventPrivacyLevel {
	/**
	 * The scheduled event is only accessible to guild members
	 */
	GuildOnly = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object-guild-scheduled-event-user-structure}
 */
export interface APIGuildScheduledEventUser {
	/**
	 * The scheduled event id which the user subscribed to
	 */
	guild_scheduled_event_id: Snowflake;
	/**
	 * The user which subscribed to the event
	 */
	user: APIUser;
	/**
	 * The guild member data for this user for the guild which this event belongs to, if any
	 */
	member?: APIGuildMember;
	/**
	 * The id of the specific scheduled event exception that the user is subscribed to, if any
	 */
	guild_scheduled_event_exception_id?: Snowflake;
}

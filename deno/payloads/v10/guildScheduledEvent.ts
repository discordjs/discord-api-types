import type { Snowflake } from '../../globals.ts';
import type { APIGuildMember } from './guild.ts';
import type { APIUser } from './user.ts';

export interface APIGuildScheduledEventBase<Type extends GuildScheduledEventEntityType> {
	/**
	 * The id of the guild event
	 */
	id: Snowflake;
	/**
	 * The guild id which the scheduled event belongs to
	 */
	guild_id: Snowflake;
	/**
	 * The channel id in which the scheduled event will be hosted, or `null` if entity type is `EXTERNAL`
	 */
	channel_id: Snowflake | null;
	/**
	 * The id of the user that created the scheduled event
	 */
	creator_id?: Snowflake | null;
	/**
	 * The name of the scheduled event
	 */
	name: string;
	/**
	 * The description of the scheduled event
	 */
	description?: string | null;
	/**
	 * The time the scheduled event will start
	 */
	scheduled_start_time: string;
	/**
	 * The time at which the guild event will end, or `null` if the event does not have a scheduled time to end
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
	 * The type of hosting entity associated with the scheduled event
	 */
	entity_type: Type;
	/**
	 * The id of the hosting entity associated with the scheduled event
	 */
	entity_id: Snowflake | null;
	/**
	 * The entity metadata for the scheduled event
	 */
	entity_metadata: APIGuildScheduledEventEntityMetadata | null;
	/**
	 * The user that created the scheduled event
	 */
	creator?: APIUser;
	/**
	 * The number of users subscribed to the scheduled event
	 */
	user_count?: number;
	/**
	 * The cover image of the scheduled event
	 */
	image?: string | null;
	/**
	 * The definition for how often this event should recur
	 */
	recurrence_rule: APIGuildScheduledEventRecurrenceRule | null;
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

export interface APIStageInstanceGuildScheduledEvent
	extends APIGuildScheduledEventBase<GuildScheduledEventEntityType.StageInstance> {
	channel_id: Snowflake;
	entity_metadata: null;
}

export interface APIVoiceGuildScheduledEvent extends APIGuildScheduledEventBase<GuildScheduledEventEntityType.Voice> {
	channel_id: Snowflake;
	entity_metadata: null;
}

export interface APIExternalGuildScheduledEvent
	extends APIGuildScheduledEventBase<GuildScheduledEventEntityType.External> {
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
}

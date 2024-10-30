/**
 * Types extracted from https://discord.com/developers/docs/resources/webhook
 */

import type { Snowflake } from '../../globals.ts';
import type {
	APIEntitlement,
	APIGuild,
	APIPartialChannel,
	APIPartialGuild,
	APIUser,
	ApplicationIntegrationType,
	OAuth2Scopes,
} from './mod.ts';

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object
 */
export interface APIWebhook {
	/**
	 * The id of the webhook
	 */
	id: Snowflake;
	/**
	 * The type of the webhook
	 *
	 * See https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
	 */
	type: WebhookType;
	/**
	 * The guild id this webhook is for
	 */
	guild_id?: Snowflake;
	/**
	 * The channel id this webhook is for
	 */
	channel_id: Snowflake;
	/**
	 * The user this webhook was created by (not returned when getting a webhook with its token)
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	user?: APIUser;
	/**
	 * The default name of the webhook
	 */
	name: string | null;
	/**
	 * The default avatar of the webhook
	 */
	avatar: string | null;
	/**
	 * The secure token of the webhook (returned for Incoming Webhooks)
	 */
	token?: string;
	/**
	 * The bot/OAuth2 application that created this webhook
	 */
	application_id: Snowflake | null;
	/**
	 * The guild of the channel that this webhook is following (returned for Channel Follower Webhooks)
	 */
	source_guild?: APIPartialGuild;
	/**
	 * The channel that this webhook is following (returned for Channel Follower Webhooks)
	 */
	source_channel?: APIPartialChannel;
	/**
	 * The url used for executing the webhook (returned by the webhooks OAuth2 flow)
	 */
	url?: string;
}

/**
 * https://discord.com/developers/docs/events/webhook-events#payload-structure
 */
export interface APIEventWebhookEvent<EventType extends WebhookEventType, Data> {
	/**
	 * Version scheme for the webhook event. Currently always 1
	 */
	version: 1;
	/**
	 * ID of your app
	 */
	application_id: string;
	/**
	 * Type of webhook, either 0 for PING or 1 for webhook events
	 */
	type: EventWebhookType;
	/**
	 * Event data payload
	 */
	event?: APIEventWebhookEventBody<EventType, Data>;
}

/**
 * https://discord.com/developers/docs/events/webhook-events#event-body-object
 */
export interface APIEventWebhookEventBody<EventType extends WebhookEventType, Data> {
	/**
	 * Event type
	 */
	type: EventType;
	/**
	 * Timestamp of when the event occurred in ISO8601 format
	 */
	timestamp: string;
	/**
	 * Data for the event. The shape depends on the event type
	 */
	data?: Data;
}

/**
 * https://discord.com/developers/docs/events/webhook-events#application-authorized-application-authorized-structure
 */
export interface APIEventWebhookApplicationAuthorizedData {
	/**
	 * Installation context for the authorization.
	 */
	integration_type?: ApplicationIntegrationType;
	/**
	 * User who authorized the app
	 */
	user: APIUser;
	/**
	 * List of scopes the user authorized
	 */
	scopes: OAuth2Scopes[];
	/**
	 * Server which app was authorized for (when integration type is 0)
	 */
	guild?: APIGuild;
}

/**
 * https://discord.com/developers/docs/events/webhook-events#application-authorized
 */
export type APIEventWebhookApplicationAuthorized = APIEventWebhookEvent<
	WebhookEventType.ApplicationAuthorized,
	APIEventWebhookApplicationAuthorizedData
>;

/**
 * https://discord.com/developers/docs/events/webhook-events#entitlement-create-entitlement-create-structure
 */
export type APIEventWebhookEntitlementCreatedData = APIEntitlement;

/**
 * https://discord.com/developers/docs/events/webhook-events#entitlement-create
 */
export type APIEventWebhookEntitlementCreated = APIEventWebhookEvent<
	WebhookEventType.EntitlementCreate,
	APIEventWebhookEntitlementCreatedData
>;

/**
 * https://discord.com/developers/docs/events/webhook-events#quest-user-enrollment
 */
export type APIEventWebhookQuestUserEnrollmentData = never;

/**
 * https://discord.com/developers/docs/events/webhook-events#quest-user-enrollment
 */
export type APIEventWebhookQuestUserEnrollment = APIEventWebhookEvent<
	WebhookEventType.QuestUserEnrollment,
	APIEventWebhookQuestUserEnrollmentData
>;

/**
 * https://discord.com/developers/docs/events/webhook-events#webhook-types
 */
export enum EventWebhookType {
	/**
	 * PING event sent to verify your Webhook Event URL is active
	 */
	Ping,
	/**
	 * Webhook event (details for event in event body object)
	 */
	Event,
}

/**
 * https://discord.com/developers/docs/events/webhook-events#event-types
 */
export enum WebhookEventType {
	/**
	 * Sent when an app was authorized by a user to a server or their account
	 */
	ApplicationAuthorized = 'APPLICATION_AUTHORIZED',
	/**
	 * Entitlement was created
	 */
	EntitlementCreate = 'ENTITLEMENT_CREATE',
	/**
	 * User was added to a Quest (currently unavailable)
	 */
	QuestUserEnrollment = 'QUEST_USER_ENROLLMENT',
}

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
 */
export enum WebhookType {
	/**
	 * Incoming Webhooks can post messages to channels with a generated token
	 */
	Incoming = 1,
	/**
	 * Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels
	 */
	ChannelFollower,
	/**
	 * Application webhooks are webhooks used with Interactions
	 */
	Application,
}

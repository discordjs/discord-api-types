/**
 * Types extracted from https://discord.com/developers/docs/resources/webhook
 */

import type { Snowflake } from '../../globals';
import type {
	APIEntitlement,
	APIGuild,
	APIUser,
	APIWebhookSourceGuild,
	ApplicationIntegrationType,
	OAuth2Scopes,
	APIWebhookSourceChannel,
	MessageFlags,
	MessageType,
	APIChannel,
	APIMessage,
} from './index';

/**
 * @see {@link https://discord.com/developers/docs/events/webhook-events#lobby-message-object}
 */
export interface APILobbyMessage {
	/**
	 * ID of the message
	 */
	id: Snowflake;
	/**
	 * Type of message
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#message-object-message-types}
	 */
	type: MessageType;
	/**
	 * Contents of the message
	 */
	content: string;
	/**
	 * ID of the lobby where the message was sent
	 */
	lobby_id: Snowflake;
	/**
	 * ID of the channel the message was sent in
	 */
	channel_id: Snowflake;
	/**
	 * 	Author of the message
	 */
	author: APIUser;
	/**
	 * Additional metadata for the message (key-value pairs)
	 */
	metadata?: Record<string, string>;
	/**
	 * Message flags combined as a bitfield
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#message-object-message-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags: MessageFlags;
	/**
	 * ID of the application (only present during active Social SDK sessions)
	 */
	application_id?: Snowflake;
}

/**
 * @see {@link https://discord.com/developers/docs/events/webhook-events#passthrough-message-object}
 */
export interface APIPassthroughMessage {
	/**
	 * ID of the message
	 */
	id: Snowflake;
	/**
	 * Type of message
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#message-object-message-types}
	 */
	type: MessageType;
	/**
	 * Contents of the message
	 */
	content: string;
	/**
	 * ID of the channel the message was sent in
	 */
	channel_id: Snowflake;
	/**
	 * ID of the message recipient
	 */
	recipient_id: Snowflake;
	/**
	 * 	Author of the message
	 */
	author: APIUser;
	/**
	 * Message flags combined as a bitfield
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#message-object-message-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags: MessageFlags;
	/**
	 * ID of the application that created the message
	 */
	application_id: Snowflake;
	/**
	 * Channel object with recipient information
	 */
	channel: APIChannel;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object}
 */
export interface APIWebhook {
	/**
	 * The id of the webhook
	 */
	id: Snowflake;
	/**
	 * The type of the webhook
	 *
	 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types}
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
	 * @see {@link https://discord.com/developers/docs/resources/user#user-object}
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
	source_guild?: APIWebhookSourceGuild;
	/**
	 * The channel that this webhook is following (returned for Channel Follower Webhooks)
	 */
	source_channel?: APIWebhookSourceChannel;
	/**
	 * The url used for executing the webhook (returned by the webhooks OAuth2 flow)
	 */
	url?: string;
}

/**
 * @see {@link https://discord.com/developers/docs/events/webhook-events#webhook-event-payloads}
 */
export type APIWebhookEvent =
	| APIWebhookEventBase<ApplicationWebhookType.Event, APIWebhookEventBody>
	| APIWebhookEventBase<ApplicationWebhookType.Ping, never>;

/**
 * @see {@link https://discord.com/developers/docs/events/webhook-events#event-body-object}
 */
export type APIWebhookEventBody =
	| APIWebhookEventEventBase<
			ApplicationWebhookEventType.ApplicationAuthorized,
			APIWebhookEventApplicationAuthorizedData
	  >
	| APIWebhookEventEventBase<
			ApplicationWebhookEventType.ApplicationDeauthorized,
			APIWebhookEventApplicationDeauthorizedData
	  >
	| APIWebhookEventEventBase<
			ApplicationWebhookEventType.GameDirectMessageCreate,
			APIWebhookEventGameDirectMessageCreateData
	  >
	| APIWebhookEventEventBase<
			ApplicationWebhookEventType.GameDirectMessageDelete,
			APIWebhookEventGameDirectMessageDeleteData
	  >
	| APIWebhookEventEventBase<
			ApplicationWebhookEventType.GameDirectMessageUpdate,
			APIWebhookEventGameDirectMessageUpdateData
	  >
	| APIWebhookEventEventBase<ApplicationWebhookEventType.EntitlementCreate, APIWebhookEventEntitlementCreateData>
	| APIWebhookEventEventBase<ApplicationWebhookEventType.EntitlementDelete, APIWebhookEventEntitlementDeleteData>
	| APIWebhookEventEventBase<ApplicationWebhookEventType.EntitlementUpdate, APIWebhookEventEntitlementUpdateData>
	| APIWebhookEventEventBase<ApplicationWebhookEventType.LobbyMessageCreate, APIWebhookEventLobbyMessageCreateData>
	| APIWebhookEventEventBase<ApplicationWebhookEventType.LobbyMessageDelete, APIWebhookEventLobbyMessageDeleteData>
	| APIWebhookEventEventBase<ApplicationWebhookEventType.LobbyMessageUpdate, APIWebhookEventLobbyMessageUpdateData>
	| APIWebhookEventEventBase<ApplicationWebhookEventType.QuestUserEnrollment, APIWebhookEventQuestUserEnrollmentData>;

export interface APIWebhookEventApplicationAuthorizedData {
	/**
	 * Installation context for the authorization. Either guild (`0`) if installed to a server or user (`1`) if installed to a user's account
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
	 * Server which app was authorized for (when integration type is `0`)
	 */
	guild?: APIGuild;
}

export interface APIWebhookEventApplicationDeauthorizedData {
	/**
	 * User who deauthorized the app
	 */
	user: APIUser;
}

export type APIWebhookEventEntitlementCreateData = APIEntitlement;

/**
 * @unstable
 */
export type APIWebhookEventEntitlementDeleteData = APIEntitlement;

/**
 * @unstable
 */
export type APIWebhookEventEntitlementUpdateData = APIEntitlement;

export type APIWebhookEventGameDirectMessageCreateData =
	| APIPassthroughMessage
	| (APIMessage & {
			/**
			 * ID of the lobby where the message was created (only present in Linked Channel messages)
			 */
			lobby_id?: Snowflake;
			/**
			 * Channel object with recipient information
			 */
			channel: APIChannel;
	  });

export type APIWebhookEventGameDirectMessageDeleteData =
	| APIPassthroughMessage
	| (APIMessage & {
			/**
			 * ID of the lobby where the message was created (only present in Linked Channel messages)
			 */
			lobby_id?: Snowflake;
			/**
			 * Channel object with recipient information
			 */
			channel: APIChannel;
	  });

export type APIWebhookEventGameDirectMessageUpdateData =
	| APIPassthroughMessage
	| (APIMessage & {
			/**
			 * ID of the lobby where the message was created (only present in Linked Channel messages)
			 */
			lobby_id?: Snowflake;
			/**
			 * Channel object with recipient information
			 */
			channel: APIChannel;
	  });

export type APIWebhookEventLobbyMessageCreateData = APILobbyMessage;

export interface APIWebhookEventLobbyMessageDeleteData {
	/**
	 * ID of the message
	 */
	id: Snowflake;
	/**
	 * ID of the lobby where the message was sent
	 */
	lobby_id: Snowflake;
}

export type APIWebhookEventLobbyMessageUpdateData = APILobbyMessage;

export type APIWebhookEventQuestUserEnrollmentData = never;

export interface APIWebhookEventBase<Type extends ApplicationWebhookType, Event> {
	/**
	 * Version scheme for the webhook event. Currently always `1`
	 */
	version: 1;
	/**
	 * ID of your app
	 */
	application_id: Snowflake;
	/**
	 * Type of webhook
	 */
	type: Type;
	/**
	 * Event data payload
	 */
	event: Event;
}

/**
 * @see {@link https://discord.com/developers/docs/events/webhook-events#webhook-types}
 */
export enum ApplicationWebhookType {
	/**
	 * PING event sent to verify your Webhook Event URL is active
	 */
	Ping,
	/**
	 * Webhook event (details for event in event body object)
	 */
	Event,
}

export interface APIWebhookEventEventBase<Type extends ApplicationWebhookEventType, Data> {
	/**
	 * Event type
	 */
	type: Type;
	/**
	 * Timestamp of when the event occurred in ISO8601 format
	 */
	timestamp: string;
	/**
	 * Data for the event. The shape depends on the event type
	 */
	data: Data;
}

/**
 * @see {@link https://discord.com/developers/docs/events/webhook-events#event-types}
 */
export enum ApplicationWebhookEventType {
	/**
	 * Sent when an app was authorized by a user to a server or their account
	 */
	ApplicationAuthorized = 'APPLICATION_AUTHORIZED',
	/**
	 * Sent when an app was deauthorized by a user
	 */
	ApplicationDeauthorized = 'APPLICATION_DEAUTHORIZED',
	/**
	 * Entitlement was created
	 */
	EntitlementCreate = 'ENTITLEMENT_CREATE',
	/**
	 * Entitlement was updated
	 *
	 * @unstable This event is not yet documented but can be enabled from the developer portal
	 */
	EntitlementUpdate = 'ENTITLEMENT_UPDATE',
	/**
	 * Entitlement was deleted
	 *
	 * @unstable This event is not yet documented but can be enabled from the developer portal
	 */
	EntitlementDelete = 'ENTITLEMENT_DELETE',
	/**
	 * User was added to a Quest (currently unavailable)
	 */
	QuestUserEnrollment = 'QUEST_USER_ENROLLMENT',
	/**
	 * Sent when a message is created in a lobby
	 */
	LobbyMessageCreate = 'LOBBY_MESSAGE_CREATE',
	/**
	 * Sent when a message is updated in a lobby
	 */
	LobbyMessageUpdate = 'LOBBY_MESSAGE_UPDATE',
	/**
	 * Sent when a message is deleted from a lobby
	 */
	LobbyMessageDelete = 'LOBBY_MESSAGE_DELETE',
	/**
	 * Sent when a direct message is created during an active Social SDK session
	 */
	GameDirectMessageCreate = 'GAME_DIRECT_MESSAGE_CREATE',
	/**
	 * Sent when a direct message is updated during an active Social SDK session
	 */
	GameDirectMessageUpdate = 'GAME_DIRECT_MESSAGE_UPDATE',
	/**
	 * Sent when a direct message is deleted during an active Social SDK session
	 */
	GameDirectMessageDelete = 'GAME_DIRECT_MESSAGE_DELETE',
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types}
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

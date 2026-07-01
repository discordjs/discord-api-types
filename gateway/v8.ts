/**
 * Types extracted from https://docs.discord.com/developers/topics/gateway
 */

import type { Snowflake } from '../globals';
import type {
	APIApplication,
	APIChannel,
	APIEmoji,
	APIGuild,
	APIGuildIntegration,
	APIGuildMember,
	APIGuildScheduledEvent,
	APIInteraction,
	APIMessage,
	APIRole,
	APIStageInstance,
	APISticker,
	APIUnavailableGuild,
	APIUser,
	GatewayActivity,
	GatewayPresenceUpdate as RawGatewayPresenceUpdate,
	GatewayVoiceState,
	InviteTargetType,
	PresenceUpdateStatus,
} from '../payloads/v8/index';
import type { _Nullable } from '../utils/internals';

export type * from './common';

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export const GatewayVersion = '8';

/**
 * https://docs.discord.com/developers/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export enum GatewayOpcodes {
	/**
	 * An event was dispatched
	 */
	Dispatch,
	/**
	 * A bidirectional opcode to maintain an active gateway connection.
	 * Fired periodically by the client, or fired by the gateway to request an immediate heartbeat from the client.
	 */
	Heartbeat,
	/**
	 * Starts a new session during the initial handshake
	 */
	Identify,
	/**
	 * Update the client's presence
	 */
	PresenceUpdate,
	/**
	 * Used to join/leave or move between voice channels
	 */
	VoiceStateUpdate,
	/**
	 * Resume a previous session that was disconnected
	 */
	Resume = 6,
	/**
	 * You should attempt to reconnect and resume immediately
	 */
	Reconnect,
	/**
	 * Request information about offline guild members in a large guild
	 */
	RequestGuildMembers,
	/**
	 * The session has been invalidated. You should reconnect and identify/resume accordingly
	 */
	InvalidSession,
	/**
	 * Sent immediately after connecting, contains the `heartbeat_interval` to use
	 */
	Hello,
	/**
	 * Sent in response to receiving a heartbeat to acknowledge that it has been received
	 */
	HeartbeatAck,
}

/**
 * https://docs.discord.com/developers/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export enum GatewayCloseCodes {
	/**
	 * We're not sure what went wrong. Try reconnecting?
	 */
	UnknownError = 4_000,
	/**
	 * You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!
	 *
	 * See https://docs.discord.com/developers/topics/gateway#payloads-and-opcodes
	 */
	UnknownOpcode,
	/**
	 * You sent an invalid payload to us. Don't do that!
	 *
	 * See https://docs.discord.com/developers/topics/gateway#sending-payloads
	 */
	DecodeError,
	/**
	 * You sent us a payload prior to identifying
	 *
	 * See https://docs.discord.com/developers/topics/gateway#identify
	 */
	NotAuthenticated,
	/**
	 * The account token sent with your identify payload is incorrect
	 *
	 * See https://docs.discord.com/developers/topics/gateway#identify
	 */
	AuthenticationFailed,
	/**
	 * You sent more than one identify payload. Don't do that!
	 */
	AlreadyAuthenticated,
	/**
	 * The sequence sent when resuming the session was invalid. Reconnect and start a new session
	 *
	 * See https://docs.discord.com/developers/topics/gateway#resume
	 */
	InvalidSeq = 4_007,
	/**
	 * Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this
	 */
	RateLimited,
	/**
	 * Your session timed out. Reconnect and start a new one
	 */
	SessionTimedOut,
	/**
	 * You sent us an invalid shard when identifying
	 *
	 * See https://docs.discord.com/developers/topics/gateway#sharding
	 */
	InvalidShard,
	/**
	 * The session would have handled too many guilds - you are required to shard your connection in order to connect
	 *
	 * See https://docs.discord.com/developers/topics/gateway#sharding
	 */
	ShardingRequired,
	/**
	 * You sent an invalid version for the gateway
	 */
	InvalidAPIVersion,
	/**
	 * You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value
	 *
	 * See https://docs.discord.com/developers/topics/gateway#gateway-intents
	 */
	InvalidIntents,
	/**
	 * You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not
	 * enabled or are not whitelisted for
	 *
	 * See https://docs.discord.com/developers/topics/gateway#gateway-intents
	 *
	 * See https://docs.discord.com/developers/topics/gateway#privileged-intents
	 */
	DisallowedIntents,
}

/**
 * https://docs.discord.com/developers/topics/gateway#list-of-intents
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export enum GatewayIntentBits {
	Guilds = 1 << 0,
	GuildMembers = 1 << 1,
	GuildBans = 1 << 2,
	GuildEmojisAndStickers = 1 << 3,
	GuildIntegrations = 1 << 4,
	GuildWebhooks = 1 << 5,
	GuildInvites = 1 << 6,
	GuildVoiceStates = 1 << 7,
	GuildPresences = 1 << 8,
	GuildMessages = 1 << 9,
	GuildMessageReactions = 1 << 10,
	GuildMessageTyping = 1 << 11,
	DirectMessages = 1 << 12,
	DirectMessageReactions = 1 << 13,
	DirectMessageTyping = 1 << 14,
	GuildScheduledEvents = 1 << 16,
}

/**
 * https://docs.discord.com/developers/topics/gateway#commands-and-events-gateway-events
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export enum GatewayDispatchEvents {
	ChannelCreate = 'CHANNEL_CREATE',
	ChannelDelete = 'CHANNEL_DELETE',
	ChannelPinsUpdate = 'CHANNEL_PINS_UPDATE',
	ChannelUpdate = 'CHANNEL_UPDATE',
	GuildBanAdd = 'GUILD_BAN_ADD',
	GuildBanRemove = 'GUILD_BAN_REMOVE',
	GuildCreate = 'GUILD_CREATE',
	GuildDelete = 'GUILD_DELETE',
	GuildEmojisUpdate = 'GUILD_EMOJIS_UPDATE',
	GuildIntegrationsUpdate = 'GUILD_INTEGRATIONS_UPDATE',
	GuildMemberAdd = 'GUILD_MEMBER_ADD',
	GuildMemberRemove = 'GUILD_MEMBER_REMOVE',
	GuildMembersChunk = 'GUILD_MEMBERS_CHUNK',
	GuildMemberUpdate = 'GUILD_MEMBER_UPDATE',
	GuildRoleCreate = 'GUILD_ROLE_CREATE',
	GuildRoleDelete = 'GUILD_ROLE_DELETE',
	GuildRoleUpdate = 'GUILD_ROLE_UPDATE',
	GuildStickersUpdate = 'GUILD_STICKERS_UPDATE',
	GuildUpdate = 'GUILD_UPDATE',
	IntegrationCreate = 'INTEGRATION_CREATE',
	IntegrationDelete = 'INTEGRATION_DELETE',
	IntegrationUpdate = 'INTEGRATION_UPDATE',
	InteractionCreate = 'INTERACTION_CREATE',
	InviteCreate = 'INVITE_CREATE',
	InviteDelete = 'INVITE_DELETE',
	MessageCreate = 'MESSAGE_CREATE',
	MessageDelete = 'MESSAGE_DELETE',
	MessageDeleteBulk = 'MESSAGE_DELETE_BULK',
	MessageReactionAdd = 'MESSAGE_REACTION_ADD',
	MessageReactionRemove = 'MESSAGE_REACTION_REMOVE',
	MessageReactionRemoveAll = 'MESSAGE_REACTION_REMOVE_ALL',
	MessageReactionRemoveEmoji = 'MESSAGE_REACTION_REMOVE_EMOJI',
	MessageUpdate = 'MESSAGE_UPDATE',
	PresenceUpdate = 'PRESENCE_UPDATE',
	StageInstanceCreate = 'STAGE_INSTANCE_CREATE',
	StageInstanceDelete = 'STAGE_INSTANCE_DELETE',
	StageInstanceUpdate = 'STAGE_INSTANCE_UPDATE',
	Ready = 'READY',
	Resumed = 'RESUMED',
	TypingStart = 'TYPING_START',
	UserUpdate = 'USER_UPDATE',
	VoiceServerUpdate = 'VOICE_SERVER_UPDATE',
	VoiceStateUpdate = 'VOICE_STATE_UPDATE',
	WebhooksUpdate = 'WEBHOOKS_UPDATE',
	GuildScheduledEventCreate = 'GUILD_SCHEDULED_EVENT_CREATE',
	GuildScheduledEventUpdate = 'GUILD_SCHEDULED_EVENT_UPDATE',
	GuildScheduledEventDelete = 'GUILD_SCHEDULED_EVENT_DELETE',
	GuildScheduledEventUserAdd = 'GUILD_SCHEDULED_EVENT_USER_ADD',
	GuildScheduledEventUserRemove = 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewaySendPayload =
	| GatewayHeartbeat
	| GatewayIdentify
	| GatewayRequestGuildMembers
	| GatewayResume
	| GatewayUpdatePresence
	| GatewayVoiceStateUpdate;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayReceivePayload =
	| GatewayDispatchPayload
	| GatewayHeartbeatAck
	| GatewayHeartbeatRequest
	| GatewayHello
	| GatewayInvalidSession
	| GatewayReconnect;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayDispatchPayload =
	| GatewayChannelModifyDispatch
	| GatewayChannelPinsUpdateDispatch
	| GatewayGuildBanModifyDispatch
	| GatewayGuildDeleteDispatch
	| GatewayGuildEmojisUpdateDispatch
	| GatewayGuildIntegrationsUpdateDispatch
	| GatewayGuildMemberAddDispatch
	| GatewayGuildMemberRemoveDispatch
	| GatewayGuildMembersChunkDispatch
	| GatewayGuildMemberUpdateDispatch
	| GatewayGuildModifyDispatch
	| GatewayGuildRoleDeleteDispatch
	| GatewayGuildRoleModifyDispatch
	| GatewayGuildScheduledEventCreateDispatch
	| GatewayGuildScheduledEventDeleteDispatch
	| GatewayGuildScheduledEventUpdateDispatch
	| GatewayGuildScheduledEventUserAddDispatch
	| GatewayGuildScheduledEventUserRemoveDispatch
	| GatewayGuildStickersUpdateDispatch
	| GatewayIntegrationCreateDispatch
	| GatewayIntegrationDeleteDispatch
	| GatewayIntegrationUpdateDispatch
	| GatewayInteractionCreateDispatch
	| GatewayInviteCreateDispatch
	| GatewayInviteDeleteDispatch
	| GatewayMessageCreateDispatch
	| GatewayMessageDeleteBulkDispatch
	| GatewayMessageDeleteDispatch
	| GatewayMessageReactionAddDispatch
	| GatewayMessageReactionRemoveAllDispatch
	| GatewayMessageReactionRemoveDispatch
	| GatewayMessageReactionRemoveEmojiDispatch
	| GatewayMessageUpdateDispatch
	| GatewayPresenceUpdateDispatch
	| GatewayReadyDispatch
	| GatewayResumedDispatch
	| GatewayStageInstanceCreateDispatch
	| GatewayStageInstanceDeleteDispatch
	| GatewayStageInstanceUpdateDispatch
	| GatewayTypingStartDispatch
	| GatewayUserUpdateDispatch
	| GatewayVoiceServerUpdateDispatch
	| GatewayVoiceStateUpdateDispatch
	| GatewayWebhooksUpdateDispatch;

// #region Dispatch Payloads

/**
 * https://docs.discord.com/developers/topics/gateway#hello
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayHello extends NonDispatchPayload {
	op: GatewayOpcodes.Hello;
	d: GatewayHelloData;
}

/**
 * https://docs.discord.com/developers/topics/gateway#hello
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayHelloData {
	/**
	 * The interval (in milliseconds) the client should heartbeat with
	 */
	heartbeat_interval: number;
}

/**
 * https://docs.discord.com/developers/topics/gateway#heartbeating
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayHeartbeatRequest extends NonDispatchPayload {
	op: GatewayOpcodes.Heartbeat;
	d: never;
}

/**
 * https://docs.discord.com/developers/topics/gateway#heartbeating-example-gateway-heartbeat-ack
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayHeartbeatAck extends NonDispatchPayload {
	op: GatewayOpcodes.HeartbeatAck;
	d: never;
}

/**
 * https://docs.discord.com/developers/topics/gateway#invalid-session
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayInvalidSession extends NonDispatchPayload {
	op: GatewayOpcodes.InvalidSession;
	d: GatewayInvalidSessionData;
}

/**
 * https://docs.discord.com/developers/topics/gateway#invalid-session
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayInvalidSessionData = boolean;

/**
 * https://docs.discord.com/developers/topics/gateway#reconnect
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayReconnect extends NonDispatchPayload {
	op: GatewayOpcodes.Reconnect;
	d: never;
}

/**
 * https://docs.discord.com/developers/topics/gateway#ready
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayReadyDispatch = DataPayload<GatewayDispatchEvents.Ready, GatewayReadyDispatchData>;

/**
 * https://docs.discord.com/developers/topics/gateway#ready
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayReadyDispatchData {
	/**
	 * Gateway version
	 *
	 * See https://docs.discord.com/developers/topics/gateway#gateways-gateway-versions
	 */
	v: number;
	/**
	 * Information about the user including email
	 *
	 * See https://docs.discord.com/developers/resources/user#user-object
	 */
	user: APIUser;
	/**
	 * The guilds the user is in
	 *
	 * See https://docs.discord.com/developers/resources/guild#unavailable-guild-object
	 */
	guilds: APIUnavailableGuild[];
	/**
	 * Used for resuming connections
	 */
	session_id: string;
	/**
	 * The shard information associated with this session, if sent when identifying
	 *
	 * See https://docs.discord.com/developers/topics/gateway#sharding
	 */
	shard?: [shard_id: number, shard_count: number];
	/**
	 * Contains `id` and `flags`
	 *
	 * See https://docs.discord.com/developers/resources/application#application-object
	 */
	application: Pick<APIApplication, 'flags' | 'id'>;
}

/**
 * https://docs.discord.com/developers/topics/gateway#resumed
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayResumedDispatch = DataPayload<GatewayDispatchEvents.Resumed, never>;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-create
 * https://docs.discord.com/developers/topics/gateway#channel-update
 * https://docs.discord.com/developers/topics/gateway#channel-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayChannelModifyDispatch = DataPayload<
	GatewayDispatchEvents.ChannelCreate | GatewayDispatchEvents.ChannelDelete | GatewayDispatchEvents.ChannelUpdate,
	GatewayChannelModifyDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-create
 * https://docs.discord.com/developers/topics/gateway#channel-update
 * https://docs.discord.com/developers/topics/gateway#channel-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayChannelModifyDispatchData = APIChannel;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayChannelCreateDispatch = GatewayChannelModifyDispatch;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayChannelCreateDispatchData = GatewayChannelModifyDispatchData;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayChannelUpdateDispatch = GatewayChannelModifyDispatch;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayChannelUpdateDispatchData = GatewayChannelModifyDispatchData;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayChannelDeleteDispatch = GatewayChannelModifyDispatch;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayChannelDeleteDispatchData = GatewayChannelModifyDispatchData;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-pins-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayChannelPinsUpdateDispatch = DataPayload<
	GatewayDispatchEvents.ChannelPinsUpdate,
	GatewayChannelPinsUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#channel-pins-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayChannelPinsUpdateDispatchData {
	/**
	 * The id of the guild
	 */
	guild_id?: Snowflake;
	/**
	 * The id of the channel
	 */
	channel_id: Snowflake;
	/**
	 * The time at which the most recent pinned message was pinned
	 */
	last_pin_timestamp?: string | null;
}

/**
 * https://docs.discord.com/developers/topics/gateway#guild-create
 * https://docs.discord.com/developers/topics/gateway#guild-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildModifyDispatch = DataPayload<
	GatewayDispatchEvents.GuildCreate | GatewayDispatchEvents.GuildUpdate,
	GatewayGuildModifyDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-create
 * https://docs.discord.com/developers/topics/gateway#guild-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildModifyDispatchData = APIGuild;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildCreateDispatch = GatewayGuildModifyDispatch;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildCreateDispatchData = GatewayGuildModifyDispatchData;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildUpdateDispatch = GatewayGuildModifyDispatch;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildUpdateDispatchData = GatewayGuildModifyDispatchData;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildDeleteDispatch = DataPayload<GatewayDispatchEvents.GuildDelete, GatewayGuildDeleteDispatchData>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildDeleteDispatchData = APIUnavailableGuild;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-ban-add
 * https://docs.discord.com/developers/topics/gateway#guild-ban-remove
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildBanModifyDispatch = DataPayload<
	GatewayDispatchEvents.GuildBanAdd | GatewayDispatchEvents.GuildBanRemove,
	GatewayGuildBanModifyDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-ban-add
 * https://docs.discord.com/developers/topics/gateway#guild-ban-remove
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildBanModifyDispatchData {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The banned user
	 *
	 * See https://docs.discord.com/developers/resources/user#user-object
	 */
	user: APIUser;
}

/**
 * https://docs.discord.com/developers/topics/gateway#guild-ban-add
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildBanAddDispatch = GatewayGuildBanModifyDispatch;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-ban-add
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildBanAddDispatchData = GatewayGuildBanModifyDispatchData;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-ban-remove
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildBanRemoveDispatch = GatewayGuildBanModifyDispatch;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-ban-remove
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildBanRemoveDispatchData = GatewayGuildBanModifyDispatchData;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-emojis-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildEmojisUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildEmojisUpdate,
	GatewayGuildEmojisUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-emojis-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildEmojisUpdateDispatchData {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * Array of emojis
	 *
	 * See https://docs.discord.com/developers/resources/emoji#emoji-object
	 */
	emojis: APIEmoji[];
}

/**
 * https://docs.discord.com/developers/topics/gateway#guild-stickers-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildStickersUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildStickersUpdate,
	GatewayGuildStickersUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-stickers-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildStickersUpdateDispatchData {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * Array of stickers
	 *
	 * See https://docs.discord.com/developers/resources/sticker#sticker-object
	 */
	stickers: APISticker[];
}

/**
 * https://docs.discord.com/developers/topics/gateway#guild-integrations-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildIntegrationsUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildIntegrationsUpdate,
	GatewayGuildIntegrationsUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-integrations-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildIntegrationsUpdateDispatchData {
	/**
	 * ID of the guild whose integrations were updated
	 */
	guild_id: Snowflake;
}

/**
 * https://docs.discord.com/developers/topics/gateway#guild-member-add
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildMemberAddDispatch = DataPayload<
	GatewayDispatchEvents.GuildMemberAdd,
	GatewayGuildMemberAddDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-member-add
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildMemberAddDispatchData extends APIGuildMember {
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
}

/**
 * https://docs.discord.com/developers/topics/gateway#guild-member-remove
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildMemberRemoveDispatch = DataPayload<
	GatewayDispatchEvents.GuildMemberRemove,
	GatewayGuildMemberRemoveDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-member-remove
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildMemberRemoveDispatchData {
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The user who was removed
	 *
	 * See https://docs.discord.com/developers/resources/user#user-object
	 */
	user: APIUser;
}

/**
 * https://docs.discord.com/developers/topics/gateway#guild-member-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildMemberUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildMemberUpdate,
	GatewayGuildMemberUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-member-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildMemberUpdateDispatchData = _Nullable<Pick<APIGuildMember, 'joined_at'>> &
	Omit<APIGuildMember, 'deaf' | 'joined_at' | 'mute' | 'user'> &
	Partial<Pick<APIGuildMember, 'deaf' | 'mute'>> &
	Required<Pick<APIGuildMember, 'user'>> & {
		/**
		 * The id of the guild
		 */
		guild_id: Snowflake;
	};

/**
 * https://docs.discord.com/developers/topics/gateway#guild-members-chunk
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildMembersChunkDispatch = DataPayload<
	GatewayDispatchEvents.GuildMembersChunk,
	GatewayGuildMembersChunkDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-members-chunk
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildMembersChunkDispatchData {
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * Set of guild members
	 *
	 * See https://docs.discord.com/developers/resources/guild#guild-member-object
	 */
	members: APIGuildMember[];
	/**
	 * The chunk index in the expected chunks for this response (`0 <= chunk_index < chunk_count`)
	 */
	chunk_index?: number;
	/**
	 * The total number of expected chunks for this response
	 */
	chunk_count?: number;
	/**
	 * If passing an invalid id to `REQUEST_GUILD_MEMBERS`, it will be returned here
	 */
	not_found?: unknown[];
	/**
	 * If passing true to `REQUEST_GUILD_MEMBERS`, presences of the returned members will be here
	 *
	 * See https://docs.discord.com/developers/topics/gateway#presence
	 */
	presences?: RawGatewayPresenceUpdate[];
	/**
	 * The nonce used in the Guild Members Request
	 *
	 * See https://docs.discord.com/developers/topics/gateway#request-guild-members
	 */
	nonce?: string;
}

/**
 * https://docs.discord.com/developers/topics/gateway#guild-role-create
 * https://docs.discord.com/developers/topics/gateway#guild-role-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildRoleModifyDispatch = DataPayload<
	GatewayDispatchEvents.GuildRoleCreate | GatewayDispatchEvents.GuildRoleUpdate,
	GatewayGuildRoleModifyDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-role-create
 * https://docs.discord.com/developers/topics/gateway#guild-role-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildRoleModifyDispatchData {
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The role created or updated
	 *
	 * See https://docs.discord.com/developers/topics/permissions#role-object
	 */
	role: APIRole;
}

/**
 * https://docs.discord.com/developers/topics/gateway#guild-role-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildRoleCreateDispatch = GatewayGuildRoleModifyDispatch;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-role-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildRoleCreateDispatchData = GatewayGuildRoleModifyDispatchData;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-role-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildRoleUpdateDispatch = GatewayGuildRoleModifyDispatch;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-role-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildRoleUpdateDispatchData = GatewayGuildRoleModifyDispatchData;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-role-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildRoleDeleteDispatch = DataPayload<
	GatewayDispatchEvents.GuildRoleDelete,
	GatewayGuildRoleDeleteDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#guild-role-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildRoleDeleteDispatchData {
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The id of the role
	 */
	role_id: Snowflake;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildScheduledEventCreateDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventCreate,
	GatewayGuildScheduledEventCreateDispatchData
>;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildScheduledEventCreateDispatchData = APIGuildScheduledEvent;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildScheduledEventUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventUpdate,
	GatewayGuildScheduledEventUpdateDispatchData
>;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildScheduledEventUpdateDispatchData = APIGuildScheduledEvent;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildScheduledEventDeleteDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventDelete,
	GatewayGuildScheduledEventDeleteDispatchData
>;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildScheduledEventDeleteDispatchData = APIGuildScheduledEvent;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildScheduledEventUserAddDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventUserAdd,
	GatewayGuildScheduledEventUserAddDispatchData
>;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildScheduledEventUserAddDispatchData {
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
	guild_id: Snowflake;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayGuildScheduledEventUserRemoveDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventUserRemove,
	GatewayGuildScheduledEventUserAddDispatchData
>;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayGuildScheduledEventUserRemoveDispatchData {
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
	guild_id: Snowflake;
}

/**
 * https://docs.discord.com/developers/topics/gateway#integration-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayIntegrationCreateDispatch = DataPayload<
	GatewayDispatchEvents.IntegrationCreate,
	GatewayIntegrationCreateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#integration-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayIntegrationCreateDispatchData = APIGuildIntegration & { guild_id: Snowflake };

/**
 * https://docs.discord.com/developers/topics/gateway#integration-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayIntegrationUpdateDispatch = DataPayload<
	GatewayDispatchEvents.IntegrationUpdate,
	GatewayIntegrationUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#integration-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayIntegrationUpdateDispatchData = APIGuildIntegration & { guild_id: Snowflake };

/**
 * https://docs.discord.com/developers/topics/gateway#integration-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayIntegrationDeleteDispatch = DataPayload<
	GatewayDispatchEvents.IntegrationDelete,
	GatewayIntegrationDeleteDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#integration-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayIntegrationDeleteDispatchData {
	/**
	 * Integration id
	 */
	id: Snowflake;
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * ID of the bot/OAuth2 application for this Discord integration
	 */
	application_id?: Snowflake;
}

/**
 * https://docs.discord.com/developers/topics/gateway#interaction-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayInteractionCreateDispatch = DataPayload<
	GatewayDispatchEvents.InteractionCreate,
	GatewayInteractionCreateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#interaction-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayInteractionCreateDispatchData = APIInteraction;

/**
 * https://docs.discord.com/developers/topics/gateway#invite-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayInviteCreateDispatch = DataPayload<
	GatewayDispatchEvents.InviteCreate,
	GatewayInviteCreateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#invite-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayInviteCreateDispatchData {
	/**
	 * The channel the invite is for
	 */
	channel_id: Snowflake;
	/**
	 * The unique invite code
	 *
	 * See https://docs.discord.com/developers/resources/invite#invite-object
	 */
	code: string;
	/**
	 * The time at which the invite was created
	 */
	created_at: number;
	/**
	 * The guild of the invite
	 */
	guild_id?: Snowflake;
	/**
	 * The user that created the invite
	 *
	 * See https://docs.discord.com/developers/resources/user#user-object
	 */
	inviter?: APIUser;
	/**
	 * How long the invite is valid for (in seconds)
	 */
	max_age: number;
	/**
	 * The maximum number of times the invite can be used
	 */
	max_uses: number;
	/**
	 * The type of target for this voice channel invite
	 *
	 * See https://docs.discord.com/developers/resources/invite#invite-object-invite-target-types
	 */
	target_type?: InviteTargetType;
	/**
	 * The user whose stream to display for this voice channel stream invite
	 *
	 * See https://docs.discord.com/developers/resources/user#user-object
	 */
	target_user?: APIUser;
	/**
	 * The embedded application to open for this voice channel embedded application invite
	 */
	target_application?: Partial<APIApplication>;
	/**
	 * Whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role)
	 */
	temporary: boolean;
	/**
	 * How many times the invite has been used (always will be `0`)
	 */
	uses: 0;
}

/**
 * https://docs.discord.com/developers/topics/gateway#invite-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayInviteDeleteDispatch = DataPayload<
	GatewayDispatchEvents.InviteDelete,
	GatewayInviteDeleteDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#invite-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayInviteDeleteDispatchData {
	/**
	 * The channel of the invite
	 */
	channel_id: Snowflake;
	/**
	 * The guild of the invite
	 */
	guild_id?: Snowflake;
	/**
	 * The unique invite code
	 *
	 * See https://docs.discord.com/developers/resources/invite#invite-object
	 */
	code: string;
}

/**
 * https://docs.discord.com/developers/topics/gateway#message-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageCreateDispatch = DataPayload<
	GatewayDispatchEvents.MessageCreate,
	GatewayMessageCreateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#message-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageCreateDispatchData = APIMessage;

/**
 * https://docs.discord.com/developers/topics/gateway#message-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageUpdateDispatch = DataPayload<
	GatewayDispatchEvents.MessageUpdate,
	GatewayMessageUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#message-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageUpdateDispatchData = Partial<APIMessage> & {
	id: Snowflake;
	channel_id: Snowflake;
};

/**
 * https://docs.discord.com/developers/topics/gateway#message-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageDeleteDispatch = DataPayload<
	GatewayDispatchEvents.MessageDelete,
	GatewayMessageDeleteDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#message-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayMessageDeleteDispatchData {
	/**
	 * The id of the message
	 */
	id: Snowflake;
	/**
	 * The id of the channel
	 */
	channel_id: Snowflake;
	/**
	 * The id of the guild
	 */
	guild_id?: Snowflake;
}

/**
 * https://docs.discord.com/developers/topics/gateway#message-delete-bulk
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageDeleteBulkDispatch = DataPayload<
	GatewayDispatchEvents.MessageDeleteBulk,
	GatewayMessageDeleteBulkDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#message-delete-bulk
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayMessageDeleteBulkDispatchData {
	/**
	 * The ids of the messages
	 */
	ids: Snowflake[];
	/**
	 * The id of the channel
	 */
	channel_id: Snowflake;
	/**
	 * The id of the guild
	 */
	guild_id?: Snowflake;
}

/**
 * https://docs.discord.com/developers/topics/gateway#message-reaction-add
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageReactionAddDispatch = ReactionData<GatewayDispatchEvents.MessageReactionAdd>;

/**
 * https://docs.discord.com/developers/topics/gateway#message-reaction-add
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageReactionAddDispatchData = GatewayMessageReactionAddDispatch['d'];

/**
 * https://docs.discord.com/developers/topics/gateway#message-reaction-remove
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageReactionRemoveDispatch = ReactionData<GatewayDispatchEvents.MessageReactionRemove, 'member'>;

/**
 * https://docs.discord.com/developers/topics/gateway#message-reaction-remove
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageReactionRemoveDispatchData = GatewayMessageReactionRemoveDispatch['d'];

/**
 * https://docs.discord.com/developers/topics/gateway#message-reaction-remove-all
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageReactionRemoveAllDispatch = DataPayload<
	GatewayDispatchEvents.MessageReactionRemoveAll,
	GatewayMessageReactionRemoveAllDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#message-reaction-remove-all
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageReactionRemoveAllDispatchData = MessageReactionRemoveData;

/**
 * https://docs.discord.com/developers/topics/gateway#message-reaction-remove-emoji
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayMessageReactionRemoveEmojiDispatch = DataPayload<
	GatewayDispatchEvents.MessageReactionRemoveEmoji,
	GatewayMessageReactionRemoveEmojiDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#message-reaction-remove-emoji
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayMessageReactionRemoveEmojiDispatchData extends MessageReactionRemoveData {
	/**
	 * The emoji that was removed
	 */
	emoji: APIEmoji;
}

/**
 * https://docs.discord.com/developers/topics/gateway#presence-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayPresenceUpdateDispatch = DataPayload<
	GatewayDispatchEvents.PresenceUpdate,
	GatewayPresenceUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#presence-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayPresenceUpdateDispatchData = RawGatewayPresenceUpdate;

/**
 * https://docs.discord.com/developers/topics/gateway#stage-instance-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayStageInstanceCreateDispatch = DataPayload<
	GatewayDispatchEvents.StageInstanceCreate,
	GatewayStageInstanceCreateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#stage-instance-create
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayStageInstanceCreateDispatchData = APIStageInstance;

/**
 * https://docs.discord.com/developers/topics/gateway#stage-instance-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayStageInstanceDeleteDispatch = DataPayload<
	GatewayDispatchEvents.StageInstanceDelete,
	GatewayStageInstanceDeleteDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#stage-instance-delete
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayStageInstanceDeleteDispatchData = APIStageInstance;

/**
 * https://docs.discord.com/developers/topics/gateway#stage-instance-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayStageInstanceUpdateDispatch = DataPayload<
	GatewayDispatchEvents.StageInstanceUpdate,
	GatewayStageInstanceUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#stage-instance-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayStageInstanceUpdateDispatchData = APIStageInstance;

/**
 * https://docs.discord.com/developers/topics/gateway#typing-start
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayTypingStartDispatch = DataPayload<GatewayDispatchEvents.TypingStart, GatewayTypingStartDispatchData>;

/**
 * https://docs.discord.com/developers/topics/gateway#typing-start
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayTypingStartDispatchData {
	/**
	 * The id of the channel
	 */
	channel_id: Snowflake;
	/**
	 * The id of the guild
	 */
	guild_id?: Snowflake;
	/**
	 * The id of the user
	 */
	user_id: Snowflake;
	/**
	 * Unix time (in seconds) of when the user started typing
	 */
	timestamp: number;
	/**
	 * The member who started typing if this happened in a guild
	 *
	 * See https://docs.discord.com/developers/resources/guild#guild-member-object
	 */
	member?: APIGuildMember;
}

/**
 * https://docs.discord.com/developers/topics/gateway#user-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayUserUpdateDispatch = DataPayload<GatewayDispatchEvents.UserUpdate, GatewayUserUpdateDispatchData>;

/**
 * https://docs.discord.com/developers/topics/gateway#user-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayUserUpdateDispatchData = APIUser;

/**
 * https://docs.discord.com/developers/topics/gateway#voice-state-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayVoiceStateUpdateDispatch = DataPayload<
	GatewayDispatchEvents.VoiceStateUpdate,
	GatewayVoiceStateUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#voice-state-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayVoiceStateUpdateDispatchData = GatewayVoiceState;

/**
 * https://docs.discord.com/developers/topics/gateway#voice-server-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayVoiceServerUpdateDispatch = DataPayload<
	GatewayDispatchEvents.VoiceServerUpdate,
	GatewayVoiceServerUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#voice-server-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayVoiceServerUpdateDispatchData {
	/**
	 * Voice connection token
	 */
	token: string;
	/**
	 * The guild this voice server update is for
	 */
	guild_id: Snowflake;
	/**
	 * The voice server host
	 *
	 * A `null` endpoint means that the voice server allocated has gone away and is trying to be reallocated.
	 * You should attempt to disconnect from the currently connected voice server, and not attempt to reconnect
	 * until a new voice server is allocated
	 */
	endpoint: string | null;
}

/**
 * https://docs.discord.com/developers/topics/gateway#webhooks-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayWebhooksUpdateDispatch = DataPayload<
	GatewayDispatchEvents.WebhooksUpdate,
	GatewayWebhooksUpdateDispatchData
>;

/**
 * https://docs.discord.com/developers/topics/gateway#webhooks-update
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayWebhooksUpdateDispatchData {
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The id of the channel
	 */
	channel_id: Snowflake;
}

// #endregion Dispatch Payloads

// #region Sendable Payloads

/**
 * https://docs.discord.com/developers/topics/gateway#heartbeating
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayHeartbeat {
	op: GatewayOpcodes.Heartbeat;
	d: GatewayHeartbeatData;
}

/**
 * https://docs.discord.com/developers/topics/gateway#heartbeating
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayHeartbeatData = number | null;

/**
 * https://docs.discord.com/developers/topics/gateway#identify
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayIdentify {
	op: GatewayOpcodes.Identify;
	d: GatewayIdentifyData;
}

/**
 * https://docs.discord.com/developers/topics/gateway#identify
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayIdentifyData {
	/**
	 * Authentication token
	 */
	token: string;
	/**
	 * Connection properties
	 *
	 * See https://docs.discord.com/developers/topics/gateway#identify-identify-connection-properties
	 */
	properties: GatewayIdentifyProperties;
	/**
	 * Whether this connection supports compression of packets
	 *
	 * @default false
	 */
	compress?: boolean;
	/**
	 * Value between 50 and 250, total number of members where the gateway will stop sending
	 * offline members in the guild member list
	 *
	 * @default 50
	 */
	large_threshold?: number;
	/**
	 * Used for Guild Sharding
	 *
	 * See https://docs.discord.com/developers/topics/gateway#sharding
	 */
	shard?: [shard_id: number, shard_count: number];
	/**
	 * Presence structure for initial presence information
	 *
	 * See https://docs.discord.com/developers/topics/gateway#update-presence
	 */
	presence?: GatewayPresenceUpdateData;
	/**
	 * The Gateway Intents you wish to receive
	 *
	 * See https://docs.discord.com/developers/topics/gateway#gateway-intents
	 */
	intents: number;
}

/**
 * https://docs.discord.com/developers/topics/gateway#identify-identify-connection-properties
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayIdentifyProperties {
	/**
	 * Your operating system
	 */
	$os: string;
	/**
	 * Your library name
	 */
	$browser: string;
	/**
	 * Your library name
	 */
	$device: string;
}

/**
 * https://docs.discord.com/developers/topics/gateway#resume
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayResume {
	op: GatewayOpcodes.Resume;
	d: GatewayResumeData;
}

/**
 * https://docs.discord.com/developers/topics/gateway#resume
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayResumeData {
	/**
	 * Session token
	 */
	token: string;
	/**
	 * Session id
	 */
	session_id: string;
	/**
	 * Last sequence number received
	 */
	seq: number;
}

/**
 * https://docs.discord.com/developers/topics/gateway#request-guild-members
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayRequestGuildMembers {
	op: GatewayOpcodes.RequestGuildMembers;
	d: GatewayRequestGuildMembersData;
}

/**
 * https://docs.discord.com/developers/topics/gateway#request-guild-members
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayRequestGuildMembersData {
	/**
	 * ID of the guild to get members for
	 */
	guild_id: Snowflake;
	/**
	 * String that username starts with, or an empty string to return all members
	 */
	query?: string;
	/**
	 * Maximum number of members to send matching the `query`;
	 * a limit of `0` can be used with an empty string `query` to return all members
	 */
	limit: number;
	/**
	 * Used to specify if we want the presences of the matched members
	 */
	presences?: boolean;
	/**
	 * Used to specify which users you wish to fetch
	 */
	user_ids?: Snowflake | Snowflake[];
	/**
	 * Nonce to identify the Guild Members Chunk response
	 *
	 * Nonce can only be up to 32 bytes. If you send an invalid nonce it will be ignored and the reply member_chunk(s) will not have a `nonce` set.
	 *
	 * See https://docs.discord.com/developers/topics/gateway#guild-members-chunk
	 */
	nonce?: string;
}

/**
 * https://docs.discord.com/developers/topics/gateway#update-voice-state
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayVoiceStateUpdate {
	op: GatewayOpcodes.VoiceStateUpdate;
	d: GatewayVoiceStateUpdateData;
}

/**
 * https://docs.discord.com/developers/topics/gateway#update-voice-state
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayVoiceStateUpdateData {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * ID of the voice channel client wants to join (`null` if disconnecting)
	 */
	channel_id: Snowflake | null;
	/**
	 * Is the client muted
	 */
	self_mute: boolean;
	/**
	 * Is the client deafened
	 */
	self_deaf: boolean;
}

/**
 * https://docs.discord.com/developers/topics/gateway#update-presence
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayUpdatePresence {
	op: GatewayOpcodes.PresenceUpdate;
	d: GatewayPresenceUpdateData;
}

/**
 * https://docs.discord.com/developers/topics/gateway#update-presence-gateway-presence-update-structure
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayPresenceUpdateData {
	/**
	 * Unix time (in milliseconds) of when the client went idle, or `null` if the client is not idle
	 */
	since: number | null;
	/**
	 * The user's activities
	 *
	 * See https://docs.discord.com/developers/topics/gateway-events#activity-object
	 */
	activities: GatewayActivityUpdateData[];
	/**
	 * The user's new status
	 *
	 * See https://docs.discord.com/developers/topics/gateway#update-presence-status-types
	 */
	status: PresenceUpdateStatus;
	/**
	 * Whether or not the client is afk
	 */
	afk: boolean;
}

/**
 * https://docs.discord.com/developers/topics/gateway-events#activity-object-activity-structure
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayActivityUpdateData = Pick<GatewayActivity, 'name' | 'type' | 'url'>;

// #endregion Sendable Payloads

// #region Shared
interface BasePayload {
	/**
	 * Opcode for the payload
	 */
	op: GatewayOpcodes;
	/**
	 * Event data
	 */
	d?: unknown;
	/**
	 * Sequence number, used for resuming sessions and heartbeats
	 */
	s: number;
	/**
	 * The event name for this payload
	 */
	t?: string;
}

type NonDispatchPayload = Omit<BasePayload, 's' | 't'> & {
	t: null;
	s: null;
};

interface DataPayload<Event extends GatewayDispatchEvents, D = unknown> extends BasePayload {
	op: GatewayOpcodes.Dispatch;
	t: Event;
	d: D;
}

type ReactionData<E extends GatewayDispatchEvents, O extends string = never> = DataPayload<
	E,
	Omit<
		{
			/**
			 * The id of the user
			 */
			user_id: Snowflake;
			/**
			 * The id of the channel
			 */
			channel_id: Snowflake;
			/**
			 * The id of the message
			 */
			message_id: Snowflake;
			/**
			 * The id of the guild
			 */
			guild_id?: Snowflake;
			/**
			 * The member who reacted if this happened in a guild
			 *
			 * See https://docs.discord.com/developers/resources/guild#guild-member-object
			 */
			member?: APIGuildMember;
			/**
			 * The emoji used to react
			 *
			 * See https://docs.discord.com/developers/resources/emoji#emoji-object
			 */
			emoji: APIEmoji;
		},
		O
	>
>;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
interface MessageReactionRemoveData {
	/**
	 * The id of the channel
	 */
	channel_id: Snowflake;
	/**
	 * The id of the message
	 */
	message_id: Snowflake;
	/**
	 * The id of the guild
	 */
	guild_id?: Snowflake;
}
// #endregion Shared

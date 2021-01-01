/**
 * Types extracted from https://discord.com/developers/docs/topics/gateway
 */

import type {
	APIChannel,
	APIEmoji,
	APIGuild,
	APIGuildMember,
	APIMessage,
	APIRole,
	APIUnavailableGuild,
	APIUser,
	GatewayActivity,
	GatewayPresenceUpdate as RawGatewayPresenceUpdate,
	GatewayVoiceState,
	InviteTargetUserType,
	PresenceUpdateStatus,
} from '../payloads/index';

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export const GatewayVersion = '6';

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export enum GatewayOPCodes {
	Dispatch,
	Heartbeat,
	Identify,
	PresenceUpdate,
	VoiceStateUpdate,

	Resume = 6,
	Reconnect,
	RequestGuildMembers,
	InvalidSession,
	Hello,
	HeartbeatAck,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export enum GatewayCloseCodes {
	UnknownError = 4000,
	UnknownOpCode,
	DecodeError,
	NotAuthenticated,
	AuthenticationFailed,
	AlreadyAuthenticated,

	InvalidSeq = 4007,
	RateLimited,
	SessionTimedOut,
	InvalidShard,
	ShardingRequired,
	InvalidAPIVersion,
	InvalidIntents,
	DisallowedIntents,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export enum VoiceOPCodes {
	Identify,
	SelectProtocol,
	Ready,
	Heartbeat,
	SessionDescription,
	Speaking,
	HeartbeatAck,
	Resume,
	Hello,
	Resumed,

	ClientDisconnect = 13,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export enum VoiceCloseCodes {
	UnknownOpCode = 4001,

	NotAuthenticated = 4003,
	AuthenticationFailed,
	AlreadyAuthenticated,
	SessionNoLongerValid,

	SessionTimeout = 4009,

	ServerNotFound = 4011,
	UnknownProtocol,

	Disconnected = 4014,
	VoiceServerCrashed,
	UnknownEncryptionMode,
}

/**
 * https://discord.com/developers/docs/topics/gateway#list-of-intents
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export enum GatewayIntentBits {
	GUILDS = 1 << 0,
	GUILD_MEMBERS = 1 << 1,
	GUILD_BANS = 1 << 2,
	GUILD_EMOJIS = 1 << 3,
	GUILD_INTEGRATIONS = 1 << 4,
	GUILD_WEBHOOKS = 1 << 5,
	GUILD_INVITES = 1 << 6,
	GUILD_VOICE_STATES = 1 << 7,
	GUILD_PRESENCES = 1 << 8,
	GUILD_MESSAGES = 1 << 9,
	GUILD_MESSAGE_REACTIONS = 1 << 10,
	GUILD_MESSAGE_TYPING = 1 << 11,
	DIRECT_MESSAGES = 1 << 12,
	DIRECT_MESSAGE_REACTIONS = 1 << 13,
	DIRECT_MESSAGE_TYPING = 1 << 14,
}

/**
 * https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export enum GatewayDispatchEvents {
	Ready = 'READY',
	Resumed = 'RESUMED',
	ChannelCreate = 'CHANNEL_CREATE',
	ChannelUpdate = 'CHANNEL_UPDATE',
	ChannelDelete = 'CHANNEL_DELETE',
	ChannelPinsUpdate = 'CHANNEL_PINS_UPDATE',
	GuildCreate = 'GUILD_CREATE',
	GuildUpdate = 'GUILD_UPDATE',
	GuildDelete = 'GUILD_DELETE',
	GuildBanAdd = 'GUILD_BAN_ADD',
	GuildBanRemove = 'GUILD_BAN_REMOVE',
	GuildEmojisUpdate = 'GUILD_EMOJIS_UPDATE',
	GuildIntegrationsUpdate = 'GUILD_INTEGRATIONS_UPDATE',
	GuildMemberAdd = 'GUILD_MEMBER_ADD',
	GuildMemberRemove = 'GUILD_MEMBER_REMOVE',
	GuildMemberUpdate = 'GUILD_MEMBER_UPDATE',
	GuildMembersChunk = 'GUILD_MEMBERS_CHUNK',
	GuildRoleCreate = 'GUILD_ROLE_CREATE',
	GuildRoleUpdate = 'GUILD_ROLE_UPDATE',
	GuildRoleDelete = 'GUILD_ROLE_DELETE',
	InviteCreate = 'INVITE_CREATE',
	InviteDelete = 'INVITE_DELETE',
	MessageCreate = 'MESSAGE_CREATE',
	MessageUpdate = 'MESSAGE_UPDATE',
	MessageDelete = 'MESSAGE_DELETE',
	MessageDeleteBulk = 'MESSAGE_DELETE_BULK',
	MessageReactionAdd = 'MESSAGE_REACTION_ADD',
	MessageReactionRemove = 'MESSAGE_REACTION_REMOVE',
	MessageReactionRemoveAll = 'MESSAGE_REACTION_REMOVE_ALL',
	MessageReactionRemoveEmoji = 'MESSAGE_REACTION_REMOVE_EMOJI',
	PresenceUpdate = 'PRESENCE_UPDATE',
	TypingStart = 'TYPING_START',
	UserUpdate = 'USER_UPDATE',
	VoiceStateUpdate = 'VOICE_STATE_UPDATE',
	VoiceServerUpdate = 'VOICE_SERVER_UPDATE',
	WebhooksUpdate = 'WEBHOOKS_UPDATE',
}

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewaySendPayload =
	| GatewayHeartbeat
	| GatewayIdentify
	| GatewayUpdatePresence
	| GatewayVoiceStateUpdate
	| GatewayResume
	| GatewayRequestGuildMembers;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayReceivePayload =
	| GatewayHello
	| GatewayHeartbeatRequest
	| GatewayHeartbeatAck
	| GatewayInvalidSession
	| GatewayReconnect
	| GatewayDispatchPayload;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayDispatchPayload =
	| GatewayReadyDispatch
	| GatewayResumedDispatch
	| GatewayChannelModifyDispatch
	| GatewayChannelPinsUpdateDispatch
	| GatewayGuildModifyDispatch
	| GatewayGuildDeleteDispatch
	| GatewayGuildBanModifyDispatch
	| GatewayGuildEmojisUpdateDispatch
	| GatewayGuildIntegrationsUpdateDispatch
	| GatewayGuildMemberAddDispatch
	| GatewayGuildMemberRemoveDispatch
	| GatewayGuildMemberUpdateDispatch
	| GatewayGuildMembersChunkDispatch
	| GatewayGuildRoleModifyDispatch
	| GatewayGuildRoleDeleteDispatch
	| GatewayInviteCreateDispatch
	| GatewayInviteDeleteDispatch
	| GatewayMessageCreateDispatch
	| GatewayMessageUpdateDispatch
	| GatewayMessageDeleteDispatch
	| GatewayMessageDeleteBulkDispatch
	| GatewayMessageReactionAddDispatch
	| GatewayMessageReactionRemoveDispatch
	| GatewayMessageReactionRemoveAllDispatch
	| GatewayMessageReactionRemoveEmojiDispatch
	| GatewayPresenceUpdateDispatch
	| GatewayTypingStartDispatch
	| GatewayUserUpdateDispatch
	| GatewayVoiceStateUpdateDispatch
	| GatewayVoiceServerUpdateDispatch
	| GatewayWebhooksUpdateDispatch;

// #region Dispatch Payloads
/**
 * https://discord.com/developers/docs/topics/gateway#hello
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayHello extends NonDispatchPayload {
	op: GatewayOPCodes.Hello;
	d: {
		heartbeat_interval: number;
	};
}

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayHeartbeatRequest extends NonDispatchPayload {
	op: GatewayOPCodes.Heartbeat;
	d: never;
}

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating-example-gateway-heartbeat-ack
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayHeartbeatAck extends NonDispatchPayload {
	op: GatewayOPCodes.HeartbeatAck;
	d: never;
}

/**
 * https://discord.com/developers/docs/topics/gateway#invalid-session
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayInvalidSession extends NonDispatchPayload {
	op: GatewayOPCodes.InvalidSession;
	d: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#reconnect
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayReconnect extends NonDispatchPayload {
	op: GatewayOPCodes.Reconnect;
	d: never;
}

/**
 * https://discord.com/developers/docs/topics/gateway#ready
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayReadyDispatch = DataPayload<
	GatewayDispatchEvents.Ready,
	{
		v: number;
		user: APIUser;
		session_id: string;
		private_channels: [];
		guilds: APIUnavailableGuild[];
		shard?: [number, number];
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#resumed
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayResumedDispatch = DataPayload<GatewayDispatchEvents.Resumed, never>;

/* eslint-disable @typescript-eslint/indent */
/**
 * https://discord.com/developers/docs/topics/gateway#channel-create
 * https://discord.com/developers/docs/topics/gateway#channel-update
 * https://discord.com/developers/docs/topics/gateway#channel-delete
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayChannelModifyDispatch = DataPayload<
	GatewayDispatchEvents.ChannelCreate | GatewayDispatchEvents.ChannelDelete | GatewayDispatchEvents.ChannelUpdate,
	APIChannel
>;
/* eslint-enable @typescript-eslint/indent */

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayChannelCreateDispatch = GatewayChannelModifyDispatch;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayChannelUpdateDispatch = GatewayChannelModifyDispatch;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayChannelDeleteDispatch = GatewayChannelModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-pins-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayChannelPinsUpdateDispatch = DataPayload<
	GatewayDispatchEvents.ChannelPinsUpdate,
	{
		guild_id?: string;
		channel_id: string;
		last_pin_timestamp?: string;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-create
 * https://discord.com/developers/docs/topics/gateway#guild-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildModifyDispatch = DataPayload<
	GatewayDispatchEvents.GuildCreate | GatewayDispatchEvents.GuildUpdate,
	APIGuild
>;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildCreateDispatch = GatewayGuildModifyDispatch;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildUpdateDispatch = GatewayGuildModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-delete
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildDeleteDispatch = DataPayload<GatewayDispatchEvents.GuildDelete, APIUnavailableGuild>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-add
 * https://discord.com/developers/docs/topics/gateway#guild-ban-remove
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildBanModifyDispatch = DataPayload<
	GatewayDispatchEvents.GuildBanAdd | GatewayDispatchEvents.GuildBanRemove,
	{
		guild_id: string;
		user: APIUser;
	}
>;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildBanAddDispatch = GatewayGuildBanModifyDispatch;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildBanRemoveDispatch = GatewayGuildBanModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-emojis-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildEmojisUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildEmojisUpdate,
	{
		guild_id: string;
		emojis: APIEmoji[];
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-integrations-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildIntegrationsUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildIntegrationsUpdate,
	{ guild_id: string }
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-add
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildMemberAddDispatch = DataPayload<
	GatewayDispatchEvents.GuildMemberAdd,
	APIGuildMember & { guild_id: string }
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-remove
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildMemberRemoveDispatch = DataPayload<
	GatewayDispatchEvents.GuildMemberRemove,
	{
		guild_id: string;
		user: APIUser;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildMemberUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildMemberUpdate,
	Omit<APIGuildMember, 'deaf' | 'mute'> & {
		guild_id: string;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-members-chunk
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildMembersChunkDispatch = DataPayload<
	GatewayDispatchEvents.GuildMembersChunk,
	{
		guild_id: string;
		members: APIGuildMember[];
		chunk_index?: number;
		chunk_count?: number;
		not_found?: unknown[];
		presences?: RawGatewayPresenceUpdate[];
		nonce?: string;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-create
 * https://discord.com/developers/docs/topics/gateway#guild-role-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildRoleModifyDispatch = DataPayload<
	GatewayDispatchEvents.GuildRoleCreate | GatewayDispatchEvents.GuildRoleUpdate,
	{
		guild_id: string;
		role: APIRole;
	}
>;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildRoleCreateDispatch = GatewayGuildRoleModifyDispatch;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildRoleUpdateDispatch = GatewayGuildRoleModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-delete
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayGuildRoleDeleteDispatch = DataPayload<
	GatewayDispatchEvents.GuildRoleDelete,
	{
		guild_id: string;
		role_id: string;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#invite-create
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayInviteCreateDispatch = DataPayload<
	GatewayDispatchEvents.InviteCreate,
	{
		channel_id: string;
		code: string;
		created_at: number;
		guild_id?: string;
		inviter?: APIUser;
		max_age: number;
		max_uses: number;
		target_user?: APIUser;
		target_user_type?: InviteTargetUserType;
		temporary: boolean;
		uses: 0;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#invite-delete
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayInviteDeleteDispatch = DataPayload<
	GatewayDispatchEvents.InviteDelete,
	{
		channel_id: string;
		guild_id?: string;
		code: string;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-create
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayMessageCreateDispatch = DataPayload<GatewayDispatchEvents.MessageCreate, APIMessage>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayMessageUpdateDispatch = DataPayload<
	GatewayDispatchEvents.MessageUpdate,
	{ id: string; channel_id: string } & Partial<APIMessage>
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayMessageDeleteDispatch = DataPayload<
	GatewayDispatchEvents.MessageDelete,
	{
		id: string;
		channel_id: string;
		guild_id?: string;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete-bulk
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayMessageDeleteBulkDispatch = DataPayload<
	GatewayDispatchEvents.MessageDeleteBulk,
	{
		ids: string[];
		channel_id: string;
		guild_id?: string;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-add
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayMessageReactionAddDispatch = ReactionData<GatewayDispatchEvents.MessageReactionAdd>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayMessageReactionRemoveDispatch = ReactionData<GatewayDispatchEvents.MessageReactionRemove, 'member'>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayMessageReactionRemoveAllDispatch = DataPayload<
	GatewayDispatchEvents.MessageReactionRemoveAll,
	MessageReactionRemoveData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayMessageReactionRemoveEmojiDispatch = DataPayload<
	GatewayDispatchEvents.MessageReactionRemoveEmoji,
	MessageReactionRemoveData & {
		emoji: APIEmoji;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#presence-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayPresenceUpdateDispatch = DataPayload<GatewayDispatchEvents.PresenceUpdate, RawGatewayPresenceUpdate>;

/**
 * https://discord.com/developers/docs/topics/gateway#typing-start
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayTypingStartDispatch = DataPayload<
	GatewayDispatchEvents.TypingStart,
	{
		channel_id: string;
		guild_id?: string;
		user_id: string;
		timestamp: number;
		member?: APIGuildMember;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#user-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayUserUpdateDispatch = DataPayload<GatewayDispatchEvents.UserUpdate, APIUser>;

/**
 * https://discord.com/developers/docs/topics/gateway#voice-state-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayVoiceStateUpdateDispatch = DataPayload<GatewayDispatchEvents.VoiceStateUpdate, GatewayVoiceState>;

/**
 * https://discord.com/developers/docs/topics/gateway#voice-server-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayVoiceServerUpdateDispatch = DataPayload<
	GatewayDispatchEvents.VoiceServerUpdate,
	{
		token: string;
		guild_id: string;
		endpoint: string;
	}
>;

/**
 * https://discord.com/developers/docs/topics/gateway#webhooks-update
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GatewayWebhooksUpdateDispatch = DataPayload<
	GatewayDispatchEvents.WebhooksUpdate,
	{
		guild_id: string;
		channel_id: string;
	}
>;

// #endregion Dispatch Payloads

// #region Sendable Payloads

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayHeartbeat {
	op: GatewayOPCodes.Heartbeat;
	d: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayIdentifyProperties {
	$os: string;
	$browser: string;
	$device: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#identify
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayIdentify {
	op: GatewayOPCodes.Identify;
	d: {
		token: string;
		properties: GatewayIdentifyProperties;
		compress?: boolean;
		large_threshold?: number;
		// eslint-disable-next-line prettier/prettier
		shard?: [shard_id: number, shard_count: number];
		presence?: RawGatewayPresenceUpdate;
		guild_subscriptions?: boolean;
		intents?: number;
	};
}

/**
 * https://discord.com/developers/docs/topics/gateway#resume
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayResume {
	op: GatewayOPCodes.Resume;
	d: {
		token: string;
		session_id: string;
		seq: number;
	};
}

/**
 * https://discord.com/developers/docs/topics/gateway#request-guild-members
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayRequestGuildMembers {
	op: GatewayOPCodes.RequestGuildMembers;
	d: {
		guild_id: string | string[];
		query?: string;
		limit: number;
		presences?: boolean;
		user_ids?: string | string[];
		nonce?: string;
	};
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-voice-state
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayVoiceStateUpdate {
	op: GatewayOPCodes.VoiceStateUpdate;
	d: {
		guild_id: string;
		channel_id: string | null;
		self_mute: boolean;
		self_deaf: boolean;
	};
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-status
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayUpdatePresence {
	op: GatewayOPCodes.PresenceUpdate;
	d: GatewayPresenceUpdateData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-status-gateway-status-update-structure
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface GatewayPresenceUpdateData {
	since: number | null;
	game: GatewayActivity | null;
	status: PresenceUpdateStatus;
	afk: boolean;
}

// #endregion Sendable Payloads

// #region Shared
/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
interface BasePayload {
	op: GatewayOPCodes;
	s: number;
	d?: unknown;
	t?: string;
}

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
type NonDispatchPayload = Omit<BasePayload, 't'>;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
interface DataPayload<Event extends GatewayDispatchEvents, D = unknown> extends BasePayload {
	op: GatewayOPCodes.Dispatch;
	t: Event;
	d: D;
}

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
type ReactionData<E extends GatewayDispatchEvents, O extends string = never> = DataPayload<
	E,
	Omit<
		{
			user_id: string;
			channel_id: string;
			message_id: string;
			guild_id?: string;
			member?: APIGuildMember;
			emoji: APIEmoji;
		},
		O
	>
>;

/**
 * @deprecated Gateway v6 is deprecated and the types will not receive further updates, please update to v8.
 */
interface MessageReactionRemoveData {
	channel_id: string;
	message_id: string;
	guild_id?: string;
}
// #endregion Shared

/**
 * Types extracted from https://discord.com/developers/docs/topics/gateway
 */

import type { APIChannel, APIEmoji, APIGuild, APIGuildMember, APIMessage, APIRole, APIUnavailableGuild, APIUser, GatewayActivity, GatewayPresenceUpdate as RawGatewayPresenceUpdate, GatewayVoiceState, InviteTargetUserType, PresenceUpdateStatus } from '../payloads';

export const GatewayVersion = '6';

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
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

export type GatewaySendPayload = GatewayHeartbeat | GatewayIdentify | GatewayPresenceUpdate | GatewayVoiceStateUpdate | GatewayResume | GatewayRequestGuildMembers;

export type GatewayReceivePayload = GatewayHello | GatewayHeartbeatRequest | GatewayHeartbeatAck | GatewayInvalidSession | GatewayReconnect | GatewayDispatchPayload;

export type GatewayDispatchPayload =
	GatewayReadyDispatch
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
 */
export interface GatewayHello extends NonDispatchPayload {
	op: GatewayOPCodes.Hello;
	d: {
		heartbeat_interval: number;
	};
}

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating
 */
export interface GatewayHeartbeatRequest extends NonDispatchPayload {
	op: GatewayOPCodes.Heartbeat;
	d: never;
}

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating-example-gateway-heartbeat-ack
 */
export interface GatewayHeartbeatAck extends NonDispatchPayload {
	op: GatewayOPCodes.HeartbeatAck;
	d: never;
}

/**
 * https://discord.com/developers/docs/topics/gateway#invalid-session
 */
export interface GatewayInvalidSession extends NonDispatchPayload {
	op: GatewayOPCodes.InvalidSession;
	d: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#reconnect
 */
export interface GatewayReconnect extends NonDispatchPayload {
	op: GatewayOPCodes.Reconnect;
	d: never;
}

/**
 * https://discord.com/developers/docs/topics/gateway#ready
 */
export type GatewayReadyDispatch = DataPayload<GatewayDispatchEvents.Ready, {
	v: number;
	user: APIUser;
	session_id: string;
	private_channels: [];
	guilds: APIUnavailableGuild[];
	shard?: [number, number];
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#resumed
 */
export type GatewayResumedDispatch = DataPayload<GatewayDispatchEvents.Resumed, never>;

/* eslint-disable @typescript-eslint/indent */
/**
 * https://discord.com/developers/docs/topics/gateway#channel-create
 * https://discord.com/developers/docs/topics/gateway#channel-update
 * https://discord.com/developers/docs/topics/gateway#channel-delete
 */
export type GatewayChannelModifyDispatch = DataPayload<
	GatewayDispatchEvents.ChannelCreate
	| GatewayDispatchEvents.ChannelDelete
	| GatewayDispatchEvents.ChannelUpdate,
	APIChannel
>;
/* eslint-enable @typescript-eslint/indent */

export type GatewayChannelCreateDispatch = GatewayChannelModifyDispatch;
export type GatewayChannelUpdateDispatch = GatewayChannelModifyDispatch;
export type GatewayChannelDeleteDispatch = GatewayChannelModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-pins-update
 */
export type GatewayChannelPinsUpdateDispatch = DataPayload<GatewayDispatchEvents.ChannelPinsUpdate, {
	guild_id?: string;
	channel_id: string;
	last_pin_timestamp?: string;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-create
 * https://discord.com/developers/docs/topics/gateway#guild-update
 */
export type GatewayGuildModifyDispatch = DataPayload<GatewayDispatchEvents.GuildCreate | GatewayDispatchEvents.GuildUpdate, APIGuild>;

export type GatewayGuildCreateDispatch = GatewayGuildModifyDispatch;
export type GatewayGuildUpdateDispatch = GatewayGuildModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-delete
 */
export type GatewayGuildDeleteDispatch = DataPayload<GatewayDispatchEvents.GuildDelete, APIUnavailableGuild>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-add
 * https://discord.com/developers/docs/topics/gateway#guild-ban-remove
 */
export type GatewayGuildBanModifyDispatch = DataPayload<GatewayDispatchEvents.GuildBanAdd | GatewayDispatchEvents.GuildBanRemove, {
	guild_id: string;
	user: APIUser;
}>;

export type GatewayGuildBanAddDispatch = GatewayGuildBanModifyDispatch;
export type GatewayGuildBanRemoveDispatch = GatewayGuildBanModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-emojis-update
 */
export type GatewayGuildEmojisUpdateDispatch = DataPayload<GatewayDispatchEvents.GuildEmojisUpdate, {
	guild_id: string;
	emojis: APIEmoji[];
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-integrations-update
 */
export type GatewayGuildIntegrationsUpdateDispatch = DataPayload<GatewayDispatchEvents.GuildIntegrationsUpdate, { guild_id: string }>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-add
 */
export type GatewayGuildMemberAddDispatch = DataPayload<GatewayDispatchEvents.GuildMemberAdd, APIGuildMember & { guild_id: string }>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-remove
 */
export type GatewayGuildMemberRemoveDispatch = DataPayload<GatewayDispatchEvents.GuildMemberRemove, {
	guild_id: string;
	user: APIUser;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-update
 */
export type GatewayGuildMemberUpdateDispatch = DataPayload<GatewayDispatchEvents.GuildMemberUpdate, Omit<APIGuildMember, 'deaf' | 'mute'> & {
	guild_id: string;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-members-chunk
 */
export type GatewayGuildMembersChunkDispatch = DataPayload<GatewayDispatchEvents.GuildMembersChunk, {
	guild_id: string;
	members: APIGuildMember[];
	chunk_index?: number;
	chunk_count?: number;
	not_found?: unknown[];
	presences?: RawGatewayPresenceUpdate[];
	nonce?: string;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-create
 * https://discord.com/developers/docs/topics/gateway#guild-role-update
 */
export type GatewayGuildRoleModifyDispatch = DataPayload<GatewayDispatchEvents.GuildRoleCreate | GatewayDispatchEvents.GuildRoleUpdate, {
	guild_id: string;
	role: APIRole;
}>;

export type GatewayGuildRoleCreateDispatch = GatewayGuildRoleModifyDispatch;
export type GatewayGuildRoleUpdateDispatch = GatewayGuildRoleModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-delete
 */
export type GatewayGuildRoleDeleteDispatch = DataPayload<GatewayDispatchEvents.GuildRoleDelete, {
	guild_id: string;
	role_id: string;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#invite-create
 */
export type GatewayInviteCreateDispatch = DataPayload<GatewayDispatchEvents.InviteCreate, {
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
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#invite-delete
 */
export type GatewayInviteDeleteDispatch = DataPayload<GatewayDispatchEvents.InviteDelete, {
	channel_id: string;
	guild_id?: string;
	code: string;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-create
 */
export type GatewayMessageCreateDispatch = DataPayload<GatewayDispatchEvents.MessageCreate, APIMessage>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-update
 */
export type GatewayMessageUpdateDispatch = DataPayload<GatewayDispatchEvents.MessageUpdate, { id: string; channel_id: string } & Partial<APIMessage>>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete
 */
export type GatewayMessageDeleteDispatch = DataPayload<GatewayDispatchEvents.MessageDelete, {
	id: string;
	channel_id: string;
	guild_id?: string;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete-bulk
 */
export type GatewayMessageDeleteBulkDispatch = DataPayload<GatewayDispatchEvents.MessageDeleteBulk, {
	ids: string[];
	channel_id: string;
	guild_id?: string;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-add
 */
export type GatewayMessageReactionAddDispatch = ReactionData<GatewayDispatchEvents.MessageReactionAdd>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove
 */
export type GatewayMessageReactionRemoveDispatch = ReactionData<GatewayDispatchEvents.MessageReactionRemove, 'member'>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all
 */
export type GatewayMessageReactionRemoveAllDispatch = DataPayload<GatewayDispatchEvents.MessageReactionRemoveAll, MessageReactionRemoveData>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji
 */
export type GatewayMessageReactionRemoveEmojiDispatch = DataPayload<GatewayDispatchEvents.MessageReactionRemoveEmoji, MessageReactionRemoveData & {
	emoji: APIEmoji;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#presence-update
 */
export type GatewayPresenceUpdateDispatch = DataPayload<GatewayDispatchEvents.PresenceUpdate, RawGatewayPresenceUpdate>;

/**
 * https://discord.com/developers/docs/topics/gateway#typing-start
 */
export type GatewayTypingStartDispatch = DataPayload<GatewayDispatchEvents.TypingStart, {
	channel_id: string;
	guild_id?: string;
	user_id: string;
	timestamp: number;
	member?: APIGuildMember;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#user-update
 */
export type GatewayUserUpdateDispatch = DataPayload<GatewayDispatchEvents.UserUpdate, APIUser>;

/**
 * https://discord.com/developers/docs/topics/gateway#voice-state-update
 */
export type GatewayVoiceStateUpdateDispatch = DataPayload<GatewayDispatchEvents.VoiceStateUpdate, GatewayVoiceState>;

/**
 * https://discord.com/developers/docs/topics/gateway#voice-server-update
 */
export type GatewayVoiceServerUpdateDispatch = DataPayload<GatewayDispatchEvents.VoiceServerUpdate, {
	token: string;
	guild_id: string;
	endpoint: string;
}>;

/**
 * https://discord.com/developers/docs/topics/gateway#webhooks-update
 */
export type GatewayWebhooksUpdateDispatch = DataPayload<GatewayDispatchEvents.WebhooksUpdate, {
	guild_id: string;
	channel_id: string;
}>;

// #endregion Dispatch Payloads

// #region Sendable Payloads

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating
 */
export interface GatewayHeartbeat {
	op: GatewayOPCodes.Heartbeat;
	d: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties
 */
export interface GatewayIdentifyProperties {
	$os: string;
	$browser: string;
	device: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#identify
 */
export interface GatewayIdentify {
	op: GatewayOPCodes.Identify;
	d: {
		token: string;
		properties: GatewayIdentifyProperties;
		compress?: boolean;
		large_threshold?: number;
		shard?: [shard_id: number, shard_count: number];
		presence?: RawGatewayPresenceUpdate;
		guild_subscriptions?: boolean;
		intents?: number;
	};
}

/**
 * https://discord.com/developers/docs/topics/gateway#resume
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
 */
export interface GatewayPresenceUpdate {
	op: GatewayOPCodes.PresenceUpdate;
	d: GatewayPresenceUpdateData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-status-gateway-status-update-structure
 */
export interface GatewayPresenceUpdateData {
	since: number | null;
	game: GatewayActivity | null;
	status: PresenceUpdateStatus;
	afk: boolean;
}

// #endregion Sendable Payloads

// #region Shared
interface BasePayload {
	op: GatewayOPCodes;
	s: number;
	d?: unknown;
	t?: string;
}

type NonDispatchPayload = Omit<BasePayload, 't'>;

interface DataPayload<Event extends GatewayDispatchEvents, D = unknown> extends BasePayload {
	op: GatewayOPCodes.Dispatch;
	t: Event;
	d: D;
}

type ReactionData<E extends GatewayDispatchEvents, O extends string = never> = DataPayload<E, Omit<{
	user_id: string;
	channel_id: string;
	message_id: string;
	guild_id?: string;
	member?: APIGuildMember;
	emoji: APIEmoji;
}, O>>;

interface MessageReactionRemoveData {
	channel_id: string;
	message_id: string;
	guild_id?: string;
}
// #endregion Shared

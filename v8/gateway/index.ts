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
	APIApplicationCommandInteraction,
	APIApplication,
} from '../payloads';

export const GatewayVersion = '8';

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export const enum GatewayOPCodes {
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
export const enum GatewayCloseCodes {
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
export const enum VoiceOPCodes {
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

	ClientConnect = 12,
	ClientDisconnect,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes
 */
export const enum VoiceCloseCodes {
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
export const enum GatewayIntentBits {
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
export const enum GatewayDispatchEvents {
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
	InteractionCreate = 'INTERACTION_CREATE',
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

export type GatewaySendPayload =
	| GatewayHeartbeat
	| GatewayIdentify
	| GatewayUpdatePresence
	| GatewayVoiceStateUpdate
	| GatewayResume
	| GatewayRequestGuildMembers;

export type GatewayReceivePayload =
	| GatewayHello
	| GatewayHeartbeatRequest
	| GatewayHeartbeatAck
	| GatewayInvalidSession
	| GatewayReconnect
	| GatewayDispatchPayload;

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
	| GatewayInteractionCreateDispatch
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
	d: GatewayHelloData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#hello
 */
export interface GatewayHelloData {
	heartbeat_interval: number;
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
	d: GatewayInvalidSessionData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#invalid-session
 */
export type GatewayInvalidSessionData = boolean;

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
export type GatewayReadyDispatch = DataPayload<GatewayDispatchEvents.Ready, GatewayReadyDispatchData>;

/**
 * https://discord.com/developers/docs/topics/gateway#ready
 */
export interface GatewayReadyDispatchData {
	v: number;
	user: APIUser;
	session_id: string;
	private_channels: [];
	guilds: APIUnavailableGuild[];
	shard?: [shardID: number, shardCount: number];
	application: Pick<APIApplication, 'id' | 'flags'>;
}

/**
 * https://discord.com/developers/docs/topics/gateway#resumed
 */
export type GatewayResumedDispatch = DataPayload<GatewayDispatchEvents.Resumed, never>;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-create
 * https://discord.com/developers/docs/topics/gateway#channel-update
 * https://discord.com/developers/docs/topics/gateway#channel-delete
 */
export type GatewayChannelModifyDispatch = DataPayload<
	GatewayDispatchEvents.ChannelCreate | GatewayDispatchEvents.ChannelDelete | GatewayDispatchEvents.ChannelUpdate,
	GatewayChannelModifyDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-create
 * https://discord.com/developers/docs/topics/gateway#channel-update
 * https://discord.com/developers/docs/topics/gateway#channel-delete
 */
export type GatewayChannelModifyDispatchData = APIChannel;

export type GatewayChannelCreateDispatch = GatewayChannelModifyDispatch;
export type GatewayChannelCreateDispatchData = GatewayChannelModifyDispatchData;

export type GatewayChannelUpdateDispatch = GatewayChannelModifyDispatch;
export type GatewayChannelUpdateDispatchData = GatewayChannelModifyDispatchData;

export type GatewayChannelDeleteDispatch = GatewayChannelModifyDispatch;
export type GatewayChannelDeleteDispatchData = GatewayChannelModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-pins-update
 */
export type GatewayChannelPinsUpdateDispatch = DataPayload<
	GatewayDispatchEvents.ChannelPinsUpdate,
	GatewayChannelPinsUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-pins-update
 */
export interface GatewayChannelPinsUpdateDispatchData {
	guild_id?: string;
	channel_id: string;
	last_pin_timestamp?: string | null;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-create
 * https://discord.com/developers/docs/topics/gateway#guild-update
 */
export type GatewayGuildModifyDispatch = DataPayload<
	GatewayDispatchEvents.GuildCreate | GatewayDispatchEvents.GuildUpdate,
	GatewayGuildModifyDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-create
 * https://discord.com/developers/docs/topics/gateway#guild-update
 */
export type GatewayGuildModifyDispatchData = APIGuild;

export type GatewayGuildCreateDispatch = GatewayGuildModifyDispatch;
export type GatewayGuildCreateDispatchData = GatewayGuildModifyDispatchData;

export type GatewayGuildUpdateDispatch = GatewayGuildModifyDispatch;
export type GatewayGuildUpdateDispatchData = GatewayGuildModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-delete
 */
export type GatewayGuildDeleteDispatch = DataPayload<GatewayDispatchEvents.GuildDelete, GatewayGuildDeleteDispatchData>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-delete
 */
export type GatewayGuildDeleteDispatchData = APIUnavailableGuild;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-add
 * https://discord.com/developers/docs/topics/gateway#guild-ban-remove
 */
export type GatewayGuildBanModifyDispatch = DataPayload<
	GatewayDispatchEvents.GuildBanAdd | GatewayDispatchEvents.GuildBanRemove,
	GatewayGuildBanModifyDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-add
 * https://discord.com/developers/docs/topics/gateway#guild-ban-remove
 */
export interface GatewayGuildBanModifyDispatchData {
	guild_id: string;
	user: APIUser;
}

export type GatewayGuildBanAddDispatch = GatewayGuildBanModifyDispatch;
export type GatewayGuildBanAddDispatchData = GatewayGuildBanModifyDispatchData;

export type GatewayGuildBanRemoveDispatch = GatewayGuildBanModifyDispatch;
export type GatewayGuildBanRemoveDispatchData = GatewayGuildBanModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-emojis-update
 */
export type GatewayGuildEmojisUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildEmojisUpdate,
	GatewayGuildEmojisUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-emojis-update
 */
export interface GatewayGuildEmojisUpdateDispatchData {
	guild_id: string;
	emojis: APIEmoji[];
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-integrations-update
 */
export type GatewayGuildIntegrationsUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildIntegrationsUpdate,
	GatewayGuildIntegrationsUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-integrations-update
 */
export interface GatewayGuildIntegrationsUpdateDispatchData {
	guild_id: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-add
 */
export type GatewayGuildMemberAddDispatch = DataPayload<
	GatewayDispatchEvents.GuildMemberAdd,
	GatewayGuildMemberAddDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-add
 */
export interface GatewayGuildMemberAddDispatchData extends APIGuildMember {
	guild_id: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-remove
 */
export type GatewayGuildMemberRemoveDispatch = DataPayload<
	GatewayDispatchEvents.GuildMemberRemove,
	GatewayGuildMemberRemoveDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-remove
 */
export interface GatewayGuildMemberRemoveDispatchData {
	guild_id: string;
	user: APIUser;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-update
 */
export type GatewayGuildMemberUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildMemberUpdate,
	GatewayGuildMemberUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-update
 */
export type GatewayGuildMemberUpdateDispatchData = Omit<APIGuildMember, 'deaf' | 'mute'> & {
	guild_id: string;
};

/**
 * https://discord.com/developers/docs/topics/gateway#guild-members-chunk
 */
export type GatewayGuildMembersChunkDispatch = DataPayload<
	GatewayDispatchEvents.GuildMembersChunk,
	GatewayGuildMembersChunkDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-members-chunk
 */
export interface GatewayGuildMembersChunkDispatchData {
	guild_id: string;
	members: APIGuildMember[];
	chunk_index?: number;
	chunk_count?: number;
	not_found?: unknown[];
	presences?: RawGatewayPresenceUpdate[];
	nonce?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-create
 * https://discord.com/developers/docs/topics/gateway#guild-role-update
 */
export type GatewayGuildRoleModifyDispatch = DataPayload<
	GatewayDispatchEvents.GuildRoleCreate | GatewayDispatchEvents.GuildRoleUpdate,
	GatewayGuildRoleModifyDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-create
 * https://discord.com/developers/docs/topics/gateway#guild-role-update
 */
export interface GatewayGuildRoleModifyDispatchData {
	guild_id: string;
	role: APIRole;
}

export type GatewayGuildRoleCreateDispatch = GatewayGuildRoleModifyDispatch;
export type GatewayGuildRoleCreateDispatchData = GatewayGuildRoleModifyDispatchData;

export type GatewayGuildRoleUpdateDispatch = GatewayGuildRoleModifyDispatch;
export type GatewayGuildRoleUpdateDispatchData = GatewayGuildRoleModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-delete
 */
export type GatewayGuildRoleDeleteDispatch = DataPayload<
	GatewayDispatchEvents.GuildRoleDelete,
	GatewayGuildRoleDeleteDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-delete
 */
export interface GatewayGuildRoleDeleteDispatchData {
	guild_id: string;
	role_id: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#interaction-create
 */
export type GatewayInteractionCreateDispatch = DataPayload<
	GatewayDispatchEvents.InteractionCreate,
	GatewayInteractionCreateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#interaction-create
 */
export type GatewayInteractionCreateDispatchData = APIApplicationCommandInteraction;

/**
 * https://discord.com/developers/docs/topics/gateway#invite-create
 */
export type GatewayInviteCreateDispatch = DataPayload<
	GatewayDispatchEvents.InviteCreate,
	GatewayInviteCreateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#invite-create
 */
export interface GatewayInviteCreateDispatchData {
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

/**
 * https://discord.com/developers/docs/topics/gateway#invite-delete
 */
export type GatewayInviteDeleteDispatch = DataPayload<
	GatewayDispatchEvents.InviteDelete,
	GatewayInviteDeleteDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#invite-delete
 */
export interface GatewayInviteDeleteDispatchData {
	channel_id: string;
	guild_id?: string;
	code: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#message-create
 */
export type GatewayMessageCreateDispatch = DataPayload<
	GatewayDispatchEvents.MessageCreate,
	GatewayMessageCreateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-create
 */
export type GatewayMessageCreateDispatchData = APIMessage;

/**
 * https://discord.com/developers/docs/topics/gateway#message-update
 */
export type GatewayMessageUpdateDispatch = DataPayload<
	GatewayDispatchEvents.MessageUpdate,
	GatewayMessageUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-update
 */
export type GatewayMessageUpdateDispatchData = {
	id: string;
	channel_id: string;
} & Partial<APIMessage>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete
 */
export type GatewayMessageDeleteDispatch = DataPayload<
	GatewayDispatchEvents.MessageDelete,
	GatewayMessageDeleteDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete
 */
export interface GatewayMessageDeleteDispatchData {
	id: string;
	channel_id: string;
	guild_id?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete-bulk
 */
export type GatewayMessageDeleteBulkDispatch = DataPayload<
	GatewayDispatchEvents.MessageDeleteBulk,
	GatewayMessageDeleteBulkDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete-bulk
 */
export interface GatewayMessageDeleteBulkDispatchData {
	ids: string[];
	channel_id: string;
	guild_id?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-add
 */
export type GatewayMessageReactionAddDispatch = ReactionData<GatewayDispatchEvents.MessageReactionAdd>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-add
 */
export type GatewayMessageReactionAddDispatchData = GatewayMessageReactionAddDispatch['d'];

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove
 */
export type GatewayMessageReactionRemoveDispatch = ReactionData<GatewayDispatchEvents.MessageReactionRemove, 'member'>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove
 */
export type GatewayMessageReactionRemoveDispatchData = GatewayMessageReactionRemoveDispatch['d'];

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all
 */
export type GatewayMessageReactionRemoveAllDispatch = DataPayload<
	GatewayDispatchEvents.MessageReactionRemoveAll,
	GatewayMessageReactionRemoveAllDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all
 */
export type GatewayMessageReactionRemoveAllDispatchData = MessageReactionRemoveData;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji
 */
export type GatewayMessageReactionRemoveEmojiDispatch = DataPayload<
	GatewayDispatchEvents.MessageReactionRemoveEmoji,
	GatewayMessageReactionRemoveEmojiDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji
 */
export interface GatewayMessageReactionRemoveEmojiDispatchData extends MessageReactionRemoveData {
	emoji: APIEmoji;
}

/**
 * https://discord.com/developers/docs/topics/gateway#presence-update
 */
export type GatewayPresenceUpdateDispatch = DataPayload<
	GatewayDispatchEvents.PresenceUpdate,
	GatewayPresenceUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#presence-update
 */
export type GatewayPresenceUpdateDispatchData = RawGatewayPresenceUpdate;

/**
 * https://discord.com/developers/docs/topics/gateway#typing-start
 */
export type GatewayTypingStartDispatch = DataPayload<GatewayDispatchEvents.TypingStart, GatewayTypingStartDispatchData>;

/**
 * https://discord.com/developers/docs/topics/gateway#typing-start
 */
export interface GatewayTypingStartDispatchData {
	channel_id: string;
	guild_id?: string;
	user_id: string;
	timestamp: number;
	member?: APIGuildMember;
}

/**
 * https://discord.com/developers/docs/topics/gateway#user-update
 */
export type GatewayUserUpdateDispatch = DataPayload<GatewayDispatchEvents.UserUpdate, GatewayUserUpdateDispatchData>;

/**
 * https://discord.com/developers/docs/topics/gateway#user-update
 */
export type GatewayUserUpdateDispatchData = APIUser;

/**
 * https://discord.com/developers/docs/topics/gateway#voice-state-update
 */
export type GatewayVoiceStateUpdateDispatch = DataPayload<
	GatewayDispatchEvents.VoiceStateUpdate,
	GatewayVoiceStateUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#voice-state-update
 */
export type GatewayVoiceStateUpdateDispatchData = GatewayVoiceState;

/**
 * https://discord.com/developers/docs/topics/gateway#voice-server-update
 */
export type GatewayVoiceServerUpdateDispatch = DataPayload<
	GatewayDispatchEvents.VoiceServerUpdate,
	GatewayVoiceServerUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#voice-server-update
 */
export interface GatewayVoiceServerUpdateDispatchData {
	token: string;
	guild_id: string;
	endpoint: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#webhooks-update
 */
export type GatewayWebhooksUpdateDispatch = DataPayload<
	GatewayDispatchEvents.WebhooksUpdate,
	GatewayWebhooksUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#webhooks-update
 */
export interface GatewayWebhooksUpdateDispatchData {
	guild_id: string;
	channel_id: string;
}

// #endregion Dispatch Payloads

// #region Sendable Payloads

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating
 */
export interface GatewayHeartbeat {
	op: GatewayOPCodes.Heartbeat;
	d: GatewayHeartbeatData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating
 */
export type GatewayHeartbeatData = number | null;

/**
 * https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties
 */
export interface GatewayIdentifyProperties {
	$os: string;
	$browser: string;
	$device: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#identify
 */
export interface GatewayIdentify {
	op: GatewayOPCodes.Identify;
	d: GatewayIdentifyData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#identify
 */
export interface GatewayIdentifyData {
	token: string;
	properties: GatewayIdentifyProperties;
	compress?: boolean;
	large_threshold?: number;
	// eslint-disable-next-line prettier/prettier
	shard?: [shard_id: number, shard_count: number];
	presence?: GatewayPresenceUpdateData;
	guild_subscriptions?: boolean;
	intents: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#resume
 */
export interface GatewayResume {
	op: GatewayOPCodes.Resume;
	d: GatewayResumeData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#resume
 */
export interface GatewayResumeData {
	token: string;
	session_id: string;
	seq: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#request-guild-members
 */
export interface GatewayRequestGuildMembers {
	op: GatewayOPCodes.RequestGuildMembers;
	d: GatewayRequestGuildMembersData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#request-guild-members
 */
export interface GatewayRequestGuildMembersData {
	guild_id: string | string[];
	query?: string;
	limit: number;
	presences?: boolean;
	user_ids?: string | string[];
	nonce?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-voice-state
 */
export interface GatewayVoiceStateUpdate {
	op: GatewayOPCodes.VoiceStateUpdate;
	d: GatewayVoiceStateUpdateData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-voice-state
 */
export interface GatewayVoiceStateUpdateData {
	guild_id: string;
	channel_id: string | null;
	self_mute: boolean;
	self_deaf: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-status
 */
export interface GatewayUpdatePresence {
	op: GatewayOPCodes.PresenceUpdate;
	d: GatewayPresenceUpdateData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-status-gateway-status-update-structure
 */
export interface GatewayPresenceUpdateData {
	since: number | null;
	activities: GatewayActivityUpdateData[] | null;
	status: PresenceUpdateStatus;
	afk: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure
 */
export type GatewayActivityUpdateData = Pick<GatewayActivity, 'name' | 'type' | 'url'>;

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

interface MessageReactionRemoveData {
	channel_id: string;
	message_id: string;
	guild_id?: string;
}
// #endregion Shared

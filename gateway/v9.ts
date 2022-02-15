/**
 * Types extracted from https://discord.com/developers/docs/topics/gateway
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
	APIThreadChannel,
	APIThreadMember,
	APIUnavailableGuild,
	APIUser,
	GatewayActivity,
	GatewayPresenceUpdate as RawGatewayPresenceUpdate,
	GatewayThreadListSync as RawGatewayThreadListSync,
	GatewayThreadMembersUpdate as RawGatewayThreadMembersUpdate,
	GatewayVoiceState,
	InviteTargetType,
	PresenceUpdateStatus,
} from '../payloads/v9/index';
import type { Nullable } from '../utils/internals';

export * from './common';

export const GatewayVersion = '9';

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
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
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes
 */
export enum GatewayCloseCodes {
	/**
	 * We're not sure what went wrong. Try reconnecting?
	 */
	UnknownError = 4000,
	/**
	 * You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!
	 *
	 * See https://discord.com/developers/docs/topics/gateway#payloads-and-opcodes
	 */
	UnknownOpcode,
	/**
	 * You sent an invalid payload to us. Don't do that!
	 *
	 * See https://discord.com/developers/docs/topics/gateway#sending-payloads
	 */
	DecodeError,
	/**
	 * You sent us a payload prior to identifying
	 *
	 * See https://discord.com/developers/docs/topics/gateway#identify
	 */
	NotAuthenticated,
	/**
	 * The account token sent with your identify payload is incorrect
	 *
	 * See https://discord.com/developers/docs/topics/gateway#identify
	 */
	AuthenticationFailed,
	/**
	 * You sent more than one identify payload. Don't do that!
	 */
	AlreadyAuthenticated,
	/**
	 * The sequence sent when resuming the session was invalid. Reconnect and start a new session
	 *
	 * See https://discord.com/developers/docs/topics/gateway#resume
	 */
	InvalidSeq = 4007,
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
	 * See https://discord.com/developers/docs/topics/gateway#sharding
	 */
	InvalidShard,
	/**
	 * The session would have handled too many guilds - you are required to shard your connection in order to connect
	 *
	 * See https://discord.com/developers/docs/topics/gateway#sharding
	 */
	ShardingRequired,
	/**
	 * You sent an invalid version for the gateway
	 */
	InvalidAPIVersion,
	/**
	 * You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value
	 *
	 * See https://discord.com/developers/docs/topics/gateway#gateway-intents
	 */
	InvalidIntents,
	/**
	 * You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not
	 * enabled or are not whitelisted for
	 *
	 * See https://discord.com/developers/docs/topics/gateway#gateway-intents
	 *
	 * See https://discord.com/developers/docs/topics/gateway#privileged-intents
	 */
	DisallowedIntents,
}

/**
 * https://discord.com/developers/docs/topics/gateway#list-of-intents
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
 * https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
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
	ThreadCreate = 'THREAD_CREATE',
	ThreadDelete = 'THREAD_DELETE',
	ThreadListSync = 'THREAD_LIST_SYNC',
	ThreadMembersUpdate = 'THREAD_MEMBERS_UPDATE',
	ThreadMemberUpdate = 'THREAD_MEMBER_UPDATE',
	ThreadUpdate = 'THREAD_UPDATE',
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
	| GatewayGuildScheduledEventUpdateDispatch
	| GatewayGuildScheduledEventDeleteDispatch
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
	| GatewayStageInstanceCreateDispatch
	| GatewayStageInstanceDeleteDispatch
	| GatewayStageInstanceUpdateDispatch
	| GatewayReadyDispatch
	| GatewayResumedDispatch
	| GatewayThreadListSyncDispatch
	| GatewayThreadMembersUpdateDispatch
	| GatewayThreadMemberUpdateDispatch
	| GatewayThreadModifyDispatch
	| GatewayTypingStartDispatch
	| GatewayUserUpdateDispatch
	| GatewayVoiceServerUpdateDispatch
	| GatewayVoiceStateUpdateDispatch
	| GatewayWebhooksUpdateDispatch;

// #region Dispatch Payloads

/**
 * https://discord.com/developers/docs/topics/gateway#hello
 */
export interface GatewayHello extends NonDispatchPayload {
	op: GatewayOpcodes.Hello;
	d: GatewayHelloData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#hello
 */
export interface GatewayHelloData {
	/**
	 * The interval (in milliseconds) the client should heartbeat with
	 */
	heartbeat_interval: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating
 */
export interface GatewayHeartbeatRequest extends NonDispatchPayload {
	op: GatewayOpcodes.Heartbeat;
	d: never;
}

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating-example-gateway-heartbeat-ack
 */
export interface GatewayHeartbeatAck extends NonDispatchPayload {
	op: GatewayOpcodes.HeartbeatAck;
	d: never;
}

/**
 * https://discord.com/developers/docs/topics/gateway#invalid-session
 */
export interface GatewayInvalidSession extends NonDispatchPayload {
	op: GatewayOpcodes.InvalidSession;
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
	op: GatewayOpcodes.Reconnect;
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
	/**
	 * Gateway version
	 *
	 * See https://discord.com/developers/docs/topics/gateway#gateways-gateway-versions
	 */
	v: number;
	/**
	 * Information about the user including email
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	user: APIUser;
	/**
	 * The guilds the user is in
	 *
	 * See https://discord.com/developers/docs/resources/guild#unavailable-guild-object
	 */
	guilds: APIUnavailableGuild[];
	/**
	 * Used for resuming connections
	 */
	session_id: string;
	/**
	 * The shard information associated with this session, if sent when identifying
	 *
	 * See https://discord.com/developers/docs/topics/gateway#sharding
	 */
	shard?: [shard_id: number, shard_count: number];
	/**
	 * Contains `id` and `flags`
	 *
	 * See https://discord.com/developers/docs/resources/application#application-object
	 */
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

/**
 * https://discord.com/developers/docs/topics/gateway#channel-create
 */
export type GatewayChannelCreateDispatch = GatewayChannelModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-create
 */
export type GatewayChannelCreateDispatchData = GatewayChannelModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-update
 */
export type GatewayChannelUpdateDispatch = GatewayChannelModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-update
 */
export type GatewayChannelUpdateDispatchData = GatewayChannelModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-delete
 */
export type GatewayChannelDeleteDispatch = GatewayChannelModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#channel-delete
 */
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

/**
 * https://discord.com/developers/docs/topics/gateway#guild-create
 */
export type GatewayGuildCreateDispatch = GatewayGuildModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-create
 */
export type GatewayGuildCreateDispatchData = GatewayGuildModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-update
 */
export type GatewayGuildUpdateDispatch = GatewayGuildModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-update
 */
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
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The banned user
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	user: APIUser;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-add
 */
export type GatewayGuildBanAddDispatch = GatewayGuildBanModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-add
 */
export type GatewayGuildBanAddDispatchData = GatewayGuildBanModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-remove
 */
export type GatewayGuildBanRemoveDispatch = GatewayGuildBanModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-remove
 */
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
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * Array of emojis
	 *
	 * See https://discord.com/developers/docs/resources/emoji#emoji-object
	 */
	emojis: APIEmoji[];
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-stickers-update
 */
export type GatewayGuildStickersUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildStickersUpdate,
	GatewayGuildStickersUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-stickers-update
 */
export interface GatewayGuildStickersUpdateDispatchData {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * Array of stickers
	 *
	 * See https://discord.com/developers/docs/resources/sticker#sticker-object
	 */
	stickers: APISticker[];
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
	/**
	 * ID of the guild whose integrations were updated
	 */
	guild_id: Snowflake;
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
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
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
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The user who was removed
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
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
export type GatewayGuildMemberUpdateDispatchData = Omit<APIGuildMember, 'deaf' | 'mute' | 'user' | 'joined_at'> &
	Partial<Pick<APIGuildMember, 'deaf' | 'mute'>> &
	Required<Pick<APIGuildMember, 'user'>> &
	Nullable<Pick<APIGuildMember, 'joined_at'>> & {
		/**
		 * The id of the guild
		 */
		guild_id: Snowflake;
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
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * Set of guild members
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-member-object
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
	 * See https://discord.com/developers/docs/topics/gateway#presence
	 */
	presences?: RawGatewayPresenceUpdate[];
	/**
	 * The nonce used in the Guild Members Request
	 *
	 * See https://discord.com/developers/docs/topics/gateway#request-guild-members
	 */
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
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The role created or updated
	 *
	 * See https://discord.com/developers/docs/topics/permissions#role-object
	 */
	role: APIRole;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-create
 */
export type GatewayGuildRoleCreateDispatch = GatewayGuildRoleModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-create
 */
export type GatewayGuildRoleCreateDispatchData = GatewayGuildRoleModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-update
 */
export type GatewayGuildRoleUpdateDispatch = GatewayGuildRoleModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-update
 */
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
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The id of the role
	 */
	role_id: Snowflake;
}

export type GatewayGuildScheduledEventCreateDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventCreate,
	GatewayGuildScheduledEventCreateDispatchData
>;

export type GatewayGuildScheduledEventCreateDispatchData = APIGuildScheduledEvent;

export type GatewayGuildScheduledEventUpdateDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventUpdate,
	GatewayGuildScheduledEventUpdateDispatchData
>;

export type GatewayGuildScheduledEventUpdateDispatchData = APIGuildScheduledEvent;

export type GatewayGuildScheduledEventDeleteDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventDelete,
	GatewayGuildScheduledEventDeleteDispatchData
>;

export type GatewayGuildScheduledEventDeleteDispatchData = APIGuildScheduledEvent;

export type GatewayGuildScheduledEventUserAddDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventUserAdd,
	GatewayGuildScheduledEventUserAddDispatchData
>;

export interface GatewayGuildScheduledEventUserAddDispatchData {
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
	guild_id: Snowflake;
}

export type GatewayGuildScheduledEventUserRemoveDispatch = DataPayload<
	GatewayDispatchEvents.GuildScheduledEventUserRemove,
	GatewayGuildScheduledEventUserAddDispatchData
>;

export interface GatewayGuildScheduledEventUserRemoveDispatchData {
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
	guild_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/gateway#integration-create
 */
export type GatewayIntegrationCreateDispatch = DataPayload<
	GatewayDispatchEvents.IntegrationCreate,
	GatewayIntegrationCreateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#integration-create
 */
export type GatewayIntegrationCreateDispatchData = APIGuildIntegration & { guild_id: Snowflake };

/**
 * https://discord.com/developers/docs/topics/gateway#integration-update
 */
export type GatewayIntegrationUpdateDispatch = DataPayload<
	GatewayDispatchEvents.IntegrationUpdate,
	GatewayIntegrationUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#integration-update
 */
export type GatewayIntegrationUpdateDispatchData = APIGuildIntegration & { guild_id: Snowflake };

/**
 * https://discord.com/developers/docs/topics/gateway#integration-update
 */
export type GatewayIntegrationDeleteDispatch = DataPayload<
	GatewayDispatchEvents.IntegrationDelete,
	GatewayIntegrationDeleteDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#integration-delete
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
 * https://discord.com/developers/docs/topics/gateway#interaction-create
 */
export type GatewayInteractionCreateDispatch = DataPayload<
	GatewayDispatchEvents.InteractionCreate,
	GatewayInteractionCreateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#interaction-create
 */
export type GatewayInteractionCreateDispatchData = APIInteraction;

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
	/**
	 * The channel the invite is for
	 */
	channel_id: Snowflake;
	/**
	 * The unique invite code
	 *
	 * See https://discord.com/developers/docs/resources/invite#invite-object
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
	 * See https://discord.com/developers/docs/resources/user#user-object
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
	 * See https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types
	 */
	target_type?: InviteTargetType;
	/**
	 * The user whose stream to display for this voice channel stream invite
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
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
	 * See https://discord.com/developers/docs/resources/invite#invite-object
	 */
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
	id: Snowflake;
	channel_id: Snowflake;
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
	/**
	 * The emoji that was removed
	 */
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
 * https://discord.com/developers/docs/topics/gateway#stage-instance-create
 */
export type GatewayStageInstanceCreateDispatch = DataPayload<
	GatewayDispatchEvents.StageInstanceCreate,
	GatewayStageInstanceCreateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#stage-instance-create
 */
export type GatewayStageInstanceCreateDispatchData = APIStageInstance;

/**
 * https://discord.com/developers/docs/topics/gateway#stage-instance-delete
 */
export type GatewayStageInstanceDeleteDispatch = DataPayload<
	GatewayDispatchEvents.StageInstanceDelete,
	GatewayStageInstanceDeleteDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#stage-instance-delete
 */
export type GatewayStageInstanceDeleteDispatchData = APIStageInstance;

/**
 * https://discord.com/developers/docs/topics/gateway#stage-instance-update
 */
export type GatewayStageInstanceUpdateDispatch = DataPayload<
	GatewayDispatchEvents.StageInstanceUpdate,
	GatewayStageInstanceUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#stage-instance-update
 */
export type GatewayStageInstanceUpdateDispatchData = APIStageInstance;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-list-sync
 */
export type GatewayThreadListSyncDispatch = DataPayload<
	GatewayDispatchEvents.ThreadListSync,
	GatewayThreadListSyncDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-list-sync
 */
export type GatewayThreadListSyncDispatchData = RawGatewayThreadListSync;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-members-update
 */
export type GatewayThreadMembersUpdateDispatch = DataPayload<
	GatewayDispatchEvents.ThreadMembersUpdate,
	GatewayThreadMembersUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-members-update
 */
export type GatewayThreadMembersUpdateDispatchData = RawGatewayThreadMembersUpdate;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-member-update
 */
export type GatewayThreadMemberUpdateDispatch = DataPayload<
	GatewayDispatchEvents.ThreadMemberUpdate,
	GatewayThreadMemberUpdateDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-member-update
 */
export type GatewayThreadMemberUpdateDispatchData = APIThreadMember & { guild_id: Snowflake };

/**
 * https://discord.com/developers/docs/topics/gateway#thread-create
 * https://discord.com/developers/docs/topics/gateway#thread-update
 * https://discord.com/developers/docs/topics/gateway#thread-delete
 */
export type GatewayThreadModifyDispatch = DataPayload<
	GatewayDispatchEvents.ThreadCreate | GatewayDispatchEvents.ThreadDelete | GatewayDispatchEvents.ThreadUpdate,
	GatewayChannelModifyDispatchData
>;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-create
 */
export type GatewayThreadCreateDispatch = GatewayChannelModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-create
 */
export interface GatewayThreadCreateDispatchData extends APIThreadChannel {
	/**
	 * Whether the thread is newly created or not.
	 */
	newly_created?: true;
}

/**
 * https://discord.com/developers/docs/topics/gateway#thread-update
 */
export type GatewayThreadUpdateDispatch = GatewayChannelModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-update
 */
export type GatewayThreadUpdateDispatchData = GatewayChannelModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-delete
 */
export type GatewayThreadDeleteDispatch = GatewayChannelModifyDispatch;

/**
 * https://discord.com/developers/docs/topics/gateway#thread-delete
 */
export type GatewayThreadDeleteDispatchData = GatewayChannelModifyDispatchData;

/**
 * https://discord.com/developers/docs/topics/gateway#typing-start
 */
export type GatewayTypingStartDispatch = DataPayload<GatewayDispatchEvents.TypingStart, GatewayTypingStartDispatchData>;

/**
 * https://discord.com/developers/docs/topics/gateway#typing-start
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
	 * See https://discord.com/developers/docs/resources/guild#guild-member-object
	 */
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
 * https://discord.com/developers/docs/topics/gateway#heartbeating
 */
export interface GatewayHeartbeat {
	op: GatewayOpcodes.Heartbeat;
	d: GatewayHeartbeatData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#heartbeating
 */
export type GatewayHeartbeatData = number | null;

/**
 * https://discord.com/developers/docs/topics/gateway#identify
 */
export interface GatewayIdentify {
	op: GatewayOpcodes.Identify;
	d: GatewayIdentifyData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#identify
 */
export interface GatewayIdentifyData {
	/**
	 * Authentication token
	 */
	token: string;
	/**
	 * Connection properties
	 *
	 * See https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties
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
	 * See https://discord.com/developers/docs/topics/gateway#sharding
	 */
	shard?: [shard_id: number, shard_count: number];
	/**
	 * Presence structure for initial presence information
	 *
	 * See https://discord.com/developers/docs/topics/gateway#update-presence
	 */
	presence?: GatewayPresenceUpdateData;
	/**
	 * The Gateway Intents you wish to receive
	 *
	 * See https://discord.com/developers/docs/topics/gateway#gateway-intents
	 */
	intents: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties
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
 * https://discord.com/developers/docs/topics/gateway#resume
 */
export interface GatewayResume {
	op: GatewayOpcodes.Resume;
	d: GatewayResumeData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#resume
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
 * https://discord.com/developers/docs/topics/gateway#request-guild-members
 */
export interface GatewayRequestGuildMembers {
	op: GatewayOpcodes.RequestGuildMembers;
	d: GatewayRequestGuildMembersData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#request-guild-members
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
	 * See https://discord.com/developers/docs/topics/gateway#guild-members-chunk
	 */
	nonce?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-voice-state
 */
export interface GatewayVoiceStateUpdate {
	op: GatewayOpcodes.VoiceStateUpdate;
	d: GatewayVoiceStateUpdateData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-voice-state
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
 * https://discord.com/developers/docs/topics/gateway#update-status
 */
export interface GatewayUpdatePresence {
	op: GatewayOpcodes.PresenceUpdate;
	d: GatewayPresenceUpdateData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-presence-gateway-presence-update-structure
 */
export interface GatewayPresenceUpdateData {
	/**
	 * Unix time (in milliseconds) of when the client went idle, or `null` if the client is not idle
	 */
	since: number | null;
	/**
	 * The user's activities
	 *
	 * See https://discord.com/developers/docs/topics/gateway#activity-object
	 */
	activities: GatewayActivityUpdateData[];
	/**
	 * The user's new status
	 *
	 * See https://discord.com/developers/docs/topics/gateway#update-presence-status-types
	 */
	status: PresenceUpdateStatus;
	/**
	 * Whether or not the client is afk
	 */
	afk: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure
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

type NonDispatchPayload = Omit<BasePayload, 't' | 's'> & {
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
			 * See https://discord.com/developers/docs/resources/guild#guild-member-object
			 */
			member?: APIGuildMember;
			/**
			 * The emoji used to react
			 *
			 * See https://discord.com/developers/docs/resources/emoji#emoji-object
			 */
			emoji: APIEmoji;
		},
		O
	>
>;

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

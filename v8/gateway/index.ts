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
} from '../payloads/index';

export const GatewayVersion = '8';

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export const enum GatewayOPCodes {
	/**
	 * An event was dispatched
	 */
	Dispatch,
	/**
	 * Fired periodically by the client to keep the connection alive
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
export const enum GatewayCloseCodes {
	/**
	 * We're not sure what went wrong. Try reconnecting?
	 */
	UnknownError = 4000,
	/**
	 * You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!
	 *
	 * See https://discord.com/developers/docs/topics/gateway#payloads-and-opcodes
	 */
	UnknownOpCode,
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
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes
 */
export const enum VoiceOPCodes {
	/**
	 * Begin a voice websocket connection
	 */
	Identify,
	/**
	 * Select the voice protocol
	 */
	SelectProtocol,
	/**
	 * Complete the websocket handshake
	 */
	Ready,
	/**
	 * Keep the websocket connection alive
	 */
	Heartbeat,
	/**
	 * Describe the session
	 */
	SessionDescription,
	/**
	 * Indicate which users are speaking
	 */
	Speaking,
	/**
	 * Sent to acknowledge a received client heartbeat
	 */
	HeartbeatAck,
	/**
	 * Resume a connection
	 */
	Resume,
	/**
	 * Time to wait between sending heartbeats in milliseconds
	 */
	Hello,
	/**
	 * Acknowledge a successful session resume
	 */
	Resumed,
	/**
	 * A client has connected to the voice channel
	 */
	ClientConnect = 12,
	/**
	 * A client has disconnected from the voice channel
	 */
	ClientDisconnect,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes
 */
export const enum VoiceCloseCodes {
	/**
	 * You sent an invalid opcode
	 */
	UnknownOpCode = 4001,
	/**
	 * You sent a invalid payload in your identifying to the Gateway
	 */
	FailedToDecode,
	/**
	 * You sent a payload before identifying with the Gateway
	 */
	NotAuthenticated,
	/**
	 * The token you sent in your identify payload is incorrect
	 */
	AuthenticationFailed,
	/**
	 * You sent more than one identify payload. Stahp
	 */
	AlreadyAuthenticated,
	/**
	 * Your session is no longer valid
	 */
	SessionNoLongerValid,
	/**
	 * Your session has timed out
	 */
	SessionTimeout = 4009,
	/**
	 * We can't find the server you're trying to connect to
	 */
	ServerNotFound = 4011,
	/**
	 * We didn't recognize the protocol you sent
	 */
	UnknownProtocol,
	/**
	 * Either the channel was deleted or you were kicked. Should not reconnect
	 */
	Disconnected = 4014,
	/**
	 * The server crashed. Our bad! Try resuming
	 */
	VoiceServerCrashed,
	/**
	 * We didn't recognize your encryption
	 */
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
	/**
	 * The interval (in milliseconds) the client should heartbeat with
	 */
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
	 * Empty array
	 */
	private_channels: [];
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
	 * See https://discord.com/developers/docs/topics/oauth2#application-object
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
	guild_id?: string;
	/**
	 * The id of the channel
	 */
	channel_id: string;
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
	guild_id: string;
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
	guild_id: string;
	/**
	 * Array of emojis
	 *
	 * See https://discord.com/developers/docs/resources/emoji#emoji-object
	 */
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
	/**
	 * ID of the guild whose integrations were updated
	 */
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
	/**
	 * The id of the guild
	 */
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
	/**
	 * The id of the guild
	 */
	guild_id: string;
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
export type GatewayGuildMemberUpdateDispatchData = Omit<APIGuildMember, 'deaf' | 'mute'> & {
	/**
	 * The id of the guild
	 */
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
	/**
	 * The id of the guild
	 */
	guild_id: string;
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
	guild_id: string;
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
	guild_id: string;
	/**
	 * The id of the role
	 */
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
	/**
	 * The channel the invite is for
	 */
	channel_id: string;
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
	guild_id?: string;
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
	 * The target user for this invite
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	target_user?: APIUser;
	/**
	 * The type of user target for this invite
	 *
	 * See https://discord.com/developers/docs/resources/invite#invite-object-target-user-types
	 */
	target_user_type?: InviteTargetUserType;
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
	channel_id: string;
	/**
	 * The guild of the invite
	 */
	guild_id?: string;
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
	/**
	 * The id of the message
	 */
	id: string;
	/**
	 * The id of the channel
	 */
	channel_id: string;
	/**
	 * The id of the guild
	 */
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
	/**
	 * The ids of the messages
	 */
	ids: string[];
	/**
	 * The id of the channel
	 */
	channel_id: string;
	/**
	 * The id of the guild
	 */
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
	channel_id: string;
	/**
	 * The id of the guild
	 */
	guild_id?: string;
	/**
	 * The id of the user
	 */
	user_id: string;
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
	guild_id: string;
	/**
	 * The voice server host
	 */
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
	/**
	 * The id of the guild
	 */
	guild_id: string;
	/**
	 * The id of the channel
	 */
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
	 * See https://discord.com/developers/docs/topics/gateway#update-status
	 */
	presence?: GatewayPresenceUpdateData;
	/**
	 * Enables dispatching of guild subscription events (presence and typing events)
	 *
	 * @default true
	 * @deprecated Use `intents` instead
	 */
	guild_subscriptions?: boolean;
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
	op: GatewayOPCodes.Resume;
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
	op: GatewayOPCodes.RequestGuildMembers;
	d: GatewayRequestGuildMembersData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#request-guild-members
 */
export interface GatewayRequestGuildMembersData {
	/**
	 * ID of the guild to get members for
	 */
	guild_id: string | string[];
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
	user_ids?: string | string[];
	/**
	 * Nonce to identify the Guild Members Chunk response
	 *
	 * See https://discord.com/developers/docs/topics/gateway#guild-members-chunk
	 */
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
	/**
	 * ID of the guild
	 */
	guild_id: string;
	/**
	 * ID of the voice channel client wants to join (`null` if disconnecting)
	 */
	channel_id: string | null;
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
	op: GatewayOPCodes.PresenceUpdate;
	d: GatewayPresenceUpdateData;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-status-gateway-status-update-structure
 */
export interface GatewayPresenceUpdateData {
	/**
	 * Unix time (in milliseconds) of when the client went idle, or `null` if the client is not idle
	 */
	since: number | null;
	/**
	 * `null`, or the user's activities
	 *
	 * See https://discord.com/developers/docs/topics/gateway#activity-object
	 */
	activities: GatewayActivityUpdateData[] | null;
	/**
	 * The user's new status
	 *
	 * See https://discord.com/developers/docs/topics/gateway#update-status-status-types
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
	op: GatewayOPCodes;
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
			/**
			 * The id of the user
			 */
			user_id: string;
			/**
			 * The id of the channel
			 */
			channel_id: string;
			/**
			 * The id of the message
			 */
			message_id: string;
			/**
			 * The id of the guild
			 */
			guild_id?: string;
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
	channel_id: string;
	/**
	 * The id of the message
	 */
	message_id: string;
	/**
	 * The id of the guild
	 */
	guild_id?: string;
}
// #endregion Shared

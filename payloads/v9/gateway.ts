/**
 * Types extracted from
 *  - https://discord.com/developers/docs/topics/gateway
 *  - https://discord.com/developers/docs/topics/gateway-events
 */

import type { Snowflake } from '../../globals';
import type { APIThreadChannel, APIThreadMember } from './channel';
import type { APIEmoji } from './emoji';
import type { APIUser } from './user';

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway}
 */
export interface APIGatewayInfo {
	/**
	 * The WSS URL that can be used for connecting to the gateway
	 */
	url: string;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export interface APIGatewayBotInfo extends APIGatewayInfo {
	/**
	 * The recommended number of shards to use when connecting
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway#sharding}
	 */
	shards: number;
	/**
	 * Information on the current session start limit
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway#session-start-limit-object}
	 */
	session_start_limit: APIGatewaySessionStartLimit;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#session-start-limit-object}
 */
export interface APIGatewaySessionStartLimit {
	/**
	 * The total number of session starts the current user is allowed
	 */
	total: number;
	/**
	 * The remaining number of session starts the current user is allowed
	 */
	remaining: number;
	/**
	 * The number of milliseconds after which the limit resets
	 */
	reset_after: number;
	/**
	 * The number of identify requests allowed per 5 seconds
	 */
	max_concurrency: number;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence}
 */
export interface GatewayGuildMembersChunkPresence {
	/**
	 * The user presence is being updated for
	 *
	 * **The user object within this event can be partial, the only field which must be sent is the `id` field,
	 * everything else is optional.**
	 *
	 * @see {@link https://discord.com/developers/docs/resources/user#user-object}
	 */
	user: Partial<APIUser> & Pick<APIUser, 'id'>;
	/**
	 * Either "idle", "dnd", "online", or "offline"
	 */
	status?: PresenceUpdateReceiveStatus;
	/**
	 * User's current activities
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object}
	 */
	activities?: GatewayActivity[];
	/**
	 * User's platform-dependent status
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway-events#client-status-object}
	 */
	client_status?: GatewayPresenceClientStatus;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#presence-update-presence-update-event-fields}
 */
export interface GatewayPresenceUpdate extends GatewayGuildMembersChunkPresence {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence-status-types}
 */
export enum PresenceUpdateStatus {
	Online = 'online',
	DoNotDisturb = 'dnd',
	Idle = 'idle',
	/**
	 * Invisible and shown as offline
	 */
	Invisible = 'invisible',
	Offline = 'offline',
}

export type PresenceUpdateReceiveStatus = Exclude<PresenceUpdateStatus, PresenceUpdateStatus.Invisible>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#client-status-object}
 */
export interface GatewayPresenceClientStatus {
	/**
	 * The user's status set for an active desktop (Windows, Linux, Mac) application session
	 */
	desktop?: PresenceUpdateReceiveStatus;
	/**
	 * The user's status set for an active mobile (iOS, Android) application session
	 */
	mobile?: PresenceUpdateReceiveStatus;
	/**
	 * The user's status set for an active web (browser, bot account) application session
	 */
	web?: PresenceUpdateReceiveStatus;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-structure}
 */
export interface GatewayActivity {
	/**
	 * The activity's id
	 */
	id: string;
	/**
	 * The activity's name
	 */
	name: string;
	/**
	 * Activity type
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types}
	 */
	type: ActivityType;
	/**
	 * Stream url, is validated when type is `1`
	 */
	url?: string | null;
	/**
	 * Unix timestamp of when the activity was added to the user's session
	 */
	created_at: number;
	/**
	 * Unix timestamps for start and/or end of the game
	 */
	timestamps?: GatewayActivityTimestamps;
	sync_id?: string;
	/**
	 * {@link ActivityPlatform}
	 */
	platform?: string;
	/**
	 * Application id for the game
	 */
	application_id?: Snowflake;
	/**
	 * What the player is currently doing
	 */
	details?: string | null;
	/**
	 * The user's current party status, or the text used for a custom status
	 */
	state?: string | null;
	/**
	 * The emoji used for a custom status
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-emoji}
	 */
	emoji?: GatewayActivityEmoji;
	session_id?: string;
	/**
	 * Information for the current party of the player
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-party}
	 */
	party?: GatewayActivityParty;
	/**
	 * Images for the presence and their hover texts
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-assets}
	 */
	assets?: GatewayActivityAssets;
	/**
	 * Secrets for Rich Presence joining and spectating
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-secrets}
	 */
	secrets?: GatewayActivitySecrets;
	/**
	 * Whether or not the activity is an instanced game session
	 */
	instance?: boolean;
	/**
	 * Activity flags `OR`d together, describes what the payload includes
	 *
	 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags?: ActivityFlags;
	/**
	 * The custom buttons shown in the Rich Presence (max 2)
	 */
	buttons?: GatewayActivityButton[] | string[];
}

/**
 * @unstable This enum is currently not documented by Discord but has known values which we will try to keep up to date.
 * Values might be added or removed without a major version bump.
 */
export enum ActivityPlatform {
	Desktop = 'desktop',
	Xbox = 'xbox',
	Samsung = 'samsung',
	IOS = 'ios',
	Android = 'android',
	Embedded = 'embedded',
	PS4 = 'ps4',
	PS5 = 'ps5',
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types}
 */
export enum ActivityType {
	/**
	 * Playing \{game\}
	 */
	Playing,
	/**
	 * Streaming \{details\}
	 */
	Streaming,
	/**
	 * Listening to \{name\}
	 */
	Listening,
	/**
	 * Watching \{details\}
	 */
	Watching,
	/**
	 * \{emoji\} \{state\}
	 */
	Custom,
	/**
	 * Competing in \{name\}
	 */
	Competing,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-timestamps}
 */
export interface GatewayActivityTimestamps {
	/**
	 * Unix time (in milliseconds) of when the activity started
	 */
	start?: number;
	/**
	 * Unix time (in milliseconds) of when the activity ends
	 */
	end?: number;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-emoji}
 */
export type GatewayActivityEmoji = Partial<Pick<APIEmoji, 'animated' | 'id'>> & Pick<APIEmoji, 'name'>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-party}
 */
export interface GatewayActivityParty {
	/**
	 * The id of the party
	 */
	id?: string;
	/**
	 * Used to show the party's current and maximum size
	 */
	size?: [current_size: number, max_size: number];
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-assets}
 */
export type GatewayActivityAssets = Partial<
	Record<'large_image' | 'large_text' | 'small_image' | 'small_text', string>
>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-secrets}
 */
export type GatewayActivitySecrets = Partial<Record<'join' | 'match' | 'spectate', string>>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-flags}
 */
export enum ActivityFlags {
	Instance = 1 << 0,
	Join = 1 << 1,
	Spectate = 1 << 2,
	JoinRequest = 1 << 3,
	Sync = 1 << 4,
	Play = 1 << 5,
	PartyPrivacyFriends = 1 << 6,
	PartyPrivacyVoiceChannel = 1 << 7,
	Embedded = 1 << 8,
}

export interface GatewayActivityButton {
	/**
	 * The text shown on the button (1-32 characters)
	 */
	label: string;
	/**
	 * The url opened when clicking the button (1-512 characters)
	 */
	url: string;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-list-sync-thread-list-sync-event-fields}
 */
export interface GatewayThreadListSync {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The ids of all the parent channels whose threads are being synced, otherwise the entire guild
	 */
	channel_ids?: Snowflake[];
	/**
	 * Array of the synced threads
	 */
	threads: APIThreadChannel[];
	/**
	 * The member objects for the client user in each joined thread that was synced
	 */
	members: APIThreadMember[];
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-members-update-thread-members-update-event-fields}
 */
export interface GatewayThreadMembersUpdate {
	/**
	 * The id of the thread for which members are being synced
	 */
	id: Snowflake;
	/**
	 * The id of the guild that the thread is in
	 */
	guild_id: Snowflake;
	/**
	 * The approximate member count of the thread, does not count above 50 even if there are more members
	 */
	member_count: number;
	/**
	 * The members that were added to the thread
	 */
	added_members?: APIThreadMember[];
	/**
	 * The ids of the members that were removed from the thread
	 */
	removed_member_ids?: Snowflake[];
}

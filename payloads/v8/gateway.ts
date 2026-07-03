/**
 * Types extracted from https://docs.discord.com/developers/topics/gateway
 */

import type { Snowflake } from '../../globals';
import type { APIEmoji } from './emoji';
import type { APIUser } from './user';

/**
 * https://docs.discord.com/developers/topics/gateway#get-gateway
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIGatewayInfo {
	/**
	 * The WSS URL that can be used for connecting to the gateway
	 */
	url: string;
}

/**
 * https://docs.discord.com/developers/topics/gateway#get-gateway-bot
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIGatewayBotInfo extends APIGatewayInfo {
	/**
	 * The recommended number of shards to use when connecting
	 *
	 * See https://docs.discord.com/developers/topics/gateway#sharding
	 */
	shards: number;
	/**
	 * Information on the current session start limit
	 *
	 * See https://docs.discord.com/developers/topics/gateway#session-start-limit-object
	 */
	session_start_limit: APIGatewaySessionStartLimit;
}

/**
 * https://docs.discord.com/developers/topics/gateway#session-start-limit-object
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
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
 * https://docs.discord.com/developers/topics/gateway#presence-update-presence-update-event-fields
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayPresenceUpdate {
	/**
	 * The user presence is being updated for
	 *
	 * **The user object within this event can be partial, the only field which must be sent is the `id` field,
	 * everything else is optional.**
	 *
	 * See https://docs.discord.com/developers/resources/user#user-object
	 */
	user: Partial<APIUser> & Pick<APIUser, 'id'>;
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * Either "idle", "dnd", "online", or "offline"
	 */
	status?: PresenceUpdateStatus;
	/**
	 * User's current activities
	 *
	 * See https://docs.discord.com/developers/topics/gateway#activity-object
	 */
	activities?: GatewayActivity[];
	/**
	 * User's platform-dependent status
	 *
	 * See https://docs.discord.com/developers/topics/gateway#client-status-object
	 */
	client_status?: GatewayPresenceClientStatus;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
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

/**
 * https://docs.discord.com/developers/topics/gateway#client-status-object
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface GatewayPresenceClientStatus {
	/**
	 * The user's status set for an active desktop (Windows, Linux, Mac) application session
	 */
	desktop?: PresenceUpdateStatus;
	/**
	 * The user's status set for an active mobile (iOS, Android) application session
	 */
	mobile?: PresenceUpdateStatus;
	/**
	 * The user's status set for an active web (browser, bot account) application session
	 */
	web?: PresenceUpdateStatus;
}

/**
 * https://docs.discord.com/developers/topics/gateway#activity-object-activity-structure
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
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
	 * See https://docs.discord.com/developers/topics/gateway#activity-object-activity-types
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
	platform?: ActivityPlatform;
	/**
	 * Application id for the game
	 */
	application_id?: Snowflake;
	/**
	 * What the player is currently doing
	 */
	details?: string | null;
	/**
	 * The user's current party status
	 */
	state?: string | null;
	/**
	 * The emoji used for a custom status
	 *
	 * See https://docs.discord.com/developers/topics/gateway#activity-object-activity-emoji
	 */
	emoji?: GatewayActivityEmoji;
	session_id?: string;
	/**
	 * Information for the current party of the player
	 *
	 * See https://docs.discord.com/developers/topics/gateway#activity-object-activity-party
	 */
	party?: GatewayActivityParty;
	/**
	 * Images for the presence and their hover texts
	 *
	 * See https://docs.discord.com/developers/topics/gateway#activity-object-activity-assets
	 */
	assets?: GatewayActivityAssets;
	/**
	 * Secrets for Rich Presence joining and spectating
	 *
	 * See https://docs.discord.com/developers/topics/gateway#activity-object-activity-secrets
	 */
	secrets?: GatewayActivitySecrets;
	/**
	 * Whether or not the activity is an instanced game session
	 */
	instance?: boolean;
	/**
	 * Activity flags `OR`d together, describes what the payload includes
	 *
	 * See https://docs.discord.com/developers/topics/gateway#activity-object-activity-flags
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 */
	flags?: ActivityFlags;
	/**
	 * The custom buttons shown in the Rich Presence (max 2)
	 */
	buttons?: GatewayActivityButton[] | string[];
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export enum ActivityPlatform {
	Desktop = 'desktop',
	Samsung = 'samsung',
	Xbox = 'xbox',
}

/**
 * https://docs.discord.com/developers/topics/gateway#activity-object-activity-types
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export enum ActivityType {
	/**
	 * Playing {game}
	 */
	Playing,
	/**
	 * Streaming {details}
	 */
	Streaming,
	/**
	 * Listening to {name}
	 */
	Listening,
	/**
	 * Watching {details}
	 */
	Watching,
	/**
	 * {emoji} {details}
	 */
	Custom,
	/**
	 * Competing in {name}
	 */
	Competing,
}

/**
 * https://docs.discord.com/developers/topics/gateway#activity-object-activity-timestamps
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
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
 * https://docs.discord.com/developers/topics/gateway#activity-object-activity-emoji
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayActivityEmoji = Partial<Pick<APIEmoji, 'animated' | 'id'>> & Pick<APIEmoji, 'name'>;

/**
 * https://docs.discord.com/developers/topics/gateway#activity-object-activity-party
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
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
 * https://docs.discord.com/developers/topics/gateway#activity-object-activity-assets
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayActivityAssets = Partial<
	Record<'large_image' | 'large_text' | 'small_image' | 'small_text', string>
>;

/**
 * https://docs.discord.com/developers/topics/gateway#activity-object-activity-secrets
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type GatewayActivitySecrets = Partial<Record<'join' | 'match' | 'spectate', string>>;

/**
 * https://docs.discord.com/developers/topics/gateway#activity-object-activity-flags
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
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

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
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

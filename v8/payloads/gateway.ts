/**
 * Types extracted from https://discord.com/developers/docs/topics/gateway
 */

import type { APIEmoji } from './emoji';
import type { APIUser } from './user';

/**
 * https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface APIGatewayInfo {
	url: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#get-gateway-bot
 */
export interface APIGatewayBotInfo extends APIGatewayInfo {
	shards: number;
	session_start_limit: APIGatewaySessionStartLimit;
}

/**
 * https://discord.com/developers/docs/topics/gateway#session-start-limit-object
 */
export interface APIGatewaySessionStartLimit {
	total: number;
	remaining: number;
	reset_after: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields
 */
export interface GatewayPresenceUpdate {
	user: Partial<APIUser> & {
		id: string;
	};
	guild_id?: string;
	status?: PresenceUpdateStatus;
	activities?: GatewayActivity[];
	client_status?: GatewayPresenceClientStatus;
}

export const enum PresenceUpdateStatus {
	DoNotDisturb = 'dnd',
	Idle = 'idle',
	Invisible = 'invisible',
	Offline = 'offline',
	Online = 'online',
}

/**
 * https://discord.com/developers/docs/topics/gateway#client-status-object
 */
export type GatewayPresenceClientStatus = Partial<Record<'desktop' | 'mobile' | 'web', PresenceUpdateStatus>>;

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure
 */
export interface GatewayActivity {
	id: string;
	name: string;
	type: ActivityType;
	url?: string | null;
	created_at: number;
	timestamps?: GatewayActivityTimestamps;
	sync_id?: string;
	platform?: ActivityPlatform;
	application_id?: string;
	details?: string | null;
	state?: string | null;
	emoji?: GatewayActivityEmoji;
	session_id?: string;
	party?: GatewayActivityParty;
	assets?: GatewayActivityAssets;
	secrets?: GatewayActivitySecrets;
	instance?: boolean;
	flags?: ActivityFlags;
	buttons?: string[] | GatewayActivityButton[];
}

export enum ActivityPlatform {
	Desktop = 'desktop',
	Samsung = 'samsung',
	Xbox = 'xbox',
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
 */
export const enum ActivityType {
	Game,
	Streaming,
	Listening,

	Custom = 4,
	Competing,
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps
 */
export interface GatewayActivityTimestamps {
	start?: number;
	end?: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji
 */
export type GatewayActivityEmoji = Partial<Pick<APIEmoji, 'name' | 'animated'>> & Pick<APIEmoji, 'id'>;

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
 */
export interface GatewayActivityParty {
	id?: string;
	// eslint-disable-next-line prettier/prettier
  size?: [currentSize: number, maxSize: number];
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
 */
export type GatewayActivityAssets = Partial<
	Record<'large_image' | 'large_text' | 'small_image' | 'small_text', string>
>;

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets
 */
export type GatewayActivitySecrets = Partial<Record<'join' | 'spectate' | 'match', string>>;

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags
 */
export const enum ActivityFlags {
	INSTANCE = 1 << 0,
	JOIN = 1 << 1,
	SPECTATE = 1 << 2,
	JOIN_REQUEST = 1 << 3,
	SYNC = 1 << 4,
	PLAY = 1 << 5,
}

export interface GatewayActivityButton {
	label: string;
	url: string;
}

/**
 * Types extracted from https://discord.com/developers/docs/topics/permissions
 */

import type { Permissions, Snowflake } from '../../globals.ts';

/**
 * https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 *
 * These flags are exported as `BigInt`s and NOT numbers. Wrapping them in `Number()`
 * may cause issues, try to use BigInts as much as possible or modules that can
 * replicate them in some way
 */
export const PermissionFlagsBits = {
	CREATE_INSTANT_INVITE: 1n << 0n,
	KICK_MEMBERS: 1n << 1n,
	BAN_MEMBERS: 1n << 2n,
	ADMINISTRATOR: 1n << 3n,
	MANAGE_CHANNELS: 1n << 4n,
	MANAGE_GUILD: 1n << 5n,
	ADD_REACTIONS: 1n << 6n,
	VIEW_AUDIT_LOG: 1n << 7n,
	PRIORITY_SPEAKER: 1n << 8n,
	STREAM: 1n << 9n,
	VIEW_CHANNEL: 1n << 10n,
	SEND_MESSAGES: 1n << 11n,
	SEND_TTS_MESSAGES: 1n << 12n,
	MANAGE_MESSAGES: 1n << 13n,
	EMBED_LINKS: 1n << 14n,
	ATTACH_FILES: 1n << 15n,
	READ_MESSAGE_HISTORY: 1n << 16n,
	MENTION_EVERYONE: 1n << 17n,
	USE_EXTERNAL_EMOJIS: 1n << 18n,
	VIEW_GUILD_INSIGHTS: 1n << 19n,
	CONNECT: 1n << 20n,
	SPEAK: 1n << 21n,
	MUTE_MEMBERS: 1n << 22n,
	DEAFEN_MEMBERS: 1n << 23n,
	MOVE_MEMBERS: 1n << 24n,
	USE_VAD: 1n << 25n,
	CHANGE_NICKNAME: 1n << 26n,
	MANAGE_NICKNAMES: 1n << 27n,
	MANAGE_ROLES: 1n << 28n,
	MANAGE_WEBHOOKS: 1n << 29n,
	MANAGE_EMOJIS: 1n << 30n,
	USE_SLASH_COMMANDS: 1n << 31n,
	REQUEST_TO_SPEAK: 1n << 32n,
} as const;

/**
 * Freeze the object of bits, preventing any modifications to it
 * @internal
 */
Object.freeze(PermissionFlagsBits);

/**
 * https://discord.com/developers/docs/topics/permissions#role-object
 */
export interface APIRole {
	/**
	 * Role id
	 */
	id: Snowflake;
	/**
	 * Role name
	 */
	name: string;
	/**
	 * Integer representation of hexadecimal color code
	 */
	color: number;
	/**
	 * If this role is pinned in the user listing
	 */
	hoist: boolean;
	/**
	 * Position of this role
	 */
	position: number;
	/**
	 * Permission bit set
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 */
	permissions: Permissions;
	/**
	 * Whether this role is managed by an integration
	 */
	managed: boolean;
	/**
	 * Whether this role is mentionable
	 */
	mentionable: boolean;
	/**
	 * The tags this role has
	 */
	tags?: APIRoleTags;
}

/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export interface APIRoleTags {
	/**
	 * The id of the bot this role belongs to
	 */
	bot_id?: Snowflake;
	/**
	 * Whether this is the guild's premium subscriber role
	 */
	premium_subscriber?: null;
	/**
	 * The id of the integration this role belongs to
	 */
	integration_id?: Snowflake;
}

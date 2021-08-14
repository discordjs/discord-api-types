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
	CreateInstantInvite: 1n << 0n,
	KickMembers: 1n << 1n,
	BanMembers: 1n << 2n,
	Administrator: 1n << 3n,
	ManageChannels: 1n << 4n,
	ManageGuild: 1n << 5n,
	AddReactions: 1n << 6n,
	ViewAuditLog: 1n << 7n,
	PrioritySpeaker: 1n << 8n,
	Stream: 1n << 9n,
	ViewChannel: 1n << 10n,
	SendMessages: 1n << 11n,
	SendTTSMessages: 1n << 12n,
	ManageMessages: 1n << 13n,
	EmbedLinks: 1n << 14n,
	AttachFiles: 1n << 15n,
	ReadMessageHistory: 1n << 16n,
	MentionEveryone: 1n << 17n,
	UseExternalEmojis: 1n << 18n,
	ViewGuildInsights: 1n << 19n,
	Connect: 1n << 20n,
	Speak: 1n << 21n,
	MuteMembers: 1n << 22n,
	DeafenMembers: 1n << 23n,
	MoveMembers: 1n << 24n,
	UseVAD: 1n << 25n,
	ChangeNickname: 1n << 26n,
	ManageNicknames: 1n << 27n,
	ManageRoles: 1n << 28n,
	ManageWebhooks: 1n << 29n,
	ManageEmojisAndStickers: 1n << 30n,
	UseApplicationCommands: 1n << 31n,
	RequestToSpeak: 1n << 32n,
	ManageThreads: 1n << 34n,
	UsePublicThreads: 1n << 35n,
	UsePrivateThreads: 1n << 36n,
	UseExternalStickers: 1n << 37n,
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

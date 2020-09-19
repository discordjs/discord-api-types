/**
 * Types extracted from https://discord.com/developers/docs/topics/permissions
 */

/**
 * https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 *
 * These flags are exported as `BigInt`s and NOT numbers. For most of them, you can
 * convert them in a number by wrapping it in `Number()`, however be careful as any
 * further bits added may cause issues if done so. Try to use BigInts as much as possible
 * or modules that can replicate them in some way.
 */
export const PermissionFlagsBits = {
	CREATE_INSTANT_INVITE: 1n,
	KICK_MEMBERS: 2n,
	BAN_MEMBERS: 4n,
	ADMINISTRATOR: 8n,
	MANAGE_CHANNELS: 16n,
	MANAGE_GUILD: 32n,
	ADD_REACTIONS: 64n,
	VIEW_AUDIT_LOG: 128n,
	PRIORITY_SPEAKER: 256n,
	STREAM: 512n,
	VIEW_CHANNEL: 1024n,
	SEND_MESSAGES: 2048n,
	SEND_TTS_MESSAGES: 4096n,
	MANAGE_MESSAGES: 8192n,
	EMBED_LINKS: 16384n,
	ATTACH_FILES: 32768n,
	READ_MESSAGE_HISTORY: 65536n,
	MENTION_EVERYONE: 131072n,
	USE_EXTERNAL_EMOJIS: 262144n,
	VIEW_GUILD_INSIGHTS: 524288n,
	CONNECT: 1048576n,
	SPEAK: 2097152n,
	MUTE_MEMBERS: 4194304n,
	DEAFEN_MEMBERS: 8388608n,
	MOVE_MEMBERS: 16777216n,
	USE_VAD: 33554432n,
	CHANGE_NICKNAME: 67108864n,
	MANAGE_NICKNAMES: 134217728n,
	MANAGE_ROLES: 268435456n,
	MANAGE_WEBHOOKS: 536870912n,
	MANAGE_EMOJIS: 1073741824n,
} as const;

/**
 * Freeze the object of bits, preventing any modifications to it.
 * @internal
 */
Object.freeze(PermissionFlagsBits);

/**
 * https://discord.com/developers/docs/topics/permissions#role-object
 */
export interface APIRole {
	id: string;
	name: string;
	color: number;
	hoist: boolean;
	position: number;
	/**
	 * @deprecated Use `permissions_new` instead
	 */
	permissions: number;
	permissions_new: string;
	managed: boolean;
	mentionable: boolean;
	tags?: APIRoleTags;
}

export interface APIRoleTags {
	bot_id?: string;
	premium_subscriber?: null;
	integration_id?: string;
}

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
 *
 * @deprecated API and Gateway v6 are deprecated and the types will not receive further updates, please update to v8.
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
	VIEW_CHANNEL: 1_024n,
	SEND_MESSAGES: 2_048n,
	SEND_TTS_MESSAGES: 4_096n,
	MANAGE_MESSAGES: 8_192n,
	EMBED_LINKS: 16_384n,
	ATTACH_FILES: 32_768n,
	READ_MESSAGE_HISTORY: 65_536n,
	MENTION_EVERYONE: 131_072n,
	USE_EXTERNAL_EMOJIS: 262_144n,
	VIEW_GUILD_INSIGHTS: 524_288n,
	CONNECT: 1_048_576n,
	SPEAK: 2_097_152n,
	MUTE_MEMBERS: 4_194_304n,
	DEAFEN_MEMBERS: 8_388_608n,
	MOVE_MEMBERS: 16_777_216n,
	USE_VAD: 33_554_432n,
	CHANGE_NICKNAME: 67_108_864n,
	MANAGE_NICKNAMES: 134_217_728n,
	MANAGE_ROLES: 268_435_456n,
	MANAGE_WEBHOOKS: 536_870_912n,
	MANAGE_EMOJIS: 1_073_741_824n,
} as const;

/**
 * Freeze the object of bits, preventing any modifications to it.
 *
 * @internal
 */
Object.freeze(PermissionFlagsBits);

/**
 * https://discord.com/developers/docs/topics/permissions#role-object
 *
 * @deprecated API and Gateway v6 are deprecated and the types will not receive further updates, please update to v8.
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

/**
 * @deprecated API and Gateway v6 are deprecated and the types will not receive further updates, please update to v8.
 */
export interface APIRoleTags {
	bot_id?: string;
	premium_subscriber?: null;
	integration_id?: string;
}

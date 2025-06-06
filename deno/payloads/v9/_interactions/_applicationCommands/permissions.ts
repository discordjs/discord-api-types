import type { Snowflake } from '../../../../globals.ts';

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure}
 */
export interface APIGuildApplicationCommandPermissions {
	/**
	 * The id of the command or the application id if that permission applies to all commands
	 */
	id: Snowflake;
	/**
	 * The id of the application the command belongs to
	 */
	application_id: Snowflake;
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The permissions for the command in the guild
	 */
	permissions: APIApplicationCommandPermission[];
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure}
 */
export interface APIApplicationCommandPermission {
	/**
	 * The id of the role, user or channel. Can also be a permission constant
	 */
	id: Snowflake;
	/**
	 * Role, user or channel
	 */
	type: ApplicationCommandPermissionType;
	/**
	 * `true` to allow, `false`, to disallow
	 */
	permission: boolean;
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type}
 */
export enum ApplicationCommandPermissionType {
	Role = 1,
	User,
	Channel,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-constants}
 */
export const APIApplicationCommandPermissionsConstant = {
	// eslint-disable-next-line unicorn/prefer-native-coercion-functions
	Everyone: (guildId: bigint | string): Snowflake => String(guildId),
	AllChannels: (guildId: bigint | string): Snowflake => String(BigInt(guildId) - 1n),
};

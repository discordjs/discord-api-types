import type { Snowflake } from '../../../../globals';

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
 */
export interface APIGuildApplicationCommandPermissions {
	/**
	 * The id of the command
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
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure
 */
export interface APIApplicationCommandPermission {
	/**
	 * The id of the role or user
	 */
	id: Snowflake;
	/**
	 * Role or user
	 */
	type: ApplicationCommandPermissionType;
	/**
	 * `true` to allow, `false`, to disallow
	 */
	permission: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type
 */
export enum ApplicationCommandPermissionType {
	Role = 1,
	User,
}

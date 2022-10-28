import type { Permissions, Snowflake } from '../../globals.ts';
import type { APIChannel, APIConnection, APIGuildMember, APIUser, GuildFeature } from '../../payloads/v10/mod.ts';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface } from '../../utils/internals.ts';

/**
 * https://discord.com/developers/docs/resources/user#get-current-user
 */
export type RESTGetAPICurrentUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#get-user
 */
export type RESTGetAPIUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guild-member
 */
export type RESTGetCurrentUserGuildMemberResult = APIGuildMember;

/**
 * https://discord.com/developers/docs/resources/user#modify-current-user
 */
export type RESTPatchAPICurrentUserJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * User's username, if changed may cause the user's discriminator to be randomized
	 */
	username?: string;
	/**
	 * If passed, modifies the user's avatar
	 */
	avatar?: string | null;
}>;

/**
 * https://discord.com/developers/docs/resources/user#modify-current-user
 */
export type RESTPatchAPICurrentUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guilds
 */
export interface RESTGetAPICurrentUserGuildsQuery {
	/**
	 * Get guilds before this guild ID
	 */
	before?: Snowflake;
	/**
	 * Get guilds after this guild ID
	 */
	after?: Snowflake;
	/**
	 * Max number of guilds to return (1-200)
	 *
	 * @default 200
	 */
	limit?: number;
}

export interface RESTAPIPartialCurrentUserGuild {
	id: Snowflake;
	name: string;
	icon: string | null;
	owner: boolean;
	features: GuildFeature[];
	permissions: Permissions;
}

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guilds
 */
export type RESTGetAPICurrentUserGuildsResult = RESTAPIPartialCurrentUserGuild[];

/**
 * https://discord.com/developers/docs/resources/user#leave-guild
 */
export type RESTDeleteAPICurrentUserGuildResult = never;

/**
 * https://discord.com/developers/docs/resources/user#create-dm
 */
export interface RESTPostAPICurrentUserCreateDMChannelJSONBody {
	/**
	 * The recipient to open a DM channel with
	 */
	recipient_id: string;
}

/**
 * https://discord.com/developers/docs/resources/user#create-dm
 */
export type RESTPostAPICurrentUserCreateDMChannelResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/user#get-user-connections
 */
export type RESTGetAPICurrentUserConnectionsResult = APIConnection[];

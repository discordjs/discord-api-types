import type { Permissions, Snowflake } from '../../globals';
import type { APIChannel, APIConnection, APIGuildMember, APIUser, GuildFeature } from '../../payloads/v8/index';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface } from '../../utils/internals';

/**
 * https://discord.com/developers/docs/resources/user#get-current-user
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPICurrentUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#get-user
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/guild#get-current-user-guild-member
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetCurrentUserGuildMemberResult = APIGuildMember;

/**
 * https://discord.com/developers/docs/resources/user#modify-current-user
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
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
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPatchAPICurrentUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guilds
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
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
	 * Max number of guilds to return (1-100)
	 *
	 * @default 100
	 */
	limit?: number;
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
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
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPICurrentUserGuildsResult = RESTAPIPartialCurrentUserGuild[];

/**
 * https://discord.com/developers/docs/resources/user#leave-guild
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTDeleteAPICurrentUserGuildResult = never;

/**
 * https://discord.com/developers/docs/resources/user#create-dm
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface RESTPostAPICurrentUserCreateDMChannelJSONBody {
	/**
	 * The recipient to open a DM channel with
	 */
	recipient_id: string;
}

/**
 * https://discord.com/developers/docs/resources/user#create-dm
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPostAPICurrentUserCreateDMChannelResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/user#get-user-connections
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPICurrentUserConnectionsResult = APIConnection[];

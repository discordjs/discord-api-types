import type { APIChannel, APIConnection, APIUser, GuildFeature } from '../payloads';

/**
 * https://discord.com/developers/docs/resources/user#get-current-user
 */
export type RESTGetAPICurrentUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#get-user
 */
export type RESTGetAPIUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#modify-current-user
 */
export interface RESTPatchAPICurrentUserJSONBody {
	username?: string;
	avatar?: string | null;
}

export type RESTPatchAPICurrentUserResult = APIUser;

/**
 * https://discord.com/developers/docs/resources/user#get-current-user-guilds
 */
export interface RESTGetAPICurrentUserGuildsQuery {
	before?: string;
	after?: string;
	limit?: number;
}

export interface RESTAPIPartialCurrentUserGuild {
	id: string;
	name: string;
	icon: string | null;
	owner: boolean;
	features: GuildFeature[];
	permissions: string;
}

export type RESTGetAPICurrentUserGuildsResult = RESTAPIPartialCurrentUserGuild[];

/**
 * https://discord.com/developers/docs/resources/user#leave-guild
 */
export type RESTDeleteAPICurrentUserGuildResult = never;

/**
 * https://discord.com/developers/docs/resources/user#create-dm
 */
export interface RESTPostAPICurrentUserCreateDMChannelJSONBody {
	recipient_id: string;
}

export type RESTPostAPICurrentUserCreateDMChannelResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/user#get-user-connections
 */
export type RESTGetAPICurrentUserConnectionsResult = APIConnection[];

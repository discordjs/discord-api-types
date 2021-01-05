/**
 * Types extracted from https://discord.com/developers/docs/topics/oauth2
 */

import type { Snowflake } from '../../common/index';
import type { APITeam } from './teams';
import type { APIUser } from './user';

/**
 * https://discord.com/developers/docs/topics/oauth2#get-current-application-information-response-structure
 */
export interface APIApplication {
	/**
	 * The id of the app
	 */
	id: Snowflake;
	/**
	 * The name of the app
	 */
	name: string;
	/**
	 * The icon hash of the app
	 */
	icon: string | null;
	/**
	 * The description of the app
	 */
	description: string;
	/**
	 * An array of rpc origin urls, if rpc is enabled
	 */
	rpc_origins?: string[];
	/**
	 * When `false` only app owner can join the app's bot to guilds
	 */
	bot_public: boolean;
	/**
	 * When `true` the app's bot will only join upon completion of the full oauth2 code grant flow
	 */
	bot_require_code_grant: boolean;
	/**
	 * Partial user object containing info on the owner of the application
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	owner: APIUser;
	/**
	 * If this application is a game sold on Discord, this field will be the summary field for the store page
	 * of its primary sku
	 */
	summary: string;
	/**
	 * The base64 encoded key for the GameSDK's GetTicket
	 *
	 * See https://discord.com/developers/docs/game-sdk/applications#get-ticket
	 */
	verify_key: string;
	/**
	 * The team this application belongs to
	 *
	 * See https://discord.com/developers/docs/topics/teams#data-models-team-object
	 */
	team: APITeam | null;
	/**
	 * If this application is a game sold on Discord, this field will be the guild to which it has been linked
	 */
	guild_id?: Snowflake;
	/**
	 * If this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
	 */
	primary_sku_id?: Snowflake;
	/**
	 * If this application is a game sold on Discord, this field will be the URL slug that links to the store page
	 */
	slug?: string;
	/**
	 * If this application is a game sold on Discord, this field will be the hash of the image on store embeds
	 */
	cover_image?: string;
	/**
	 * The application's public flags
	 */
	flags: number;
}

export const enum OAuth2Scopes {
	/**
	 * For oauth2 bots, this puts the bot in the user's selected guild by default
	 */
	Bot = 'bot',
	/**
	 * Allows [/users/@me/connections](https://discord.com/developers/docs/resources/user#get-user-connections)
	 * to return linked third-party accounts
	 *
	 * See https://discord.com/developers/docs/resources/user#get-user-connections
	 */
	Connections = 'connections',
	/**
	 * Enables [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) to return an `email`
	 *
	 * See https://discord.com/developers/docs/resources/user#get-current-user
	 */
	Email = 'email',
	/**
	 * Allows [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) without `email`
	 *
	 * See https://discord.com/developers/docs/resources/user#get-current-user
	 */
	Identify = 'identify',
	/**
	 * Allows [/users/@me/guilds](https://discord.com/developers/docs/resources/user#get-current-user-guilds)
	 * to return basic information about all of a user's guilds
	 *
	 * See https://discord.com/developers/docs/resources/user#get-current-user-guilds
	 */
	Guilds = 'guilds',
	/**
	 * Allows [/guilds/{guild.id}/members/{user.id}](https://discord.com/developers/docs/resources/guild#add-guild-member)
	 * to be used for joining users to a guild
	 *
	 * See https://discord.com/developers/docs/resources/guild#add-guild-member
	 */
	GuildsJoin = 'guilds.join',
	/**
	 * Allows your app to join users to a group dm
	 *
	 * See https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
	 */
	GroupDMJoins = 'gdm.join',
	/**
	 * For local rpc server api access, this allows you to read messages from all client channels
	 * (otherwise restricted to channels/guilds your app creates)
	 */
	MessagesRead = 'messages.read',
	/**
	 * For local rpc server access, this allows you to control a user's local Discord client - whitelist only
	 */
	RPC = 'rpc',
	/**
	 * For local rpc server api access, this allows you to access the API as the local user - whitelist only
	 */
	RPCApi = 'rpc.api',
	/**
	 * For local rpc server api access, this allows you to receive notifications pushed out to the user - whitelist only
	 */
	RPCNotificationsRead = 'rpc.notifications.read',
	/**
	 * This generates a webhook that is returned in the oauth token response for authorization code grants
	 */
	WebhookIncoming = 'webhook.incoming',
	/**
	 * Allows your app to upload/update builds for a user's applications - whitelist only
	 */
	ApplicationsBuildsUpload = 'applications.builds.upload',
	/**
	 * Allows your app to read build data for a user's applications
	 */
	ApplicationsBuildsRead = 'applications.builds.read',
	/**
	 * Allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications
	 */
	ApplicationsStoreUpdate = 'applications.store.update',
	/**
	 * Allows your app to read entitlements for a user's applications
	 */
	ApplicationsEntitlements = 'applications.entitlements',
	/**
	 * Allows your app to know a user's friends and implicit relationships - whitelist only
	 */
	RelationshipsRead = 'relationships.read',
	/**
	 * Allows your app to fetch data from a user's "Now Playing/Recently Played" list - whitelist only
	 */
	ActivitiesRead = 'activities.read',
	/**
	 * Allows your app to update a user's activity - whitelist only (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
	 *
	 * See https://discord.com/developers/docs/game-sdk/activities
	 */
	ActivitiesWrite = 'activities.write',
	/**
	 * Allows your app to create Slash Commands in the authorized guild
	 *
	 * See https://discord.com/developers/docs/interactions/slash-commands
	 */
	ApplicationsCommands = 'applications.commands',
	/**
	 * Allows your app to update Slash Commands via this bearer token
	 *
	 * See https://discord.com/developers/docs/interactions/slash-commands
	 */
	ApplicationsCommandsUpdate = 'applications.commands.update',
}

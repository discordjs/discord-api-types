/**
 * Types extracted from https://discord.com/developers/docs/topics/oauth2
 */

/**
 * Users can authorize these scopes using the normal OAuth2 process
 *
 * See https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes-public-user-scopes
 */
export enum OAuth2PublicUserScopes {
	/**
	 * Allows your app to read build data for a user's applications
	 */
	ApplicationsBuildsRead = 'applications.builds.read',
	/**
	 * Allows your app to update permissions for its commands using a Bearer token - client credentials grant only
	 *
	 * See https://discord.com/developers/docs/interactions/application-commands
	 */
	ApplicationCommandsPermissionsUpdate = 'applications.commands.permissions.update',
	/**
	 * Allows your app to read entitlements for a user's applications
	 */
	ApplicationsEntitlements = 'applications.entitlements',
	/**
	 * Allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications
	 */
	ApplicationsStoreUpdate = 'applications.store.update',
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
	 * Allows your app to join users to a group dm
	 *
	 * See https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
	 */
	GroupDMJoins = 'gdm.join',
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
	 * Allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild
	 *
	 * See https://discord.com/developers/docs/resources/user#get-current-user-guild-member
	 */
	GuildsMembersRead = 'guilds.members.read',
	/**
	 * Allows [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) without `email`
	 *
	 * See https://discord.com/developers/docs/resources/user#get-current-user
	 */
	Identify = 'identify',
	/**
	 * For local rpc server api access, this allows you to read messages from all client channels
	 * (otherwise restricted to channels/guilds your app creates)
	 */
	MessagesRead = 'messages.read',
	/**
	 * For local rpc server api access, this allows you to receive notifications pushed out to the user
	 */
	RPCNotificationsRead = 'rpc.notifications.read',
}

/**
 * Applications can be added to a guild with these scopes by members with the `Manage Server` permission
 *
 * See https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes-guild-scopes
 */
export enum OAuth2GuildScopes {
	/**
	 * Allows your app to use Application Commands in a guild
	 *
	 * See https://discord.com/developers/docs/interactions/application-commands
	 */
	ApplicationsCommands = 'applications.commands',
	/**
	 * For oauth2 bots, this puts the bot in the user's selected guild by default
	 */
	Bot = 'bot',
}

/**
 * These scopes can be used to do other actions with Discord's OAuth2 system
 *
 * See https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes-other-scopes
 */
export enum OAuth2OtherScopes {
	/**
	 * Allows your app to update its Application Commands via this bearer token - client credentials grant only
	 *
	 * See https://discord.com/developers/docs/interactions/application-commands
	 */
	ApplicationsCommandsUpdate = 'applications.commands.update',
	/**
	 * This generates a webhook that is returned in the oauth token response for authorization code grants
	 */
	WebhookIncoming = 'webhook.incoming',
}

/**
 * These scopes can be publicly used for application owners and testers. Certain approved apps can use these for all users
 *
 * See https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes-restricted-user-scopes
 */
export enum OAuth2RestrictedUserScopes {
	/**
	 * For local rpc server access, this allows you to control a user's local Discord client
	 */
	RPC = 'rpc',
	/**
	 * For local rpc server access, this allows you to update a user's activity
	 */
	RPCActivitiesWrite = 'rpc.activities.write',
	/**
	 * For local rpc server access, this allows you to read a user's voice settings and listen for voice events
	 */
	RPCVoiceRead = 'rpc.voice.read',
	/**
	 * For local rpc server access, this allows you to update a user's voice settings
	 */
	RPCVoiceWrite = 'rpc.voice.write',
}

/**
 * These scopes can only be used by certain approved apps
 *
 * See https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes-private-user-scopes
 */
export enum OAuth2PrivateUserScopes {
	/**
	 * Allows your app to fetch data from a user's "Now Playing/Recently Played" list
	 */
	ActivitiesRead = 'activities.read',
	/**
	 * Allows your app to update a user's activity (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
	 *
	 * See https://discord.com/developers/docs/game-sdk/activities
	 */
	ActivitiesWrite = 'activities.write',
	/**
	 * Allows your app to upload/update builds for a user's applications
	 */
	ApplicationsBuildsUpload = 'applications.builds.upload',
	/**
	 * Allows your app to see information about the user's DMs and group DMs
	 */
	DMChannelsRead = 'dm_channels.read',
	/**
	 * Allows your app to know a user's friends and implicit relationships
	 */
	RelationshipsRead = 'relationships.read',
	/**
	 * Allows your app to connect to voice on user's behalf and see all the voice members
	 */
	Voice = 'voice',
}

export type OAuth2Scopes =
	| OAuth2PublicUserScopes
	| OAuth2GuildScopes
	| OAuth2OtherScopes
	| OAuth2RestrictedUserScopes
	| OAuth2PrivateUserScopes;

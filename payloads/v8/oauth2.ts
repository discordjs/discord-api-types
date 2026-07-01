/**
 * Types extracted from https://docs.discord.com/developers/topics/oauth2
 */

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export enum OAuth2Scopes {
	/**
	 * For oauth2 bots, this puts the bot in the user's selected guild by default
	 */
	Bot = 'bot',
	/**
	 * Allows [/users/@me/connections](https://docs.discord.com/developers/resources/user#get-user-connections)
	 * to return linked third-party accounts
	 *
	 * See https://docs.discord.com/developers/resources/user#get-user-connections
	 */
	Connections = 'connections',
	/**
	 * Enables [/users/@me](https://docs.discord.com/developers/resources/user#get-current-user) to return an `email`
	 *
	 * See https://docs.discord.com/developers/resources/user#get-current-user
	 */
	Email = 'email',
	/**
	 * Allows [/users/@me](https://docs.discord.com/developers/resources/user#get-current-user) without `email`
	 *
	 * See https://docs.discord.com/developers/resources/user#get-current-user
	 */
	Identify = 'identify',
	/**
	 * Allows [/users/@me/guilds](https://docs.discord.com/developers/resources/user#get-current-user-guilds)
	 * to return basic information about all of a user's guilds
	 *
	 * See https://docs.discord.com/developers/resources/user#get-current-user-guilds
	 */
	Guilds = 'guilds',
	/**
	 * Allows [/guilds/{guild.id}/members/{user.id}](https://docs.discord.com/developers/resources/guild#add-guild-member)
	 * to be used for joining users to a guild
	 *
	 * See https://docs.discord.com/developers/resources/guild#add-guild-member
	 */
	GuildsJoin = 'guilds.join',
	/**
	 * Allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild
	 *
	 * See https://docs.discord.com/developers/resources/guild#get-current-user-guild-member
	 */
	GuildsMembersRead = 'guilds.members.read',
	/**
	 * Allows your app to join users to a group dm
	 *
	 * See https://docs.discord.com/developers/resources/channel#group-dm-add-recipient
	 */
	GroupDMJoins = 'gdm.join',
	/**
	 * For local rpc server api access, this allows you to read messages from all client channels
	 * (otherwise restricted to channels/guilds your app creates)
	 */
	MessagesRead = 'messages.read',
	/**
	 * For local rpc server access, this allows you to control a user's local Discord client - requires Discord approval
	 */
	RPC = 'rpc',
	/**
	 * For local rpc server api access, this allows you to receive notifications pushed out to the user - requires Discord approval
	 */
	RPCNotificationsRead = 'rpc.notifications.read',
	/**
	 * This generates a webhook that is returned in the oauth token response for authorization code grants
	 */
	WebhookIncoming = 'webhook.incoming',
	/**
	 * Allows your app to upload/update builds for a user's applications - requires Discord approval
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
	 * Allows your app to know a user's friends and implicit relationships - requires Discord approval
	 */
	RelationshipsRead = 'relationships.read',
	/**
	 * Allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval
	 */
	ActivitiesRead = 'activities.read',
	/**
	 * Allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
	 *
	 * See https://docs.discord.com/developers/game-sdk/activities
	 */
	ActivitiesWrite = 'activities.write',
	/**
	 * Allows your app to use Application Commands in a guild
	 *
	 * See https://docs.discord.com/developers/interactions/application-commands
	 */
	ApplicationsCommands = 'applications.commands',
	/**
	 * Allows your app to update its Application Commands via this bearer token - client credentials grant only
	 *
	 * See https://docs.discord.com/developers/interactions/application-commands
	 */
	ApplicationsCommandsUpdate = 'applications.commands.update',
}

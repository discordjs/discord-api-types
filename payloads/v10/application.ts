/**
 * Types extracted from https://discord.com/developers/docs/resources/application
 */

import type { Permissions, Snowflake } from '../../globals';
import type { LocalizationMap } from '../common';
import type { APIPartialGuild } from './guild';
import type { OAuth2Scopes } from './oauth2';
import type { APITeam } from './teams';
import type { APIUser } from './user';

/**
 * https://discord.com/developers/docs/resources/application#application-object
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
	 * The url of the application's terms of service
	 */
	terms_of_service_url?: string;
	/**
	 * The url of the application's privacy policy
	 */
	privacy_policy_url?: string;
	/**
	 * Partial user object containing info on the owner of the application
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	owner?: APIUser;
	/**
	 * An empty string
	 *
	 * @deprecated This field will be removed in v11
	 */
	summary: string;
	/**
	 * The hexadecimal encoded key for verification in interactions and the GameSDK's GetTicket function
	 *
	 * See https://discord.com/developers/docs/game-sdk/applications#getticket
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
	 *
	 * See https://discord.com/developers/docs/resources/application#application-object-application-flags
	 */
	flags: ApplicationFlags;
	/**
	 * Up to 5 tags describing the content and functionality of the application
	 */
	tags?: [string, string?, string?, string?, string?];
	/**
	 * Settings for the application's default in-app authorization link, if enabled
	 */
	install_params?: APIApplicationInstallParams;
	/**
	 * The application's default custom authorization link, if enabled
	 */
	custom_install_url?: string;
	/**
	 * The application's role connection verification entry point,
	 * which when configured will render the app as a verification method in the guild role verification configuration
	 */
	role_connections_verification_url?: string;
	/**
	 * An approximate count of the app's guild membership
	 */
	approximate_guild_count?: number;
	/**
	 * A partial object of the associated guild
	 */
	guild?: APIPartialGuild;
}

export interface APIApplicationInstallParams {
	scopes: OAuth2Scopes[];
	permissions: Permissions;
}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-flags
 */
export enum ApplicationFlags {
	/**
	 * @unstable This application flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	EmbeddedReleased = 1 << 1,
	/**
	 * @unstable This application flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	ManagedEmoji = 1 << 2,
	/**
	 * @unstable This application flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	EmbeddedIAP = 1 << 3,
	/**
	 * @unstable This application flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	GroupDMCreate = 1 << 4,
	/**
	 * Indicates if an app uses the Auto Moderation API
	 */
	ApplicationAutoModerationRuleCreateBadge = 1 << 6,
	/**
	 * @unstable This application flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	RPCHasConnected = 1 << 11,
	/**
	 * Intent required for bots in 100 or more servers to receive `presence_update` events
	 */
	GatewayPresence = 1 << 12,
	/**
	 * Intent required for bots in under 100 servers to receive `presence_update` events, found in Bot Settings
	 */
	GatewayPresenceLimited = 1 << 13,
	/**
	 * Intent required for bots in 100 or more servers to receive member-related events like `guild_member_add`.
	 * See list of member-related events [under `GUILD_MEMBERS`](https://discord.com/developers/docs/topics/gateway#list-of-intents)
	 */
	GatewayGuildMembers = 1 << 14,
	/**
	 * Intent required for bots in under 100 servers to receive member-related events like `guild_member_add`, found in Bot Settings.
	 * See list of member-related events [under `GUILD_MEMBERS`](https://discord.com/developers/docs/topics/gateway#list-of-intents)
	 */
	GatewayGuildMembersLimited = 1 << 15,
	/**
	 * Indicates unusual growth of an app that prevents verification
	 */
	VerificationPendingGuildLimit = 1 << 16,
	/**
	 * Indicates if an app is embedded within the Discord client (currently unavailable publicly)
	 */
	Embedded = 1 << 17,
	/**
	 * Intent required for bots in 100 or more servers to receive [message content](https://support-dev.discord.com/hc/en-us/articles/4404772028055)
	 */
	GatewayMessageContent = 1 << 18,
	/**
	 * Intent required for bots in under 100 servers to receive [message content](https://support-dev.discord.com/hc/en-us/articles/4404772028055),
	 * found in Bot Settings
	 */
	GatewayMessageContentLimited = 1 << 19,
	/**
	 * @unstable This application flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	EmbeddedFirstParty = 1 << 20,
	/**
	 * Indicates if an app has registered global [application commands](https://discord.com/developers/docs/interactions/application-commands)
	 */
	ApplicationCommandBadge = 1 << 23,
}

/**
 * https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure
 */
export interface APIApplicationRoleConnectionMetadata {
	/**
	 * Type of metadata value
	 */
	type: ApplicationRoleConnectionMetadataType;
	/**
	 * Dictionary key for the metadata field (must be `a-z`, `0-9`, or `_` characters; 1-50 characters)
	 */
	key: string;
	/**
	 * Name of the metadata field (1-100 characters)
	 */
	name: string;
	/**
	 * Translations of the name
	 */
	name_localizations?: LocalizationMap;
	/**
	 * Description of the metadata field (1-200 characters)
	 */
	description: string;
	/**
	 * Translations of the description
	 */
	description_localizations?: LocalizationMap;
}

/**
 * https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type
 */
export enum ApplicationRoleConnectionMetadataType {
	/**
	 * The metadata value (`integer`) is less than or equal to the guild's configured value (`integer`)
	 */
	IntegerLessThanOrEqual = 1,
	/**
	 * The metadata value (`integer`) is greater than or equal to the guild's configured value (`integer`)
	 */
	IntegerGreaterThanOrEqual,
	/**
	 * The metadata value (`integer`) is equal to the guild's configured value (`integer`)
	 */
	IntegerEqual,
	/**
	 * The metadata value (`integer`) is not equal to the guild's configured value (`integer`)
	 */
	IntegerNotEqual,
	/**
	 * The metadata value (`ISO8601 string`) is less than or equal to the guild's configured value (`integer`; days before current date)
	 */
	DatetimeLessThanOrEqual,
	/**
	 * The metadata value (`ISO8601 string`) is greater than or equal to the guild's configured value (`integer`; days before current date)
	 */
	DatetimeGreaterThanOrEqual,
	/**
	 * The metadata value (`integer`) is equal to the guild's configured value (`integer`; `1`)
	 */
	BooleanEqual,
	/**
	 * The metadata value (`integer`) is not equal to the guild's configured value (`integer`; `1`)
	 */
	BooleanNotEqual,
}

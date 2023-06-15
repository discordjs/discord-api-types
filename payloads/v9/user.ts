/**
 * Types extracted from https://discord.com/developers/docs/resources/user
 */

import type { Snowflake } from '../../globals';
import type { APIGuildIntegration } from './guild';

/**
 * https://discord.com/developers/docs/resources/user#user-object
 */
export interface APIUser {
	/**
	 * The user's id
	 */
	id: Snowflake;
	/**
	 * The user's username, not unique across the platform
	 */
	username: string;
	/**
	 * The user's Discord-tag
	 */
	discriminator: string;
	/**
	 * The user's display name, if it is set. For bots, this is the application name
	 */
	global_name: string | null;
	/**
	 * The user's avatar hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	avatar: string | null;
	/**
	 * Whether the user belongs to an OAuth2 application
	 */
	bot?: boolean;
	/**
	 * Whether the user is an Official Discord System user (part of the urgent message system)
	 */
	system?: boolean;
	/**
	 * Whether the user has two factor enabled on their account
	 */
	mfa_enabled?: boolean;
	/**
	 * The user's banner hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	banner?: string | null;
	/**
	 * The user's banner color encoded as an integer representation of hexadecimal color code
	 */
	accent_color?: number | null;
	/**
	 * The user's chosen language option
	 */
	locale?: string;
	/**
	 * Whether the email on this account has been verified
	 */
	verified?: boolean;
	/**
	 * The user's email
	 */
	email?: string | null;
	/**
	 * The flags on a user's account
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object-user-flags
	 */
	flags?: UserFlags;
	/**
	 * The type of Nitro subscription on a user's account
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object-premium-types
	 */
	premium_type?: UserPremiumType;
	/**
	 * The public flags on a user's account
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object-user-flags
	 */
	public_flags?: UserFlags;
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
export enum UserFlags {
	/**
	 * Discord Employee
	 */
	Staff = 1 << 0,
	/**
	 * Partnered Server Owner
	 */
	Partner = 1 << 1,
	/**
	 * HypeSquad Events Member
	 */
	Hypesquad = 1 << 2,
	/**
	 * Bug Hunter Level 1
	 */
	BugHunterLevel1 = 1 << 3,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	MFASMS = 1 << 4,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	PremiumPromoDismissed = 1 << 5,
	/**
	 * House Bravery Member
	 */
	HypeSquadOnlineHouse1 = 1 << 6,
	/**
	 * House Brilliance Member
	 */
	HypeSquadOnlineHouse2 = 1 << 7,
	/**
	 * House Balance Member
	 */
	HypeSquadOnlineHouse3 = 1 << 8,
	/**
	 * Early Nitro Supporter
	 */
	PremiumEarlySupporter = 1 << 9,
	/**
	 * User is a [team](https://discord.com/developers/docs/topics/teams)
	 */
	TeamPseudoUser = 1 << 10,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	HasUnreadUrgentMessages = 1 << 13,
	/**
	 * Bug Hunter Level 2
	 */
	BugHunterLevel2 = 1 << 14,
	/**
	 * Verified Bot
	 */
	VerifiedBot = 1 << 16,
	/**
	 * Early Verified Bot Developer
	 */
	VerifiedDeveloper = 1 << 17,
	/**
	 * Moderator Programs Alumni
	 */
	CertifiedModerator = 1 << 18,
	/**
	 * Bot uses only [HTTP interactions](https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction) and is shown in the online member list
	 */
	BotHTTPInteractions = 1 << 19,
	/**
	 * User has been identified as spammer
	 *
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	Spammer = 1 << 20,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	DisablePremium = 1 << 21,
	/**
	 * User is an [Active Developer](https://support-dev.discord.com/hc/articles/10113997751447)
	 */
	ActiveDeveloper = 1 << 22,
	/**
	 * User's account has been [quarantined](https://support.discord.com/hc/articles/6461420677527) based on recent activity
	 *
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 * @privateRemarks
	 *
	 * This value would be 1 << 44, but bit shifting above 1 << 30 requires bigints
	 */
	Quarantined = 17_592_186_044_416,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 * @privateRemarks
	 *
	 * This value would be 1 << 50, but bit shifting above 1 << 30 requires bigints
	 */
	Collaborator = 1_125_899_906_842_624,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 * @privateRemarks
	 *
	 * This value would be 1 << 51, but bit shifting above 1 << 30 requires bigints
	 */
	RestrictedCollaborator = 2_251_799_813_685_248,
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export enum UserPremiumType {
	None,
	NitroClassic,
	Nitro,
	NitroBasic,
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object
 */
export interface APIConnection {
	/**
	 * ID of the connection account
	 */
	id: string;
	/**
	 * The username of the connection account
	 */
	name: string;
	/**
	 * The service of the connection
	 *
	 * See https://discord.com/developers/docs/resources/user#connection-object-services
	 */
	type: ConnectionService;
	/**
	 * Whether the connection is revoked
	 */
	revoked?: boolean;
	/**
	 * An array of partial server integrations
	 *
	 * See https://discord.com/developers/docs/resources/guild#integration-object
	 */
	integrations?: Partial<APIGuildIntegration>[];
	/**
	 * Whether the connection is verified
	 */
	verified: boolean;
	/**
	 * Whether friend sync is enabled for this connection
	 */
	friend_sync: boolean;
	/**
	 * Whether activities related to this connection will be shown in presence updates
	 */
	show_activity: boolean;
	/**
	 * Whether this connection supports console voice transfer
	 */
	two_way_link: boolean;
	/**
	 * Visibility of this connection
	 *
	 * See https://discord.com/developers/docs/resources/user#connection-object-visibility-types
	 */
	visibility: ConnectionVisibility;
}

export enum ConnectionService {
	BattleNet = 'battlenet',
	eBay = 'ebay',
	EpicGames = 'epicgames',
	Facebook = 'facebook',
	GitHub = 'github',
	Instagram = 'instagram',
	LeagueOfLegends = 'leagueoflegends',
	PlayStationNetwork = 'playstation',
	Reddit = 'reddit',
	RiotGames = 'riotgames',
	PayPal = 'paypal',
	Spotify = 'spotify',
	Skype = 'skype',
	Steam = 'steam',
	TikTok = 'tiktok',
	Twitch = 'twitch',
	Twitter = 'twitter',
	Xbox = 'xbox',
	YouTube = 'youtube',
}

export enum ConnectionVisibility {
	/**
	 * Invisible to everyone except the user themselves
	 */
	None,
	/**
	 * Visible to everyone
	 */
	Everyone,
}

/**
 * https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure
 */
export interface APIApplicationRoleConnection {
	/**
	 * The vanity name of the platform a bot has connected (max 50 characters)
	 */
	platform_name: string | null;
	/**
	 * The username on the platform a bot has connected (max 100 characters)
	 */
	platform_username: string | null;
	/**
	 * Object mapping application role connection metadata keys to their `string`-ified value (max 100 characters) for the user on the platform a bot has connected
	 */
	metadata: Record<string, string | number>;
}

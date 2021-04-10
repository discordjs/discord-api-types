/**
 * Types extracted from https://discord.com/developers/docs/resources/user
 */

import type { Snowflake } from '../../globals.ts';
import type { APIGuildIntegration } from './guild.ts';

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
	 * The user's 4-digit discord-tag
	 */
	discriminator: string;
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
	None = 0,
	DiscordEmployee = 1 << 0,
	PartneredServerOwner = 1 << 1,
	DiscordHypeSquadEvents = 1 << 2,
	BugHunterLevel1 = 1 << 3,
	HypeSquadHouseBravery = 1 << 6,
	HypeSquadHouseBrilliance = 1 << 7,
	HypeSquadHouseBalance = 1 << 8,
	EarlySupporter = 1 << 9,
	TeamUser = 1 << 10,
	BugHunterLevel2 = 1 << 14,
	VerifiedBot = 1 << 16,
	EarlyVerifiedBotDeveloper = 1 << 17,
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export enum UserPremiumType {
	None,
	NitroClassic,
	Nitro,
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
	 */
	type: string;
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
	 * Visibility of this connection
	 *
	 * See https://discord.com/developers/docs/resources/user#connection-object-visibility-types
	 */
	visibility: ConnectionVisibility;
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

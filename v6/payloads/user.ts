/**
 * Types extracted from https://discord.com/developers/docs/resources/user
 */

import type { APIGuildIntegration } from './guild';

/**
 * https://discord.com/developers/docs/resources/user#user-object
 */
export interface APIUser {
	id: string;
	username: string;
	discriminator: string;
	avatar: string | null;
	bot?: boolean;
	system?: boolean;
	mfa_enabled?: boolean;
	locale?: string;
	verified?: boolean;
	email?: string | null;
	flags?: UserFlags;
	premium_type: UserPremiumType;
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
	System = 1 << 12,
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
	id: string;
	name: string;
	type: string;
	revoked?: boolean;
	integrations?: Partial<APIGuildIntegration>[];
	verified: boolean;
	friend_sync: boolean;
	show_activity: boolean;
	visibility: ConnectionVisibility;
}

export enum ConnectionVisibility {
	None,
	Everyone,
}

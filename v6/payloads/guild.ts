/**
 * Types extracted from https://discord.com/developers/docs/resources/guild
 */

import type { APIChannel } from './channel';
import type { APIEmoji } from './emoji';
import type { GatewayPresenceUpdate } from './gateway';
import type { APIRole } from './permissions';
import type { APIUser } from './user';
import type { GatewayVoiceState } from './voice';

/**
 * https://discord.com/developers/docs/resources/guild#unavailable-guild-object
 */
export interface APIUnavailableGuild {
	id: string;
	unavailable: boolean;
}

export interface APIPartialGuild extends Omit<APIUnavailableGuild, 'unavailable'>, Pick<APIGuild, 'welcome_screen'> {
	name: string;
	icon: string | null;
	splash: string | null;
	banner?: string | null;
	description?: string | null;
	features?: GuildFeature[];
	verification_level?: GuildVerificationLevel;
	vanity_url_code?: string | null;
	unavailable?: boolean;
}

export interface APIGuild extends APIPartialGuild {
	discovery_splash: string | null;
	owner?: boolean;
	owner_id: string;
	/**
	 * @deprecated Use `permissions_new` instead
	 */
	permissions?: number;
	permissions_new?: string;
	region: string;
	afk_channel_id: string | null;
	afk_timeout: number;
	/**
	 * @deprecated Use `widget_enabled` instead
	 */
	embed_enabled?: boolean;
	/**
	 * @deprecated Use `widget_channel_id` instead
	 */
	embed_channel_id?: string | null;
	verification_level: GuildVerificationLevel;
	default_message_notifications: GuildDefaultMessageNotifications;
	explicit_content_filter: GuildExplicitContentFilter;
	roles: APIRole[];
	emojis: APIEmoji[];
	features: GuildFeature[];
	mfa_level: GuildMFALevel;
	application_id: string | null;
	widget_enabled?: boolean;
	widget_channel_id?: string | null;
	system_channel_id: string | null;
	system_channel_flags: GuildSystemChannelFlags;
	rules_channel_id: string | null;
	joined_at?: string;
	large?: boolean;
	member_count?: number;
	voice_states?: Omit<GatewayVoiceState, 'guild_id'>[];
	members?: APIGuildMember[];
	channels?: APIChannel[];
	presences?: GatewayPresenceUpdate[];
	max_presences?: number | null;
	max_members?: number;
	vanity_url_code: string | null;
	description: string | null;
	banner: string | null;
	premium_tier: GuildPremiumTier;
	premium_subscription_count?: number;
	preferred_locale: string;
	public_updates_channel_id: string | null;
	max_video_channel_users?: number;
	/**
	 * Returned by calling GET `/guilds/{guid.id}` with the query `with_counts` set to `true`
	 */
	approximate_member_count?: number;
	/**
	 * Returned by calling GET `/guilds/{guid.id}` with the query `with_counts` set to `true`
	 */
	approximate_presence_count?: number;
	welcome_screen?: APIGuildWelcomeScreen;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export enum GuildDefaultMessageNotifications {
	ALL_MESSAGES,
	ONLY_MENTIONS,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
export enum GuildExplicitContentFilter {
	DISABLED,
	MEMBERS_WITHOUT_ROLES,
	ALL_MEMBERS,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export enum GuildMFALevel {
	NONE,
	ELEVATED,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
export enum GuildVerificationLevel {
	NONE,
	LOW,
	MEDIUM,
	HIGH,
	VERY_HIGH,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
export enum GuildPremiumTier {
	NONE,
	TIER_1,
	TIER_2,
	TIER_3,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export enum GuildSystemChannelFlags {
	SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
	SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export enum GuildFeature {
	INVITE_SPLASH = 'INVITE_SPLASH',
	VIP_REGIONS = 'VIP_REGIONS',
	VANITY_URL = 'VANITY_URL',
	VERIFIED = 'VERIFIED',
	PARTNERED = 'PARTNERED',
	COMMUNITY = 'COMMUNITY',
	COMMERCE = 'COMMERCE',
	NEWS = 'NEWS',
	DISCOVERABLE = 'DISCOVERABLE',
	FEATURABLE = 'FEATURABLE',
	ANIMATED_ICON = 'ANIMATED_ICON',
	BANNER = 'BANNER',
	WELCOME_SCREEN_ENABLED = 'WELCOME_SCREEN_ENABLED',
	RELAY_ENABLED = 'RELAY_ENABLED',
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-preview-object
 */
export interface APIGuildPreview {
	id: string;
	name: string;
	icon: string | null;
	splash: string | null;
	discovery_splash: string | null;
	emojis: APIEmoji[];
	features: GuildFeature[];
	approximate_member_count: number;
	approximate_presence_count: number;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-widget-object
 */
export interface APIGuildWidget {
	enabled: boolean;
	channel_id: string | null;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface APIGuildMember {
	user?: APIUser;
	nick: string | null;
	roles: string[];
	joined_at: string;
	premium_since?: string | null;
	deaf: boolean;
	mute: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-object
 */
export interface APIGuildIntegration {
	id: string;
	name: string;
	type: string;
	enabled: boolean;
	syncing: boolean;
	role_id: string;
	enable_emoticons?: boolean;
	expire_behavior: IntegrationExpireBehavior;
	expire_grace_period: number;
	user: APIUser;
	account: APIIntegrationAccount;
	synced_at: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
 */
export enum IntegrationExpireBehavior {
	RemoveRole,
	Kick,
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-account-object
 */
export interface APIIntegrationAccount {
	id: string;
	name: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#ban-object
 */
export interface APIBan {
	reason: string | null;
	user: APIUser;
}

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-image-widget-style-options
 */
export enum GuildWidgetStyle {
	Shield = 'shield',
	Banner1 = 'banner1',
	Banner2 = 'banner2',
	Banner3 = 'banner3',
	Banner4 = 'banner4',
}

export interface APIGuildWelcomeScreen {
	description: string | null;
	welcome_channels: APIGuildWelcomeScreenChannel[];
}

export interface APIGuildWelcomeScreenChannel {
	channel_id: string;
	emoji_id: string | null;
	emoji_name: string | null;
}

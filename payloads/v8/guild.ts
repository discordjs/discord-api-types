/**
 * Types extracted from https://discord.com/developers/docs/resources/guild
 */

import type { Permissions, Snowflake } from '../../globals';
import type { APIChannel } from './channel';
import type { APIEmoji } from './emoji';
import type { GatewayPresenceUpdate, PresenceUpdateStatus } from './gateway';
import type { APIRole } from './permissions';
import type { APIUser } from './user';
import type { GatewayVoiceState } from './voice';

/**
 * https://discord.com/developers/docs/resources/guild#unavailable-guild-object
 */
export interface APIUnavailableGuild {
	/**
	 * Guild id
	 */
	id: Snowflake;
	/**
	 * `true` if this guild is unavailable due to an outage
	 */
	unavailable: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface APIPartialGuild extends Omit<APIUnavailableGuild, 'unavailable'>, Pick<APIGuild, 'welcome_screen'> {
	/**
	 * Guild name (2-100 characters, excluding trailing and leading whitespace)
	 */
	name: string;
	/**
	 * Icon hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	icon: string | null;
	/**
	 * Splash hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	splash: string | null;
	/**
	 * Banner hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	banner?: string | null;
	/**
	 * The description for the guild, if the guild is discoverable
	 */
	description?: string | null;
	/**
	 * Enabled guild features
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-guild-features
	 */
	features?: GuildFeature[];
	/**
	 * Verification level required for the guild
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-verification-level
	 */
	verification_level?: GuildVerificationLevel;
	/**
	 * The vanity url code for the guild
	 */
	vanity_url_code?: string | null;
	/**
	 * `true` if this guild is unavailable due to an outage
	 */
	unavailable?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface APIGuild extends APIPartialGuild {
	/**
	 * Icon hash, returned when in the template object
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	icon_hash?: string | null;
	/**
	 * Discovery splash hash; only present for guilds with the "DISCOVERABLE" feature
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	discovery_splash: string | null;
	/**
	 * `true` if the user is the owner of the guild
	 *
	 * **This field is only received from https://discord.com/developers/docs/resources/user#get-current-user-guilds**
	 */
	owner?: boolean;
	/**
	 * ID of owner
	 */
	owner_id: Snowflake;
	/**
	 * Total permissions for the user in the guild (excludes overrides)
	 *
	 * **This field is only received from https://discord.com/developers/docs/resources/user#get-current-user-guilds**
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 */
	permissions?: Permissions;
	/**
	 * Voice region id for the guild
	 *
	 * See https://discord.com/developers/docs/resources/voice#voice-region-object
	 * @deprecated This field has been deprecated in favor of `rtc_region` on the channel.
	 */
	region: string;
	/**
	 * ID of afk channel
	 */
	afk_channel_id: Snowflake | null;
	/**
	 * afk timeout in seconds
	 */
	afk_timeout: number;
	/**
	 * `true` if the guild widget is enabled
	 */
	widget_enabled?: boolean;
	/**
	 * The channel id that the widget will generate an invite to, or `null` if set to no invite
	 */
	widget_channel_id?: Snowflake | null;
	/**
	 * Verification level required for the guild
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-verification-level
	 */
	verification_level: GuildVerificationLevel;
	/**
	 * Default message notifications level
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
	 */
	default_message_notifications: GuildDefaultMessageNotifications;
	/**
	 * Explicit content filter level
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
	 */
	explicit_content_filter: GuildExplicitContentFilter;
	/**
	 * Roles in the guild
	 *
	 * See https://discord.com/developers/docs/topics/permissions#role-object
	 */
	roles: APIRole[];
	/**
	 * Custom guild emojis
	 *
	 * See https://discord.com/developers/docs/resources/emoji#emoji-object
	 */
	emojis: APIEmoji[];
	/**
	 * Enabled guild features
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-guild-features
	 */
	features: GuildFeature[];
	/**
	 * Required MFA level for the guild
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
	 */
	mfa_level: GuildMFALevel;
	/**
	 * Application id of the guild creator if it is bot-created
	 */
	application_id: Snowflake | null;
	/**
	 * The id of the channel where guild notices such as welcome messages and boost events are posted
	 */
	system_channel_id: Snowflake | null;
	/**
	 * System channel flags
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
	 */
	system_channel_flags: GuildSystemChannelFlags;
	/**
	 * The id of the channel where Community guilds can display rules and/or guidelines
	 */
	rules_channel_id: Snowflake | null;
	/**
	 * When this guild was joined at
	 *
	 * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**
	 */
	joined_at?: string;
	/**
	 * `true` if this is considered a large guild
	 *
	 * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**
	 */
	large?: boolean;
	/**
	 * Total number of members in this guild
	 *
	 * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**
	 */
	member_count?: number;
	/**
	 * States of members currently in voice channels; lacks the `guild_id` key
	 *
	 * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**
	 *
	 * See https://discord.com/developers/docs/resources/voice#voice-state-object
	 */
	voice_states?: Omit<GatewayVoiceState, 'guild_id'>[];
	/**
	 * Users in the guild
	 *
	 * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-member-object
	 */
	members?: APIGuildMember[];
	/**
	 * Channels in the guild
	 *
	 * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**
	 *
	 * See https://discord.com/developers/docs/resources/channel#channel-object
	 */
	channels?: APIChannel[];
	/**
	 * Presences of the members in the guild, will only include non-offline members if the size is greater than `large_threshold`
	 *
	 * **This field is only sent within the [GUILD_CREATE](https://discord.com/developers/docs/topics/gateway#guild-create) event**
	 *
	 * See https://discord.com/developers/docs/topics/gateway#presence-update
	 */
	presences?: GatewayPresenceUpdate[];
	/**
	 * The maximum number of presences for the guild (the default value, currently 25000, is in effect when `null` is returned)
	 */
	max_presences?: number | null;
	/**
	 * The maximum number of members for the guild
	 */
	max_members?: number;
	/**
	 * The vanity url code for the guild
	 */
	vanity_url_code: string | null;
	/**
	 * The description for the guild, if the guild is discoverable
	 */
	description: string | null;
	/**
	 * Banner hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	banner: string | null;
	/**
	 * Premium tier (Server Boost level)
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
	 */
	premium_tier: GuildPremiumTier;
	/**
	 * The number of boosts this guild currently has
	 */
	premium_subscription_count?: number;
	/**
	 * The preferred locale of a Community guild; used in guild discovery and notices from Discord; defaults to "en-US"
	 *
	 * @default "en-US"
	 */
	preferred_locale: string;
	/**
	 * The id of the channel where admins and moderators of Community guilds receive notices from Discord
	 */
	public_updates_channel_id: Snowflake | null;
	/**
	 * The maximum amount of users in a video channel
	 */
	max_video_channel_users?: number;
	/**
	 * **This field is only received from https://discord.com/developers/docs/resources/guild#get-guild with the `with_counts` query parameter set to `true`**
	 */
	approximate_member_count?: number;
	/**
	 * **This field is only received from https://discord.com/developers/docs/resources/guild#get-guild with the `with_counts` query parameter set to `true`**
	 */
	approximate_presence_count?: number;
	welcome_screen?: APIGuildWelcomeScreen;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export const enum GuildDefaultMessageNotifications {
	ALL_MESSAGES,
	ONLY_MENTIONS,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
export const enum GuildExplicitContentFilter {
	DISABLED,
	MEMBERS_WITHOUT_ROLES,
	ALL_MEMBERS,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export const enum GuildMFALevel {
	NONE,
	ELEVATED,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
export const enum GuildVerificationLevel {
	/**
	 * Unrestricted
	 */
	NONE,
	/**
	 * Must have verified email on account
	 */
	LOW,
	/**
	 * Must be registered on Discord for longer than 5 minutes
	 */
	MEDIUM,
	/**
	 * Must be a member of the guild for longer than 10 minutes
	 */
	HIGH,
	/**
	 * Must have a verified phone number
	 */
	VERY_HIGH,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
export const enum GuildPremiumTier {
	NONE,
	TIER_1,
	TIER_2,
	TIER_3,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export const enum GuildSystemChannelFlags {
	/**
	 * Suppress member join notifications
	 */
	SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
	/**
	 * Suppress server boost notifications
	 */
	SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
	/**
	 * Suppress server setup tips
	 */
	SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export const enum GuildFeature {
	/**
	 * Guild has access to set an animated guild icon
	 */
	ANIMATED_ICON = 'ANIMATED_ICON',
	/**
	 * Guild has access to set a guild banner image
	 */
	BANNER = 'BANNER',
	/**
	 * Guild has access to use commerce features (i.e. create store channels)
	 */
	COMMERCE = 'COMMERCE',
	/**
	 * Guild can enable welcome screen, Membership Screening and discovery, and receives community updates
	 */
	COMMUNITY = 'COMMUNITY',
	/**
	 * Guild is able to be discovered in the directory
	 */
	DISCOVERABLE = 'DISCOVERABLE',
	/**
	 * Guild is able to be featured in the directory
	 */
	FEATURABLE = 'FEATURABLE',
	/**
	 * Guild has access to set an invite splash background
	 */
	INVITE_SPLASH = 'INVITE_SPLASH',
	/**
	 * Guild has access to create news channels
	 */
	NEWS = 'NEWS',
	/**
	 * Guild is partnered
	 */
	PARTNERED = 'PARTNERED',
	RELAY_ENABLED = 'RELAY_ENABLED',
	/**
	 * Guild has access to set a vanity URL
	 */
	VANITY_URL = 'VANITY_URL',
	/**
	 * Guild is verified
	 */
	VERIFIED = 'VERIFIED',
	/**
	 * Guild has access to set 384kbps bitrate in voice (previously VIP voice servers)
	 */
	VIP_REGIONS = 'VIP_REGIONS',
	/**
	 * Guild has enabled the welcome screen
	 */
	WELCOME_SCREEN_ENABLED = 'WELCOME_SCREEN_ENABLED',
	/**
	 * Guild has enabled Membership Screening
	 */
	MEMBER_VERIFICATION_GATE_ENABLED = 'MEMBER_VERIFICATION_GATE_ENABLED',
	/**
	 * Guild can be previewed before joining via Membership Screening or the directory
	 */
	PREVIEW_ENABLED = 'PREVIEW_ENABLED',
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-preview-object
 */
export interface APIGuildPreview {
	/**
	 * Guild id
	 */
	id: Snowflake;
	/**
	 * Guild name (2-100 characters)
	 */
	name: string;
	/**
	 * Icon hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	icon: string | null;
	/**
	 * Splash hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	splash: string | null;
	/**
	 * Discovery splash hash; only present for guilds with the "DISCOVERABLE" feature
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	discovery_splash: string | null;
	/**
	 * Custom guild emojis
	 *
	 * See https://discord.com/developers/docs/resources/emoji#emoji-object
	 */
	emojis: APIEmoji[];
	/**
	 * Enabled guild features
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object-guild-features
	 */
	features: GuildFeature[];
	/**
	 * Approximate number of members in this guild
	 */
	approximate_member_count: number;
	/**
	 * Approximate number of online members in this guild
	 */
	approximate_presence_count: number;
	/**
	 * The description for the guild
	 */
	description: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-widget-object
 */
export interface APIGuildWidgetSettings {
	/**
	 * Whether the widget is enabled
	 */
	enabled: boolean;
	/**
	 * The widget channel id
	 */
	channel_id: Snowflake | null;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface APIGuildMember {
	/**
	 * The user this guild member represents
	 *
	 * **This field won't be included in the member object attached to `MESSAGE_CREATE` and `MESSAGE_UPDATE` gateway events.**
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	user?: APIUser;
	/**
	 * This users guild nickname
	 */
	nick?: string | null;
	/**
	 * Array of role object ids
	 *
	 * See https://discord.com/developers/docs/topics/permissions#role-object
	 */
	roles: Snowflake[];
	/**
	 * When the user joined the guild
	 */
	joined_at: string;
	/**
	 * When the user started boosting the guild
	 *
	 * See https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-
	 */
	premium_since?: string | null;
	/**
	 * Whether the user is deafened in voice channels
	 */
	deaf: boolean;
	/**
	 * Whether the user is muted in voice channels
	 */
	mute: boolean;
	/**
	 * Whether the user has not yet passed the guild's Membership Screening requirements
	 *
	 * *If this field is not present, it can be assumed as `false`.*
	 */
	pending?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-object
 */
export interface APIGuildIntegration {
	/**
	 * Integration id
	 */
	id: Snowflake;
	/**
	 * Integration name
	 */
	name: string;
	/**
	 * Integration type
	 */
	type: APIGuildInteractionType;
	/**
	 * Is this integration enabled
	 */
	enabled: boolean;
	/**
	 * Is this integration syncing
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 */
	syncing?: boolean;
	/**
	 * ID that this integration uses for "subscribers"
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 */
	role_id?: Snowflake;
	/**
	 * Whether emoticons should be synced for this integration (`twitch` only currently)
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 */
	enable_emoticons?: boolean;
	/**
	 * The behavior of expiring subscribers
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 *
	 * See https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
	 */
	expire_behavior?: IntegrationExpireBehavior;
	/**
	 * The grace period (in days) before expiring subscribers
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 */
	expire_grace_period?: number;
	/**
	 * User for this integration
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	user?: APIUser;
	/**
	 * Integration account information
	 *
	 * See https://discord.com/developers/docs/resources/guild#integration-account-object
	 */
	account: APIIntegrationAccount;
	/**
	 * When this integration was last synced
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 */
	synced_at?: string;
	/**
	 * How many subscribers this integration has
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 */
	subscriber_count?: number;
	/**
	 * Has this integration been revoked
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 */
	revoked?: boolean;
	/**
	 * The bot/OAuth2 application for discord integrations
	 *
	 * See https://discord.com/developers/docs/resources/guild#integration-application-object
	 *
	 * **This field is not provided for `discord` bot integrations.**
	 */
	application?: APIGuildIntegrationApplication;
}

export type APIGuildInteractionType = 'twitch' | 'youtube' | 'discord';

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
 */
export const enum IntegrationExpireBehavior {
	RemoveRole,
	Kick,
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-account-object
 */
export interface APIIntegrationAccount {
	/**
	 * ID of the account
	 */
	id: string;
	/**
	 * Name of the account
	 */
	name: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-application-object
 */
export interface APIGuildIntegrationApplication {
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
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	icon: string | null;
	/**
	 * The description of the app
	 */
	description: string;
	/**
	 * The summary of the app
	 */
	summary: string;
	/**
	 * The bot associated with this application
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	bot?: APIUser;
}

/**
 * https://discord.com/developers/docs/resources/guild#ban-object
 */
export interface APIBan {
	/**
	 * The reason for the ban
	 */
	reason: string | null;
	/**
	 * The banned user
	 */
	user: APIUser;
}

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-example-get-guild-widget
 */
export interface APIGuildWidget {
	id: Snowflake;
	name: string;
	instant_invite: string | null;
	channels: APIGuildWidgetChannel[];
	members: APIGuildWidgetMember[];
	presence_count: number;
}

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-example-get-guild-widget
 */
export interface APIGuildWidgetChannel {
	id: Snowflake;
	name: string;
	position: number;
}

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-example-get-guild-widget
 */
export interface APIGuildWidgetMember {
	id: string;
	username: string;
	discriminator: string;
	avatar: string | null;
	status: PresenceUpdateStatus;
	activity?: { name: string };
	avatar_url: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-image-widget-style-options
 */
export const enum GuildWidgetStyle {
	/**
	 * Shield style widget with Discord icon and guild members online count
	 */
	Shield = 'shield',
	/**
	 * Large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget
	 */
	Banner1 = 'banner1',
	/**
	 * Smaller widget style with guild icon, name and online count. Split on the right with Discord logo
	 */
	Banner2 = 'banner2',
	/**
	 * Large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right
	 */
	Banner3 = 'banner3',
	/**
	 * Large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget
	 * and a "JOIN MY SERVER" button at the bottom
	 */
	Banner4 = 'banner4',
}

export interface APIGuildWelcomeScreen {
	/**
	 * The welcome screen short message
	 */
	description: string | null;
	/**
	 * Array of suggested channels
	 */
	welcome_channels: APIGuildWelcomeScreenChannel[];
}

export interface APIGuildWelcomeScreenChannel {
	/**
	 * The channel id that is suggested
	 */
	channel_id: Snowflake;
	/**
	 * The description shown for the channel
	 */
	description: string;
	/**
	 * The emoji id of the emoji that is shown on the left of the channel
	 */
	emoji_id: Snowflake | null;
	/**
	 * The emoji name of the emoji that is shown on the left of the channel
	 */
	emoji_name: string | null;
}

export interface APIGuildMembershipScreening {
	/**
	 * When the fields were last updated
	 */
	version: string;
	/**
	 * The steps in the screening form
	 */
	form_fields: APIGuildMembershipScreeningField[];
	/**
	 * The server description shown in the screening form
	 */
	description: string | null;
}

// TODO: make this a union based on the type in the future, when new types are added

export interface APIGuildMembershipScreeningField {
	/**
	 * The type of field
	 */
	field_type: MembershipScreeningFieldType;
	/**
	 * The title of the field
	 */
	label: string;
	/**
	 * The list of rules
	 */
	values?: string[];
	/**
	 * Whether the user has to fill out this field
	 */
	required: boolean;
}

export const enum MembershipScreeningFieldType {
	/**
	 * Server Rules
	 */
	TERMS = 'TERMS',
}

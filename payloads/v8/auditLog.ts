/**
 * Types extracted from https://discord.com/developers/docs/resources/audit-log
 */

import type { Snowflake } from '../../globals';
import type { APIOverwrite } from './channel';
import type {
	APIGuildIntegration,
	GuildDefaultMessageNotifications,
	GuildExplicitContentFilter,
	GuildMFALevel,
	GuildVerificationLevel,
	IntegrationExpireBehavior,
} from './guild';
import type { APIRole } from './permissions';
import type { StickerFormatType } from './sticker';
import type { APIUser } from './user';
import type { APIWebhook } from './webhook';
import type { StageInstancePrivacyLevel } from './stageInstance';

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure
 */
export interface APIAuditLog {
	/**
	 * Webhooks found in the audit log
	 *
	 * See https://discord.com/developers/docs/resources/webhook#webhook-object
	 */
	webhooks: APIWebhook[];
	/**
	 * Users found in the audit log
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	users: APIUser[];
	/**
	 * Audit log entries
	 *
	 * See https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object
	 */
	audit_log_entries: APIAuditLogEntry[];
	/**
	 * Partial integration objects
	 *
	 * See https://discord.com/developers/docs/resources/guild#integration-object
	 */
	integrations: APIGuildIntegration[];
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure
 */
export interface APIAuditLogEntry {
	/**
	 * ID of the affected entity (webhook, user, role, etc.)
	 */
	target_id: string | null;
	/**
	 * Changes made to the `target_id`
	 *
	 * See https://discord.com/developers/docs/resources/audit-log#audit-log-change-object
	 */
	changes?: APIAuditLogChange[];
	/**
	 * The user who made the changes
	 *
	 * This can be `null` in some cases (webhooks deleting themselves by using their own token, for example)
	 */
	user_id: Snowflake | null;
	/**
	 * ID of the entry
	 */
	id: Snowflake;
	/**
	 * Type of action that occurred
	 *
	 * See https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
	 */
	action_type: AuditLogEvent;
	/**
	 * Additional info for certain action types
	 *
	 * See https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
	 */
	options?: APIAuditLogOptions;
	/**
	 * The reason for the change (0-512 characters)
	 */
	reason?: string;
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
 */
export const enum AuditLogEvent {
	GuildUpdate = 1,

	ChannelCreate = 10,
	ChannelUpdate,
	ChannelDelete,
	ChannelOverwriteCreate,
	ChannelOverwriteUpdate,
	ChannelOverwriteDelete,

	MemberKick = 20,
	MemberPrune,
	MemberBanAdd,
	MemberBanRemove,
	MemberUpdate,
	MemberRoleUpdate,
	MemberMove,
	MemberDisconnect,
	BotAdd,

	RoleCreate = 30,
	RoleUpdate,
	RoleDelete,

	InviteCreate = 40,
	InviteUpdate,
	InviteDelete,

	WebhookCreate = 50,
	WebhookUpdate,
	WebhookDelete,

	EmojiCreate = 60,
	EmojiUpdate,
	EmojiDelete,

	MessageDelete = 72,
	MessageBulkDelete,
	MessagePin,
	MessageUnpin,

	IntegrationCreate = 80,
	IntegrationUpdate,
	IntegrationDelete,
	StageInstanceCreate,
	StageInstanceUpdate,
	StageInstanceDelete,

	StickerCreate = 90,
	StickerUpdate,
	StickerDelete,
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
 */
export interface APIAuditLogOptions {
	/**
	 * Number of days after which inactive members were kicked
	 *
	 * Present from:
	 * - MEMBER_PRUNE
	 */
	delete_member_days?: string;
	/**
	 * Number of members removed by the prune
	 *
	 * Present from:
	 * - MEMBER_PRUNE
	 */
	members_removed?: string;

	/**
	 * Channel in which the entities were targeted
	 *
	 * Present from:
	 * - MEMBER_MOVE
	 * - MESSAGE_PIN
	 * - MESSAGE_UNPIN
	 * - MESSAGE_DELETE
	 * - STAGE_INSTANCE_CREATE
	 * - STAGE_INSTANCE_UPDATE
	 * - STAGE_INSTANCE_DELETE
	 */
	channel_id?: Snowflake;

	/**
	 * ID of the message that was targeted
	 *
	 * Present from:
	 * - MESSAGE_PIN
	 * - MESSAGE_UNPIN
	 */
	message_id?: Snowflake;

	/**
	 * Number of entities that were targeted
	 *
	 * Present from:
	 * - MESSAGE_DELETE
	 * - MESSAGE_BULK_DELETE
	 * - MEMBER_DISCONNECT
	 * - MEMBER_MOVE
	 */
	count?: string;

	/**
	 * ID of the overwritten entity
	 *
	 * Present from:
	 * - CHANNEL_OVERWRITE_CREATE
	 * - CHANNEL_OVERWRITE_UPDATE
	 * - CHANNEL_OVERWRITE_DELETE
	 */
	id?: Snowflake;

	/**
	 * Type of overwritten entity - "0" for "role" or "1" for "member"
	 *
	 * Present from:
	 * - CHANNEL_OVERWRITE_CREATE
	 * - CHANNEL_OVERWRITE_UPDATE
	 * - CHANNEL_OVERWRITE_DELETE
	 *
	 * {@link AuditLogOptionsType}
	 */
	type?: AuditLogOptionsType;

	/**
	 * Name of the role
	 *
	 * Present from:
	 * - CHANNEL_OVERWRITE_CREATE
	 * - CHANNEL_OVERWRITE_UPDATE
	 * - CHANNEL_OVERWRITE_DELETE
	 *
	 * **Present only if the {@link APIAuditLogOptions#type entry type} is "0"**
	 */
	role_name?: string;
}

export const enum AuditLogOptionsType {
	Role = '0',
	Member = '1',
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure
 */
export type APIAuditLogChange =
	| APIAuditLogChangeKeyName
	| APIAuditLogChangeKeyDescription
	| APIAuditLogChangeKeyIconHash
	| APIAuditLogChangeKeySplashHash
	| APIAuditLogChangeKeyDiscoverySplashHash
	| APIAuditLogChangeKeyBannerHash
	| APIAuditLogChangeKeyOwnerID
	| APIAuditLogChangeKeyRegion
	| APIAuditLogChangeKeyPreferredLocale
	| APIAuditLogChangeKeyAFKChannelID
	| APIAuditLogChangeKeyAFKTimeout
	| APIAuditLogChangeKeyRulesChannelID
	| APIAuditLogChangeKeyPublicUpdatesChannelID
	| APIAuditLogChangeKeyMFALevel
	| APIAuditLogChangeKeyVerificationLevel
	| APIAuditLogChangeKeyExplicitContentFilter
	| APIAuditLogChangeKeyDefaultMessageNotifications
	| APIAuditLogChangeKeyVanityURLCode
	| APIAuditLogChangeKey$Add
	| APIAuditLogChangeKey$Remove
	| APIAuditLogChangeKeyPruneDeleteDays
	| APIAuditLogChangeKeyWidgetEnabled
	| APIAuditLogChangeKeyWidgetChannelID
	| APIAuditLogChangeKeySystemChannelID
	| APIAuditLogChangeKeyPosition
	| APIAuditLogChangeKeyTopic
	| APIAuditLogChangeKeyBitrate
	| APIAuditLogChangeKeyPermissionOverwrites
	| APIAuditLogChangeKeyNSFW
	| APIAuditLogChangeKeyApplicationID
	| APIAuditLogChangeKeyRateLimitPerUser
	| APIAuditLogChangeKeyPermissions
	| APIAuditLogChangeKeyColor
	| APIAuditLogChangeKeyHoist
	| APIAuditLogChangeKeyMentionable
	| APIAuditLogChangeKeyAllow
	| APIAuditLogChangeKeyDeny
	| APIAuditLogChangeKeyCode
	| APIAuditLogChangeKeyChannelID
	| APIAuditLogChangeKeyInviterID
	| APIAuditLogChangeKeyMaxUses
	| APIAuditLogChangeKeyUses
	| APIAuditLogChangeKeyMaxAge
	| APIAuditLogChangeKeyTemporary
	| APIAuditLogChangeKeyDeaf
	| APIAuditLogChangeKeyMute
	| APIAuditLogChangeKeyNick
	| APIAuditLogChangeKeyAvatarHash
	| APIAuditLogChangeKeyID
	| APIAuditLogChangeKeyType
	| APIAuditLogChangeKeyEnableEmoticons
	| APIAuditLogChangeKeyExpireBehavior
	| APIAuditLogChangeKeyExpireGracePeriod
	| APIAuditLogChangeKeyUserLimit
	| APIAuditLogChangeKeyPrivacyLevel
	| APIAuditLogChangeKeyTags
	| APIAuditLogChangeKeyFormatType
	| APIAuditLogChangeKeyAsset
	| APIAuditLogChangeKeyAvailable
	| APIAuditLogChangeKeyGuildID;

/**
 * Returned when an entity's name is changed
 */
export type APIAuditLogChangeKeyName = AuditLogChangeData<'name', string>;

/**
 * Returned when a guild's or sticker's description is changed
 */
export type APIAuditLogChangeKeyDescription = AuditLogChangeData<'description', string>;

/**
 * Returned when a guild's icon is changed
 */
export type APIAuditLogChangeKeyIconHash = AuditLogChangeData<'icon_hash', string>;

/**
 * Returned when a guild's splash is changed
 */
export type APIAuditLogChangeKeySplashHash = AuditLogChangeData<'splash_hash', string>;

/**
 * Returned when a guild's discovery splash is changed
 */
export type APIAuditLogChangeKeyDiscoverySplashHash = AuditLogChangeData<'discovery_splash_hash', string>;

/**
 * Returned when a guild's banner hash is changed
 */
export type APIAuditLogChangeKeyBannerHash = AuditLogChangeData<'banner_hash', string>;

/**
 * Returned when a guild's owner_id is changed
 */
export type APIAuditLogChangeKeyOwnerID = AuditLogChangeData<'owner_id', Snowflake>;

/**
 * Returned when a guild's region is changed
 */
export type APIAuditLogChangeKeyRegion = AuditLogChangeData<'region', string>;

/**
 * Returned when a guild's preferred_locale is changed
 */
export type APIAuditLogChangeKeyPreferredLocale = AuditLogChangeData<'preferred_locale', string>;

/**
 * Returned when a guild's afk_channel_id is changed
 */
export type APIAuditLogChangeKeyAFKChannelID = AuditLogChangeData<'afk_channel_id', Snowflake>;

/**
 * Returned when a guild's afk_timeout is changed
 */
export type APIAuditLogChangeKeyAFKTimeout = AuditLogChangeData<'afk_timeout', number>;

/**
 * Returned when a guild's rules_channel_id is changed
 */
export type APIAuditLogChangeKeyRulesChannelID = AuditLogChangeData<'rules_channel_id', string>;

/**
 * Returned when a guild's public_updates_channel_id is changed
 */
export type APIAuditLogChangeKeyPublicUpdatesChannelID = AuditLogChangeData<'public_updates_channel_id', string>;

/**
 * Returned when a guild's mfa_level is changed
 */
export type APIAuditLogChangeKeyMFALevel = AuditLogChangeData<'mfa_level', GuildMFALevel>;

/**
 * Returned when a guild's verification_level is changed
 */
export type APIAuditLogChangeKeyVerificationLevel = AuditLogChangeData<'verification_level', GuildVerificationLevel>;

/**
 * Returned when a guild's explicit_content_filter is changed
 */
export type APIAuditLogChangeKeyExplicitContentFilter = AuditLogChangeData<
	'explicit_content_filter',
	GuildExplicitContentFilter
>;

/**
 * Returned when a guild's default_message_notifications is changed
 */
export type APIAuditLogChangeKeyDefaultMessageNotifications = AuditLogChangeData<
	'default_message_notifications',
	GuildDefaultMessageNotifications
>;

/**
 * Returned when a guild's vanity_url_code is changed
 */
export type APIAuditLogChangeKeyVanityURLCode = AuditLogChangeData<'vanity_url_code', string>;

/**
 * Returned when new role(s) are added
 */
export type APIAuditLogChangeKey$Add = AuditLogChangeData<'$add', APIRole[]>;

/**
 * Returned when role(s) are removed
 */
export type APIAuditLogChangeKey$Remove = AuditLogChangeData<'$remove', APIRole[]>;

/**
 * Returned when there is a change in number of days after which inactive and role-unassigned members are kicked
 */
export type APIAuditLogChangeKeyPruneDeleteDays = AuditLogChangeData<'prune_delete_days', number>;

/**
 * Returned when a guild's widget is enabled
 */
export type APIAuditLogChangeKeyWidgetEnabled = AuditLogChangeData<'widget_enabled', boolean>;

/**
 * Returned when a guild's widget_channel_id is changed
 */
export type APIAuditLogChangeKeyWidgetChannelID = AuditLogChangeData<'widget_channel_id', Snowflake>;

/**
 * Returned when a guild's system_channel_id is changed
 */
export type APIAuditLogChangeKeySystemChannelID = AuditLogChangeData<'system_channel_id', Snowflake>;

/**
 * Returned when a channel's position is changed
 */
export type APIAuditLogChangeKeyPosition = AuditLogChangeData<'position', number>;

/**
 * Returned when a channel's topic is changed
 */
export type APIAuditLogChangeKeyTopic = AuditLogChangeData<'topic', string>;

/**
 * Returned when a voice channel's bitrate is changed
 */
export type APIAuditLogChangeKeyBitrate = AuditLogChangeData<'bitrate', number>;

/**
 * Returned when a channel's permission overwrites is changed
 */
export type APIAuditLogChangeKeyPermissionOverwrites = AuditLogChangeData<'permission_overwrites', APIOverwrite[]>;

/**
 * Returned when a channel's NSFW restriction is changed
 */
export type APIAuditLogChangeKeyNSFW = AuditLogChangeData<'nsfw', boolean>;

/**
 * The application ID of the added or removed Webhook or Bot
 */
export type APIAuditLogChangeKeyApplicationID = AuditLogChangeData<'application_id', Snowflake>;

/**
 * Returned when a channel's amount of seconds a user has to wait before sending another message
 * is changed
 */
export type APIAuditLogChangeKeyRateLimitPerUser = AuditLogChangeData<'rate_limit_per_user', number>;

/**
 * Returned when a permission bitfield is changed
 */
export type APIAuditLogChangeKeyPermissions = AuditLogChangeData<'permissions', string>;

/**
 * Returned when a role's color is changed
 */
export type APIAuditLogChangeKeyColor = AuditLogChangeData<'color', number>;

/**
 * Returned when a role's hoist status is changed
 */
export type APIAuditLogChangeKeyHoist = AuditLogChangeData<'hoist', boolean>;

/**
 * Returned when a role's mentionable status is changed
 */
export type APIAuditLogChangeKeyMentionable = AuditLogChangeData<'mentionable', boolean>;

/**
 * Returned when an overwrite's allowed permissions bitfield is changed
 */
export type APIAuditLogChangeKeyAllow = AuditLogChangeData<'allow', string>;

/**
 * Returned when an overwrite's denied permissions bitfield is changed
 */
export type APIAuditLogChangeKeyDeny = AuditLogChangeData<'deny', string>;

/**
 * Returned when an invite's code is changed
 */
export type APIAuditLogChangeKeyCode = AuditLogChangeData<'code', string>;

/**
 * Returned when an invite's channel_id is changed
 */
export type APIAuditLogChangeKeyChannelID = AuditLogChangeData<'channel_id', Snowflake>;

/**
 * Returned when an invite's inviter_id is changed
 */
export type APIAuditLogChangeKeyInviterID = AuditLogChangeData<'inviter_id', Snowflake>;

/**
 * Returned when an invite's max_uses is changed
 */
export type APIAuditLogChangeKeyMaxUses = AuditLogChangeData<'max_uses', number>;

/**
 * Returned when an invite's uses is changed
 */
export type APIAuditLogChangeKeyUses = AuditLogChangeData<'uses', number>;

/**
 * Returned when an invite's max_age is changed
 */
export type APIAuditLogChangeKeyMaxAge = AuditLogChangeData<'max_age', number>;

/**
 * Returned when an invite's temporary status is changed
 */
export type APIAuditLogChangeKeyTemporary = AuditLogChangeData<'temporary', boolean>;

/**
 * Returned when a user's deaf status is changed
 */
export type APIAuditLogChangeKeyDeaf = AuditLogChangeData<'deaf', boolean>;

/**
 * Returned when a user's mute status is changed
 */
export type APIAuditLogChangeKeyMute = AuditLogChangeData<'mute', boolean>;

/**
 * Returned when a user's nick is changed
 */
export type APIAuditLogChangeKeyNick = AuditLogChangeData<'mute', boolean>;

/**
 * Returned when a user's avatar_hash is changed
 */
export type APIAuditLogChangeKeyAvatarHash = AuditLogChangeData<'avatar_hash', string>;

/**
 * The ID of the changed entity - sometimes used in conjunction with other keys
 */
export type APIAuditLogChangeKeyID = AuditLogChangeData<'id', Snowflake>;

/**
 * The type of entity created
 */
export type APIAuditLogChangeKeyType = AuditLogChangeData<'type', number | string>;

/**
 * Returned when an integration's enable_emoticons is changed
 */
export type APIAuditLogChangeKeyEnableEmoticons = AuditLogChangeData<'enable_emoticons', boolean>;

/**
 * Returned when an integration's expire_behavior is changed
 */
export type APIAuditLogChangeKeyExpireBehavior = AuditLogChangeData<'expire_behavior', IntegrationExpireBehavior>;

/**
 * Returned when an integration's expire_grace_period is changed
 */
export type APIAuditLogChangeKeyExpireGracePeriod = AuditLogChangeData<'expire_grace_period', number>;

/**
 * Returned when a voice channel's user_limit is changed
 */
export type APIAuditLogChangeKeyUserLimit = AuditLogChangeData<'user_limit', number>;

/**
 * Returned when privacy level of a stage instance is changed
 */
export type APIAuditLogChangeKeyPrivacyLevel = AuditLogChangeData<'privacy_level', StageInstancePrivacyLevel>;

/**
 * Returned when a sticker's related emoji is changed
 */
export type APIAuditLogChangeKeyTags = AuditLogChangeData<'tags', string>;

/**
 * Returned when a sticker's format_type is changed
 */
export type APIAuditLogChangeKeyFormatType = AuditLogChangeData<'format_type', StickerFormatType>;

/**
 * Empty string
 */
export type APIAuditLogChangeKeyAsset = AuditLogChangeData<'asset', ''>;

/**
 * Returned when a sticker's availability is changed
 */
export type APIAuditLogChangeKeyAvailable = AuditLogChangeData<'available', boolean>;

/**
 * Returned when a sticker's guild_id is changed
 */
export type APIAuditLogChangeKeyGuildID = AuditLogChangeData<'guild_id', Snowflake>;

interface AuditLogChangeData<K extends string, D extends unknown> {
	key: K;
	/**
	 * The new value
	 *
	 * If `new_value` is not present in the change object, while `old_value` is,
	 * that means the property that was changed has been reset, or set to `null`
	 */
	new_value?: D;
	old_value?: D;
}

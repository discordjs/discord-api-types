/**
 * Types extracted from https://discord.com/developers/docs/resources/audit-log
 */

import type { APIOverwrite, ChannelType } from './channel';
import type {
	APIGuildIntegration,
	GuildDefaultMessageNotifications,
	GuildExplicitContentFilter,
	GuildMFALevel,
	GuildVerificationLevel,
	IntegrationExpireBehavior,
} from './guild';
import type { APIRole } from './permissions';
import type { APIUser } from './user';
import type { APIWebhook } from './webhook';

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure
 */
export interface APIAuditLog {
	webhooks: APIWebhook[];
	users: APIUser[];
	audit_log_entries: APIAuditLogEntry[];
	integrations: APIGuildIntegration[];
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure
 */
export interface APIAuditLogEntry {
	target_id: string | null;
	changes?: APIAuditLogChange[];
	user_id: string | null;
	id: string;
	action_type: AuditLogEvent;
	options?: APIAuditLogOptions;
	reason?: string;
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
 */
export enum AuditLogEvent {
	GUILD_UPDATE = 1,

	CHANNEL_CREATE = 10,
	CHANNEL_UPDATE,
	CHANNEL_DELETE,
	CHANNEL_OVERWRITE_CREATE,
	CHANNEL_OVERWRITE_UPDATE,
	CHANNEL_OVERWRITE_DELETE,

	MEMBER_KICK = 20,
	MEMBER_PRUNE,
	MEMBER_BAN_ADD,
	MEMBER_BAN_REMOVE,
	MEMBER_UPDATE,
	MEMBER_ROLE_UPDATE,
	MEMBER_MOVE,
	MEMBER_DISCONNECT,
	BOT_ADD,

	ROLE_CREATE = 30,
	ROLE_UPDATE,
	ROLE_DELETE,

	INVITE_CREATE = 40,
	INVITE_UPDATE,
	INVITE_DELETE,

	WEBHOOK_CREATE = 50,
	WEBHOOK_UPDATE,
	WEBHOOK_DELETE,

	EMOJI_CREATE = 60,
	EMOJI_UPDATE,
	EMOJI_DELETE,

	MESSAGE_DELETE = 72,
	MESSAGE_BULK_DELETE,
	MESSAGE_PIN,
	MESSAGE_UNPIN,

	INTEGRATION_CREATE = 80,
	INTEGRATION_UPDATE,
	INTEGRATION_DELETE,
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
 */
export interface APIAuditLogOptions {
	/**
	 * Present from:
	 * - MEMBER_PRUNE
	 */
	delete_member_days?: string;
	/**
	 * Present from:
	 * - MEMBER_PRUNE
	 */
	members_removed?: string;

	/**
	 * Present from:
	 * - MEMBER_MOVE
	 * - MESSAGE_PIN
	 * - MESSAGE_UNPIN
	 * - MESSAGE_DELETE
	 */
	channel_id?: string;

	/**
	 * Present from:
	 * - MESSAGE_PIN
	 * - MESSAGE_UNPIN
	 */
	message_id?: string;

	/**
	 * Present from:
	 * - MESSAGE_DELETE
	 * - MESSAGE_BULK_DELETE
	 * - MEMBER_DISCONNECT
	 * - MEMBER_MOVE
	 */
	count?: string;

	/**
	 * Present from:
	 * - CHANNEL_OVERWRITE_CREATE
	 * - CHANNEL_OVERWRITE_UPDATE
	 * - CHANNEL_OVERWRITE_DELETE
	 */
	id?: string;

	/**
	 * Present from:
	 * - CHANNEL_OVERWRITE_CREATE
	 * - CHANNEL_OVERWRITE_UPDATE
	 * - CHANNEL_OVERWRITE_DELETE
	 */
	type: AuditLogOptionsType;

	/**
	 * Present from:
	 * - CHANNEL_OVERWRITE_CREATE
	 * - CHANNEL_OVERWRITE_UPDATE
	 * - CHANNEL_OVERWRITE_DELETE
	 *
	 * **Present only if the {@link APIAuditLogOptions#type entry type} is "role"**
	 */
	role_name?: string;
}

export enum AuditLogOptionsType {
	Member = 'member',
	Role = 'role',
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure
 */
export interface APIAuditLogChange {
	new_value?: APIAuditLogChangeKey;
	old_value?: APIAuditLogChangeKey;
	key: string;
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-key
 */
export interface APIAuditLogChangeKey {
	/**
	 * Returned when a guild is updated
	 */
	name?: string;
	/**
	 * Returned when a guild is updated
	 */
	icon_hash?: string;
	/**
	 * Returned when a guild is updated
	 */
	splash_hash?: string;
	/**
	 * Returned when a guild is updated
	 */
	owner_id?: string;
	/**
	 * Returned when a guild is updated
	 */
	region?: string;
	/**
	 * Returned when a guild is updated
	 */
	afk_channel_id?: string;
	/**
	 * Returned when a guild is updated
	 */
	afk_timeout?: number;
	/**
	 * Returned when a guild is updated
	 */
	mfa_level?: GuildMFALevel;
	/**
	 * Returned when a guild is updated
	 */
	verification_level?: GuildVerificationLevel;
	/**
	 * Returned when a guild is updated
	 */
	explicit_content_filter?: GuildExplicitContentFilter;
	/**
	 * Returned when a guild is updated
	 */
	default_message_notifications?: GuildDefaultMessageNotifications;
	/**
	 * Returned when a guild is updated
	 */
	vanity_url_code?: string;
	/**
	 * Returned when a guild is updated
	 */
	$add?: APIRole[];
	/**
	 * Returned when a guild is updated
	 */
	$remove?: APIRole[];
	/**
	 * Returned when a guild is updated
	 */
	prune_delete_days?: number;
	/**
	 * Returned when a guild is updated
	 */
	widget_enabled?: boolean;
	/**
	 * Returned when a guild is updated
	 */
	widget_channel_id?: string;
	/**
	 * Returned when a guild is updated
	 */
	system_channel_id?: string;

	/**
	 * Returned when a channel is updated
	 */
	position?: number;
	/**
	 * Returned when a channel is updated
	 */
	topic?: string;
	/**
	 * Returned when a channel is updated
	 */
	bitrate?: number;
	/**
	 * Returned when a channel is updated
	 */
	permission_overwrites?: APIOverwrite[];
	/**
	 * Returned when a channel is updated
	 */
	nsfw?: boolean;
	/**
	 * Returned when a channel is updated
	 */
	application_id?: string;
	/**
	 * Returned when a channel is updated
	 */
	rate_limit_per_user?: number;

	/**
	 * Returned when a role is updated
	 */
	permissions?: number;
	/**
	 * Returned when a role is updated
	 */
	permissions_new?: string;
	/**
	 * Returned when a role is updated
	 */
	color?: string;
	/**
	 * Returned when a role is updated
	 */
	hoist?: boolean;
	/**
	 * Returned when a role is updated
	 */
	mentionable?: boolean;
	/**
	 * Returned when a role is updated
	 * @deprecated Use `allow_new` instead
	 */
	allow?: number;
	/**
	 * Returned when a role is updated
	 */
	allow_new?: string;
	/**
	 * Returned when a role is updated
	 * @deprecated Use `deny_new` instead
	 */
	deny?: number;
	/**
	 * Returned when a role is updated
	 */
	deny_new?: string;

	/**
	 * Returned when an invite is updated
	 */
	code?: string;
	/**
	 * Returned when an invite is updated
	 */
	channel_id?: string;
	/**
	 * Returned when an invite is updated
	 */
	inviter_id?: string;
	/**
	 * Returned when an invite is updated
	 */
	max_uses?: number;
	/**
	 * Returned when an invite is updated
	 */
	uses?: number;
	/**
	 * Returned when an invite is updated
	 */
	max_age?: number;
	/**
	 * Returned when an invite is updated
	 */
	temporary?: boolean;

	/**
	 * Returned when a user is updated
	 */
	deaf?: boolean;
	/**
	 * Returned when a user is updated
	 */
	mute?: boolean;
	/**
	 * Returned when a user is updated
	 */
	nick?: string;
	/**
	 * Returned when a user is updated
	 */
	avatar_hash?: string;

	/**
	 * The ID of the changed entry
	 */
	id: string;
	/**
	 * The type of the changed entity
	 */
	type?: ChannelType | string;

	/**
	 * Returned when an integration is updated
	 */
	enable_emoticons?: boolean;
	/**
	 * Returned when an integration is updated
	 */
	expire_behavior?: IntegrationExpireBehavior;
	/**
	 * Returned when an integration is updated
	 */
	expire_grace_period?: number;
}

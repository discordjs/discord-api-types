import type { APIBan, APIChannel, APIGuild, APIGuildIntegration, APIGuildMember, APIGuildPreview, APIGuildWidget, APIInvite, APIRole, APIVoiceRegion, GuildDefaultMessageNotifications, GuildExplicitContentFilter, GuildFeature, GuildVerificationLevel, GuildWidgetStyle, IntegrationExpireBehavior } from '../payloads';

export type APIGuildCreatePartialChannel = Partial<Pick<APIChannel, 'type' | 'permission_overwrites' | 'topic' | 'nsfw' | 'bitrate' | 'user_limit' | 'rate_limit_per_user' | 'parent_id'>> & Required<Pick<APIChannel, 'name'>>;

/**
 * https://discord.com/developers/docs/resources/guild#create-guild
 */
export interface RESTPostAPIGuildsJSONBody {
	name: string;
	region?: string;
	icon?: string;
	verification_level?: GuildVerificationLevel;
	default_message_notifications?: GuildDefaultMessageNotifications;
	explicit_content_filter?: GuildExplicitContentFilter;
	roles?: APIRole[];
	channels?: APIGuildCreatePartialChannel[];
	afk_channel_id?: string;
	afk_timeout?: number;
	system_channel_id?: string;
}

export type RESTPostAPIGuildsResult = APIGuild;

/**
 * https://discord.com/developers/docs/resources/guild#get-guild
 */
export interface RESTGetAPIGuildQuery {
	with_counts?: boolean;
}

export type RESTGetAPIGuildResult = APIGuild;

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-preview
 */
export type RESTGetAPIGuildPreviewResult = APIGuildPreview;

/**
 * https://discord.com/developers/docs/resources/guild#modify-guild
 */
export interface RESTPatchAPIGuildJSONBody {
	name?: string;
	region?: string;
	verification_level?: GuildVerificationLevel;
	default_message_notifications?: GuildDefaultMessageNotifications;
	explicit_content_filter?: GuildExplicitContentFilter;
	afk_channel_id?: string | null;
	afk_timeout?: number;
	icon?: string | null;
	owner_id?: string;
	splash?: string | null;
	discovery_splash?: string | null;
	banner?: string | null;
	system_channel_id?: string | null;
	rules_channel_id?: string | null;
	public_updates_channel_id?: string | null;
	preferred_locale?: string;
	features?: GuildFeature[];
	description?: string | null;
}

export type RESTPatchAPIGuildResult = APIGuild;

/**
 * https://discord.com/developers/docs/resources/guild#delete-guild
 */
export type RESTDeleteAPIGuildResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-channels
 */
export type RESTGetAPIGuildChannelsResult = APIChannel[];

/**
 * https://discord.com/developers/docs/resources/guild#create-guild-channel
 */
export type RESTPostAPIGuildChannelJSONBody = APIGuildCreatePartialChannel;

export type RESTPostAPIGuildChannelResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
 */
export type RESTPatchAPIGuildChannelPositionsJSONBody = Array<{
	id: string;
	position: number;
	lock_permissions?: boolean;
	parent_id?: string | null;
}>;

export type RESTPatchAPIGuildChannelPositionsResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-member
 */
export type RESTGetAPIGuildMemberResult = APIGuildMember;

/**
 * https://discord.com/developers/docs/resources/guild#list-guild-members
 */
export interface RESTGetAPIGuildMembersQuery {
	limit?: number;
	after?: string;
}

export type RESTGetAPIGuildMembersResult = APIGuildMember[];

export interface RESTGetAPIGuildMembersSearchQuery {
	query: string;
	limit?: number;
}

export type RESTGetAPIGuildMembersSearchResult = APIGuildMember[];

/**
 * https://discord.com/developers/docs/resources/guild#add-guild-member
 */
export interface RESTPutAPIGuildMemberJSONBody {
	access_token: string;
	nick?: string;
	roles?: string[];
	mute?: boolean;
	deaf?: boolean;
}

export type RESTPutAPIGuildMemberResult = APIGuildMember | undefined;

/**
 * https://discord.com/developers/docs/resources/guild#modify-guild-member
 */
export interface RESTPatchAPIGuildMemberJSONBody {
	nick?: string | null;
	roles?: string[] | null;
	mute?: boolean | null;
	deaf?: boolean | null;
	channel_id?: string | null;
}

export type RESTPatchAPIGuildMemberResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#modify-current-user-nick
 */
export interface RESTPatchAPICurrentGuildMemberNicknameJSONBody {
	nick?: string | null;
}

export type RESTPatchAPICurrentGuildMemberNicknameResult = Required<RESTPatchAPICurrentGuildMemberNicknameJSONBody>;

/**
 * https://discord.com/developers/docs/resources/guild#add-guild-member-role
 */
export type RESTPutAPIGuildMemberRoleResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#remove-guild-member-role
 */
export type RESTDeleteAPIGuildMemberRoleResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#remove-guild-member
 */
export type RESTDeleteAPIGuildMemberResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-bans
 */
export type RESTGetAPIGuildBansResult = APIBan[];

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-ban
 */
export type RESTGetAPIGuildBanResult = APIBan;

/**
 * https://discord.com/developers/docs/resources/guild#create-guild-ban
 */
export interface RESTPutAPIGuildBanJSONBody {
	delete_message_days?: number;
	reason?: string;
}

export type RESTPutAPIGuildBanResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#remove-guild-ban
 */
export type RESTDeleteAPIGuildBanResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-roles
 */
export type RESTGetAPIGuildRolesResult = APIRole[];

/**
 * https://discord.com/developers/docs/resources/guild#create-guild-role
 */
export interface RESTPostAPIGuildRoleJSONBody {
	name?: string | null;
	permissions?: number | string | null;
	color?: number | null;
	hoist?: boolean | null;
	mentionable?: boolean | null;
}

export type RESTPostAPIGuildRoleResult = APIRole;

/**
 * https://discord.com/developers/docs/resources/guild#modify-guild-role-positions
 */
export type RESTPatchAPIGuildRolePositionsJSONBody = Array<{
	id: string;
	position?: number;
}>;

export type RESTPatchAPIGuildRolePositionsResult = APIRole[];

/**
 * https://discord.com/developers/docs/resources/guild#modify-guild-role
 */
export interface RESTPatchAPIGuildRoleJSONBody {
	name?: string;
	permissions?: number | string;
	color?: number;
	hoist?: boolean;
	mentionable?: boolean;
}

export type RESTPatchAPIGuildRoleResult = APIRole;

/**
 * https://discord.com/developers/docs/resources/guild#delete-guild-role
 */
export type RESTDeleteAPIGuildRoleResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-prune-count
 */
export interface RESTGetAPIGuildPruneCountQuery {
	days?: number;
	/**
	 * While this is typed as a string, it represents an array of
	 * role IDs delimited by commas.
	 *
	 * @see https://discord.com/developers/docs/resources/guild#get-guild-prune-count-query-string-params
	 */
	include_roles?: string;
}

export interface RESTGetAPIGuildPruneCountResult {
	pruned: number;
}

/**
 * https://discord.com/developers/docs/resources/guild#begin-guild-prune
 */
export interface RESTPostAPIGuildPruneJSONBody {
	days?: number;
	compute_prune_count?: boolean;
	include_roles?: string[];
}

export interface RESTPostAPIGuildPruneResult {
	pruned: number | null;
}

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-voice-regions
 */
export type RESTGetAPIGuildVoiceRegionsResult = APIVoiceRegion[];

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-invites
 */
export type RESTGetAPIGuildInvitesResult = APIInvite[];

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-integrations
 */
export interface RESTGetAPIGuildIntegrationsQuery {
	include_applications?: boolean;
}

export type RESTGetAPIGuildIntegrationsResult = APIGuildIntegration[];

/**
 * https://discord.com/developers/docs/resources/guild#create-guild-integration
 */
export interface RESTPostAPIGuildIntegrationJSONBody {
	type: string;
	id: string;
}

export type RESTPostAPIGuildIntegrationResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#modify-guild-integration
 */
export interface RESTPatchAPIGuildIntegrationJSONBody {
	expire_behavior?: IntegrationExpireBehavior | null;
	expire_grace_period?: number | null;
	enable_emoticons?: boolean | null;
}

export type RESTPatchAPIGuildIntegrationResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#delete-guild-integration
 */
export type RESTDeleteAPIGuildIntegrationResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#sync-guild-integration
 */
export type RESTPostAPIGuildIntegrationSyncResult = never;

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-widget
 */
export type RESTGetAPIGuildWidgetResult = APIGuildWidget;

/**
 * https://discord.com/developers/docs/resources/guild#modify-guild-widget
 */
export type RESTPatchAPIGuildWidgetJSONBody = Partial<APIGuildWidget>;

export type RESTPatchAPIGuildWidgetResult = APIGuildWidget;

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
 */
export interface RESTGetAPIGuildVanityUrlResult {
	code: string | null;
	uses: number;
}

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-image
 */
export interface RESTGetAPIGuildWidgetImageQuery {
	style?: GuildWidgetStyle;
}

/**
 * Note: while the return type is `ArrayBuffer`, the expected result is
 * a buffer of sorts (depends if in browser or on node.js/deno).
 */
export type RESTGetAPIGuildWidgetImageResult = ArrayBuffer;

import type { Snowflake } from '../../globals.ts';

export * from '../common.ts';

export * from './auditLog.ts';
export * from './channel.ts';
export * from './emoji.ts';
export * from './gateway.ts';
export * from './guild.ts';
export * from './interactions.ts';
export * from './invite.ts';
export * from './oauth2.ts';
export * from './stageInstance.ts';
export * from './sticker.ts';
export * from './template.ts';
export * from './user.ts';
export * from './voice.ts';
export * from './webhook.ts';

export const APIVersion = '8';

export const Routes = {
	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/audit-logs`
	 */
	guildAuditLog(guildID: Snowflake) {
		return `/guilds/${guildID}/audit-logs` as const;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{channel.id}`
	 * - PATCH  `/channels/{channel.id}`
	 * - DELETE `/channels/{channel.id}`
	 */
	channel(channelID: Snowflake) {
		return `/channels/${channelID}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/channels/{channel.id}/messages`
	 * - POST `/channels/{channel.id}/messages`
	 */
	channelMessages(channelID: Snowflake) {
		return `/channels/${channelID}/messages` as const;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{channel.id}/messages/{message.id}`
	 * - PATCH  `/channels/{channel.id}/messages/{message.id}`
	 * - DELETE `/channels/{channel.id}/messages/{message.id}`
	 */
	channelMessage(channelID: Snowflake, messageID: Snowflake) {
		return `/channels/${channelID}/messages/${messageID}` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
	 */
	channelMessageCrosspost(channelID: Snowflake, messageID: Snowflake) {
		return `/channels/${channelID}/messages/${messageID}/crosspost` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
	 *
	 * **Note**: You need to URL encode the emoji yourself
	 */
	channelMessageOwnReaction(channelID: Snowflake, messageID: Snowflake, emoji: string) {
		return `/channels/${channelID}/messages/${messageID}/reactions/${emoji}/@me` as const;
	},

	/**
	 * Route for:
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
	 *
	 * **Note**: You need to URL encode the emoji yourself
	 */
	channelMessageUserReaction(channelID: Snowflake, messageID: Snowflake, emoji: string, userID: Snowflake) {
		return `/channels/${channelID}/messages/${messageID}/reactions/${emoji}/${userID}` as const;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
	 *
	 * **Note**: You need to URL encode the emoji yourself
	 */
	channelMessageReaction(channelID: Snowflake, messageID: Snowflake, emoji: string) {
		return `/channels/${channelID}/messages/${messageID}/reactions/${emoji}` as const;
	},

	/**
	 * Route for:
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
	 */
	channelMessageAllReactions(channelID: Snowflake, messageID: Snowflake) {
		return `/channels/${channelID}/messages/${messageID}/reactions` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/messages/bulk-delete`
	 */
	channelBulkDelete(channelID: Snowflake) {
		return `/channels/${channelID}/messages/bulk-delete` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
	 * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
	 */
	channelPermission(channelID: Snowflake, overwriteID: Snowflake) {
		return `/channels/${channelID}/permissions/${overwriteID}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/channels/{channel.id}/invites`
	 * - POST `/channels/{channel.id}/invites`
	 */
	channelInvites(channelID: Snowflake) {
		return `/channels/${channelID}/invites` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/followers`
	 */
	channelFollowers(channelID: Snowflake) {
		return `/channels/${channelID}/followers` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/typing`
	 */
	channelTyping(channelID: Snowflake) {
		return `/channels/${channelID}/typing` as const;
	},

	/**
	 * Route for:
	 * - GET `/channels/{channel.id}/pins`
	 */
	channelPins(channelID: Snowflake) {
		return `/channels/${channelID}/pins` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/pins/{message.id}`
	 * - DELETE `/channels/{channel.id}/pins/{message.id}`
	 */
	channelPin(channelID: Snowflake, messageID: Snowflake) {
		return `/channels/${channelID}/pins/${messageID}` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/recipients/{user.id}`
	 * - DELETE `/channels/{channel.id}/recipients/{user.id}`
	 */
	channelRecipient(channelID: Snowflake, userID: Snowflake) {
		return `/channels/${channelID}/recipients/${userID}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/emojis`
	 * - POST `/guilds/{guild.id}/emojis`
	 */
	guildEmojis(guildID: Snowflake) {
		return `/guilds/${guildID}/emojis` as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
	 * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
	 * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
	 */
	guildEmoji(guildID: Snowflake, emojiID: Snowflake) {
		return `/guilds/${guildID}/emojis/${emojiID}` as const;
	},

	/**
	 * Route for:
	 * - POST `/guilds`
	 */
	guilds() {
		return '/guilds' as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}`
	 * - PATCH  `/guilds/{guild.id}`
	 * - DELETE `/guilds/{guild.id}`
	 */
	guild(guildID: Snowflake) {
		return `/guilds/${guildID}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/preview`
	 */
	guildPreview(guildID: Snowflake) {
		return `/guilds/${guildID}/preview` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/channels`
	 * - POST  `/guilds/{guild.id}/channels`
	 * - PATCH `/guilds/{guild.id}/channels`
	 */
	guildChannels(guildID: Snowflake) {
		return `/guilds/${guildID}/channels` as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/members/{user.id}`
	 * - PUT    `/guilds/{guild.id}/members/{user.id}`
	 * - PATCH  `/guilds/{guild.id}/members/{user.id}`
	 * - DELETE `/guilds/{guild.id}/members/{user.id}`
	 */
	guildMember(guildID: Snowflake, userID: Snowflake) {
		return `/guilds/${guildID}/members/${userID}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/members`
	 */
	guildMembers(guildID: Snowflake) {
		return `/guilds/${guildID}/members` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/members/search`
	 */
	guildMembersSearch(guildID: Snowflake) {
		return `/guilds/${guildID}/members/search` as const;
	},

	/**
	 * Route for:
	 * - PATCH `/guilds/{guild.id}/members/@me/nick`
	 */
	guildCurrentMemberNickname(guildID: Snowflake) {
		return `/guilds/${guildID}/members/@me/nick` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
	 * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
	 */
	guildMemberRole(guildID: Snowflake, memberID: Snowflake, roleID: Snowflake) {
		return `/guilds/${guildID}/members/${memberID}/roles/${roleID}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/bans`
	 */
	guildBans(guildID: Snowflake) {
		return `/guilds/${guildID}/bans` as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/bans/{user.id}`
	 * - PUT    `/guilds/{guild.id}/bans/{user.id}`
	 * - DELETE `/guilds/{guild.id}/bans/{user.id}`
	 */
	guildBan(guildID: Snowflake, userID: Snowflake) {
		return `/guilds/${guildID}/bans/${userID}` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/roles`
	 * - POST  `/guilds/{guild.id}/roles`
	 * - PATCH `/guilds/{guild.id}/roles`
	 */
	guildRoles(guildID: Snowflake) {
		return `/guilds/${guildID}/roles` as const;
	},

	/**
	 * Route for:
	 * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
	 * - DELETE `/guilds/{guild.id}/roles/{role.id}`
	 */
	guildRole(guildID: Snowflake, roleID: Snowflake) {
		return `/guilds/${guildID}/roles/${roleID}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/prune`
	 * - POST `/guilds/{guild.id}/prune`
	 */
	guildPrune(guildID: Snowflake) {
		return `/guilds/${guildID}/prune` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/regions`
	 */
	guildVoiceRegions(guildID: Snowflake) {
		return `/guilds/${guildID}/regions` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/invites`
	 */
	guildInvites(guildID: Snowflake) {
		return `/guilds/${guildID}/invites` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/integrations`
	 */
	guildIntegrations(guildID: Snowflake) {
		return `/guilds/${guildID}/integrations` as const;
	},

	/**
	 * Route for:
	 * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
	 */
	guildIntegration(guildID: Snowflake, integrationID: Snowflake) {
		return `/guilds/${guildID}/integrations/${integrationID}` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/widget`
	 * - PATCH `/guilds/{guild.id}/widget`
	 */
	guildWidgetSettings(guildID: Snowflake) {
		return `/guilds/${guildID}/widget` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/widget.json`
	 */
	guildWidgetJSON(guildID: Snowflake) {
		return `/guilds/${guildID}/widget.json` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/vanity-url`
	 */
	guildVanityUrl(guildID: Snowflake) {
		return `/guilds/${guildID}/vanity-url` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/widget.png`
	 */
	guildWidgetImage(guildID: Snowflake) {
		return `/guilds/${guildID}/widget.png` as const;
	},

	/**
	 * Route for:
	 * - GET    `/invites/{invite.code}`
	 * - DELETE `/invites/{invite.code}`
	 */
	invite(code: string) {
		return `/invites/${code}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/templates/{template.code}`
	 * - POST `/guilds/templates/{template.code}`
	 */
	template(code: string) {
		return `/guilds/templates/${code}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/templates`
	 * - POST `/guilds/{guild.id}/templates`
	 */
	guildTemplates(guildID: Snowflake) {
		return `/guilds/${guildID}/templates` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/guilds/{guild.id}/templates/{template.code}`
	 * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
	 * - DELETE `/guilds/{guild.id}/templates/{template.code}`
	 */
	guildTemplate(guildID: Snowflake, code: string) {
		return `/guilds/${guildID}/templates/${code}` as const;
	},

	/**
	 * Route for:
	 * - GET   `/users/@me`
	 * - GET   `/users/{user.id}`
	 * - PATCH `/users/@me`
	 *
	 * @param [userID='@me'] The user ID, defaulted to `@me`
	 */
	user(userID: Snowflake | '@me' = '@me') {
		return `/users/${userID}` as const;
	},

	/**
	 * Route for:
	 * - GET `/users/@me/guilds`
	 */
	userGuilds() {
		return `/users/@me/guilds` as const;
	},

	/**
	 * Route for:
	 * - DELETE `/users/@me/guilds/{guild.id}`
	 */
	userGuild(guildID: Snowflake) {
		return `/users/@me/guilds/${guildID}` as const;
	},

	/**
	 * Route for:
	 * - POST `/users/@me/channels`
	 */
	userChannels() {
		return `/users/@me/channels` as const;
	},

	/**
	 * Route for:
	 * - GET `/users/@me/connections`
	 */
	userConnections() {
		return `/users/@me/connections` as const;
	},

	/**
	 * Route for:
	 * - GET `/voice/regions`
	 */
	voiceRegions() {
		return `/voice/regions` as const;
	},

	/**
	 * Route for:
	 * - GET  `/channels/{channel.id}/webhooks`
	 * - POST `/channels/{channel.id}/webhooks`
	 */
	channelWebhooks(channelID: Snowflake) {
		return `/channels/${channelID}/webhooks` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/webhooks`
	 */
	guildWebhooks(guildID: Snowflake) {
		return `/guilds/${guildID}/webhooks` as const;
	},

	/**
	 * Route for:
	 * - GET    `/webhooks/{webhook.id}`
	 * - GET    `/webhooks/{webhook.id}/{webhook.token}`
	 * - PATCH  `/webhooks/{webhook.id}`
	 * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
	 * - DELETE `/webhooks/{webhook.id}`
	 * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
	 * - POST   `/webhooks/{webhook.id}/{webhook.token}`
	 *
	 * - POST   `/webhooks/{application.id}/{interaction.token}`
	 */
	webhook(webhookID: Snowflake, webhookToken?: string) {
		const parts = ['', 'webhooks', webhookID];

		if (webhookToken) parts.push(webhookToken);

		return parts.join('/') as `/webhooks/${Snowflake}` | `/webhooks/${Snowflake}/${string}`;
	},

	/**
	 * Route for:
	 * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
	 * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
	 * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
	 * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
	 * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
	 * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
	 *
	 * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
	 * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
	 * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
	 *
	 * @param [messageID='@original'] The message ID to change, defaulted to `@original`
	 */
	webhookMessage(webhookID: Snowflake, webhookToken: string, messageID: Snowflake | '@original' = '@original') {
		return `/webhooks/${webhookID}/${webhookToken}/messages/${messageID}` as const;
	},

	/**
	 * Route for:
	 * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
	 * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
	 */
	webhookPlatform(webhookID: Snowflake, webhookToken: string, platform: 'github' | 'slack') {
		return `/webhooks/${webhookID}/${webhookToken}/${platform}` as const;
	},

	/**
	 * Route for:
	 * - GET `/gateway`
	 */
	gateway() {
		return `/gateway` as const;
	},

	/**
	 * Route for:
	 * - GET `/gateway/bot`
	 */
	gatewayBot() {
		return `/gateway/bot` as const;
	},

	/**
	 * Route for:
	 * - GET `/oauth2/applications/@me`
	 */
	oauth2CurrentApplication() {
		return `/oauth2/applications/@me` as const;
	},

	/**
	 * Route for:
	 * - GET `/oauth2/@me`
	 */
	oauth2CurrentAuthorization() {
		return `/oauth2/@me` as const;
	},

	/**
	 * Route for:
	 * - GET  `/applications/{application.id}/commands`
	 * - PUT  `/applications/{application.id}/commands`
	 * - POST `/applications/{application.id}/commands`
	 */
	applicationCommands(applicationID: Snowflake) {
		return `/applications/${applicationID}/commands` as const;
	},

	/**
	 * Route for:
	 * - GET    `/applications/{application.id}/commands/{command.id}`
	 * - PATCH  `/applications/{application.id}/commands/{command.id}`
	 * - DELETE `/applications/{application.id}/commands/{command.id}`
	 */
	applicationCommand(applicationID: Snowflake, commandID: Snowflake) {
		return `/applications/${applicationID}/commands/${commandID}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
	 * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
	 * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
	 */
	applicationGuildCommands(applicationID: Snowflake, guildID: Snowflake) {
		return `/applications/${applicationID}/guilds/${guildID}/commands` as const;
	},

	/**
	 * Route for:
	 * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
	 * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
	 * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
	 */
	applicationGuildCommand(applicationID: Snowflake, guildID: Snowflake, commandID: Snowflake) {
		return `/applications/${applicationID}/guilds/${guildID}/commands/${commandID}` as const;
	},

	/**
	 * Route for:
	 * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
	 */
	interactionCallback(interactionID: Snowflake, interactionToken: string) {
		return `/interactions/${interactionID}/${interactionToken}/callback` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/member-verification`
	 * - PATCH `/guilds/{guild.id}/member-verification`
	 */
	guildMemberVerification(guildID: Snowflake) {
		return `/guilds/${guildID}/member-verification` as const;
	},

	/**
	 * Route for:
	 * - PATCH `/guilds/{guild.id}/voice-states/@me`
	 * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
	 */
	guildVoiceState(guildID: Snowflake, userID: Snowflake | '@me' = '@me') {
		return `/guilds/${guildID}/voice-states/${userID}` as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
	 * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
	 */
	guildApplicationCommandsPermissions(applicationID: Snowflake, guildID: Snowflake) {
		return `/applications/${applicationID}/guilds/${guildID}/commands/permissions` as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
	 * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
	 */
	applicationCommandPermissions(applicationID: Snowflake, guildID: Snowflake, commandID: Snowflake) {
		return `/applications/${applicationID}/guilds/${guildID}/commands/${commandID}/permissions` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/welcome-screen`
	 * - PATCH `/guilds/{guild.id}/welcome-screen`
	 */
	guildWelcomeScreen(guildID: Snowflake) {
		return `/guilds/${guildID}/welcome-screen` as const;
	},

	/**
	 * Route for:
	 * - POST `/stage-instances`
	 */
	stageInstances() {
		return `/stage-instances` as const;
	},

	/**
	 * Route for:
	 * - GET `/stage-instances/{channel.id}`
	 * - PATCH `/stage-instances/{channel.id}`
	 * - DELETE `/stage-instances/{channel.id}`
	 */
	stageInstance(channelID: Snowflake) {
		return `/stage-instances/${channelID}` as const;
	},

	/**
	 * Route for:
	 * - GET `/stickers/{sticker.id}`
	 */
	sticker(stickerID: Snowflake) {
		return `/stickers/${stickerID}` as const;
	},

	/**
	 * Route for:
	 * - GET `/sticker-packs`
	 */
	nitroStickerPacks() {
		return '/sticker-packs' as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/stickers`
	 * - POST `/guilds/{guild.id}/stickers`
	 */
	guildStickers(guildID: Snowflake) {
		return `/guilds/${guildID}/stickers` as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
	 * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
	 * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
	 */
	guildSticker(guildID: Snowflake, stickerID: Snowflake) {
		return `/guilds/${guildID}/stickers/${stickerID}` as const;
	},
};

export const RouteBases = {
	api: `https://discord.com/api/v${APIVersion}`,
	cdn: 'https://cdn.discordapp.com',
	invite: 'https://discord.gg',
	template: 'https://discord.new',
	gift: 'https://discord.gift',
} as const;

// Freeze bases object
Object.freeze(RouteBases);

export const OAuth2Routes = {
	authorizationURL: `https://discord.com/api/v${APIVersion}/oauth2/authorize`,
	tokenURL: `https://discord.com/api/v${APIVersion}/oauth2/token`,
	/**
	 * See https://tools.ietf.org/html/rfc7009
	 */
	tokenRevocationURL: `https://discord.com/api/v${APIVersion}/oauth2/token/revoke`,
} as const;

// Freeze OAuth2 route object
Object.freeze(OAuth2Routes);

export interface DiscordErrorFieldInformation {
	code: string;
	message: string;
}

export interface DiscordErrorGroupWrapper {
	_errors: DiscordError[];
}

export type DiscordErrorData =
	| DiscordErrorGroupWrapper
	| DiscordErrorFieldInformation
	| { [k: string]: DiscordErrorData }
	| string;

/**
 * https://discord.com/developers/docs/reference#error-messages
 */
export interface DiscordError {
	code: number;
	message: string;
	errors?: DiscordErrorData;
}

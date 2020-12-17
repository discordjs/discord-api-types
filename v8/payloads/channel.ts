/**
 * Types extracted from https://discord.com/developers/docs/resources/channel
 */

import type { APIPartialEmoji } from './emoji';
import type { APIGuildMember } from './guild';
import type { APIUser } from './user';

/**
 * Not documented, but partial only includes id, name, and type
 */
export interface APIPartialChannel {
	id: string;
	type: ChannelType;
	name?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIChannel extends APIPartialChannel {
	guild_id?: string;
	position?: number;
	permission_overwrites?: APIOverwrite[];
	name?: string;
	topic?: string | null;
	nsfw?: boolean;
	last_message_id?: string | null;
	bitrate?: number;
	user_limit?: number;
	rate_limit_per_user?: number;
	recipients?: APIUser[];
	icon?: string | null;
	owner_id?: string;
	application_id?: string;
	parent_id?: string | null;
	last_pin_timestamp?: string | null;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export const enum ChannelType {
	GUILD_TEXT = 0,
	DM,
	GUILD_VOICE,
	GROUP_DM,
	GUILD_CATEGORY,
	GUILD_NEWS,
	GUILD_STORE,
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-structure
 */
export interface APIMessage {
	id: string;
	channel_id: string;
	guild_id?: string;
	author: APIUser;
	member?: APIGuildMember;
	content: string;
	timestamp: string;
	edited_timestamp: string | null;
	tts: boolean;
	mention_everyone: boolean;
	mentions: (APIUser & { member?: Omit<APIGuildMember, 'user'> })[];
	mention_roles: string[];
	mention_channels?: APIChannelMention[];
	attachments: APIAttachment[];
	embeds: APIEmbed[];
	reactions?: APIReaction[];
	nonce?: string | number;
	pinned: boolean;
	webhook_id?: string;
	type: MessageType;
	activity?: APIMessageActivity;
	application?: APIMessageApplication;
	message_reference?: APIMessageReference;
	flags?: MessageFlags;
	referenced_message?: APIMessage | null;
	stickers?: APISticker[];
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-types
 */
export const enum MessageType {
	DEFAULT,
	RECIPIENT_ADD,
	RECIPIENT_REMOVE,
	CALL,
	CHANNEL_NAME_CHANGE,
	CHANNEL_ICON_CHANGE,
	CHANNEL_PINNED_MESSAGE,
	GUILD_MEMBER_JOIN,
	USER_PREMIUM_GUILD_SUBSCRIPTION,
	USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1,
	USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2,
	USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3,
	CHANNEL_FOLLOW_ADD,
	GUILD_DISCOVERY_DISQUALIFIED = 14,
	GUILD_DISCOVERY_REQUALIFIED,
	GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
	GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
	REPLY = 19,
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
 */
export interface APIMessageActivity {
	type: MessageActivityType;
	party_id?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-application-structure
 */
export interface APIMessageApplication {
	id: string;
	cover_image?: string;
	description: string;
	icon: string | null;
	name: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure
 */
export interface APIMessageReference {
	message_id?: string;
	channel_id?: string;
	guild_id?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-types
 */
export const enum MessageActivityType {
	JOIN = 1,
	SPECTATE,
	LISTEN,
	JOIN_REQUEST = 5,
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-flags
 */
export const enum MessageFlags {
	CROSSPOSTED = 1 << 0,
	IS_CROSSPOST = 1 << 1,
	SUPPRESS_EMBEDS = 1 << 2,
	SOURCE_MESSAGE_DELETED = 1 << 3,
	URGENT = 1 << 4,
	EPHEMERAL = 1 << 6,
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-sticker-structure
 */
export interface APISticker {
	id: string;
	pack_id: string;
	name: string;
	description: string;
	tags?: string;
	asset: string;
	preview_asset: string | null;
	format_type: StickerFormatType;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-sticker-format-types
 */
export const enum StickerFormatType {
	PNG = 1,
	APNG,
	LOTTIE,
}

/**
 * https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure
 */
export interface APIReaction {
	count: number;
	me: boolean;
	emoji: APIPartialEmoji;
}

/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export interface APIOverwrite {
	id: string;
	type: OverwriteType;
	allow: string;
	deny: string;
}

export const enum OverwriteType {
	Role,
	Member,
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-structure
 */
export interface APIEmbed {
	title?: string;
	/**
	 * @deprecated *Embed types should be considered deprecated and might be removed in a future API version*
	 */
	type?: EmbedType;
	description?: string;
	url?: string;
	timestamp?: string;
	color?: number;
	footer?: APIEmbedFooter;
	image?: APIEmbedImage;
	thumbnail?: APIEmbedThumbnail;
	video?: APIEmbedVideo;
	provider?: APIEmbedProvider;
	author?: APIEmbedAuthor;
	fields?: APIEmbedField[];
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-types
 * @deprecated *Embed types should be considered deprecated and might be removed in a future API version*
 */
export const enum EmbedType {
	Rich = 'rich',
	Image = 'image',
	Video = 'video',
	GifV = 'gifv',
	Article = 'article',
	Link = 'link',
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
export interface APIEmbedThumbnail {
	url?: string;
	proxy_url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export interface APIEmbedVideo {
	url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export interface APIEmbedImage {
	url?: string;
	proxy_url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
 */
export interface APIEmbedProvider {
	name?: string;
	url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
export interface APIEmbedAuthor {
	name?: string;
	url?: string;
	icon_url?: string;
	proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
export interface APIEmbedFooter {
	text: string;
	icon_url?: string;
	proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
 */
export interface APIEmbedField {
	name: string;
	value: string;
	inline?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure
 */
export interface APIAttachment {
	id: string;
	filename: string;
	size: number;
	url: string;
	proxy_url: string;
	height: number | null;
	width: number | null;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure
 */
export interface APIChannelMention {
	id: string;
	guild_id: string;
	type: ChannelType;
	name: string;
}

export interface APIFollowedChannel {
	channel_id: string;
	webhook_id: string;
}

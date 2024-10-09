/**
 * Types extracted from https://discord.com/developers/docs/resources/channel
 */

import type { Permissions, Snowflake } from '../../globals.ts';
import type { APIGuildMember } from './guild.ts';
import type { APIUser } from './user.ts';

/**
 * Not documented, but partial only includes id, name, and type
 */
export interface APIPartialChannel {
	/**
	 * The id of the channel
	 */
	id: Snowflake;
	/**
	 * The type of the channel
	 *
	 * See https://discord.com/developers/docs/resources/channel#channel-object-channel-types
	 */
	type: ChannelType;
	/**
	 * The name of the channel (1-100 characters)
	 */
	name?: string | null;
}

/**
 * This interface is used to allow easy extension for other channel types. While
 * also allowing `APIPartialChannel` to be used without breaking.
 */
export interface APIChannelBase<T extends ChannelType> extends APIPartialChannel {
	type: T;
	flags?: ChannelFlags;
}

export type TextChannelType =
	| ChannelType.AnnouncementThread
	| ChannelType.DM
	| ChannelType.GroupDM
	| ChannelType.GuildAnnouncement
	| ChannelType.GuildStageVoice
	| ChannelType.GuildText
	| ChannelType.GuildVoice
	| ChannelType.PrivateThread
	| ChannelType.PublicThread;

export type GuildChannelType = Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM>;

export interface APITextBasedChannel<T extends ChannelType> extends APIChannelBase<T> {
	/**
	 * The id of the last message sent in this channel (may not point to an existing or valid message)
	 */
	last_message_id?: Snowflake | null;
	/**
	 * When the last pinned message was pinned.
	 * This may be `null` in events such as `GUILD_CREATE` when a message is not pinned
	 */
	last_pin_timestamp?: string | null;
	/**
	 * Amount of seconds a user has to wait before sending another message (0-21600);
	 * bots, as well as users with the permission `MANAGE_MESSAGES` or `MANAGE_CHANNELS`, are unaffected
	 *
	 * `rate_limit_per_user` also applies to thread creation. Users can send one message and create one thread during each `rate_limit_per_user` interval.
	 *
	 * For thread channels, `rate_limit_per_user` is only returned if the field is set to a non-zero and non-null value.
	 * The absence of this field in API calls and Gateway events should indicate that slowmode has been reset to the default value.
	 */
	rate_limit_per_user?: number;
}

export interface APIGuildChannel<T extends ChannelType> extends Omit<APIChannelBase<T>, 'name'> {
	/**
	 * The name of the channel (1-100 characters)
	 */
	name: string;
	/**
	 * The id of the guild (may be missing for some channel objects received over gateway guild dispatches)
	 */
	guild_id?: Snowflake;
	/**
	 * Explicit permission overwrites for members and roles
	 *
	 * See https://discord.com/developers/docs/resources/channel#overwrite-object
	 */
	permission_overwrites?: APIOverwrite[];
	/**
	 * Sorting position of the channel
	 */
	position: number;
	/**
	 * ID of the parent category for a channel (each parent category can contain up to 50 channels)
	 *
	 * OR
	 *
	 * ID of the parent channel for a thread
	 */
	parent_id?: Snowflake | null;
	/**
	 * Whether the channel is nsfw
	 */
	nsfw?: boolean;
}

export type GuildTextChannelType = Exclude<TextChannelType, ChannelType.DM | ChannelType.GroupDM>;

export interface APIGuildTextChannel<T extends ChannelType.GuildForum | ChannelType.GuildMedia | GuildTextChannelType>
	extends Omit<APITextBasedChannel<T>, 'name'>,
		APIGuildChannel<T> {
	/**
	 * Default duration for newly created threads, in minutes, to automatically archive the thread after recent activity
	 */
	default_auto_archive_duration?: ThreadAutoArchiveDuration;
	/**
	 * The initial `rate_limit_per_user` to set on newly created threads.
	 * This field is copied to the thread at creation time and does not live update
	 */
	default_thread_rate_limit_per_user?: number;
	/**
	 * The channel topic (0-1024 characters)
	 */
	topic?: string | null;
}

export type APITextChannel = APIGuildTextChannel<ChannelType.GuildText>;
export type APINewsChannel = APIGuildTextChannel<ChannelType.GuildAnnouncement>;
export type APIGuildCategoryChannel = APIGuildChannel<ChannelType.GuildCategory>;

export interface APIVoiceChannelBase<T extends ChannelType>
	extends APIGuildChannel<T>,
		Omit<APITextBasedChannel<T>, 'last_pin_timestamp' | 'name'> {
	/**
	 * The bitrate (in bits) of the voice or stage channel
	 */
	bitrate?: number;
	/**
	 * The user limit of the voice or stage channel
	 */
	user_limit?: number;
	/**
	 * Voice region id for the voice or stage channel, automatic when set to `null`
	 *
	 * See https://discord.com/developers/docs/resources/voice#voice-region-object
	 */
	rtc_region?: string | null;
	/**
	 * The camera video quality mode of the voice or stage channel, `1` when not present
	 *
	 * See https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
	 */
	video_quality_mode?: VideoQualityMode;
}

export type APIGuildVoiceChannel = APIVoiceChannelBase<ChannelType.GuildVoice>;

export type APIGuildStageVoiceChannel = APIVoiceChannelBase<ChannelType.GuildStageVoice>;

export interface APIDMChannelBase<T extends ChannelType> extends Omit<APITextBasedChannel<T>, 'rate_limit_per_user'> {
	/**
	 * The recipients of the DM
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	recipients?: APIUser[];
}

export interface APIDMChannel extends Omit<APIDMChannelBase<ChannelType.DM>, 'name'> {
	/**
	 * The name of the channel (always null for DM channels)
	 */
	name: null;
}

export interface APIGroupDMChannel extends Omit<APIDMChannelBase<ChannelType.GroupDM>, 'name'> {
	/**
	 * The name of the channel (1-100 characters)
	 */
	name: string | null;
	/**
	 * Application id of the group DM creator if it is bot-created
	 */
	application_id?: Snowflake;
	/**
	 * Icon hash
	 */
	icon?: string | null;
	/**
	 * ID of the DM creator
	 */
	owner_id?: Snowflake;
	/**
	 * The id of the last message sent in this channel (may not point to an existing or valid message)
	 */
	last_message_id?: Snowflake | null;
	/**
	 * Whether the channel is managed by an OAuth2 application
	 */
	managed?: boolean;
}

export type ThreadChannelType = ChannelType.AnnouncementThread | ChannelType.PrivateThread | ChannelType.PublicThread;

export interface APIThreadChannel
	extends Omit<APITextBasedChannel<ThreadChannelType>, 'name'>,
		APIGuildChannel<ThreadChannelType> {
	/**
	 * The client users member for the thread, only included in select endpoints
	 */
	member?: APIThreadMember;
	/**
	 * The metadata for a thread channel not shared by other channels
	 */
	thread_metadata?: APIThreadMetadata;
	/**
	 * Number of messages (not including the initial message or deleted messages) in a thread
	 *
	 * If the thread was created before July 1, 2022, it stops counting at 50 messages
	 */
	message_count?: number;
	/**
	 * The approximate member count of the thread, does not count above 50 even if there are more members
	 */
	member_count?: number;
	/**
	 * ID of the thread creator
	 */
	owner_id?: Snowflake;
	/**
	 * Number of messages ever sent in a thread
	 *
	 * Similar to `message_count` on message creation, but won't decrement when a message is deleted
	 */
	total_message_sent?: number;
	/**
	 * The IDs of the set of tags that have been applied to a thread in a thread-only channel
	 */
	applied_tags: Snowflake[];
}

/**
 * https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure
 */
export interface APIGuildForumTag {
	/**
	 * The id of the tag
	 */
	id: Snowflake;
	/**
	 * The name of the tag (0-20 characters)
	 */
	name: string;
	/**
	 * Whether this tag can only be added to or removed from threads by a member with the `MANAGE_THREADS` permission
	 */
	moderated: boolean;
	/**
	 * The id of a guild's custom emoji
	 */
	emoji_id: Snowflake | null;
	/**
	 * The unicode character of the emoji
	 */
	emoji_name: string | null;
}

/**
 * https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure
 */
export interface APIGuildForumDefaultReactionEmoji {
	/**
	 * The id of a guild's custom emoji
	 */
	emoji_id: Snowflake | null;
	/**
	 * The unicode character of the emoji
	 */
	emoji_name: string | null;
}

/**
 * https://discord.com/developers/docs/resources/channel/#channel-object-sort-order-types
 */
export enum SortOrderType {
	/**
	 * Sort forum posts by activity
	 */
	LatestActivity,
	/**
	 * Sort forum posts by creation time (from most recent to oldest)
	 */
	CreationDate,
}

/**
 * https://discord.com/developers/docs/resources/channel/#channel-object-forum-layout-types
 */
export enum ForumLayoutType {
	/**
	 * No default has been set for forum channel
	 */
	NotSet,
	/**
	 * Display posts as a list
	 */
	ListView,
	/**
	 * Display posts as a collection of tiles
	 */
	GalleryView,
}

export interface APIThreadOnlyChannel<T extends ChannelType.GuildForum | ChannelType.GuildMedia>
	extends APIGuildChannel<T> {
	/**
	 * The channel topic (0-4096 characters)
	 */
	topic?: string | null;
	/**
	 * The id of the last thread created in this channel (may not point to an existing or valid thread)
	 */
	last_message_id?: Snowflake | null;
	/**
	 * Amount of seconds a user has to wait before creating another thread (0-21600);
	 * bots, as well as users with the permission `MANAGE_MESSAGES` or `MANAGE_CHANNELS`, are unaffected
	 *
	 * The absence of this field in API calls and Gateway events should indicate that slowmode has been reset to the default value.
	 */
	rate_limit_per_user?: number;
	/**
	 * When the last pinned message was pinned.
	 * This may be `null` in events such as `GUILD_CREATE` when a message is not pinned
	 */
	last_pin_timestamp?: string | null;
	/**
	 * Default duration for newly created threads, in minutes, to automatically archive the thread after recent activity
	 */
	default_auto_archive_duration?: ThreadAutoArchiveDuration;
	/**
	 * The set of tags that can be used in a thread-only channel
	 */
	available_tags: APIGuildForumTag[];
	/**
	 * The initial `rate_limit_per_user` to set on newly created threads.
	 * This field is copied to the thread at creation time and does not live update
	 */
	default_thread_rate_limit_per_user?: number;
	/**
	 * The emoji to show in the add reaction button on a thread in a thread-only channel
	 */
	default_reaction_emoji: APIGuildForumDefaultReactionEmoji | null;
	/**
	 * The default sort order type used to order posts in a thread-only channel
	 */
	default_sort_order: SortOrderType | null;
}

export interface APIGuildForumChannel extends APIThreadOnlyChannel<ChannelType.GuildForum> {
	/**
	 * The default layout type used to display posts in a forum channel. Defaults to `0`, which indicates a layout view has not been set by a channel admin
	 */
	default_forum_layout: ForumLayoutType;
}

export type APIGuildMediaChannel = APIThreadOnlyChannel<ChannelType.GuildMedia>;

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export type APIChannel =
	| APIDMChannel
	| APIGroupDMChannel
	| APIGuildCategoryChannel
	| APIGuildForumChannel
	| APIGuildMediaChannel
	| APIGuildStageVoiceChannel
	| APIGuildVoiceChannel
	| APINewsChannel
	| APITextChannel
	| APIThreadChannel;

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export enum ChannelType {
	/**
	 * A text channel within a guild
	 */
	GuildText,
	/**
	 * A direct message between users
	 */
	DM,
	/**
	 * A voice channel within a guild
	 */
	GuildVoice,
	/**
	 * A direct message between multiple users
	 */
	GroupDM,
	/**
	 * An organizational category that contains up to 50 channels
	 *
	 * See https://support.discord.com/hc/articles/115001580171
	 */
	GuildCategory,
	/**
	 * A channel that users can follow and crosspost into their own guild
	 *
	 * See https://support.discord.com/hc/articles/360032008192
	 */
	GuildAnnouncement,
	/**
	 * A temporary sub-channel within a Guild Announcement channel
	 */
	AnnouncementThread = 10,
	/**
	 * A temporary sub-channel within a Guild Text or Guild Forum channel
	 */
	PublicThread,
	/**
	 * A temporary sub-channel within a Guild Text channel that is only viewable by those invited and those with the Manage Threads permission
	 */
	PrivateThread,
	/**
	 * A voice channel for hosting events with an audience
	 *
	 * See https://support.discord.com/hc/articles/1500005513722
	 */
	GuildStageVoice,
	/**
	 * The channel in a Student Hub containing the listed servers
	 *
	 * See https://support.discord.com/hc/articles/4406046651927
	 */
	GuildDirectory,
	/**
	 * A channel that can only contain threads
	 */
	GuildForum,
	/**
	 * A channel like forum channels but contains media for server subscriptions
	 *
	 * See https://creator-support.discord.com/hc/articles/14346342766743
	 */
	GuildMedia,

	// EVERYTHING BELOW THIS LINE SHOULD BE OLD NAMES FOR RENAMED ENUM MEMBERS //

	/**
	 * A channel that users can follow and crosspost into their own guild
	 *
	 * @deprecated This is the old name for {@apilink ChannelType#GuildAnnouncement}
	 *
	 * See https://support.discord.com/hc/articles/360032008192
	 */
	GuildNews = 5,
	/**
	 * A temporary sub-channel within a Guild Announcement channel
	 *
	 * @deprecated This is the old name for {@apilink ChannelType#AnnouncementThread}
	 */
	// eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
	GuildNewsThread = 10,
	/**
	 * A temporary sub-channel within a Guild Text channel
	 *
	 * @deprecated This is the old name for {@apilink ChannelType#PublicThread}
	 */
	GuildPublicThread = 11,
	/**
	 * A temporary sub-channel within a Guild Text channel that is only viewable by those invited and those with the Manage Threads permission
	 *
	 * @deprecated This is the old name for {@apilink ChannelType#PrivateThread}
	 */
	GuildPrivateThread = 12,
}

export enum VideoQualityMode {
	/**
	 * Discord chooses the quality for optimal performance
	 */
	Auto = 1,
	/**
	 * 720p
	 */
	Full,
}

/**
 * https://discord.com/developers/docs/resources/channel#followed-channel-object
 */
export interface APIFollowedChannel {
	/**
	 * Source channel id
	 */
	channel_id: Snowflake;
	/**
	 * Created target webhook id
	 */
	webhook_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export interface APIOverwrite {
	/**
	 * Role or user id
	 */
	id: Snowflake;
	/**
	 * Either 0 (role) or 1 (member)
	 *
	 * {@link OverwriteType}
	 */
	type: OverwriteType;
	/**
	 * Permission bit set
	 *
	 * See https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 */
	allow: Permissions;
	/**
	 * Permission bit set
	 *
	 * See https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 */
	deny: Permissions;
}

export enum OverwriteType {
	Role,
	Member,
}

/**
 * https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export interface APIThreadMetadata {
	/**
	 * Whether the thread is archived
	 */
	archived: boolean;
	/**
	 * Duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
	 */
	auto_archive_duration: ThreadAutoArchiveDuration;
	/**
	 * An ISO8601 timestamp when the thread's archive status was last changed, used for calculating recent activity
	 */
	archive_timestamp: string;
	/**
	 * Whether the thread is locked; when a thread is locked, only users with `MANAGE_THREADS` can unarchive it
	 */
	locked?: boolean;
	/**
	 * Whether non-moderators can add other non-moderators to the thread; only available on private threads
	 */
	invitable?: boolean;
	/**
	 * Timestamp when the thread was created; only populated for threads created after 2022-01-09
	 */
	create_timestamp?: string;
}

export enum ThreadAutoArchiveDuration {
	OneHour = 60,
	OneDay = 1_440,
	ThreeDays = 4_320,
	OneWeek = 10_080,
}

/**
 * https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
 */
export interface APIThreadMember {
	/**
	 * The id of the thread
	 *
	 * **This field is omitted on the member sent within each thread in the `GUILD_CREATE` event**
	 */
	id?: Snowflake;
	/**
	 * The id of the member
	 *
	 * **This field is omitted on the member sent within each thread in the `GUILD_CREATE` event**
	 */
	user_id?: Snowflake;
	/**
	 * An ISO8601 timestamp for when the member last joined
	 */
	join_timestamp: string;
	/**
	 * Member flags combined as a bitfield
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 */
	flags: ThreadMemberFlags;
	/**
	 * Additional information about the user
	 *
	 * **This field is omitted on the member sent within each thread in the `GUILD_CREATE` event**
	 *
	 * **This field is only present when `with_member` is set to true when calling `List Thread Members` or `Get Thread Member`**
	 */
	member?: APIGuildMember;
}

export enum ThreadMemberFlags {
	/**
	 * @unstable This thread member flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	HasInteracted = 1 << 0,
	/**
	 * @unstable This thread member flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	AllMessages = 1 << 1,
	/**
	 * @unstable This thread member flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	OnlyMentions = 1 << 2,
	/**
	 * @unstable This thread member flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	NoMessages = 1 << 3,
}

export interface APIThreadList {
	/**
	 * The threads that were fetched
	 */
	threads: APIChannel[];
	/**
	 * The members for the client user in each of the fetched threads
	 */
	members: APIThreadMember[];
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
 */
export enum ChannelFlags {
	/**
	 * @unstable This channel flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	GuildFeedRemoved = 1 << 0,
	/**
	 * This thread is pinned to the top of its parent forum channel
	 */
	Pinned = 1 << 1,
	/**
	 * @unstable This channel flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	ActiveChannelsRemoved = 1 << 2,
	/**
	 * Whether a tag is required to be specified when creating a thread in a forum channel.
	 * Tags are specified in the `applied_tags` field
	 */
	RequireTag = 1 << 4,
	/**
	 * @unstable This channel flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	IsSpam = 1 << 5,
	/**
	 * @unstable This channel flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	IsGuildResourceChannel = 1 << 7,
	/**
	 * @unstable This channel flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	ClydeAI = 1 << 8,
	/**
	 * @unstable This channel flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	IsScheduledForDeletion = 1 << 9,
	/**
	 * Whether media download options are hidden.
	 */
	HideMediaDownloadOptions = 1 << 15,
}

/**
 * Types extracted from https://docs.discord.com/developers/resources/lobby
 */

import type { Snowflake } from '../../globals';
import type { APIChannel } from './channel';
import type { MessageFlags, MessageType } from './message';
import type { APIUser } from './user';

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-object}
 */
export interface APILobby {
	/**
	 * The id of this channel
	 */
	id: Snowflake;
	/**
	 * Application that created the lobby
	 */
	application_id: Snowflake;
	/**
	 * Dictionary of string key/value pairs. The max total length is 1000.
	 */
	metadata: Record<string, string> | null;
	/**
	 * Members of the lobby
	 */
	members: APILobbyMember[];
	/**
	 * The guild channel linked to the lobby
	 *
	 * @see {@link https://docs.discord.com/developers/discord-social-sdk/development-guides/linked-channels}
	 */
	linked_channel?: APIChannel;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-member-object}
 */
export interface APILobbyMember {
	/**
	 * The id of the user
	 */
	id: Snowflake;
	/**
	 * Dictionary of string key/value pairs. The max total length is 1000.
	 */
	metadata?: Record<string, string> | null;
	/**
	 * Lobby member flags combined as a bitfield
	 *
	 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-member-object-lobby-member-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags?: LobbyMemberFlags;
	/**
	 * An additional 1-80 character display name for the member, such as an in-game character name
	 *
	 * @remarks Can only be set through the HTTP API, not from a Social SDK client.
	 */
	additional_name?: string;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-member-object-lobby-member-flags}
 */
export enum LobbyMemberFlags {
	/**
	 * User can link a text channel to a lobby
	 */
	CanLinkLobby = 1 << 0,
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-message-object}
 */
export interface APILobbyMessage {
	/**
	 * Id of the message
	 */
	id: Snowflake;
	/**
	 * Message type
	 *
	 * @see {@link https://docs.discord.com/developers/resources/message#message-object-message-types}
	 */
	type: MessageType;
	/**
	 * Message content
	 */
	content: string;
	/**
	 * Id of the lobby this message was sent to
	 */
	lobby_id: Snowflake;
	/**
	 * Included for compatibility with the messages interface; equal to `lobby_id`
	 */
	channel_id: Snowflake;
	/**
	 * The user who sent the message
	 *
	 * @see {@link https://docs.discord.com/developers/resources/user#user-object}
	 */
	author: APIUser;
	/**
	 * The author's lobby member additional display name, captured when the message was sent
	 *
	 * @remarks This field is omitted if the author had no `additional_name` set.
	 */
	lobby_member?: APILobbyMessageLobbyMember;
	/**
	 * Dispatch-only metadata sent with the message
	 */
	metadata?: Record<string, string> | null;
	/**
	 * Moderation metadata set via Update Lobby Message Moderation Metadata
	 *
	 * @see {@link https://docs.discord.com/developers/resources/lobby#update-lobby-message-moderation-metadata}
	 */
	moderation_metadata?: Record<string, string> | null;
	/**
	 * Message flags combined as a bitfield
	 *
	 * @see {@link https://docs.discord.com/developers/resources/message#message-object-message-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags: MessageFlags;
	/**
	 * The application that sent the message
	 */
	application_id: Snowflake;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-message-object}
 */
export interface APILobbyMessageLobbyMember {
	/**
	 * The author's lobby member additional display name
	 *
	 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-member-object}
	 */
	additional_name: string;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-invite-object}
 */
export interface APILobbyInvite {
	/**
	 * The invite code for the lobby's linked channel
	 *
	 * @see {@link https://docs.discord.com/developers/resources/invite#invite-object}
	 */
	code: string;
}

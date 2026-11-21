import type { Snowflake } from '../../globals';
import type {
	APILobby,
	APILobbyInvite,
	APILobbyMember,
	APILobbyMessage,
	LobbyMemberFlags,
	MessageFlags,
} from '../../payloads/v9/index';

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-member-json-params}
 */
export interface RESTAPILobbyMember {
	/**
	 * Discord user id of the user to add to the lobby
	 */
	id: Snowflake;
	/**
	 * Optional dictionary of string key/value pairs. The max total length is 1000.
	 */
	metadata?: Record<string, string> | null | undefined;
	/**
	 * Lobby member flags combined as a bitfield
	 *
	 * @see {@link https://docs.discord.com/developers/resources/lobby#lobby-member-object-lobby-member-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags?: LobbyMemberFlags | undefined;
	/**
	 * An additional display name for the member, such as an in-game character name. 1-80 characters.
	 *
	 * @remarks When updating an existing member, omit the field to preserve their current value, or send `null` to clear it.
	 */
	additional_name?: string | null | undefined;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#create-lobby}
 */
export interface RESTPostAPILobbyJSONBody {
	/**
	 * Optional dictionary of string key/value pairs. The max total length is 1000.
	 */
	metadata?: Record<string, string> | null | undefined;
	/**
	 * Optional array of up to 25 users to be added to the lobby
	 */
	members?: RESTAPILobbyMember[] | undefined;
	/**
	 * Seconds to wait before shutting down a lobby after it becomes idle. Value can be between 5 and 604800 (7 days).
	 */
	idle_timeout_seconds?: number | undefined;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#create-lobby}
 */
export type RESTPostAPILobbyResult = APILobby;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#create-or-join-lobby}
 */
export interface RESTPutAPILobbyJSONBody {
	/**
	 * Secret used to identify the lobby. If a lobby for this application already exists with this secret, the caller joins it; otherwise a new lobby is created. Max 250 characters.
	 */
	secret: string;
	/**
	 * Seconds to wait before shutting down a lobby after it becomes idle. Value can be between 5 and 604800 (7 days).
	 */
	idle_timeout_seconds?: number | undefined;
	/**
	 * Optional dictionary of string key/value pairs to set on the lobby. The max total length is 1000. Overwrites any existing lobby metadata.
	 */
	lobby_metadata?: Record<string, string> | null | undefined;
	/**
	 * Optional dictionary of string key/value pairs to set on the calling user's lobby member. The max total length is 1000.
	 */
	member_metadata?: Record<string, string> | null | undefined;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#create-or-join-lobby}
 */
export type RESTPutAPILobbyResult = APILobby;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#get-lobby}
 */
export type RESTGetAPILobbyResult = APILobby;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#modify-lobby}
 */
export interface RESTPatchAPILobbyJSONBody {
	/**
	 * Optional dictionary of string key/value pairs. The max total length is 1000. Overwrites any existing metadata.
	 */
	metadata?: Record<string, string> | null | undefined;
	/**
	 * Optional array of up to 25 users to replace the lobby members with. If provided, lobby members not in this list will be removed from the lobby.
	 */
	members?: RESTAPILobbyMember[] | undefined;
	/**
	 * Seconds to wait before shutting down a lobby after it becomes idle. Value can be between 5 and 604800 (7 days).
	 */
	idle_timeout_seconds?: number | undefined;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#modify-lobby}
 */
export type RESTPatchAPILobbyResult = APILobby;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#delete-lobby}
 */
export type RESTDeleteAPILobbyResult = undefined;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#add-a-member-to-a-lobby}
 */
export type RESTPutAPILobbyMemberJSONBody = Omit<RESTAPILobbyMember, 'id'>;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#add-a-member-to-a-lobby}
 */
export type RESTPutAPILobbyMemberResult = APILobbyMember;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#bulk-update-lobby-members}
 */
export interface RESTAPIBulkUpdateLobbyMember extends RESTAPILobbyMember {
	/**
	 * If `true`, the user is removed from the lobby instead of upserted
	 *
	 * @defaultValue `false`
	 */
	remove_member?: boolean | undefined;
}

/**
 * An array of 1 to 25 member objects
 *
 * @see {@link https://docs.discord.com/developers/resources/lobby#bulk-update-lobby-members}
 */
export type RESTPostAPILobbyMembersBulkUpdateJSONBody = RESTAPIBulkUpdateLobbyMember[];

/**
 * The upserted lobby members. Removed members are not included in the response.
 *
 * @see {@link https://docs.discord.com/developers/resources/lobby#bulk-update-lobby-members}
 */
export type RESTPostAPILobbyMembersBulkUpdateResult = APILobbyMember[];

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#remove-a-member-from-a-lobby}
 */
export type RESTDeleteAPILobbyMemberResult = undefined;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#leave-lobby}
 */
export type RESTDeleteAPICurrentLobbyMemberResult = undefined;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#link-channel-to-lobby}
 * @see {@link https://docs.discord.com/developers/resources/lobby#unlink-channel-from-lobby}
 */
export interface RESTPatchAPILobbyChannelLinkingJSONBody {
	/**
	 * The id of the channel to link to the lobby. If not provided, will unlink any currently linked channels from the lobby.
	 */
	channel_id?: Snowflake | undefined;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#link-channel-to-lobby}
 * @see {@link https://docs.discord.com/developers/resources/lobby#unlink-channel-from-lobby}
 */
export type RESTPatchAPILobbyChannelLinkingResult = APILobby;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#send-lobby-message}
 */
export interface RESTPostAPILobbyMessageJSONBody {
	/**
	 * Message content. Must be non-empty.
	 */
	content: string;
	/**
	 * Optional dictionary of string key/value pairs delivered alongside the message to active clients via the Social SDK. Not persisted on the linked channel message.
	 */
	metadata?: Record<string, string> | null | undefined;
	/**
	 * Optional message flags combined as a bitfield. Only flags creatable by the Social SDK are accepted.
	 *
	 * @see {@link https://docs.discord.com/developers/resources/message#message-object-message-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags?: MessageFlags | undefined;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#send-lobby-message}
 */
export type RESTPostAPILobbyMessageResult = APILobbyMessage;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#get-lobby-messages}
 */
export interface RESTGetAPILobbyMessagesQuery {
	/**
	 * Max number of messages to return (1-200)
	 *
	 * @defaultValue `50`
	 */
	limit?: number | undefined;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#get-lobby-messages}
 */
export type RESTGetAPILobbyMessagesResult = APILobbyMessage[];

/**
 * Free-form key–value pairs describing the moderation decision. Up to 5 keys; key length ≤ 1024 characters; value length ≤ 2000 characters.
 *
 * @see {@link https://docs.discord.com/developers/resources/lobby#update-lobby-message-moderation-metadata}
 */
export type RESTPutAPILobbyMessageModerationMetadataJSONBody = Record<string, string>;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#update-lobby-message-moderation-metadata}
 */
export type RESTPutAPILobbyMessageModerationMetadataResult = undefined;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#create-lobby-channel-invite-for-self}
 */
export type RESTPostAPICurrentLobbyMemberInviteResult = APILobbyInvite;

/**
 * @see {@link https://docs.discord.com/developers/resources/lobby#create-lobby-channel-invite-for-user}
 */
export type RESTPostAPILobbyMemberInviteResult = APILobbyInvite;

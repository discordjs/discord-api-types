/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes
 */
export enum RPCErrorCodes {
	UnknownError = 1000,
	InvalidPayload = 4000,
	InvalidCommand = 4002,
	InvalidGuild,
	InvalidEvent,
	InvalidChannel,
	InvalidPermissions,
	InvalidClientId,
	InvalidOrigin,
	InvalidToken,
	InvalidUser,
	OAuth2Error = 5000,
	SelectChannelTimedOut,
	GetGuildTimedOut,
	SelectVoiceForceRequired,
	CaptureShortcutAlreadyListening,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes
 */
export enum RPCCloseEventCodes {
	InvalidClientId = 4000,
	InvalidOrigin,
	RateLimited,
	TokenRevoked,
	InvalidVersion,
	InvalidEncoding,
}

/**
 * https://discord.com/developers/docs/topics/rpc#commands-and-events-rpc-commands
 */
export enum RPCCommands {
	DISPATCH = 'DISPATCH',
	AUTHORIZE = 'AUTHORIZE',
	AUTHENTICATE = 'AUTHENTICATE',
	GET_GUILD = 'GET_GUILD',
	GET_GUILDS = 'GET_GUILDS',
	GET_CHANNEL = 'GET_CHANNEL',
	GET_CHANNELS = 'GET_CHANNELS',
	SUBSCRIBE = 'SUBSCRIBE',
	UNSUBSCRIBE = 'UNSUBSCRIBE',
	SET_USER_VOICE_SETTINGS = 'SET_USER_VOICE_SETTINGS',
	SELECT_VOICE_CHANNEL = 'SELECT_VOICE_CHANNEL',
	GET_SELECTED_VOICE_CHANNEL = 'GET_SELECTED_VOICE_CHANNEL',
	SELECT_TEXT_CHANNEL = 'SELECT_TEXT_CHANNEL',
	GET_VOICE_SETTINGS = 'GET_VOICE_SETTINGS',
	SET_VOICE_SETTINGS = 'SET_VOICE_SETTINGS',
	SET_CERTIFIED_DEVICES = 'SET_CERTIFIED_DEVICES',
	SET_ACTIVITY = 'SET_ACTIVITY',
	SEND_ACTIVITY_JOIN_INVITE = 'SEND_ACTIVITY_JOIN_INVITE',
	CLOSE_ACTIVITY_JOIN_REQUEST = 'CLOSE_ACTIVITY_JOIN_REQUEST',
	/**
	 * @unstable
	 */
	CREATE_CHANNEL_INVITE = 'CREATE_CHANNEL_INVITE',
	/**
	 * @unstable
	 */
	GET_RELATIONSHIPS = 'GET_RELATIONSHIPS',
	/**
	 * @unstable
	 */
	GET_USER = 'GET_USER',
	/**
	 * @unstable
	 */
	SET_USER_VOICE_SETTINGS_2 = 'SET_USER_VOICE_SETTINGS_2',
	/**
	 * @unstable
	 */
	SET_VOICE_SETTINGS_2 = 'SET_VOICE_SETTINGS_2',
	/**
	 * @unstable
	 */
	CAPTURE_SHORTCUT = 'CAPTURE_SHORTCUT',
	/**
	 * @unstable
	 */
	ACTIVITY_INVITE_USER = 'ACTIVITY_INVITE_USER',
	/**
	 * @unstable
	 */
	ACCEPT_ACTIVITY_INVITE = 'ACCEPT_ACTIVITY_INVITE',
	/**
	 * @unstable
	 */
	INVITE_BROWSER = 'INVITE_BROWSER',
	/**
	 * @unstable
	 */
	DEEP_LINK = 'DEEP_LINK',
	/**
	 * @unstable
	 */
	CONNECTIONS_CALLBACK = 'CONNECTIONS_CALLBACK',
	/**
	 * @unstable
	 */
	BRAINTREE_POPUP_BRIDGE_CALLBACK = 'BRAINTREE_POPUP_BRIDGE_CALLBACK',
	/**
	 * @unstable
	 */
	GIFT_CODE_BROWSER = 'GIFT_CODE_BROWSER',
	/**
	 * @unstable
	 */
	GUILD_TEMPLATE_BROWSER = 'GUILD_TEMPLATE_BROWSER',
	/**
	 * @unstable
	 */
	OVERLAY = 'OVERLAY',
	/**
	 * @unstable
	 */
	BROWSER_HANDOFF = 'BROWSER_HANDOFF',
	/**
	 * @unstable
	 */
	GET_IMAGE = 'GET_IMAGE',
	/**
	 * @unstable
	 */
	CREATE_LOBBY = 'CREATE_LOBBY',
	/**
	 * @unstable
	 */
	UPDATE_LOBBY = 'UPDATE_LOBBY',
	/**
	 * @unstable
	 */
	DELETE_LOBBY = 'DELETE_LOBBY',
	/**
	 * @unstable
	 */
	UPDATE_LOBBY_MEMBER = 'UPDATE_LOBBY_MEMBER',
	/**
	 * @unstable
	 */
	CONNECT_TO_LOBBY = 'CONNECT_TO_LOBBY',
	/**
	 * @unstable
	 */
	DISCONNECT_FROM_LOBBY = 'DISCONNECT_FROM_LOBBY',
	/**
	 * @unstable
	 */
	SEND_TO_LOBBY = 'SEND_TO_LOBBY',
	/**
	 * @unstable
	 */
	SEARCH_LOBBIES = 'SEARCH_LOBBIES',
	/**
	 * @unstable
	 */
	CONNECT_TO_LOBBY_VOICE = 'CONNECT_TO_LOBBY_VOICE',
	/**
	 * @unstable
	 */
	DISCONNECT_FROM_LOBBY_VOICE = 'DISCONNECT_FROM_LOBBY_VOICE',
	/**
	 * @unstable
	 */
	SET_OVERLAY_LOCKED = 'SET_OVERLAY_LOCKED',
	/**
	 * @unstable
	 */
	OPEN_OVERLAY_ACTIVITY_INVITE = 'OPEN_OVERLAY_ACTIVITY_INVITE',
	/**
	 * @unstable
	 */
	OPEN_OVERLAY_GUILD_INVITE = 'OPEN_OVERLAY_GUILD_INVITE',
	/**
	 * @unstable
	 */
	OPEN_OVERLAY_VOICE_SETTINGS = 'OPEN_OVERLAY_VOICE_SETTINGS',
	/**
	 * @unstable
	 */
	VALIDATE_APPLICATION = 'VALIDATE_APPLICATION',
	/**
	 * @unstable
	 */
	GET_ENTITLEMENT_TICKET = 'GET_ENTITLEMENT_TICKET',
	/**
	 * @unstable
	 */
	GET_APPLICATION_TICKET = 'GET_APPLICATION_TICKET',
	/**
	 * @unstable
	 */
	START_PURCHASE = 'START_PURCHASE',
	/**
	 * @unstable
	 */
	GET_SKUS = 'GET_SKUS',
	/**
	 * @unstable
	 */
	GET_ENTITLEMENTS = 'GET_ENTITLEMENTS',
	/**
	 * @unstable
	 */
	GET_NETWORKING_CONFIG = 'GET_NETWORKING_CONFIG',
	/**
	 * @unstable
	 */
	NETWORKING_SYSTEM_METRICS = 'NETWORKING_SYSTEM_METRICS',
	/**
	 * @unstable
	 */
	NETWORKING_PEER_METRICS = 'NETWORKING_PEER_METRICS',
	/**
	 * @unstable
	 */
	NETWORKING_CREATE_TOKEN = 'NETWORKING_CREATE_TOKEN',
	/**
	 * @unstable
	 */
	SET_USER_ACHIEVEMENT = 'SET_USER_ACHIEVEMENT',
	/**
	 * @unstable
	 */
	GET_USER_ACHIEVEMENTS = 'GET_USER_ACHIEVEMENTS',
}

/**
 * https://discord.com/developers/docs/topics/rpc#commands-and-events-rpc-events
 */
export enum RPCEvents {
	READY = 'READY',
	ERROR = 'ERROR',
	GUILD_STATUS = 'GUILD_STATUS',
	GUILD_CREATE = 'GUILD_CREATE',
	CHANNEL_CREATE = 'CHANNEL_CREATE',
	VOICE_CHANNEL_SELECT = 'VOICE_CHANNEL_SELECT',
	VOICE_STATE_CREATE = 'VOICE_STATE_CREATE',
	VOICE_STATE_UPDATE = 'VOICE_STATE_UPDATE',
	VOICE_STATE_DELETE = 'VOICE_STATE_DELETE',
	VOICE_SETTINGS_UPDATE = 'VOICE_SETTINGS_UPDATE',
	VOICE_CONNECTION_STATUS = 'VOICE_CONNECTION_STATUS',
	SPEAKING_START = 'SPEAKING_START',
	SPEAKING_STOP = 'SPEAKING_STOP',
	MESSAGE_CREATE = 'MESSAGE_CREATE',
	MESSAGE_UPDATE = 'MESSAGE_UPDATE',
	MESSAGE_DELETE = 'MESSAGE_DELETE',
	NOTIFICATION_CREATE = 'NOTIFICATION_CREATE',
	ACTIVITY_JOIN = 'ACTIVITY_JOIN',
	ACTIVITY_SPECTATE = 'ACTIVITY_SPECTATE',
	ACTIVITY_JOIN_REQUEST = 'ACTIVITY_JOIN_REQUEST',
	/**
	 * @unstable
	 */
	CURRENT_USER_UPDATE = 'CURRENT_USER_UPDATE',
	/**
	 * @unstable
	 */
	RELATIONSHIP_UPDATE = 'RELATIONSHIP_UPDATE',
	/**
	 * @unstable
	 */
	VOICE_SETTINGS_UPDATE_2 = 'VOICE_SETTINGS_UPDATE_2',
	/**
	 * @unstable
	 */
	GAME_JOIN = 'GAME_JOIN',
	/**
	 * @unstable
	 */
	GAME_SPECTATE = 'GAME_SPECTATE',
	/**
	 * @unstable
	 */
	ACTIVITY_INVITE = 'ACTIVITY_INVITE',
	/**
	 * @unstable
	 */
	LOBBY_DELETE = 'LOBBY_DELETE',
	/**
	 * @unstable
	 */
	LOBBY_UPDATE = 'LOBBY_UPDATE',
	/**
	 * @unstable
	 */
	LOBBY_MEMBER_CONNECT = 'LOBBY_MEMBER_CONNECT',
	/**
	 * @unstable
	 */
	LOBBY_MEMBER_DISCONNECT = 'LOBBY_MEMBER_DISCONNECT',
	/**
	 * @unstable
	 */
	LOBBY_MEMBER_UPDATE = 'LOBBY_MEMBER_UPDATE',
	/**
	 * @unstable
	 */
	LOBBY_MESSAGE = 'LOBBY_MESSAGE',
	/**
	 * @unstable
	 */
	CAPTURE_SHORTCUT_CHANGE = 'CAPTURE_SHORTCUT_CHANGE',
	/**
	 * @unstable
	 */
	OVERLAY = 'OVERLAY',
	/**
	 * @unstable
	 */
	OVERLAY_UPDATE = 'OVERLAY_UPDATE',
	/**
	 * @unstable
	 */
	ENTITLEMENT_CREATE = 'ENTITLEMENT_CREATE',
	/**
	 * @unstable
	 */
	ENTITLEMENT_DELETE = 'ENTITLEMENT_DELETE',
	/**
	 * @unstable
	 */
	USER_ACHIEVEMENT_UPDATE = 'USER_ACHIEVEMENT_UPDATE',
}

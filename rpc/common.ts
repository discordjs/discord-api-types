/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes
 */
export enum RPCErrorCodes {
	UnknownError = 1_000,
	InvalidPayload = 4_000,
	InvalidCommand = 4_002,
	InvalidGuild,
	InvalidEvent,
	InvalidChannel,
	InvalidPermissions,
	InvalidClientId,
	InvalidOrigin,
	InvalidToken,
	InvalidUser,
	OAuth2Error = 5_000,
	SelectChannelTimedOut,
	GetGuildTimedOut,
	SelectVoiceForceRequired,
	CaptureShortcutAlreadyListening,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes
 */
export enum RPCCloseEventCodes {
	InvalidClientId = 4_000,
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
	Dispatch = 'DISPATCH',
	Authorize = 'AUTHORIZE',
	Authenticate = 'AUTHENTICATE',
	GetGuild = 'GET_GUILD',
	GetGuilds = 'GET_GUILDS',
	GetChannel = 'GET_CHANNEL',
	GetChannels = 'GET_CHANNELS',
	Subscribe = 'SUBSCRIBE',
	Unsubscribe = 'UNSUBSCRIBE',
	SetUserVoiceSettings = 'SET_USER_VOICE_SETTINGS',
	SelectVoiceChannel = 'SELECT_VOICE_CHANNEL',
	GetSelectedVoiceChannel = 'GET_SELECTED_VOICE_CHANNEL',
	SelectTextChannel = 'SELECT_TEXT_CHANNEL',
	GetVoiceSettings = 'GET_VOICE_SETTINGS',
	SetVoiceSettings = 'SET_VOICE_SETTINGS',
	SetCertifiedDevices = 'SET_CERTIFIED_DEVICES',
	SetActivity = 'SET_ACTIVITY',
	SendActivityJoinInvite = 'SEND_ACTIVITY_JOIN_INVITE',
	CloseActivityJoinRequest = 'CLOSE_ACTIVITY_JOIN_REQUEST',
	/**
	 * @unstable
	 */
	CreateChannelInvite = 'CREATE_CHANNEL_INVITE',
	/**
	 * @unstable
	 */
	GetRelationships = 'GET_RELATIONSHIPS',
	/**
	 * @unstable
	 */
	GetUser = 'GET_USER',
	/**
	 * @unstable
	 */
	SetUserVoiceSettings2 = 'SET_USER_VOICE_SETTINGS_2',
	/**
	 * @unstable
	 */
	SetVoiceSettings2 = 'SET_VOICE_SETTINGS_2',
	/**
	 * @unstable
	 */
	CaptureShortcut = 'CAPTURE_SHORTCUT',
	/**
	 * @unstable
	 */
	ActivityInviteUser = 'ACTIVITY_INVITE_USER',
	/**
	 * @unstable
	 */
	AcceptActivityInvite = 'ACCEPT_ACTIVITY_INVITE',
	/**
	 * @unstable
	 */
	InviteBrowser = 'INVITE_BROWSER',
	/**
	 * @unstable
	 */
	DeepLink = 'DEEP_LINK',
	/**
	 * @unstable
	 */
	ConnectionsCallback = 'CONNECTIONS_CALLBACK',
	/**
	 * @unstable
	 */
	BraintreePopupBridgeCallback = 'BRAINTREE_POPUP_BRIDGE_CALLBACK',
	/**
	 * @unstable
	 */
	GiftCodeBrowser = 'GIFT_CODE_BROWSER',
	/**
	 * @unstable
	 */
	GuildTemplateBrowser = 'GUILD_TEMPLATE_BROWSER',
	/**
	 * @unstable
	 */
	Overlay = 'OVERLAY',
	/**
	 * @unstable
	 */
	BrowserHandoff = 'BROWSER_HANDOFF',
	/**
	 * @unstable
	 */
	GetImage = 'GET_IMAGE',
	/**
	 * @unstable
	 */
	CreateLobby = 'CREATE_LOBBY',
	/**
	 * @unstable
	 */
	UpdateLobby = 'UPDATE_LOBBY',
	/**
	 * @unstable
	 */
	DeleteLobby = 'DELETE_LOBBY',
	/**
	 * @unstable
	 */
	UpdateLobbyMember = 'UPDATE_LOBBY_MEMBER',
	/**
	 * @unstable
	 */
	ConnectToLobby = 'CONNECT_TO_LOBBY',
	/**
	 * @unstable
	 */
	DisconnectFromLobby = 'DISCONNECT_FROM_LOBBY',
	/**
	 * @unstable
	 */
	SendToLobby = 'SEND_TO_LOBBY',
	/**
	 * @unstable
	 */
	SearchLobbies = 'SEARCH_LOBBIES',
	/**
	 * @unstable
	 */
	ConnectToLobbyVoice = 'CONNECT_TO_LOBBY_VOICE',
	/**
	 * @unstable
	 */
	DisconnectFromLobbyVoice = 'DISCONNECT_FROM_LOBBY_VOICE',
	/**
	 * @unstable
	 */
	SetOverlayLocked = 'SET_OVERLAY_LOCKED',
	/**
	 * @unstable
	 */
	OpenOverlayActivityInvite = 'OPEN_OVERLAY_ACTIVITY_INVITE',
	/**
	 * @unstable
	 */
	OpenOverlayGuildInvite = 'OPEN_OVERLAY_GUILD_INVITE',
	/**
	 * @unstable
	 */
	OpenOverlayVoiceSettings = 'OPEN_OVERLAY_VOICE_SETTINGS',
	/**
	 * @unstable
	 */
	ValidateApplication = 'VALIDATE_APPLICATION',
	/**
	 * @unstable
	 */
	GetEntitlementTicket = 'GET_ENTITLEMENT_TICKET',
	/**
	 * @unstable
	 */
	GetApplicationTicket = 'GET_APPLICATION_TICKET',
	/**
	 * @unstable
	 */
	StartPurchase = 'START_PURCHASE',
	/**
	 * @unstable
	 */
	GetSkus = 'GET_SKUS',
	/**
	 * @unstable
	 */
	GetEntitlements = 'GET_ENTITLEMENTS',
	/**
	 * @unstable
	 */
	GetNetworkingConfig = 'GET_NETWORKING_CONFIG',
	/**
	 * @unstable
	 */
	NetworkingSystemMetrics = 'NETWORKING_SYSTEM_METRICS',
	/**
	 * @unstable
	 */
	NetworkingPeerMetrics = 'NETWORKING_PEER_METRICS',
	/**
	 * @unstable
	 */
	NetworkingCreateToken = 'NETWORKING_CREATE_TOKEN',
	/**
	 * @unstable
	 */
	SetUserAchievement = 'SET_USER_ACHIEVEMENT',
	/**
	 * @unstable
	 */
	GetUserAchievements = 'GET_USER_ACHIEVEMENTS',
}

/**
 * https://discord.com/developers/docs/topics/rpc#commands-and-events-rpc-events
 */
export enum RPCEvents {
	Ready = 'READY',
	Error = 'ERROR',
	GuildStatus = 'GUILD_STATUS',
	GuildCreate = 'GUILD_CREATE',
	ChannelCreate = 'CHANNEL_CREATE',
	VoiceChannelSelect = 'VOICE_CHANNEL_SELECT',
	VoiceStateCreate = 'VOICE_STATE_CREATE',
	VoiceStateUpdate = 'VOICE_STATE_UPDATE',
	VoiceStateDelete = 'VOICE_STATE_DELETE',
	VoiceSettingsUpdate = 'VOICE_SETTINGS_UPDATE',
	VoiceConnectionStatus = 'VOICE_CONNECTION_STATUS',
	SpeakingStart = 'SPEAKING_START',
	SpeakingStop = 'SPEAKING_STOP',
	MessageCreate = 'MESSAGE_CREATE',
	MessageUpdate = 'MESSAGE_UPDATE',
	MessageDelete = 'MESSAGE_DELETE',
	NotificationCreate = 'NOTIFICATION_CREATE',
	ActivityJoin = 'ACTIVITY_JOIN',
	ActivitySpectate = 'ACTIVITY_SPECTATE',
	ActivityJoinRequest = 'ACTIVITY_JOIN_REQUEST',
	/**
	 * @unstable
	 */
	CurrentUserUpdate = 'CURRENT_USER_UPDATE',
	/**
	 * @unstable
	 */
	RelationshipUpdate = 'RELATIONSHIP_UPDATE',
	/**
	 * @unstable
	 */
	VoiceSettingsUpdate_2 = 'VOICE_SETTINGS_UPDATE_2',
	/**
	 * @unstable
	 */
	GameJoin = 'GAME_JOIN',
	/**
	 * @unstable
	 */
	GameSpectate = 'GAME_SPECTATE',
	/**
	 * @unstable
	 */
	ActivityInvite = 'ACTIVITY_INVITE',
	/**
	 * @unstable
	 */
	LobbyDelete = 'LOBBY_DELETE',
	/**
	 * @unstable
	 */
	LobbyUpdate = 'LOBBY_UPDATE',
	/**
	 * @unstable
	 */
	LobbyMemberConnect = 'LOBBY_MEMBER_CONNECT',
	/**
	 * @unstable
	 */
	LobbyMemberDisconnect = 'LOBBY_MEMBER_DISCONNECT',
	/**
	 * @unstable
	 */
	LobbyMemberUpdate = 'LOBBY_MEMBER_UPDATE',
	/**
	 * @unstable
	 */
	LobbyMessage = 'LOBBY_MESSAGE',
	/**
	 * @unstable
	 */
	CaptureShortcutChange = 'CAPTURE_SHORTCUT_CHANGE',
	/**
	 * @unstable
	 */
	Overlay = 'OVERLAY',
	/**
	 * @unstable
	 */
	OverlayUpdate = 'OVERLAY_UPDATE',
	/**
	 * @unstable
	 */
	EntitlementCreate = 'ENTITLEMENT_CREATE',
	/**
	 * @unstable
	 */
	EntitlementDelete = 'ENTITLEMENT_DELETE',
	/**
	 * @unstable
	 */
	UserAchievementUpdate = 'USER_ACHIEVEMENT_UPDATE',
}

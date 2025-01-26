import type { OAuth2Scopes } from '../v10';

export * from './common';

export const RPCVersion = '1';

/**
 * https://discord.com/developers/docs/topics/rpc#commands-and-events-rpc-commands
 */
export enum RPCCommands {
	/**
	 * @unstable
	 */
	AcceptActivityInvite = 'ACCEPT_ACTIVITY_INVITE',
	/**
	 * @unstable
	 */
	ActivityInviteUser = 'ACTIVITY_INVITE_USER',
	/**
	 * Used to authenticate an existing client with your app
	 */
	Authenticate = 'AUTHENTICATE',
	/**
	 * Used to authorize a new client with your app
	 */
	Authorize = 'AUTHORIZE',
	/**
	 * @unstable
	 */
	BraintreePopupBridgeCallback = 'BRAINTREE_POPUP_BRIDGE_CALLBACK',
	/**
	 * @unstable
	 */
	Browser = 'BROWSER_HANDOFF',
	CaptureShortcut = 'CAPTURE_SHORTCUT',
	/**
	 * Used to reject a Rich Presence Ask to Join request
	 */
	CloseActivityJoinRequest = 'CLOSE_ACTIVITY_JOIN_REQUEST',
	/**
	 * @unstable
	 */
	ConnectToLobby = 'CONNECT_TO_LOBBY',
	/**
	 * @unstable
	 */
	ConnectToLobbyVoice = 'CONNECT_TO_LOBBY_VOICE',
	/**
	 * @unstable
	 */
	ConnectionsCallback = 'CONNECTIONS_CALLBACK',
	CreateChannelInvite = 'CREATE_CHANNEL_INVITE',
	/**
	 * @unstable
	 */
	CreateLobby = 'CREATE_LOBBY',
	/**
	 * @unstable
	 */
	DeepLink = 'DEEP_LINK',
	/**
	 * @unstable
	 */
	DeleteLobby = 'DELETE_LOBBY',
	/**
	 * @unstable
	 */
	DisconnectFromLobby = 'DISCONNECT_FROM_LOBBY',
	/**
	 * @unstable
	 */
	DisconnectFromLobbyVoice = 'DISCONNECT_FROM_LOBBY_VOICE',
	/**
	 * Event dispatch
	 */
	Dispatch = 'DISPATCH',
	/**
	 * @unstable
	 */
	GetApplicationTicket = 'GET_APPLICATION_TICKET',
	/**
	 * Used to retrieve channel information from the client
	 */
	GetChannel = 'GET_CHANNEL',
	/**
	 * Used to retrieve a list of channels for a guild from the client
	 */
	GetChannels = 'GET_CHANNELS',
	/**
	 * @unstable
	 */
	GetEntitlementTicket = 'GET_ENTITLEMENT_TICKET',
	/**
	 * @unstable
	 */
	GetEntitlements = 'GET_ENTITLEMENTS',
	/**
	 * Used to retrieve guild information from the client
	 */
	GetGuild = 'GET_GUILD',
	/**
	 * Used to retrieve a list of guilds from the client
	 */
	GetGuilds = 'GET_GUILDS',
	/**
	 * @unstable
	 */
	GetImage = 'GET_IMAGE',
	/**
	 * @unstable
	 */
	GetNetworkingConfig = 'GET_NETWORKING_CONFIG',
	GetRelationships = 'GET_RELATIONSHIPS',
	/**
	 * Used to get the current voice channel the client is in
	 */
	GetSelectedVoiceChannel = 'GET_SELECTED_VOICE_CHANNEL',
	/**
	 * @unstable
	 */
	GetSkus = 'GET_SKUS',
	GetUser = 'GET_USER',
	/**
	 * @unstable
	 */
	GetUserAchievements = 'GET_USER_ACHIEVEMENTS',
	/**
	 * Used to retrieve the client's voice settings
	 */
	GetVoiceSettings = 'GET_VOICE_SETTINGS',
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
	InviteBrowser = 'INVITE_BROWSER',
	/**
	 * @unstable
	 */
	NetworkingCreateToken = 'NETWORKING_CREATE_TOKEN',
	/**
	 * @unstable
	 */
	NetworkingPeerMetrics = 'NETWORKING_PEER_METRICS',
	/**
	 * @unstable
	 */
	NetworkingSystemMetrics = 'NETWORKING_SYSTEM_METRICS',
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
	Overlay = 'OVERLAY',
	/**
	 * @unstable
	 */
	SearchLobbies = 'SEARCH_LOBBIES',
	/**
	 * Used to join or leave a text channel, group dm, or dm
	 */
	SelectTextChannel = 'SELECT_TEXT_CHANNEL',
	/**
	 * Used to join or leave a voice channel, group dm, or dm
	 */
	SelectVoiceChannel = 'SELECT_VOICE_CHANNEL',
	/**
	 * Used to consent to a Rich Presence Ask to Join request
	 */
	SendActivityJoinInvite = 'SEND_ACTIVITY_JOIN_INVITE',
	/**
	 * @unstable
	 */
	SendToLobby = 'SEND_TO_LOBBY',
	/**
	 * Used to update a user's Rich Presence
	 */
	SetActivity = 'SET_ACTIVITY',
	/**
	 * Used to send info about certified hardware devices
	 */
	SetCertifiedDevices = 'SET_CERTIFIED_DEVICES',
	/**
	 * @unstable
	 */
	SetOverlayLocked = 'SET_OVERLAY_LOCKED',
	/**
	 * @unstable
	 */
	SetUserAchievement = 'SET_USER_ACHIEVEMENT',
	/**
	 * Used to change voice settings of users in voice channels
	 */
	SetUserVoiceSettings = 'SET_USER_VOICE_SETTINGS',
	SetUserVoiceSettings2 = 'SET_USER_VOICE_SETTINGS_2',
	/**
	 * Used to set the client's voice settings
	 */
	SetVoiceSettings = 'SET_VOICE_SETTINGS',
	SetVoiceSettings2 = 'SET_VOICE_SETTINGS_2',
	/**
	 * @unstable
	 */
	StartPurchase = 'START_PURCHASE',
	/**
	 * Used to subscribe to an RPC event
	 */
	Subscribe = 'SUBSCRIBE',
	/**
	 * Used to unsubscribe from an RPC event
	 */
	Unsubscribe = 'UNSUBSCRIBE',
	/**
	 * @unstable
	 */
	UpdateLobby = 'UPDATE_LOBBY',
	/**
	 * @unstable
	 */
	UpdateLobbyMember = 'UPDATE_LOBBY_MEMBER',
	/**
	 * @unstable
	 */
	ValidateApplication = 'VALIDATE_APPLICATION',
}

/**
 * https://discord.com/developers/docs/topics/rpc#authorize-authorize-response-structure
 */
export interface RPCAuthorizeResultData {
	/**
	 * OAuth2 authorization code
	 */
	code: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#authorize-authorize-argument-structure
 */
export interface RPCAuthorizeArgs {
	/**
	 * OAuth2 application id
	 */
	client_id: string;
	/**
	 * one-time use RPC token
	 */
	rpc_token: string;
	/**
	 * scopes to authorize
	 */
	scopes: OAuth2Scopes[];
	/**
	 * 	username to create a guest account with if the user does not have Discord
	 */
	username: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#authenticate-authenticate-response-structure
 */
export interface RPCAuthenticateResultData {}

/**
 * https://discord.com/developers/docs/topics/rpc#authenticate-authenticate-argument-structure
 */
export interface RPCAuthenticateArgs {}

export interface RPCGetChannelResultData {}
export interface RPCGetChannelArgs {}

export interface RPCGetChannelsResultData {}
export interface RPCGetChannelsArgs {}

export interface RPCGetGuildResultData {}
export interface RPCGetGuildArgs {}

export interface RPCGetGuildsResultData {}
export interface RPCGetGuildsArgs {}

export interface RPCGetUserResultData {}
export interface RPCGetUserArgs {}

export interface RPCGetVoiceSettingsResultData {}
export interface RPCGetVoiceSettingsArgs {}

export interface RPCSelectTextChannelResultData {}
export interface RPCSelectTextChannelArgs {}

export interface RPCSelectVoiceChannelResultData {}
export interface RPCSelectVoiceChannelArgs {}

export interface RPCSetActivityResultData {}
export interface RPCSetActivityArgs {}

export interface RPCSetVoiceSettingsResultData {}
export interface RPCSetVoiceSettingsArgs {}

export interface RPCSubscribeResultData {}
export interface RPCSubscribeArgs {}

export interface RPCUnsubscribeResultData {}
export interface RPCUnsubscribeArgs {}

export interface RPCAcceptActivityInviteResultData {}
export interface RPCAcceptActivityInviteArgs {}

export interface RPCActivityInviteUserResultData {}
export interface RPCActivityInviteUserArgs {}

export interface RPCBraintreePopupBridgeCallbackResultData {}
export interface RPCBraintreePopupBridgeCallbackArgs {}

export interface RPCBrowserResultData {}
export interface RPCBrowserArgs {}

export interface RPCCaptureShortcutResultData {}
export interface RPCCaptureShortcutArgs {}

export interface RPCCloseActivityJoinRequestResultData {}
export interface RPCCloseActivityJoinRequestArgs {}

export interface RPCConnectToLobbyResultData {}
export interface RPCConnectToLobbyArgs {}

export interface RPCConnectToLobbyVoiceResultData {}
export interface RPCConnectToLobbyVoiceArgs {}

export interface RPCConnectionsCallbackResultData {}
export interface RPCConnectionsCallbackArgs {}

export interface RPCCreateChannelInviteResultData {}
export interface RPCCreateChannelInviteArgs {}

export interface RPCCreateLobbyResultData {}
export interface RPCCreateLobbyArgs {}

export interface RPCDeepLinkResultData {}
export interface RPCDeepLinkArgs {}

export interface RPCDeleteLobbyResultData {}
export interface RPCDeleteLobbyArgs {}

export interface RPCDisconnectFromLobbyResultData {}
export interface RPCDisconnectFromLobbyArgs {}

export interface RPCDisconnectFromLobbyVoiceResultData {}
export interface RPCDisconnectFromLobbyVoiceArgs {}

export interface RPCDispatchResultData {}
export interface RPCDispatchArgs {}

export interface RPCGetApplicationTicketResultData {}
export interface RPCGetApplicationTicketArgs {}

export interface RPCGetEntitlementTicketResultData {}
export interface RPCGetEntitlementTicketArgs {}

export interface RPCGetEntitlementsResultData {}
export interface RPCGetEntitlementsArgs {}

export interface RPCGetImageResultData {}
export interface RPCGetImageArgs {}

export interface RPCGetNetworkingConfigResultData {}
export interface RPCGetNetworkingConfigArgs {}

export interface RPCGetRelationshipsResultData {}
export interface RPCGetRelationshipsArgs {}

export interface RPCGetSelectedVoiceChannelResultData {}
export interface RPCGetSelectedVoiceChannelArgs {}

export interface RPCGetSkusResultData {}
export interface RPCGetSkusArgs {}

export interface RPCGetUserAchievementsResultData {}
export interface RPCGetUserAchievementsArgs {}

export interface RPCGiftCodeBrowserResultData {}
export interface RPCGiftCodeBrowserArgs {}

export interface RPCGuildTemplateBrowserResultData {}
export interface RPCGuildTemplateBrowserArgs {}

export interface RPCInviteBrowserResultData {}
export interface RPCInviteBrowserArgs {}

export interface RPCNetworkingCreateTokenResultData {}
export interface RPCNetworkingCreateTokenArgs {}

export interface RPCNetworkingPeerMetricsResultData {}
export interface RPCNetworkingPeerMetricsArgs {}

export interface RPCNetworkingSystemMetricsResultData {}
export interface RPCNetworkingSystemMetricsArgs {}

export interface RPCOpenOverlayActivityInviteResultData {}
export interface RPCOpenOverlayActivityInviteArgs {}

export interface RPCOpenOverlayGuildInviteResultData {}
export interface RPCOpenOverlayGuildInviteArgs {}

export interface RPCOpenOverlayVoiceSettingsResultData {}
export interface RPCOpenOverlayVoiceSettingsArgs {}

export interface RPCOverlayResultData {}
export interface RPCOverlayArgs {}

export interface RPCSearchLobbiesResultData {}
export interface RPCSearchLobbiesArgs {}

export interface RPCSendActivityJoinInviteResultData {}
export interface RPCSendActivityJoinInviteArgs {}

export interface RPCSendToLobbyResultData {}
export interface RPCSendToLobbyArgs {}

export interface RPCSetCertifiedDevicesResultData {}
export interface RPCSetCertifiedDevicesArgs {}

export interface RPCSetOverlayLockedResultData {}
export interface RPCSetOverlayLockedArgs {}

export interface RPCSetUserAchievementResultData {}
export interface RPCSetUserAchievementArgs {}

export interface RPCSetUserVoiceSettingsResultData {}
export interface RPCSetUserVoiceSettingsArgs {}

export interface RPCSetUserVoiceSettings2ResultData {}
export interface RPCSetUserVoiceSettings2Args {}

export interface RPCSetVoiceSettings2ResultData {}
export interface RPCSetVoiceSettings2Args {}

export interface RPCStartPurchaseResultData {}
export interface RPCStartPurchaseArgs {}

export interface RPCUpdateLobbyResultData {}
export interface RPCUpdateLobbyArgs {}

export interface RPCUpdateLobbyMemberResultData {}
export interface RPCUpdateLobbyMemberArgs {}

export interface RPCValidateApplicationResultData {}
export interface RPCValidateApplicationArgs {}

/**
 * https://discord.com/developers/docs/topics/rpc#commands-and-events-rpc-events
 */
export enum RPCEvents {
	/**
	 * @unstable
	 */
	ActivityInvite = 'ACTIVITY_INVITE',
	ActivityJoin = 'ACTIVITY_JOIN',
	ActivityJoinRequest = 'ACTIVITY_JOIN_REQUEST',
	ActivitySpectate = 'ACTIVITY_SPECTATE',
	/**
	 * @unstable
	 */
	CaptureShortcutChange = 'CAPTURE_SHORTCUT_CHANGE',
	ChannelCreate = 'CHANNEL_CREATE',
	CurrentUserUpdate = 'CURRENT_USER_UPDATE',
	/**
	 * @unstable
	 */
	EntitlementCreate = 'ENTITLEMENT_CREATE',
	/**
	 * @unstable
	 */
	EntitlementDelete = 'ENTITLEMENT_DELETE',
	Error = 'ERROR',
	/**
	 * @unstable
	 */
	GameJoin = 'GAME_JOIN',
	/**
	 * @unstable
	 */
	GameSpectate = 'GAME_SPECTATE',
	GuildCreate = 'GUILD_CREATE',
	GuildStatus = 'GUILD_STATUS',
	/**
	 * @unstable
	 */
	LobbyDelete = 'LOBBY_DELETE',
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
	LobbyUpdate = 'LOBBY_UPDATE',
	MessageCreate = 'MESSAGE_CREATE',
	MessageDelete = 'MESSAGE_DELETE',
	MessageUpdate = 'MESSAGE_UPDATE',
	NotificationCreate = 'NOTIFICATION_CREATE',
	/**
	 * @unstable
	 */
	Overlay = 'OVERLAY',
	/**
	 * @unstable
	 */
	OverlayUpdate = 'OVERLAY_UPDATE',
	Ready = 'READY',
	/**
	 * @unstable
	 */
	RelationshipUpdate = 'RELATIONSHIP_UPDATE',
	SpeakingStart = 'SPEAKING_START',
	SpeakingStop = 'SPEAKING_STOP',
	UserAchievementUpdate = 'USER_ACHIEVEMENT_UPDATE',
	VoiceChannelSelect = 'VOICE_CHANNEL_SELECT',
	VoiceConnectionStatus = 'VOICE_CONNECTION_STATUS',
	VoiceSettingsUpdate = 'VOICE_SETTINGS_UPDATE',
	/**
	 * @unstable
	 */
	VoiceSettingsUpdate2 = 'VOICE_SETTINGS_UPDATE_2',
	VoiceStateCreate = 'VOICE_STATE_CREATE',
	VoiceStateDelete = 'VOICE_STATE_DELETE',
	VoiceStateUpdate = 'VOICE_STATE_UPDATE',
}

export interface RPCSubscribeActivityInviteResultData {}

export interface RPCSubscribeActivityInviteArgs {}

export interface RPCActivityInviteDispatchData {}

export interface RPCActivityJoinDispatchData {}

export interface RPCActivityJoinRequestDispatchData {}

export interface RPCActivitySpectateDispatchData {}

export interface RPCCaptureShortcutChangeDispatchData {}

export interface RPCChannelCreateDispatchData {}

export interface RPCCurrentUserUpdateDispatchData {}

export interface RPCEntitlementCreateDispatchData {}

export interface RPCEntitlementDeleteDispatchData {}

export interface RPCErrorDispatchData {}

export interface RPCGameJoinDispatchData {}

export interface RPCGameSpectateDispatchData {}

export interface RPCGuildCreateDispatchData {}

export interface RPCGuildStatusDispatchData {}

export interface RPCLobbyDeleteDispatchData {}

export interface RPCLobbyMemberConnectDispatchData {}

export interface RPCLobbyMemberDisconnectDispatchData {}

export interface RPCLobbyMemberUpdateDispatchData {}

export interface RPCLobbyMessageDispatchData {}

export interface RPCLobbyUpdateDispatchData {}

export interface RPCMessageCreateDispatchData {}

export interface RPCMessageDeleteDispatchData {}

export interface RPCMessageUpdateDispatchData {}

export interface RPCNotificationCreateDispatchData {}

export interface RPCOverlayDispatchData {}

export interface RPCOverlayUpdateDispatchData {}

export interface RPCReadyDispatchData {}

export interface RPCRelationshipUpdateDispatchData {}

export interface RPCSpeakingStartDispatchData {}

export interface RPCSpeakingStopDispatchData {}

export interface RPCUserAchievementUpdateDispatchData {}

export interface RPCVoiceChannelSelectDispatchData {}

export interface RPCVoiceConnectionStatusDispatchData {}

export interface RPCVoiceSettingsUpdateDispatchData {}

export interface RPCVoiceSettingsUpdate2DispatchData {}

export interface RPCVoiceStateCreateDispatchData {}

export interface RPCVoiceStateDeleteDispatchData {}

export interface RPCVoiceStateUpdateDispatchData {}

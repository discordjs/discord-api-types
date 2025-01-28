import type {
	APIMessage,
	APIPartialChannel,
	APIPartialGuild,
	APIUser,
	APIVoiceState,
	ChannelType,
	GatewayActivity,
	OAuth2Scopes,
	RPCDevice,
	RPCErrorCodes,
	RPCOAuth2Application,
	RPCVoiceSettingsInput,
	RPCVoiceSettingsMode,
	RPCVoiceSettingsOutput,
	Snowflake,
	VoiceConnectionStates,
} from '../v10';

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
	BrowserHandoff = 'BROWSER_HANDOFF',
	CaptureShortcut = 'CAPTURE_SHORTCUT',
	/**
	 * 	used to reject a Rich Presence Ask to Join request
	 */
	CloseActivityRequest = 'CLOSE_ACTIVITY_REQUEST',
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
	/**
	 * @unstable
	 */
	GetRelationships = 'GET_RELATIONSHIPS',
	/**
	 * Used to get the current voice channel the client is in
	 */
	GetSelectedVoiceChannel = 'GET_SELECTED_VOICE_CHANNEL',
	/**
	 * @unstable
	 */
	GetSkus = 'GET_SKUS',
	/**
	 * @unstable
	 */
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
 * https://discord.com/developers/docs/topics/rpc#authenticate-authenticate-argument-structure
 */
export interface RPCAuthenticateArgs {
	/**
	 * OAuth2 access token
	 */
	access_token: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#authenticate-authenticate-response-structure
 */
export interface RPCAuthenticateResultData {
	/**
	 * The authed user
	 */
	user: APIUser;
	/**
	 * Authorized scopes
	 */
	scopes: OAuth2Scopes[];
	/**
	 * Expiration date of OAuth2 token
	 */
	expires: string;
	/**
	 * Application the user authorized
	 */
	application: RPCOAuth2Application;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCGetGuildsArgs {}

/**
 * https://discord.com/developers/docs/topics/rpc#getguilds-get-guilds-response-structure
 */
export interface RPCGetGuildsResultData {
	/**
	 * The guilds the user is in
	 */
	guilds: APIPartialGuild[];
}

/**
 * https://discord.com/developers/docs/topics/rpc#getguild-get-guild-argument-structure
 */
export interface RPCGetGuildArgs {
	/**
	 * Id of the guild to get
	 */
	guild_id: Snowflake;
	/**
	 * Asynchronously get guild with time to wait before timing out
	 */
	timeout?: number;
}

/**
 * https://discord.com/developers/docs/topics/rpc#getguild-get-guild-response-structure
 */
export interface RPCGetGuildResultData {
	/**
	 * Guild id
	 */
	id: Snowflake;
	/**
	 * Guild name
	 */
	name: string;
	/**
	 * Guild icon url
	 */
	icon_url: string | null;
	/**
	 * Members of the guild
	 *
	 * @deprecated This will always be an empty array
	 */
	members: [];
}

/**
 * https://discord.com/developers/docs/topics/rpc#getchannel
 */
export interface RPCGetChannelArgs {
	/**
	 * Id of the channel to get
	 */
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#getchannel-get-channel-response-structure
 */
export interface RPCGetChannelResultData {
	/**
	 * Channel id
	 */
	id: Snowflake;
	/**
	 * Channel's guild id
	 */
	guild_id: Snowflake;
	/**
	 * Channel name
	 */
	name: string;
	/**
	 * Channel type
	 */
	type: ChannelType;
	/**
	 * (text) channel topic
	 */
	topic?: string;
	/**
	 * (voice) bitrate of voice channel
	 */
	bitrate?: number;
	/**
	 * (voice) user limit of voice channel (0 for none)
	 */
	user_limit?: number;
	/**
	 * Position of channel in channel list
	 */
	position: number;
	/**
	 * (voice) channel's voice states
	 */
	voice_states?: APIVoiceState[];
	/**
	 * (text) channel's messages
	 */
	messages?: APIMessage[];
}

/**
 * https://discord.com/developers/docs/topics/rpc#getchannels-get-channels-argument-structure
 */
export interface RPCGetChannelsArgs {
	/**
	 * Id of the guild to get channels for
	 */
	guild_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#getchannels-get-channels-response-structure
 */
export interface RPCGetChannelsResultData {
	/**
	 * Guild channels the user is in
	 */
	channels: APIPartialChannel[];
}

/**
 * https://discord.com/developers/docs/topics/rpc#setuservoicesettings-pan-object
 */
export interface RPCVoicePan {
	/**
	 * Left pan of user (min: 0.0, max: 1.0)
	 */
	left: number;
	/**
	 * Right pan of user (min: 0.0, max: 1.0)
	 */
	right: number;
}

/**
 * https://discord.com/developers/docs/topics/rpc#setuservoicesettings
 *
 * @note Discord only supports a single modifier of voice settings at a time over RPC. If an app changes voice settings, it will lock voice settings so that other apps connected simultaneously lose the ability to change voice settings. Settings reset to what they were before being changed after the controlling app disconnects. When an app that has previously set voice settings connects, the client will swap to that app's configured voice settings and lock voice settings again.
 */
export interface RPCSetUserVoiceSettingsArgs {
	/**
	 * User id
	 */
	user_id: Snowflake;
	/**
	 * Set the pan of the user
	 */
	pan?: RPCVoicePan;
	/**
	 * Set the volume of user (defaults to 100, min 0, max 200)
	 */
	volume?: number;
	/**
	 * Set the mute state of the user
	 */
	mute?: boolean;
}

/**
 * https://discord.com/developers/docs/topics/rpc#setuservoicesettings-set-user-voice-settings-argument-and-response-structure
 */
export type RPCSetUserVoiceSettingsResultData = Required<RPCSetUserVoiceSettingsArgs>;

/**
 * https://discord.com/developers/docs/topics/rpc#selectvoicechannel-select-voice-channel-argument-structure
 *
 * @warning When trying to join the user to a voice channel, you will receive a `5003` error coded response if the user is already in a voice channel. The `force` parameter should only be specified in response to the case where a user is already in a voice channel and they have approved to be moved by your app to a new voice channel.
 */
export interface RPCSelectVoiceChannelArgs {
	/**
	 * Channel id to join (or `null` to leave)
	 */
	channel_id: Snowflake | null;
	/**
	 * Asynchronously join channel with time to wait before timing out
	 */
	timeout?: number;
	/**
	 * Forces a user to join a voice channel
	 */
	force?: boolean;
	/**
	 * After joining the voice channel, navigate to it in the client
	 */
	navigate?: boolean;
}

/**
 * https://discord.com/developers/docs/topics/rpc#selectvoicechannel
 */
export type RPCSelectVoiceChannelResultData = RPCGetChannelResultData | null;

/**
 * https://discord.com/developers/docs/topics/rpc#getselectedvoicechannel
 */
export type RPCGetSelectedVoiceChannelResultData = RPCGetChannelResultData | null;

/**
 * @unstable
 */
export interface RPCGetUserResultData {}
/**
 * @unstable
 */
export interface RPCGetUserArgs {}

/**
 * https://discord.com/developers/docs/topics/rpc#getvoicesettings-get-voice-settings-response-structure
 */
export interface RPCGetVoiceSettingsResultData {
	/**
	 * input settings
	 */
	input: RPCVoiceSettingsInput;
	/**
	 * output settings
	 */
	output: RPCVoiceSettingsOutput;
	/**
	 * voice mode settings
	 */
	mode: RPCVoiceSettingsMode;
	/**
	 * state of automatic gain control
	 */
	automatic_gain_control: boolean;
	/**
	 * state of echo cancellation
	 */
	echo_cancellation: boolean;
	/**
	 * state of noise suppression
	 */
	noise_suppression: boolean;
	/**
	 * state of voice quality of service
	 */
	qos: boolean;
	/**
	 * state of silence warning notice
	 */
	silence_warning: boolean;
	/**
	 * state of self-deafen
	 */
	deaf: boolean;
	/**
	 * state of self-mute
	 */
	mute: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCGetVoiceSettingsArgs {}

/**
 * Returns the [Get Channel](https://discord.com/developers/docs/topics/rpc#getchannel) response, or `null` if none.
 */
export type RPCSelectTextChannelResultData = RPCGetChannelResultData | null;
/**
 * https://discord.com/developers/docs/topics/rpc#selecttextchannel-select-text-channel-argument-structure
 */
export interface RPCSelectTextChannelArgs {
	/**
	 * channel id to join (or `null` to leave)
	 */
	channel_id: Snowflake | null;
	/**
	 * asynchronously join channel with time to wait before timing out
	 */
	timeout?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSetActivityResultData {}
/**
 * https://discord.com/developers/docs/topics/rpc#setactivity-set-activity-argument-structure
 */
export interface RPCSetActivityArgs {
	/**
	 * the application's process id
	 */
	pid: number;
	/**
	 * the rich presence to assign to the user
	 */
	activity: Omit<GatewayActivity, 'name' | 'state' | 'type' | 'url'>;
}

/**
 * https://discord.com/developers/docs/topics/rpc#setvoicesettings-set-voice-settings-argument-and-response-structure
 */
export type RPCSetVoiceSettingsResultData = RPCGetVoiceSettingsResultData;
/**
 * https://discord.com/developers/docs/topics/rpc#setvoicesettings-set-voice-settings-argument-and-response-structure
 *
 * @note Discord only supports a single modifier of voice settings at a time over RPC. If an app changes voice settings, it will lock voice settings so that other apps connected simultaneously lose the ability to change voice settings. Settings reset to what they were before being changed after the controlling app disconnects. When an app that has previously set voice settings connects, the client will swap to that app's configured voice settings and lock voice settings again.
 */
export type RPCSetVoiceSettingsArgs = RPCGetVoiceSettingsResultData;

/**
 * https://discord.com/developers/docs/topics/rpc#subscribe-subscribe-response-structure
 */
export interface RPCSubscribeResultData {
	/**
	 * event name now subscribed to
	 */
	evt: RPCEvents;
}
/**
 * https://discord.com/developers/docs/topics/rpc#subscribe
 */
export type RPCSubscribeArgs =
	| RPCSubscribeActivityInviteArgs
	| RPCSubscribeActivityJoinArgs
	| RPCSubscribeActivityJoinRequestArgs
	| RPCSubscribeActivitySpectateArgs
	| RPCSubscribeCaptureShortcutChangeArgs
	| RPCSubscribeChannelCreateArgs
	| RPCSubscribeCurrentUserUpdateArgs
	| RPCSubscribeEntitlementCreateArgs
	| RPCSubscribeEntitlementDeleteArgs
	| RPCSubscribeGameJoinArgs
	| RPCSubscribeGameSpectateArgs
	| RPCSubscribeGuildCreateArgs
	| RPCSubscribeGuildStatusArgs
	| RPCSubscribeLobbyDeleteArgs
	| RPCSubscribeLobbyMemberConnectArgs
	| RPCSubscribeLobbyMemberDisconnectArgs
	| RPCSubscribeLobbyMemberUpdateArgs
	| RPCSubscribeLobbyMessageArgs
	| RPCSubscribeLobbyUpdateArgs
	| RPCSubscribeMessageCreateArgs
	| RPCSubscribeMessageDeleteArgs
	| RPCSubscribeMessageUpdateArgs
	| RPCSubscribeNotificationCreateArgs
	| RPCSubscribeOverlayArgs
	| RPCSubscribeOverlayUpdateArgs
	| RPCSubscribeRelationshipUpdateArgs
	| RPCSubscribeSpeakingStartArgs
	| RPCSubscribeSpeakingStopArgs
	| RPCSubscribeUserAchievementUpdateArgs
	| RPCSubscribeVoiceChannelSelectArgs
	| RPCSubscribeVoiceConnectionStatusArgs
	| RPCSubscribeVoiceSettingsUpdate2Args
	| RPCSubscribeVoiceSettingsUpdateArgs
	| RPCSubscribeVoiceStateCreateArgs
	| RPCSubscribeVoiceStateDeleteArgs
	| RPCSubscribeVoiceStateUpdateArgs;

/**
 * https://discord.com/developers/docs/topics/rpc#unsubscribe-unsubscribe-response-structure
 */
export interface RPCUnsubscribeResultData {
	/**
	 * event name now unsubscribed from
	 */
	event: RPCEvents;
}
/**
 * https://discord.com/developers/docs/topics/rpc#unsubscribe
 */
export type RPCUnsubscribeArgs = RPCSubscribeArgs;

/**
 * @unstable
 */
export interface RPCAcceptActivityInviteResultData {}
/**
 * @unstable
 */
export interface RPCAcceptActivityInviteArgs {}

/**
 * @unstable
 */
export interface RPCActivityInviteUserResultData {}
/**
 * @unstable
 */
export interface RPCActivityInviteUserArgs {}

/**
 * @unstable
 */
export interface RPCBraintreePopupBridgeCallbackResultData {}
/**
 * @unstable
 */
export interface RPCBraintreePopupBridgeCallbackArgs {}

/**
 * @unstable
 */
export interface RPCBrowserHandoffResultData {}
/**
 * @unstable
 */
export interface RPCBrowserHandoffArgs {}

/**
 * @unstable
 */
export interface RPCCaptureShortcutResultData {}
/**
 * @unstable
 */
export interface RPCCaptureShortcutArgs {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCCloseActivityRequestResultData {}
/**
 * https://discord.com/developers/docs/topics/rpc#closeactivityrequest-close-activity-request-argument-structure
 */
export interface RPCCloseActivityRequestArgs {
	/**
	 * the id of the requesting user
	 */
	user_id: Snowflake;
}

/**
 * @unstable
 */
export interface RPCConnectToLobbyResultData {}
/**
 * @unstable
 */
export interface RPCConnectToLobbyArgs {}

/**
 * @unstable
 */
export interface RPCConnectToLobbyVoiceResultData {}
/**
 * @unstable
 */
export interface RPCConnectToLobbyVoiceArgs {}

/**
 * @unstable
 */
export interface RPCConnectionsCallbackResultData {}
/**
 * @unstable
 */
export interface RPCConnectionsCallbackArgs {}

/**
 * @unstable
 */
export interface RPCCreateChannelInviteResultData {}
/**
 * @unstable
 */
export interface RPCCreateChannelInviteArgs {}

/**
 * @unstable
 */
export interface RPCCreateLobbyResultData {}
/**
 * @unstable
 */
export interface RPCCreateLobbyArgs {}

/**
 * @unstable
 */
export interface RPCDeepLinkResultData {}
/**
 * @unstable
 */
export interface RPCDeepLinkArgs {}

/**
 * @unstable
 */
export interface RPCDeleteLobbyResultData {}
/**
 * @unstable
 */
export interface RPCDeleteLobbyArgs {}

/**
 * @unstable
 */
export interface RPCDisconnectFromLobbyResultData {}
/**
 * @unstable
 */
export interface RPCDisconnectFromLobbyArgs {}

/**
 * @unstable
 */
export interface RPCDisconnectFromLobbyVoiceResultData {}
/**
 * @unstable
 */
export interface RPCDisconnectFromLobbyVoiceArgs {}

/**
 * @unstable
 */
export interface RPCGetApplicationTicketResultData {}
/**
 * @unstable
 */
export interface RPCGetApplicationTicketArgs {}

/**
 * @unstable
 */
export interface RPCGetEntitlementTicketResultData {}
/**
 * @unstable
 */
export interface RPCGetEntitlementTicketArgs {}

/**
 * @unstable
 */
export interface RPCGetEntitlementsResultData {}
/**
 * @unstable
 */
export interface RPCGetEntitlementsArgs {}

/**
 * @unstable
 */
export interface RPCGetImageResultData {}
/**
 * @unstable
 */
export interface RPCGetImageArgs {}

/**
 * @unstable
 */
export interface RPCGetNetworkingConfigResultData {}
/**
 * @unstable
 */
export interface RPCGetNetworkingConfigArgs {}

/**
 * @unstable
 */
export interface RPCGetRelationshipsResultData {}
/**
 * @unstable
 */
export interface RPCGetRelationshipsArgs {}

/**
 * @unstable
 */
export interface RPCGetSkusResultData {}
/**
 * @unstable
 */
export interface RPCGetSkusArgs {}

/**
 * @unstable
 */
export interface RPCGetUserAchievementsResultData {}
/**
 * @unstable
 */
export interface RPCGetUserAchievementsArgs {}

/**
 * @unstable
 */
export interface RPCGiftCodeBrowserResultData {}
/**
 * @unstable
 */
export interface RPCGiftCodeBrowserArgs {}

/**
 * @unstable
 */
export interface RPCGuildTemplateBrowserResultData {}
/**
 * @unstable
 */
export interface RPCGuildTemplateBrowserArgs {}

/**
 * @unstable
 */
export interface RPCInviteBrowserResultData {}
/**
 * @unstable
 */
export interface RPCInviteBrowserArgs {}

/**
 * @unstable
 */
export interface RPCNetworkingCreateTokenResultData {}
/**
 * @unstable
 */
export interface RPCNetworkingCreateTokenArgs {}

/**
 * @unstable
 */
export interface RPCNetworkingPeerMetricsResultData {}
/**
 * @unstable
 */
export interface RPCNetworkingPeerMetricsArgs {}

/**
 * @unstable
 */
export interface RPCNetworkingSystemMetricsResultData {}
/**
 * @unstable
 */
export interface RPCNetworkingSystemMetricsArgs {}

/**
 * @unstable
 */
export interface RPCOpenOverlayActivityInviteResultData {}
/**
 * @unstable
 */
export interface RPCOpenOverlayActivityInviteArgs {}

/**
 * @unstable
 */
export interface RPCOpenOverlayGuildInviteResultData {}
/**
 * @unstable
 */
export interface RPCOpenOverlayGuildInviteArgs {}

/**
 * @unstable
 */
export interface RPCOpenOverlayVoiceSettingsResultData {}
/**
 * @unstable
 */
export interface RPCOpenOverlayVoiceSettingsArgs {}

/**
 * @unstable
 */
export interface RPCOverlayResultData {}
/**
 * @unstable
 */
export interface RPCOverlayArgs {}

/**
 * @unstable
 */
export interface RPCSearchLobbiesResultData {}
/**
 * @unstable
 */
export interface RPCSearchLobbiesArgs {}

export interface RPCSendActivityJoinInviteResultData {}
/**
 * https://discord.com/developers/docs/topics/rpc#sendactivityjoininvite-send-activity-join-invite-argument-structure
 */
export interface RPCSendActivityJoinInviteArgs {
	/**
	 * the id of the requesting user
	 */
	user_id: Snowflake;
}

/**
 * @unstable
 */
export interface RPCSendToLobbyResultData {}
/**
 * @unstable
 */
export interface RPCSendToLobbyArgs {}

export type RPCSetCertifiedDevicesResultData = null;
/**
 * https://discord.com/developers/docs/topics/rpc#setcertifieddevices-set-certified-devices-argument-structure
 */
export interface RPCSetCertifiedDevicesArgs {
	/**
	 * a list of devices for your manufacturer, in order of priority
	 */
	devices: RPCDevice[];
}

/**
 * @unstable
 */
export interface RPCSetOverlayLockedResultData {}
/**
 * @unstable
 */
export interface RPCSetOverlayLockedArgs {}

/**
 * @unstable
 */
export interface RPCSetUserAchievementResultData {}
/**
 * @unstable
 */
export interface RPCSetUserAchievementArgs {}

/**
 * @unstable
 */
export type RPCSetUserVoiceSettings2ResultData = RPCSetUserVoiceSettingsResultData;
/**
 * @unstable
 */
export type RPCSetUserVoiceSettings2Args = RPCSetUserVoiceSettingsArgs;

/**
 * @unstable
 */
export type RPCSetVoiceSettings2ResultData = RPCSetVoiceSettingsResultData;
/**
 * @unstable
 */
export type RPCSetVoiceSettings2Args = RPCSetVoiceSettingsArgs;

/**
 * @unstable
 */
export interface RPCStartPurchaseResultData {}
/**
 * @unstable
 */
export interface RPCStartPurchaseArgs {}

/**
 * @unstable
 */
export interface RPCUpdateLobbyResultData {}
/**
 * @unstable
 */
export interface RPCUpdateLobbyArgs {}

/**
 * @unstable
 */
export interface RPCUpdateLobbyMemberResultData {}
/**
 * @unstable
 */
export interface RPCUpdateLobbyMemberArgs {}

/**
 * @unstable
 */
export interface RPCValidateApplicationResultData {}
/**
 * @unstable
 */
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
	/**
	 * Dispatches message objects, with the exception of deletions, which only contains the id in the message object.
	 */
	MessageCreate = 'MESSAGE_CREATE',
	/**
	 * Dispatches message objects, with the exception of deletions, which only contains the id in the message object.
	 */
	MessageDelete = 'MESSAGE_DELETE',
	/**
	 * Dispatches message objects, with the exception of deletions, which only contains the id in the message object.
	 */
	MessageUpdate = 'MESSAGE_UPDATE',
	/**
	 * This event requires the `rpc.notifications.read` [OAuth2 scope](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes).
	 */
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
	/**
	 * Dispatches channel voice state objects
	 */
	VoiceStateCreate = 'VOICE_STATE_CREATE',
	/**
	 * Dispatches channel voice state objects
	 */
	VoiceStateDelete = 'VOICE_STATE_DELETE',
	/**
	 * Dispatches channel voice state objects
	 */
	VoiceStateUpdate = 'VOICE_STATE_UPDATE',
}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeActivityInviteArgs {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeActivityJoinArgs {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeActivityJoinRequestArgs {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeActivitySpectateArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeCaptureShortcutChangeArgs {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeChannelCreateArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeCurrentUserUpdateArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeEntitlementCreateArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeEntitlementDeleteArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeGameJoinArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeGameSpectateArgs {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeGuildCreateArgs {}

/**
 * https://discord.com/developers/docs/topics/rpc#guildstatus-guild-status-argument-structure
 */
export interface RPCSubscribeGuildStatusArgs {
	/**
	 * id of guild to listen to updates of
	 */
	guild_id: Snowflake;
}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeLobbyDeleteArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeLobbyMemberConnectArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeLobbyMemberDisconnectArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeLobbyMemberUpdateArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeLobbyMessageArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeLobbyUpdateArgs {}

/**
 * https://discord.com/developers/docs/topics/rpc#messagecreatemessageupdatemessagedelete-message-argument-structure
 */
export interface RPCSubscribeMessageCreateArgs {
	/**
	 * id of channel to listen to updates of
	 */
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#messagecreatemessageupdatemessagedelete-message-argument-structure
 */
export interface RPCSubscribeMessageDeleteArgs {
	/**
	 * id of channel to listen to updates of
	 */
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#messagecreatemessageupdatemessagedelete-message-argument-structure
 */
export interface RPCSubscribeMessageUpdateArgs {
	/**
	 * id of channel to listen to updates of
	 */
	channel_id: Snowflake;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeNotificationCreateArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeOverlayArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeOverlayUpdateArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeRelationshipUpdateArgs {}

/**
 * https://discord.com/developers/docs/topics/rpc#speakingstartspeakingstop-speaking-argument-structure
 */
export interface RPCSubscribeSpeakingStartArgs {
	/**
	 * id of channel to listen to updates of
	 */
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#speakingstartspeakingstop-speaking-argument-structure
 */
export interface RPCSubscribeSpeakingStopArgs {
	/**
	 * id of channel to listen to updates of
	 */
	channel_id: Snowflake;
}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeUserAchievementUpdateArgs {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeVoiceChannelSelectArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeVoiceConnectionStatusArgs {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeVoiceSettingsUpdateArgs {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCSubscribeVoiceSettingsUpdate2Args {}

/**
 * https://discord.com/developers/docs/topics/rpc#voicestatecreatevoicestateupdatevoicestatedelete-voice-state-argument-structure
 */
export interface RPCSubscribeVoiceStateCreateArgs {
	/**
	 * 	id of channel to listen to updates of
	 */
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#voicestatecreatevoicestateupdatevoicestatedelete-voice-state-argument-structure
 */
export interface RPCSubscribeVoiceStateDeleteArgs {
	/**
	 * id of channel to listen to updates of
	 */
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#voicestatecreatevoicestateupdatevoicestatedelete-voice-state-argument-structure
 */
export interface RPCSubscribeVoiceStateUpdateArgs {
	/**
	 * id of channel to listen to updates of
	 */
	channel_id: Snowflake;
}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCActivityInviteDispatchData {}

/**
 * https://discord.com/developers/docs/topics/rpc#activityjoin-activity-join-dispatch-data-structure
 */
export interface RPCActivityJoinDispatchData {
	/**
	 * the [`join_secret`](https://discord.com/developers/docs/developer-tools/game-sdk#activitysecrets-struct) for the given invite
	 */
	secret: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#activityjoinrequest-activity-join-request-data-structure
 */
export interface RPCActivityJoinRequestDispatchData {
	/**
	 * information about the user requesting to join
	 */
	user: APIUser;
}

/**
 * https://discord.com/developers/docs/topics/rpc#activityspectate-activity-spectate-dispatch-data-structure
 */
export interface RPCActivitySpectateDispatchData {
	/**
	 * the [`spectate_secret`](https://discord.com/developers/docs/developer-tools/game-sdk#activitysecrets-struct) for the given invite
	 */
	secret: string;
}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCCaptureShortcutChangeDispatchData {}

/**
 * https://discord.com/developers/docs/topics/rpc#channelcreate-channel-create-dispatch-data-structure
 */
export interface RPCChannelCreateDispatchData {
	/**
	 * channel id
	 */
	id: Snowflake;
	/**
	 * name of the channel
	 */
	name: string;
	/**
	 * channel type
	 */
	type: ChannelType;
}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCCurrentUserUpdateDispatchData {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCEntitlementCreateDispatchData {}

/**
 * @unstable
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RPCEntitlementDeleteDispatchData {}

/**
 * https://discord.com/developers/docs/topics/rpc#error-error-data-structure
 */
export interface RPCErrorDispatchData {
	/**
	 * RPC Error Code
	 */
	code: RPCErrorCodes;
	/**
	 * Error description
	 */
	message: string;
}

/**
 * @unstable
 */
export interface RPCGameJoinDispatchData {}

/**
 * @unstable
 */
export interface RPCGameSpectateDispatchData {}

/**
 * https://discord.com/developers/docs/topics/rpc#guildcreate-guild-create-dispatch-data-structure
 */
export interface RPCGuildCreateDispatchData {
	/**
	 * guild id
	 */
	id: Snowflake;
	/**
	 * name of the guild
	 */
	name: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#guildstatus-guild-status-dispatch-data-structure
 */
export interface RPCGuildStatusDispatchData {
	/**
	 * guild with requested id
	 */
	guild: APIPartialGuild;
	/**
	 * number of online users in guild
	 *
	 * @deprecated This will always be 0
	 */
	online: number;
}

/**
 * @unstable
 */
export interface RPCLobbyDeleteDispatchData {}

/**
 * @unstable
 */
export interface RPCLobbyMemberConnectDispatchData {}

/**
 * @unstable
 */
export interface RPCLobbyMemberDisconnectDispatchData {}

/**
 * @unstable
 */
export interface RPCLobbyMemberUpdateDispatchData {}

/**
 * @unstable
 */
export interface RPCLobbyMessageDispatchData {}

/**
 * @unstable
 */
export interface RPCLobbyUpdateDispatchData {}

/**
 * https://discord.com/developers/docs/topics/rpc#messagecreatemessageupdatemessagedelete-example-message-dispatch-payload
 */
export interface RPCMessageCreateDispatchData {
	/**
	 * id of channel where message was sent
	 */
	channel_id: Snowflake;
	/**
	 * 	message that was created
	 */
	message: APIMessage;
}

/**
 * https://discord.com/developers/docs/topics/rpc#messagecreatemessageupdatemessagedelete-example-message-dispatch-payload
 */
export interface RPCMessageDeleteDispatchData {
	/**
	 * id of channel where message was deleted
	 */
	channel_id: Snowflake;
	/**
	 * message that was deleted (only id)
	 */
	message: Pick<APIMessage, 'id'>;
}

/**
 * https://discord.com/developers/docs/topics/rpc#messagecreatemessageupdatemessagedelete-example-message-dispatch-payload
 */
export interface RPCMessageUpdateDispatchData {
	/**
	 * id of channel where message was updated
	 */
	channel_id: Snowflake;
	/**
	 * 	message that was updated
	 */
	message: APIMessage;
}

/**
 * https://discord.com/developers/docs/topics/rpc#notificationcreate-notification-create-dispatch-data-structure
 */
export interface RPCNotificationCreateDispatchData {
	/**
	 * id of channel where notification occurred
	 */
	channel_id: Snowflake;
	/**
	 * message that generated this notification
	 */
	message: APIMessage;
	/**
	 * icon url of the notification
	 */
	icon_url: string;
	/**
	 * title of the notification
	 */
	title: string;
	/**
	 * body of the notification
	 */
	body: string;
}

/**
 * @unstable
 */
export interface RPCOverlayDispatchData {}

/**
 * @unstable
 */
export interface RPCOverlayUpdateDispatchData {}

/**
 * https://discord.com/developers/docs/topics/rpc#ready-rpc-server-configuration-object
 */
export interface RPCServerConfiguration {
	/**
	 * server's cdn
	 */
	cdn_host: string;
	/**
	 * server's api endpoint
	 */
	api_endpoint: string;
	/**
	 * server's environment
	 */
	environment: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#ready-ready-dispatch-data-structure
 */
export interface RPCReadyDispatchData {
	/**
	 * RPC version
	 */
	v: 1;
	/**
	 * server configuration
	 */
	config: RPCServerConfiguration;
	/**
	 * the user to whom you are connected
	 */
	user: APIUser;
}

/**
 * @unstable
 */
export interface RPCRelationshipUpdateDispatchData {}

/**
 * https://discord.com/developers/docs/topics/rpc#speakingstartspeakingstop-speaking-dispatch-data-structure
 */
export interface RPCSpeakingStartDispatchData {
	/**
	 * id of user who started speaking
	 */
	user_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#speakingstartspeakingstop-speaking-dispatch-data-structure
 */
export interface RPCSpeakingStopDispatchData {
	/**
	 * id of user who stopped speaking
	 */
	user_id: Snowflake;
}

/**
 * @unstable
 */
export interface RPCUserAchievementUpdateDispatchData {}

/**
 * https://discord.com/developers/docs/topics/rpc#voicechannelselect-voice-channel-select-dispatch-data-structure
 */
export interface RPCVoiceChannelSelectDispatchData {
	/**
	 * id of channel (`null` if none)
	 */
	channel_id: Snowflake | null;
	/**
	 * id of guild (`null` if none)
	 */
	guild_id: Snowflake | null;
}

/**
 * https://discord.com/developers/docs/topics/rpc#voiceconnectionstatus-voice-connection-status-dispatch-data-structure
 */
export interface RPCVoiceConnectionStatusDispatchData {
	/**
	 * voice connection states
	 */
	state: VoiceConnectionStates;
	/**
	 * hostname of the connected voice server
	 */
	hostname: string;
	/**
	 * last 20 pings (in ms)
	 */
	pings: number[];
	/**
	 * average ping (in ms)
	 */
	average_ping: number;
	/**
	 * last ping (in ms)
	 */
	last_ping: number;
}

export type RPCVoiceSettingsUpdateDispatchData = RPCGetVoiceSettingsResultData;

/**
 * @unstable
 */
export type RPCVoiceSettingsUpdate2DispatchData = RPCGetVoiceSettingsResultData;

/**
 * https://discord.com/developers/docs/topics/rpc#voicestatecreatevoicestateupdatevoicestatedelete-example-voice-state-dispatch-payload
 */
export interface RPCVoiceStateCreateDispatchData {
	/**
	 * voice state of user
	 */
	voice_state: APIVoiceState;
	/**
	 * user who joined voice channel
	 */
	user: APIUser;
	/**
	 * nickname of user
	 */
	nick: string;
	/**
	 * volume of user
	 */
	volume: number;
	/**
	 * is user muted for the client user
	 */
	mute: boolean;
	/**
	 * pan of user
	 */
	pan: RPCVoicePan;
}

/**
 * https://discord.com/developers/docs/topics/rpc#voicestatecreatevoicestateupdatevoicestatedelete-example-voice-state-dispatch-payload
 */
export interface RPCVoiceStateDeleteDispatchData {
	/**
	 * voice state of user
	 */
	voice_state: APIVoiceState;
	/**
	 * user who joined voice channel
	 */
	user: APIUser;
	/**
	 * nickname of user
	 */
	nick: string;
	/**
	 * volume of user
	 */
	volume: number;
	/**
	 * is user muted for the client user
	 */
	mute: boolean;
	/**
	 * pan of user
	 */
	pan: RPCVoicePan;
}

/**
 * https://discord.com/developers/docs/topics/rpc#voicestatecreatevoicestateupdatevoicestatedelete-example-voice-state-dispatch-payload
 */
export interface RPCVoiceStateUpdateDispatchData {
	/**
	 * voice state of user
	 */
	voice_state: APIVoiceState;
	/**
	 * user who joined voice channel
	 */
	user: APIUser;
	/**
	 * nickname of user
	 */
	nick: string;
	/**
	 * volume of user
	 */
	volume: number;
	/**
	 * is user muted for the client user
	 */
	mute: boolean;
	/**
	 * pan of user
	 */
	pan: RPCVoicePan;
}

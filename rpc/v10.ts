/* eslint-disable @typescript-eslint/no-empty-interface */
import type {
	APIInvite,
	APIMessage,
	APIPartialChannel,
	APIPartialGuild,
	APIUser,
	APIVoiceState,
	ChannelType,
	GatewayActivity,
	OAuth2Scopes,
	Relationship,
	RPCAPIMessage,
	RPCCertifiedDevice,
	RPCErrorCodes,
	RPCOAuth2Application,
	RPCVoiceConnectionStatusPing,
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
	/**
	 * 	used to reject a Rich Presence Ask to Join request
	 *
	 * @unstable the documented similarly named command `CLOSE_ACTIVITY_REQUEST` does not exist, but `CLOSE_ACTIVITY_JOIN_REQUEST` does
	 */
	CloseActivityJoinRequest = 'CLOSE_ACTIVITY_JOIN_REQUEST',
	/**
	 * @unstable
	 */
	ConnectionsCallback = 'CONNECTIONS_CALLBACK',
	CreateChannelInvite = 'CREATE_CHANNEL_INVITE',
	/**
	 * @unstable
	 */
	DeepLink = 'DEEP_LINK',
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
	 * scopes to authorize
	 */
	scopes: OAuth2Scopes[];
	/**
	 * 	username to create a guest account with if the user does not have Discord
	 */
	username?: string;
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
 * https://discord.com/developers/docs/topics/rpc#getselectedvoicechannel
 */
export interface RPCGetSelectedVoiceChannelArgs {}

/**
 * @unstable
 */
export type RPCGetUserResultData = APIUser;
/**
 * @unstable
 */
export interface RPCGetUserArgs {
	/**
	 * @unstable id of the user to get
	 */
	id: Snowflake;
}

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
	activity?: Partial<
		Omit<GatewayActivity, 'created_at' | 'id' | 'timestamps'> & Partial<Pick<GatewayActivity, 'timestamps'>>
	>;
}

/**
 * https://discord.com/developers/docs/topics/rpc#setvoicesettings-set-voice-settings-argument-and-response-structure
 */
export type RPCSetVoiceSettingsResultData = RPCGetVoiceSettingsResultData;
/**
 * https://discord.com/developers/docs/topics/rpc#setvoicesettings-set-voice-settings-argument-and-response-structure
 *
 * @remarks Discord only supports a single modifier of voice settings at a time over RPC. If an app changes voice settings, it will lock voice settings so that other apps connected simultaneously lose the ability to change voice settings. Settings reset to what they were before being changed after the controlling app disconnects. When an app that has previously set voice settings connects, the client will swap to that app's configured voice settings and lock voice settings again.
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
	| RPCSubscribeChannelCreateArgs
	| RPCSubscribeCurrentUserUpdateArgs
	| RPCSubscribeEntitlementCreateArgs
	| RPCSubscribeEntitlementDeleteArgs
	| RPCSubscribeGameJoinArgs
	| RPCSubscribeGameSpectateArgs
	| RPCSubscribeGuildCreateArgs
	| RPCSubscribeGuildStatusArgs
	| RPCSubscribeMessageCreateArgs
	| RPCSubscribeMessageDeleteArgs
	| RPCSubscribeMessageUpdateArgs
	| RPCSubscribeNotificationCreateArgs
	| RPCSubscribeOverlayArgs
	| RPCSubscribeOverlayUpdateArgs
	| RPCSubscribeRelationshipUpdateArgs
	| RPCSubscribeSpeakingStartArgs
	| RPCSubscribeSpeakingStopArgs
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
	evt: RPCEvents;
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
export interface RPCAcceptActivityInviteArgs {
	/**
	 * @unstable invite type
	 */
	type: 1;
	/**
	 * @unstable id of the user who sent the invite
	 */
	user_id: Snowflake;
	/**
	 * @unstable id of the session
	 */
	session_id: Snowflake;
	/**
	 * @unstable id of the channel that the invite comes from
	 */
	channel_id: Snowflake;
	/**
	 * @unstable id of the message that the invite comes from
	 */
	message_id: Snowflake;
}

/**
 * @unstable
 */
export interface RPCActivityInviteUserResultData {}
/**
 * @unstable
 */
export interface RPCActivityInviteUserArgs {
	/**
	 * @unstable invite type
	 */
	type: 1;
	/**
	 * @unstable id of the user to invite
	 */
	user_id: Snowflake;
	/**
	 * @unstable process id
	 */
	pid: number;
}

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

export interface RPCCloseActivityJoinRequestResultData {}
/**
 * https://discord.com/developers/docs/topics/rpc#closeactivityrequest-close-activity-request-argument-structure
 */
export interface RPCCloseActivityJoinRequestArgs {
	/**
	 * the id of the requesting user
	 */
	user_id: Snowflake;
}

/**
 * @unstable
 */
export interface RPCConnectionsCallbackResultData {}
/**
 * @unstable
 */
export interface RPCConnectionsCallbackArgs {}

/**
 * @unstable channel invite
 */
export type RPCCreateChannelInviteResultData = APIInvite & {
	/**
	 * @unstable timestamp of when the invite was created
	 */
	created_at: string;
	/**
	 * @unstable max age of the invite
	 */
	max_age: number;
	/**
	 * @unstable max uses of the invite
	 */
	max_uses: number;
	/**
	 * @unstable whether the invite is temporary
	 */
	temporary: boolean;
	/**
	 * @unstable uses of the invite
	 */
	uses: number;
	/**
	 * @unstable id of the guild
	 */
	guild_id: Snowflake;
};
/**
 * @unstable arguments to create channel invite
 */
export interface RPCCreateChannelInviteArgs {
	/**
	 * id of the channel to create an invite for
	 */
	channel_id: Snowflake;
}

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
export interface RPCGetImageResultData {
	/**
	 * @unstable base64 image data
	 */
	data_url: string;
}
/**
 * @unstable
 */
export interface RPCGetImageArgs {
	/**
	 * @unstable image type
	 */
	type: 'user';
	/**
	 * @unstable id of the image
	 */
	id: Snowflake;
	/**
	 * @unstable image format
	 */
	format: 'jpg' | 'png' | 'webp';
	/**
	 * @unstable size of the image
	 */
	size: 1_024 | 16 | 32 | 64 | 128 | 256 | 512;
}

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
export type RPCGetRelationshipsResultData = Relationship[];
/**
 * @unstable
 */
export interface RPCGetRelationshipsArgs {}

/**
 * @unstable
 */
export type RPCGetSkusResultData = unknown[];
/**
 * @unstable
 */
export interface RPCGetSkusArgs {}

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
export interface RPCOpenOverlayActivityInviteArgs {
	/**
	 * @unstable
	 */
	type: 1;
	/**
	 * @unstable process id
	 */
	pid: number;
}

/**
 * @unstable
 */
export interface RPCOpenOverlayGuildInviteResultData {}
/**
 * @unstable
 */
export interface RPCOpenOverlayGuildInviteArgs {
	/**
	 * @unstable guild invite code
	 */
	code: string;
	/**
	 * @unstable process id
	 */
	pid: number;
}

/**
 * @unstable
 */
export interface RPCOpenOverlayVoiceSettingsResultData {}
/**
 * @unstable
 */
export interface RPCOpenOverlayVoiceSettingsArgs {
	/**
	 * @unstable process id
	 */
	pid: number;
}

/**
 * @unstable
 */
export interface RPCOverlayResultData {}
/**
 * @unstable
 */
export interface RPCOverlayArgs {}

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

export type RPCSetCertifiedDevicesResultData = null;
/**
 * https://discord.com/developers/docs/topics/rpc#setcertifieddevices-set-certified-devices-argument-structure
 */
export interface RPCSetCertifiedDevicesArgs {
	/**
	 * a list of devices for your manufacturer, in order of priority
	 */
	devices: RPCCertifiedDevice[];
}

/**
 * @unstable
 */
export interface RPCSetOverlayLockedResultData {}
/**
 * @unstable
 */
export interface RPCSetOverlayLockedArgs {
	/**
	 * @unstable whether the overlay is locked
	 */
	locked: boolean;
	/**
	 * @unstable process id
	 */
	pid: number;
}

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
export interface RPCStartPurchaseArgs {
	/**
	 * id of the sku
	 */
	sku_id: Snowflake;
}

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
export type RPCSubscribeActivityInviteArgs = Record<string, never>;

export type RPCSubscribeActivityJoinArgs = Record<string, never>;

export type RPCSubscribeActivityJoinRequestArgs = Record<string, never>;

export type RPCSubscribeActivitySpectateArgs = Record<string, never>;

export type RPCSubscribeChannelCreateArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeCurrentUserUpdateArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeEntitlementCreateArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeEntitlementDeleteArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeGameJoinArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeGameSpectateArgs = Record<string, never>;

export type RPCSubscribeGuildCreateArgs = Record<string, never>;

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

export type RPCSubscribeNotificationCreateArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeOverlayArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeOverlayUpdateArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeRelationshipUpdateArgs = Record<string, never>;

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

export type RPCSubscribeVoiceChannelSelectArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeVoiceConnectionStatusArgs = Record<string, never>;

export type RPCSubscribeVoiceSettingsUpdateArgs = Record<string, never>;

/**
 * @unstable
 */
export type RPCSubscribeVoiceSettingsUpdate2Args = Record<string, never>;

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
	message: RPCAPIMessage;
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
	/**
	 * @unstable
	 * id of channel where user is speaking
	 */
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#speakingstartspeakingstop-speaking-dispatch-data-structure
 */
export interface RPCSpeakingStopDispatchData {
	/**
	 * id of user who stopped speaking
	 */
	user_id: Snowflake;
	/**
	 * @unstable
	 * id of channel where user is speaking
	 */
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/rpc#voicechannelselect-voice-channel-select-dispatch-data-structure
 */
export interface RPCVoiceChannelSelectDispatchData {
	/**
	 * id of channel (`null` if leaving channel)
	 */
	channel_id: Snowflake | null;
	/**
	 * id of guild (`null` if not in a guild. field is omitted when leaving any voice channel)
	 */
	guild_id?: Snowflake | null;
}

/**
 * https://discord.com/developers/docs/topics/rpc#voiceconnectionstatus-voice-connection-status-dispatch-data-structure
 */
export interface RPCVoiceConnectionStatusDispatchData<State extends VoiceConnectionStates = VoiceConnectionStates> {
	/**
	 * voice connection states
	 */
	state: State;
	/**
	 * hostname of the connected voice server
	 */
	hostname: State extends VoiceConnectionStates.AwaitingEndpoint ? null : string;
	/**
	 * all of the accumulated pings since connection
	 */
	pings: RPCVoiceConnectionStatusPing[];
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
export interface RPCVoiceSettingsUpdate2DispatchData {
	/**
	 * @unstable
	 */
	input_mode: Pick<RPCVoiceSettingsMode, 'shortcut' | 'type'>;
	/**
	 * @unstable
	 */
	local_mutes: unknown[];
	/**
	 * @unstable
	 */
	local_volumes: unknown;
	/**
	 * @unstable
	 */
	self_mute: boolean;
	/**
	 * @unstable
	 */
	self_deaf: boolean;
}

/**
 * https://discord.com/developers/docs/topics/rpc#voicestatecreatevoicestateupdatevoicestatedelete-example-voice-state-dispatch-payload
 */
export interface RPCVoiceStateCreateDispatchData {
	/**
	 * voice state of user
	 */
	voice_state: Pick<APIVoiceState, 'deaf' | 'mute' | 'self_deaf' | 'self_mute' | 'suppress'>;
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

export interface BaseRPCMessage<Cmd extends RPCCommands> {
	cmd: Cmd;
}

export interface RPCCommandMessage<Cmd extends RPCCommands> extends BaseRPCMessage<Cmd> {
	nonce: string;
}

export interface RPCSubscribeMessage<
	Evt extends RPCEvents,
	Cmd extends RPCCommands.Subscribe | RPCCommands.Unsubscribe = RPCCommands.Subscribe | RPCCommands.Unsubscribe,
> extends RPCCommandMessage<Cmd> {
	evt: Evt;
}

export interface RPCCommandAuthorizePayload extends RPCCommandMessage<RPCCommands.Authorize> {
	args: RPCAuthorizeArgs;
}

export interface RPCCommandAuthenticatePayload extends RPCCommandMessage<RPCCommands.Authenticate> {
	args: RPCAuthenticateArgs;
}

export interface RPCCommandGetChannelPayload extends RPCCommandMessage<RPCCommands.GetChannel> {
	args: RPCGetChannelArgs;
}

export interface RPCCommandGetChannelsPayload extends RPCCommandMessage<RPCCommands.GetChannels> {
	args: RPCGetChannelsArgs;
}

export interface RPCCommandGetGuildPayload extends RPCCommandMessage<RPCCommands.GetGuild> {
	args: RPCGetGuildArgs;
}

export interface RPCCommandGetGuildsPayload extends RPCCommandMessage<RPCCommands.GetGuilds> {
	args: RPCGetGuildsArgs;
}

export interface RPCCommandGetUserPayload extends RPCCommandMessage<RPCCommands.GetUser> {
	args: RPCGetUserArgs;
}

export interface RPCCommandGetVoiceSettingsPayload extends RPCCommandMessage<RPCCommands.GetVoiceSettings> {
	args: RPCGetVoiceSettingsArgs;
}

export interface RPCCommandSelectTextChannelPayload extends RPCCommandMessage<RPCCommands.SelectTextChannel> {
	args: RPCSelectTextChannelArgs;
}

export interface RPCCommandSelectVoiceChannelPayload extends RPCCommandMessage<RPCCommands.SelectVoiceChannel> {
	args: RPCSelectVoiceChannelArgs;
}

export interface RPCCommandSetActivityPayload extends RPCCommandMessage<RPCCommands.SetActivity> {
	args: RPCSetActivityArgs;
}

export interface RPCCommandSetVoiceSettingsPayload extends RPCCommandMessage<RPCCommands.SetVoiceSettings> {
	args: RPCSetVoiceSettingsArgs;
}

export type RPCCommandSubscribePayload =
	| RPCSubscribeActivityInvite
	| RPCSubscribeActivityJoin
	| RPCSubscribeActivityJoinRequest
	| RPCSubscribeActivitySpectate
	| RPCSubscribeChannelCreate
	| RPCSubscribeCurrentUserUpdate
	| RPCSubscribeEntitlementCreate
	| RPCSubscribeEntitlementDelete
	| RPCSubscribeGameJoin
	| RPCSubscribeGameSpectate
	| RPCSubscribeGuildCreate
	| RPCSubscribeGuildStatus
	| RPCSubscribeMessageCreate
	| RPCSubscribeMessageDelete
	| RPCSubscribeMessageUpdate
	| RPCSubscribeNotificationCreate
	| RPCSubscribeOverlay
	| RPCSubscribeOverlayUpdate
	| RPCSubscribeRelationshipUpdate
	| RPCSubscribeSpeakingStart
	| RPCSubscribeSpeakingStop
	| RPCSubscribeVoiceChannelSelect
	| RPCSubscribeVoiceConnectionStatus
	| RPCSubscribeVoiceSettingsUpdate
	| RPCSubscribeVoiceSettingsUpdate2
	| RPCSubscribeVoiceStateCreate
	| RPCSubscribeVoiceStateDelete
	| RPCSubscribeVoiceStateUpdate;

export type RPCCommandUnsubscribePayload = RPCCommandSubscribePayload;

export interface RPCCommandAcceptActivityInvitePayload extends RPCCommandMessage<RPCCommands.AcceptActivityInvite> {
	args: RPCAcceptActivityInviteArgs;
}

export interface RPCCommandActivityInviteUserPayload extends RPCCommandMessage<RPCCommands.ActivityInviteUser> {
	args: RPCActivityInviteUserArgs;
}

export interface RPCCommandBraintreePopupBridgeCallbackPayload
	extends RPCCommandMessage<RPCCommands.BraintreePopupBridgeCallback> {
	args: RPCBraintreePopupBridgeCallbackArgs;
}

export interface RPCCommandBrowserPayload extends RPCCommandMessage<RPCCommands.BrowserHandoff> {
	args: RPCBrowserHandoffArgs;
}

export interface RPCCommandCloseActivityJoinRequestPayload
	extends RPCCommandMessage<RPCCommands.CloseActivityJoinRequest> {
	args: RPCCloseActivityJoinRequestArgs;
}

export interface RPCCommandConnectionsCallbackPayload extends RPCCommandMessage<RPCCommands.ConnectionsCallback> {
	args: RPCConnectionsCallbackArgs;
}

export interface RPCCommandCreateChannelInvitePayload extends RPCCommandMessage<RPCCommands.CreateChannelInvite> {
	args: RPCCreateChannelInviteArgs;
}

export interface RPCCommandDeepLinkPayload extends RPCCommandMessage<RPCCommands.DeepLink> {
	args: RPCDeepLinkArgs;
}

export interface RPCCommandGetApplicationTicketPayload extends RPCCommandMessage<RPCCommands.GetApplicationTicket> {
	args: RPCGetApplicationTicketArgs;
}

export interface RPCCommandGetEntitlementTicketPayload extends RPCCommandMessage<RPCCommands.GetEntitlementTicket> {
	args: RPCGetEntitlementTicketArgs;
}

export interface RPCCommandGetEntitlementsPayload extends RPCCommandMessage<RPCCommands.GetEntitlements> {
	args: RPCGetEntitlementsArgs;
}

export interface RPCCommandGetImagePayload extends RPCCommandMessage<RPCCommands.GetImage> {
	args: RPCGetImageArgs;
}

export interface RPCCommandGetNetworkingConfigPayload extends RPCCommandMessage<RPCCommands.GetNetworkingConfig> {
	args: RPCGetNetworkingConfigArgs;
}

export interface RPCCommandGetRelationshipsPayload extends RPCCommandMessage<RPCCommands.GetRelationships> {
	args: RPCGetRelationshipsArgs;
}

export interface RPCCommandGetSelectedVoiceChannelPayload
	extends RPCCommandMessage<RPCCommands.GetSelectedVoiceChannel> {
	args: RPCGetSelectedVoiceChannelArgs;
}

export interface RPCCommandGetSkusPayload extends RPCCommandMessage<RPCCommands.GetSkus> {
	args: RPCGetSkusArgs;
}

export interface RPCCommandGiftCodeBrowserPayload extends RPCCommandMessage<RPCCommands.GiftCodeBrowser> {
	args: RPCGiftCodeBrowserArgs;
}

export interface RPCCommandGuildTemplateBrowserPayload extends RPCCommandMessage<RPCCommands.GuildTemplateBrowser> {
	args: RPCGuildTemplateBrowserArgs;
}

export interface RPCCommandInviteBrowserPayload extends RPCCommandMessage<RPCCommands.InviteBrowser> {
	args: RPCInviteBrowserArgs;
}

export interface RPCCommandNetworkingCreateTokenPayload extends RPCCommandMessage<RPCCommands.NetworkingCreateToken> {
	args: RPCNetworkingCreateTokenArgs;
}

export interface RPCCommandNetworkingPeerMetricsPayload extends RPCCommandMessage<RPCCommands.NetworkingPeerMetrics> {
	args: RPCNetworkingPeerMetricsArgs;
}

export interface RPCCommandNetworkingSystemMetricsPayload
	extends RPCCommandMessage<RPCCommands.NetworkingSystemMetrics> {
	args: RPCNetworkingSystemMetricsArgs;
}

export interface RPCCommandOpenOverlayActivityInvitePayload
	extends RPCCommandMessage<RPCCommands.OpenOverlayActivityInvite> {
	args: RPCOpenOverlayActivityInviteArgs;
}

export interface RPCCommandOpenOverlayGuildInvitePayload extends RPCCommandMessage<RPCCommands.OpenOverlayGuildInvite> {
	args: RPCOpenOverlayGuildInviteArgs;
}

export interface RPCCommandOpenOverlayVoiceSettingsPayload
	extends RPCCommandMessage<RPCCommands.OpenOverlayVoiceSettings> {
	args: RPCOpenOverlayVoiceSettingsArgs;
}

export interface RPCCommandOverlayPayload extends RPCCommandMessage<RPCCommands.Overlay> {
	args: RPCOverlayArgs;
}

export interface RPCCommandSendActivityJoinInvitePayload extends RPCCommandMessage<RPCCommands.SendActivityJoinInvite> {
	args: RPCSendActivityJoinInviteArgs;
}

export interface RPCCommandSetCertifiedDevicesPayload extends RPCCommandMessage<RPCCommands.SetCertifiedDevices> {
	args: RPCSetCertifiedDevicesArgs;
}

export interface RPCCommandSetOverlayLockedPayload extends RPCCommandMessage<RPCCommands.SetOverlayLocked> {
	args: RPCSetOverlayLockedArgs;
}

export interface RPCCommandSetUserVoiceSettingsPayload extends RPCCommandMessage<RPCCommands.SetUserVoiceSettings> {
	args: RPCSetUserVoiceSettingsArgs;
}

export interface RPCCommandSetUserVoiceSettings2Payload extends RPCCommandMessage<RPCCommands.SetUserVoiceSettings2> {
	args: RPCSetUserVoiceSettings2Args;
}

export interface RPCCommandSetVoiceSettings2Payload extends RPCCommandMessage<RPCCommands.SetVoiceSettings2> {
	args: RPCSetVoiceSettings2Args;
}

export interface RPCCommandStartPurchasePayload extends RPCCommandMessage<RPCCommands.StartPurchase> {
	args: RPCStartPurchaseArgs;
}

export interface RPCCommandValidateApplicationPayload extends RPCCommandMessage<RPCCommands.ValidateApplication> {
	args: RPCValidateApplicationArgs;
}

export interface RPCSubscribeActivityInvite extends RPCSubscribeMessage<RPCEvents.ActivityInvite> {
	args: RPCSubscribeActivityInviteArgs;
	evt: RPCEvents.ActivityInvite;
}

export interface RPCSubscribeActivityJoin extends RPCSubscribeMessage<RPCEvents.ActivityJoin> {
	args: RPCSubscribeActivityJoinArgs;
	evt: RPCEvents.ActivityJoin;
}

export interface RPCSubscribeActivityJoinRequest extends RPCSubscribeMessage<RPCEvents.ActivityJoinRequest> {
	args: RPCSubscribeActivityJoinRequestArgs;
	evt: RPCEvents.ActivityJoinRequest;
}

export interface RPCSubscribeActivitySpectate extends RPCSubscribeMessage<RPCEvents.ActivitySpectate> {
	args: RPCSubscribeActivitySpectateArgs;
	evt: RPCEvents.ActivitySpectate;
}

export interface RPCSubscribeChannelCreate extends RPCSubscribeMessage<RPCEvents.ChannelCreate> {
	args: RPCSubscribeChannelCreateArgs;
	evt: RPCEvents.ChannelCreate;
}

export interface RPCSubscribeCurrentUserUpdate extends RPCSubscribeMessage<RPCEvents.CurrentUserUpdate> {
	args: RPCSubscribeCurrentUserUpdateArgs;
	evt: RPCEvents.CurrentUserUpdate;
}

export interface RPCSubscribeEntitlementCreate extends RPCSubscribeMessage<RPCEvents.EntitlementCreate> {
	args: RPCSubscribeEntitlementCreateArgs;
	evt: RPCEvents.EntitlementCreate;
}

export interface RPCSubscribeEntitlementDelete extends RPCSubscribeMessage<RPCEvents.EntitlementDelete> {
	args: RPCSubscribeEntitlementDeleteArgs;
	evt: RPCEvents.EntitlementDelete;
}

export interface RPCSubscribeGameJoin extends RPCSubscribeMessage<RPCEvents.GameJoin> {
	args: RPCSubscribeGameJoinArgs;
	evt: RPCEvents.GameJoin;
}

export interface RPCSubscribeGameSpectate extends RPCSubscribeMessage<RPCEvents.GameSpectate> {
	args: RPCSubscribeGameSpectateArgs;
	evt: RPCEvents.GameSpectate;
}

export interface RPCSubscribeGuildCreate extends RPCSubscribeMessage<RPCEvents.GuildCreate> {
	args: RPCSubscribeGuildCreateArgs;
	evt: RPCEvents.GuildCreate;
}

export interface RPCSubscribeGuildStatus extends RPCSubscribeMessage<RPCEvents.GuildStatus> {
	args: RPCSubscribeGuildStatusArgs;
	evt: RPCEvents.GuildStatus;
}

export interface RPCSubscribeMessageCreate extends RPCSubscribeMessage<RPCEvents.MessageCreate> {
	args: RPCSubscribeMessageCreateArgs;
	evt: RPCEvents.MessageCreate;
}

export interface RPCSubscribeMessageDelete extends RPCSubscribeMessage<RPCEvents.MessageDelete> {
	args: RPCSubscribeMessageDeleteArgs;
	evt: RPCEvents.MessageDelete;
}

export interface RPCSubscribeMessageUpdate extends RPCSubscribeMessage<RPCEvents.MessageUpdate> {
	args: RPCSubscribeMessageUpdateArgs;
	evt: RPCEvents.MessageUpdate;
}

export interface RPCSubscribeNotificationCreate extends RPCSubscribeMessage<RPCEvents.NotificationCreate> {
	args: RPCSubscribeNotificationCreateArgs;
	evt: RPCEvents.NotificationCreate;
}

export interface RPCSubscribeOverlay extends RPCSubscribeMessage<RPCEvents.Overlay> {
	args: RPCSubscribeOverlayArgs;
	evt: RPCEvents.Overlay;
}

export interface RPCSubscribeOverlayUpdate extends RPCSubscribeMessage<RPCEvents.OverlayUpdate> {
	args: RPCSubscribeOverlayUpdateArgs;
	evt: RPCEvents.OverlayUpdate;
}

export interface RPCSubscribeRelationshipUpdate extends RPCSubscribeMessage<RPCEvents.RelationshipUpdate> {
	args: RPCSubscribeRelationshipUpdateArgs;
	evt: RPCEvents.RelationshipUpdate;
}

export interface RPCSubscribeSpeakingStart extends RPCSubscribeMessage<RPCEvents.SpeakingStart> {
	args: RPCSubscribeSpeakingStartArgs;
	evt: RPCEvents.SpeakingStart;
}

export interface RPCSubscribeSpeakingStop extends RPCSubscribeMessage<RPCEvents.SpeakingStop> {
	args: RPCSubscribeSpeakingStopArgs;
	evt: RPCEvents.SpeakingStop;
}

export interface RPCSubscribeVoiceChannelSelect extends RPCSubscribeMessage<RPCEvents.VoiceChannelSelect> {
	args: RPCSubscribeVoiceChannelSelectArgs;
	evt: RPCEvents.VoiceChannelSelect;
}

export interface RPCSubscribeVoiceConnectionStatus extends RPCSubscribeMessage<RPCEvents.VoiceConnectionStatus> {
	args: RPCSubscribeVoiceConnectionStatusArgs;
	evt: RPCEvents.VoiceConnectionStatus;
}

export interface RPCSubscribeVoiceSettingsUpdate extends RPCSubscribeMessage<RPCEvents.VoiceSettingsUpdate> {
	args: RPCSubscribeVoiceSettingsUpdateArgs;
	evt: RPCEvents.VoiceSettingsUpdate;
}

export interface RPCSubscribeVoiceSettingsUpdate2 extends RPCSubscribeMessage<RPCEvents.VoiceSettingsUpdate2> {
	args: RPCSubscribeVoiceSettingsUpdate2Args;
	evt: RPCEvents.VoiceSettingsUpdate2;
}

export interface RPCSubscribeVoiceStateCreate extends RPCSubscribeMessage<RPCEvents.VoiceStateCreate> {
	args: RPCSubscribeVoiceStateCreateArgs;
	evt: RPCEvents.VoiceStateCreate;
}

export interface RPCSubscribeVoiceStateDelete extends RPCSubscribeMessage<RPCEvents.VoiceStateDelete> {
	args: RPCSubscribeVoiceStateDeleteArgs;
	evt: RPCEvents.VoiceStateDelete;
}

export interface RPCSubscribeVoiceStateUpdate extends RPCSubscribeMessage<RPCEvents.VoiceStateUpdate> {
	args: RPCSubscribeVoiceStateUpdateArgs;
	evt: RPCEvents.VoiceStateUpdate;
}

export interface RPCAuthorizeResult extends RPCCommandMessage<RPCCommands.Authorize> {
	data: RPCAuthorizeResultData;
}

export interface RPCAuthenticateResult extends RPCCommandMessage<RPCCommands.Authenticate> {
	data: RPCAuthenticateResultData;
}

export interface RPCGetChannelResult extends RPCCommandMessage<RPCCommands.GetChannel> {
	data: RPCGetChannelResultData;
}

export interface RPCGetChannelsResult extends RPCCommandMessage<RPCCommands.GetChannels> {
	data: RPCGetChannelsResultData;
}

export interface RPCGetGuildResult extends RPCCommandMessage<RPCCommands.GetGuild> {
	data: RPCGetGuildResultData;
}

export interface RPCGetGuildsResult extends RPCCommandMessage<RPCCommands.GetGuilds> {
	data: RPCGetGuildsResultData;
}

export interface RPCGetUserResult extends RPCCommandMessage<RPCCommands.GetUser> {
	data: RPCGetUserResultData;
}

export interface RPCGetVoiceSettingsResult extends RPCCommandMessage<RPCCommands.GetVoiceSettings> {
	data: RPCGetVoiceSettingsResultData;
}

export interface RPCSelectTextChannelResult extends RPCCommandMessage<RPCCommands.SelectTextChannel> {
	data: RPCSelectTextChannelResultData;
}

export interface RPCSelectVoiceChannelResult extends RPCCommandMessage<RPCCommands.SelectVoiceChannel> {
	data: RPCSelectVoiceChannelResultData;
}

export interface RPCSetActivityResult extends RPCCommandMessage<RPCCommands.SetActivity> {
	data: RPCSetActivityResultData;
}

export interface RPCSetVoiceSettingsResult extends RPCCommandMessage<RPCCommands.SetVoiceSettings> {
	data: RPCSetVoiceSettingsResultData;
}

export interface RPCSubscribeResult extends RPCCommandMessage<RPCCommands.Subscribe> {
	data: RPCSubscribeResultData;
}

export interface RPCUnsubscribeResult extends RPCCommandMessage<RPCCommands.Unsubscribe> {
	data: RPCUnsubscribeResultData;
}

export interface RPCAcceptActivityInviteResult extends RPCCommandMessage<RPCCommands.AcceptActivityInvite> {
	data: RPCAcceptActivityInviteResultData;
}

export interface RPCActivityInviteUserResult extends RPCCommandMessage<RPCCommands.ActivityInviteUser> {
	data: RPCActivityInviteUserResultData;
}

export interface RPCBraintreePopupBridgeCallbackResult
	extends RPCCommandMessage<RPCCommands.BraintreePopupBridgeCallback> {
	data: RPCBraintreePopupBridgeCallbackResultData;
}

export interface RPCBrowserResult extends RPCCommandMessage<RPCCommands.BrowserHandoff> {
	data: RPCBrowserHandoffResultData;
}

export interface RPCCloseActivityJoinRequestResult extends RPCCommandMessage<RPCCommands.CloseActivityJoinRequest> {
	data: RPCCloseActivityJoinRequestResultData;
}

export interface RPCConnectionsCallbackResult extends RPCCommandMessage<RPCCommands.ConnectionsCallback> {
	data: RPCConnectionsCallbackResultData;
}

export interface RPCCreateChannelInviteResult extends RPCCommandMessage<RPCCommands.CreateChannelInvite> {
	data: RPCCreateChannelInviteResultData;
}

export interface RPCDeepLinkResult extends RPCCommandMessage<RPCCommands.DeepLink> {
	data: RPCDeepLinkResultData;
}

export interface RPCGetApplicationTicketResult extends RPCCommandMessage<RPCCommands.GetApplicationTicket> {
	data: RPCGetApplicationTicketResultData;
}

export interface RPCGetEntitlementTicketResult extends RPCCommandMessage<RPCCommands.GetEntitlementTicket> {
	data: RPCGetEntitlementTicketResultData;
}

export interface RPCGetEntitlementsResult extends RPCCommandMessage<RPCCommands.GetEntitlements> {
	data: RPCGetEntitlementsResultData;
}

export interface RPCGetImageResult extends RPCCommandMessage<RPCCommands.GetImage> {
	data: RPCGetImageResultData;
}

export interface RPCGetNetworkingConfigResult extends RPCCommandMessage<RPCCommands.GetNetworkingConfig> {
	data: RPCGetNetworkingConfigResultData;
}

export interface RPCGetRelationshipsResult extends RPCCommandMessage<RPCCommands.GetRelationships> {
	data: RPCGetRelationshipsResultData;
}

export interface RPCGetSelectedVoiceChannelResult extends RPCCommandMessage<RPCCommands.GetSelectedVoiceChannel> {
	data: RPCGetSelectedVoiceChannelResultData;
}

export interface RPCGetSkusResult extends RPCCommandMessage<RPCCommands.GetSkus> {
	data: RPCGetSkusResultData;
}

export interface RPCGiftCodeBrowserResult extends RPCCommandMessage<RPCCommands.GiftCodeBrowser> {
	data: RPCGiftCodeBrowserResultData;
}

export interface RPCGuildTemplateBrowserResult extends RPCCommandMessage<RPCCommands.GuildTemplateBrowser> {
	data: RPCGuildTemplateBrowserResultData;
}

export interface RPCInviteBrowserResult extends RPCCommandMessage<RPCCommands.InviteBrowser> {
	data: RPCInviteBrowserResultData;
}

export interface RPCNetworkingCreateTokenResult extends RPCCommandMessage<RPCCommands.NetworkingCreateToken> {
	data: RPCNetworkingCreateTokenResultData;
}

export interface RPCNetworkingPeerMetricsResult extends RPCCommandMessage<RPCCommands.NetworkingPeerMetrics> {
	data: RPCNetworkingPeerMetricsResultData;
}

export interface RPCNetworkingSystemMetricsResult extends RPCCommandMessage<RPCCommands.NetworkingSystemMetrics> {
	data: RPCNetworkingSystemMetricsResultData;
}

export interface RPCOpenOverlayActivityInviteResult extends RPCCommandMessage<RPCCommands.OpenOverlayActivityInvite> {
	data: RPCOpenOverlayActivityInviteResultData;
}

export interface RPCOpenOverlayGuildInviteResult extends RPCCommandMessage<RPCCommands.OpenOverlayGuildInvite> {
	data: RPCOpenOverlayGuildInviteResultData;
}

export interface RPCOpenOverlayVoiceSettingsResult extends RPCCommandMessage<RPCCommands.OpenOverlayVoiceSettings> {
	data: RPCOpenOverlayVoiceSettingsResultData;
}

export interface RPCOverlayResult extends RPCCommandMessage<RPCCommands.Overlay> {
	data: RPCOverlayResultData;
}

export interface RPCSendActivityJoinInviteResult extends RPCCommandMessage<RPCCommands.SendActivityJoinInvite> {
	data: RPCSendActivityJoinInviteResultData;
}

export interface RPCSetCertifiedDevicesResult extends RPCCommandMessage<RPCCommands.SetCertifiedDevices> {
	data: RPCSetCertifiedDevicesResultData;
}

export interface RPCSetOverlayLockedResult extends RPCCommandMessage<RPCCommands.SetOverlayLocked> {
	data: RPCSetOverlayLockedResultData;
}

export interface RPCSetUserVoiceSettingsResult extends RPCCommandMessage<RPCCommands.SetUserVoiceSettings> {
	data: RPCSetUserVoiceSettingsResultData;
}

export interface RPCSetUserVoiceSettings2Result extends RPCCommandMessage<RPCCommands.SetUserVoiceSettings2> {
	data: RPCSetUserVoiceSettings2ResultData;
}

export interface RPCSetVoiceSettings2Result extends RPCCommandMessage<RPCCommands.SetVoiceSettings2> {
	data: RPCSetVoiceSettings2ResultData;
}

export interface RPCStartPurchaseResult extends RPCCommandMessage<RPCCommands.StartPurchase> {
	data: RPCStartPurchaseResultData;
}

export interface RPCValidateApplicationResult extends RPCCommandMessage<RPCCommands.ValidateApplication> {
	data: RPCValidateApplicationResultData;
}

export type RPCCommandsResult =
	| RPCAcceptActivityInviteResult
	| RPCActivityInviteUserResult
	| RPCAuthenticateResult
	| RPCAuthorizeResult
	| RPCBraintreePopupBridgeCallbackResult
	| RPCBrowserResult
	| RPCCloseActivityJoinRequestResult
	| RPCConnectionsCallbackResult
	| RPCCreateChannelInviteResult
	| RPCDeepLinkResult
	| RPCGetApplicationTicketResult
	| RPCGetChannelResult
	| RPCGetChannelsResult
	| RPCGetEntitlementsResult
	| RPCGetEntitlementTicketResult
	| RPCGetGuildResult
	| RPCGetGuildsResult
	| RPCGetImageResult
	| RPCGetNetworkingConfigResult
	| RPCGetRelationshipsResult
	| RPCGetSelectedVoiceChannelResult
	| RPCGetSkusResult
	| RPCGetUserResult
	| RPCGetVoiceSettingsResult
	| RPCGiftCodeBrowserResult
	| RPCGuildTemplateBrowserResult
	| RPCInviteBrowserResult
	| RPCNetworkingCreateTokenResult
	| RPCNetworkingPeerMetricsResult
	| RPCNetworkingSystemMetricsResult
	| RPCOpenOverlayActivityInviteResult
	| RPCOpenOverlayGuildInviteResult
	| RPCOpenOverlayVoiceSettingsResult
	| RPCOverlayResult
	| RPCSelectTextChannelResult
	| RPCSelectVoiceChannelResult
	| RPCSendActivityJoinInviteResult
	| RPCSetActivityResult
	| RPCSetCertifiedDevicesResult
	| RPCSetOverlayLockedResult
	| RPCSetUserVoiceSettings2Result
	| RPCSetUserVoiceSettingsResult
	| RPCSetVoiceSettings2Result
	| RPCSetVoiceSettingsResult
	| RPCStartPurchaseResult
	| RPCSubscribeResult
	| RPCUnsubscribeResult
	| RPCValidateApplicationResult;

export interface RPCActivityInviteDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCActivityInviteDispatchData;
	evt: RPCEvents.ActivityInvite;
}

export interface RPCActivityJoinDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCActivityJoinDispatchData;
	evt: RPCEvents.ActivityJoin;
}

export interface RPCActivityJoinRequestDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCActivityJoinRequestDispatchData;
	evt: RPCEvents.ActivityJoinRequest;
}

export interface RPCActivitySpectateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCActivitySpectateDispatchData;
	evt: RPCEvents.ActivitySpectate;
}

export interface RPCChannelCreateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCChannelCreateDispatchData;
	evt: RPCEvents.ChannelCreate;
}

export interface RPCCurrentUserUpdateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCCurrentUserUpdateDispatchData;
	evt: RPCEvents.CurrentUserUpdate;
}

export interface RPCEntitlementCreateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCEntitlementCreateDispatchData;
	evt: RPCEvents.EntitlementCreate;
}

export interface RPCEntitlementDeleteDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCEntitlementDeleteDispatchData;
	evt: RPCEvents.EntitlementDelete;
}

export interface RPCErrorDispatch<
	Cmd extends Exclude<RPCCommands, RPCCommands.Dispatch> = Exclude<RPCCommands, RPCCommands.Dispatch>,
> extends RPCCommandMessage<Cmd> {
	data: RPCErrorDispatchData;
	evt: RPCEvents.Error;
}

export interface RPCGameJoinDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCGameJoinDispatchData;
	evt: RPCEvents.GameJoin;
}

export interface RPCGameSpectateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCGameSpectateDispatchData;
	evt: RPCEvents.GameSpectate;
}

export interface RPCGuildCreateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCGuildCreateDispatchData;
	evt: RPCEvents.GuildCreate;
}

export interface RPCGuildStatusDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCGuildStatusDispatchData;
	evt: RPCEvents.GuildStatus;
}

export interface RPCMessageCreateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCMessageCreateDispatchData;
	evt: RPCEvents.MessageCreate;
}

export interface RPCMessageDeleteDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCMessageDeleteDispatchData;
	evt: RPCEvents.MessageDelete;
}

export interface RPCMessageUpdateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCMessageUpdateDispatchData;
	evt: RPCEvents.MessageUpdate;
}

export interface RPCNotificationCreateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCNotificationCreateDispatchData;
	evt: RPCEvents.NotificationCreate;
}

export interface RPCOverlayDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCOverlayDispatchData;
	evt: RPCEvents.Overlay;
}

export interface RPCOverlayUpdateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCOverlayUpdateDispatchData;
	evt: RPCEvents.OverlayUpdate;
}

export interface RPCReadyDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCReadyDispatchData;
	evt: RPCEvents.Ready;
}

export interface RPCRelationshipUpdateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCRelationshipUpdateDispatchData;
	evt: RPCEvents.RelationshipUpdate;
}

export interface RPCSpeakingStartDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCSpeakingStartDispatchData;
	evt: RPCEvents.SpeakingStart;
}

export interface RPCSpeakingStopDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCSpeakingStopDispatchData;
	evt: RPCEvents.SpeakingStop;
}

export interface RPCVoiceChannelSelectDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCVoiceChannelSelectDispatchData;
	evt: RPCEvents.VoiceChannelSelect;
}

export interface RPCVoiceConnectionStatusDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCVoiceConnectionStatusDispatchData;
	evt: RPCEvents.VoiceConnectionStatus;
}

export interface RPCVoiceSettingsUpdateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCVoiceSettingsUpdateDispatchData;
	evt: RPCEvents.VoiceSettingsUpdate;
}

export interface RPCVoiceSettingsUpdate2Dispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCVoiceSettingsUpdate2DispatchData;
	evt: RPCEvents.VoiceSettingsUpdate2;
}

export interface RPCVoiceStateCreateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCVoiceStateCreateDispatchData;
	evt: RPCEvents.VoiceStateCreate;
}

export interface RPCVoiceStateDeleteDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCVoiceStateDeleteDispatchData;
	evt: RPCEvents.VoiceStateDelete;
}

export interface RPCVoiceStateUpdateDispatch extends BaseRPCMessage<RPCCommands.Dispatch> {
	data: RPCVoiceStateUpdateDispatchData;
	evt: RPCEvents.VoiceStateUpdate;
}

export type RPCEventsDispatch =
	| RPCActivityInviteDispatch
	| RPCActivityJoinDispatch
	| RPCActivityJoinRequestDispatch
	| RPCActivitySpectateDispatch
	| RPCChannelCreateDispatch
	| RPCCurrentUserUpdateDispatch
	| RPCEntitlementCreateDispatch
	| RPCEntitlementDeleteDispatch
	| RPCErrorDispatch
	| RPCGameJoinDispatch
	| RPCGameSpectateDispatch
	| RPCGuildCreateDispatch
	| RPCGuildStatusDispatch
	| RPCMessageCreateDispatch
	| RPCMessageDeleteDispatch
	| RPCMessageUpdateDispatch
	| RPCNotificationCreateDispatch
	| RPCOverlayDispatch
	| RPCOverlayUpdateDispatch
	| RPCReadyDispatch
	| RPCRelationshipUpdateDispatch
	| RPCSpeakingStartDispatch
	| RPCSpeakingStopDispatch
	| RPCVoiceChannelSelectDispatch
	| RPCVoiceConnectionStatusDispatch
	| RPCVoiceSettingsUpdate2Dispatch
	| RPCVoiceSettingsUpdateDispatch
	| RPCVoiceStateCreateDispatch
	| RPCVoiceStateDeleteDispatch
	| RPCVoiceStateUpdateDispatch;

export type RPCMessage = RPCCommandsResult | RPCEventsDispatch;

export type RPCMessagePayload =
	| RPCCommandAcceptActivityInvitePayload
	| RPCCommandActivityInviteUserPayload
	| RPCCommandAuthenticatePayload
	| RPCCommandAuthorizePayload
	| RPCCommandBraintreePopupBridgeCallbackPayload
	| RPCCommandBrowserPayload
	| RPCCommandCloseActivityJoinRequestPayload
	| RPCCommandConnectionsCallbackPayload
	| RPCCommandCreateChannelInvitePayload
	| RPCCommandDeepLinkPayload
	| RPCCommandGetApplicationTicketPayload
	| RPCCommandGetChannelPayload
	| RPCCommandGetChannelsPayload
	| RPCCommandGetEntitlementsPayload
	| RPCCommandGetEntitlementTicketPayload
	| RPCCommandGetGuildPayload
	| RPCCommandGetGuildsPayload
	| RPCCommandGetImagePayload
	| RPCCommandGetNetworkingConfigPayload
	| RPCCommandGetRelationshipsPayload
	| RPCCommandGetSelectedVoiceChannelPayload
	| RPCCommandGetSkusPayload
	| RPCCommandGetUserPayload
	| RPCCommandGetVoiceSettingsPayload
	| RPCCommandGiftCodeBrowserPayload
	| RPCCommandGuildTemplateBrowserPayload
	| RPCCommandInviteBrowserPayload
	| RPCCommandNetworkingCreateTokenPayload
	| RPCCommandNetworkingPeerMetricsPayload
	| RPCCommandNetworkingSystemMetricsPayload
	| RPCCommandOpenOverlayActivityInvitePayload
	| RPCCommandOpenOverlayGuildInvitePayload
	| RPCCommandOpenOverlayVoiceSettingsPayload
	| RPCCommandOverlayPayload
	| RPCCommandSelectTextChannelPayload
	| RPCCommandSelectVoiceChannelPayload
	| RPCCommandSendActivityJoinInvitePayload
	| RPCCommandSetActivityPayload
	| RPCCommandSetCertifiedDevicesPayload
	| RPCCommandSetOverlayLockedPayload
	| RPCCommandSetUserVoiceSettings2Payload
	| RPCCommandSetUserVoiceSettingsPayload
	| RPCCommandSetVoiceSettings2Payload
	| RPCCommandSetVoiceSettingsPayload
	| RPCCommandStartPurchasePayload
	| RPCCommandSubscribePayload
	| RPCCommandUnsubscribePayload
	| RPCCommandValidateApplicationPayload;

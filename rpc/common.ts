import type { Snowflake } from '../globals';
import type { APIMessage, APIUser } from '../v10';

/**
 * @unstable
 */
export interface RPCAPIMessageParsedContentOriginalMatch {
	0: string;
	index: 0;
}

/**
 * @unstable
 */
export interface RPCAPIMessageParsedContentText {
	type: 'text';
	originalMatch: RPCAPIMessageParsedContentOriginalMatch;
	content: string;
}

/**
 * @unstable
 */
export interface RPCAPIMessageParsedContentMention {
	type: 'mention';
	userId: Snowflake;
	channelId: Snowflake;
	guildId: Snowflake;
	/**
	 * same as `userId`
	 */
	parsedUserId: Snowflake;
	content: Omit<RPCAPIMessageParsedContentText, 'originalMatch'>;
}

/**
 * @unstable
 */
export interface RPCAPIMessage extends Omit<APIMessage, 'channel_id'> {
	/**
	 * the nickname of the user who sent the message
	 */
	nick?: string;
	/**
	 * the color of the author's name
	 */
	author_color?: number;
	/**
	 * the content of the message parsed into an array
	 */
	content_parsed: (RPCAPIMessageParsedContentMention | RPCAPIMessageParsedContentText)[];
}

/**
 * @unstable
 */
export enum RPCCaptureShortcutAction {
	Start = 'START',
	Stop = 'STOP',
}

/**
 * https://discord.com/developers/docs/topics/rpc#authenticate-oauth2-application-structure
 */
export interface RPCOAuth2Application {
	/**
	 * Application description
	 */
	description: string;
	/**
	 * Hash of the icon
	 */
	icon: string;
	/**
	 * Application client id
	 */
	id: Snowflake;
	/**
	 * Array of rpc origin urls
	 */
	rpc_origins: string[];
	/**
	 * Application name
	 */
	name: string;
}

export interface RPCDeviceVendor {
	/**
	 * name of the vendor
	 */
	name: string;
	/**
	 * url for the vendor
	 */
	url: string;
}

export interface RPCDeviceModel {
	/**
	 * name of the model
	 */
	name: string;
	/**
	 * url for the model
	 */
	url: string;
}

export enum RPCDeviceType {
	AudioInput = 'audioinput',
	AudioOutput = 'audiooutput',
	VideoInput = 'videoinput',
}

export interface BaseRPCCertifiedDevice<Type extends RPCDeviceType> {
	/**
	 * the type of device
	 */
	type: Type;
	/**
	 * the device's Windows UUID
	 */
	id: string;
	/**
	 * the hardware vendor
	 */
	vendor: RPCDeviceVendor;
	/**
	 * the model of the product
	 */
	model: RPCDeviceModel;
	/**
	 * UUIDs of related devices
	 */
	related: string[];
}

/**
 * https://discord.com/developers/docs/topics/rpc#setcertifieddevices-device-object
 */
export type RPCCertifiedDevice<Type extends RPCDeviceType = RPCDeviceType> =
	Type extends RPCDeviceType.AudioInput ?
		BaseRPCCertifiedDevice<Type> & {
			/**
			 * if the device's native echo cancellation is enabled
			 */
			echo_cancellation: boolean;
			/**
			 * if the device's native noise suppression is enabled
			 */
			noise_suppression: boolean;
			/**
			 * if the device's native automatic gain control is enabled
			 */
			automatic_gain_control: boolean;
			/**
			 * if the device is hardware muted
			 */
			hardware_mute: boolean;
		}
	:	BaseRPCCertifiedDevice<Type>;

export interface RPCVoiceAvailableDevice {
	/**
	 * device id
	 */
	id: string;
	/**
	 * device name
	 */
	name: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#getvoicesettings-voice-settings-input-object
 */
export interface RPCVoiceSettingsInput {
	/**
	 * device id
	 */
	device_id: string;
	/**
	 * input voice level (min: 0.0, max: 100.0)
	 */
	volume: number;
	/**
	 * array of read-only device objects containing `id` and `name` string keys
	 */
	available_devices: RPCVoiceAvailableDevice[];
}

/**
 * https://discord.com/developers/docs/topics/rpc#getvoicesettings-voice-settings-output-object
 */
export interface RPCVoiceSettingsOutput {
	/**
	 * device id
	 */
	device_id: string;
	/**
	 * input voice level (min: 0.0, max: 200.0)
	 */
	volume: number;
	/**
	 * array of read-only device objects containing `id` and `name` string keys
	 */
	available_devices: RPCVoiceAvailableDevice[];
}

export enum RPCVoiceSettingsModeType {
	PushToTalk = 'PUSH_TO_TALK',
	VoiceActivity = 'VOICE_ACTIVITY',
}

/**
 * https://discord.com/developers/docs/topics/rpc#getvoicesettings-key-types
 */
export enum RPCVoiceShortcutKeyComboKeyType {
	KeyboardKey,
	MouseButton,
	KeyboardModifierKey,
	GamepadButton,
}

/**
 * https://discord.com/developers/docs/topics/rpc#getvoicesettings-shortcut-key-combo-object
 */
export interface RPCVoiceShortcutKeyCombo {
	/**
	 * type of key
	 */
	type: RPCVoiceShortcutKeyComboKeyType;
	/**
	 * key code
	 */
	code: number;
	/**
	 * key name
	 */
	name: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#getvoicesettings-voice-settings-mode-object
 */
export interface RPCVoiceSettingsMode {
	/**
	 * voice setting mode type (can be `PUSH_TO_TALK` or `VOICE_ACTIVITY`)
	 */
	type: RPCVoiceSettingsModeType;
	/**
	 * voice activity threshold automatically sets its threshold
	 */
	auto_threshold: boolean;
	/**
	 * threshold for voice activity (in dB) (min: -100.0, max: 0.0)
	 */
	threshold: number;
}

export enum VoiceConnectionStates {
	/**
	 * TCP disconnected
	 */
	Disconnected = 'DISCONNECTED',
	/**
	 * Waiting for voice endpoint
	 */
	AwaitingEndpoint = 'AWAITING_ENDPOINT',
	/**
	 * TCP authenticating
	 */
	Authenticating = 'AUTHENTICATING',
	/**
	 * TCP connecting
	 */
	Connecting = 'CONNECTING',
	/**
	 * TCP connected
	 */
	Connected = 'CONNECTED',
	/**
	 * TCP connected, Voice disconnected
	 */
	VoiceDisconnected = 'VOICE_DISCONNECTED',
	/**
	 * TCP connected, Voice connecting
	 */
	VoiceConnecting = 'VOICE_CONNECTING',
	/**
	 * TCP connected, Voice connected
	 */
	VoiceConnected = 'VOICE_CONNECTED',
	/**
	 * No route to host
	 */
	NoRoute = 'NO_ROUTE',
	/**
	 * WebRTC ice checking
	 */
	IceChecking = 'ICE_CHECKING',
}

/**
 * @unstable
 */
export enum LobbyType {
	Private = 1,
	Public,
}

/**
 * @unstable
 */
export type RPCLobbyMetadata = unknown;

/**
 * @unstable
 */
export enum RelationshipType {
	None,
	Friend,
	Blocked,
	PendingIncoming,
	PendingOutgoing,
	Implicit,
}

/**
 * @unstable
 */
export interface Relationship {
	/**
	 * the id of the user
	 */
	id: Snowflake;
	/**
	 * relationship type
	 */
	type: RelationshipType;
	/**
	 * user
	 */
	user: APIUser;
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes
 */
export enum RPCErrorCodes {
	/**
	 * An unknown error occurred.
	 */
	UnknownError = 1_000,
	/**
	 * @unstable
	 */
	ServiceUnavailable,
	/**
	 * @unstable
	 */
	TransactionAborted,
	/**
	 * You sent an invalid payload.
	 */
	InvalidPayload = 4_000,
	/**
	 * Invalid command name specified.
	 */
	InvalidCommand = 4_002,
	/**
	 * Invalid guild ID specified.
	 */
	InvalidGuild,
	/**
	 * Invalid event name specified.
	 */
	InvalidEvent,
	/**
	 * Invalid channel ID specified.
	 */
	InvalidChannel,
	/**
	 * You lack permissions to access the given resource.
	 */
	InvalidPermissions,
	/**
	 * An invalid OAuth2 application ID was used to authorize or authenticate with.
	 */
	InvalidClientId,
	/**
	 * An invalid OAuth2 application origin was used to authorize or authenticate with.
	 */
	InvalidOrigin,
	/**
	 * An invalid OAuth2 token was used to authorize or authenticate with.
	 */
	InvalidToken,
	/**
	 * The specified user ID was invalid.
	 */
	InvalidUser,
	/**
	 * @unstable
	 */
	InvalidInvite,
	/**
	 * @unstable
	 */
	InvalidActivityJoinRequest,
	/**
	 * @unstable
	 */
	InvalidLobby,
	/**
	 * @unstable
	 */
	InvalidLobbySecret,
	/**
	 * @unstable
	 */
	InvalidEntitlement,
	/**
	 * @unstable
	 */
	InvalidGiftCode,
	/**
	 * A standard OAuth2 error occurred; check the data object for the OAuth2 error details.
	 */
	OAuth2Error = 5_000,
	/**
	 * An asynchronous `SELECT_TEXT_CHANNEL`/`SELECT_VOICE_CHANNEL` command timed out.
	 */
	SelectChannelTimedOut,
	/**
	 * An asynchronous `GET_GUILD` command timed out.
	 */
	GetGuildTimedOut,
	/**
	 * You tried to join a user to a voice channel but the user was already in one.
	 */
	SelectVoiceForceRequired,
	/**
	 * You tried to capture more than one shortcut key at once.
	 */
	CaptureShortcutAlreadyListening,
	/**
	 * @unstable
	 */
	InvalidActivitySecret,
	/**
	 * @unstable
	 */
	NoEligibleActivity,
	/**
	 * @unstable
	 */
	LobbyFull,
	/**
	 * @unstable
	 */
	PurchaseCanceled,
	/**
	 * @unstable
	 */
	PurchaseError,
	/**
	 * @unstable
	 */
	UnauthorizedForAchievement,
	/**
	 * @unstable
	 */
	RateLimited,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes
 */
export enum RPCCloseEventCodes {
	/**
	 * @unstable
	 */
	CloseNormal = 1_000,
	/**
	 * @unstable
	 */
	CloseUnsupported = 1_003,
	/**
	 * @unstable
	 */
	CloseAbnormal = 1_006,
	/**
	 * You connected to the RPC server with an invalid client ID.
	 */
	InvalidClientId = 4_000,
	/**
	 * You connected to the RPC server with an invalid origin.
	 */
	InvalidOrigin,
	/**
	 * You are being rate limited.
	 */
	RateLimited,
	/**
	 * The OAuth2 token associated with a connection was revoked, get a new one!
	 */
	TokenRevoked,
	/**
	 * The RPC Server version specified in the connection string was not valid.
	 */
	InvalidVersion,
	/**
	 * The encoding specified in the connection string was not valid.
	 */
	InvalidEncoding,
}

import type { Snowflake } from '../globals.ts';
import type { APIMessage, APIUser, RPCVoiceConnectionStatusDispatchData } from '../v10.ts';

/**
 * @unstable The ping object for the `VOICE_CONNECTION_STATUS` dispatched {@link RPCVoiceConnectionStatusDispatchData.pings} field,
 * but discord's documentation incorrectly documents it as an 'array of integers'.
 */
export interface RPCVoiceConnectionStatusPing {
	/**
	 * The time the ping was sent
	 */
	time: number;
	/**
	 * The latency of the ping in milliseconds
	 */
	value: number;
}

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
	 * Same as {@link RPCAPIMessageParsedContentMention.userId}
	 */
	parsedUserId: RPCAPIMessageParsedContentMention['userId'];
	content: Omit<RPCAPIMessageParsedContentText, 'originalMatch'>;
}

/**
 * @unstable
 */
export interface RPCAPIMessage extends Omit<APIMessage, 'channel_id'> {
	/**
	 * The nickname of the user who sent the message
	 */
	nick?: string;
	/**
	 * The color of the author's name
	 */
	author_color?: number;
	/**
	 * The content of the message parsed into an array
	 */
	content_parsed: (RPCAPIMessageParsedContentMention | RPCAPIMessageParsedContentText)[];
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
	 * Array of RPC origin urls
	 */
	rpc_origins: string[];
	/**
	 * Application name
	 */
	name: string;
}

export interface RPCDeviceVendor {
	/**
	 * Name of the vendor
	 */
	name: string;
	/**
	 * Url for the vendor
	 */
	url: string;
}

export interface RPCDeviceModel {
	/**
	 * Name of the model
	 */
	name: string;
	/**
	 * Url for the model
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
	 * The type of device
	 */
	type: Type;
	/**
	 * The device's Windows UUID
	 */
	id: string;
	/**
	 * The hardware vendor
	 */
	vendor: RPCDeviceVendor;
	/**
	 * The model of the product
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
			 * If the device's native echo cancellation is enabled
			 */
			echo_cancellation: boolean;
			/**
			 * If the device's native noise suppression is enabled
			 */
			noise_suppression: boolean;
			/**
			 * If the device's native automatic gain control is enabled
			 */
			automatic_gain_control: boolean;
			/**
			 * If the device is hardware muted
			 */
			hardware_mute: boolean;
		}
	:	BaseRPCCertifiedDevice<Type>;

export interface RPCVoiceAvailableDevice {
	/**
	 * Device id
	 */
	id: string;
	/**
	 * Device name
	 */
	name: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#getvoicesettings-voice-settings-input-object
 */
export interface RPCVoiceSettingsInput {
	/**
	 * Device id
	 */
	device_id: string;
	/**
	 * Input voice level (min: 0.0, max: 100.0)
	 */
	volume: number;
	/**
	 * Array of read-only device objects containing `id` and `name` string keys
	 */
	available_devices: RPCVoiceAvailableDevice[];
}

/**
 * https://discord.com/developers/docs/topics/rpc#getvoicesettings-voice-settings-output-object
 */
export interface RPCVoiceSettingsOutput {
	/**
	 * Device id
	 */
	device_id: string;
	/**
	 * Input voice level (min: 0.0, max: 200.0)
	 */
	volume: number;
	/**
	 * Array of read-only device objects containing `id` and `name` string keys
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
	 * Type of key
	 */
	type: RPCVoiceShortcutKeyComboKeyType;
	/**
	 * Key code
	 */
	code: number;
	/**
	 * Key name
	 */
	name: string;
}

/**
 * https://discord.com/developers/docs/topics/rpc#getvoicesettings-voice-settings-mode-object
 */
export interface RPCVoiceSettingsMode {
	/**
	 * Voice setting mode type (can be `PUSH_TO_TALK` or `VOICE_ACTIVITY`)
	 */
	type: RPCVoiceSettingsModeType;
	/**
	 * Voice activity threshold automatically sets its threshold
	 */
	auto_threshold: boolean;
	/**
	 * Threshold for voice activity (in dB) (min: -100.0, max: 0.0)
	 */
	threshold: number;
	/**
	 * Shortcut key combos for PTT
	 */
	shortcut: RPCVoiceShortcutKeyCombo;
	/**
	 * The PTT release delay (in ms) (min: 0, max: 2000)
	 */
	delay: number;
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
	 * The id of the user
	 */
	id: Snowflake;
	/**
	 * Relationship type
	 */
	type: RelationshipType;
	/**
	 * User
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

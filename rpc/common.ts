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

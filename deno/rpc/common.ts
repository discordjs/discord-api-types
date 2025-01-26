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
export enum RelationshipType {
	None,
	Friend,
	Blocked,
	PendingIncoming,
	PendingOutgoing,
	Implicit,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes
 */
export enum RPCErrorCodes {
	UnknownError = 1_000,
	/**
	 * @unstable
	 */
	ServiceUnavailable,
	/**
	 * @unstable
	 */
	TransactionAborted,
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
	OAuth2Error = 5_000,
	SelectChannelTimedOut,
	GetGuildTimedOut,
	SelectVoiceForceRequired,
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
	InvalidClientId = 4_000,
	InvalidOrigin,
	RateLimited,
	TokenRevoked,
	InvalidVersion,
	InvalidEncoding,
}
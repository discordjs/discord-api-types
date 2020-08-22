/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes
 */
export enum RESTJSONErrorCodes {
	GeneralError,

	UnknownAccount = 10001,
	UnknownApplication,
	UnknownChannel,
	UnknownGuild,
	UnknownIntegration,
	UnknownInvite,
	UnknownMember,
	UnknownMessage,
	UnknownPermissionOverwrite,
	UnknownProvider,
	UnknownRole,
	UnknownToken,
	UnknownUser,
	UnknownEmoji,
	UnknownWebook,

	UnknownBan = 10026,
	UnknownSKU,
	UnknownStoreListing,
	UnknownEntitlement,
	UnknownBuild,
	UnknownLobby,
	UnknownBranch,

	UnknownRedistributable = 10036,

	BotsCannotUseThisEndpoint = 20001,
	OnlyBotsCanUseThisEndpoint,

	MaximumNumberOfGuildsReached = 30001,
	MaximumNumberOfFriendsReached,
	MaximumNumberOfPinsReachedForTheChannel,

	MaximumNumberOfGuildRolesReached = 30005,

	MaximumNumberOfWebhooksReached = 30007,

	MaximumNumberOfReactionsReached = 30010,

	MaximumNumberOfGuildChannelsReached = 30013,

	MaximumNumberOfAttachmentsInAMessageReached = 30015,
	MaximumNumberOfInvitesReached,

	Unauthorized = 40001,
	VerifyYourAccount,

	RequestEntityTooLarge = 40005,
	FeatureTemporarilyDisabledServerSide,
	UserBannedFromThisGuild,

	MissingAccess = 50001,
	InvalidAccountType,
	CannotExecuteActionOnDMChannel,
	GuildWidgetDisabled,
	CannotEditMessageAuthoredByAnotherUser,
	CannotSendAnEmptyMessage,
	CannotSendMessagesToThisUser,
	CannotSendMessagesInVoiceChannel,
	ChannelVerificationLevelTooHighForYouToGainAccess,
	Oauth2ApplicationDoesNotHaveBot,
	Oauth2ApplicationLimitReached,
	InvalidOauth2State,
	MissingPermissions,
	InvalidToken,
	NoteWasTooLong,
	ProvidedTooFewOrTooManyMessagesToDelete,

	MessageCanOnlyBePinnedInTheChannelItWasSentIn = 50019,
	InviteCodeInvalidOrTaken,
	CannotExecuteActionOnSystemMessage,

	CannotExecuteActionOnThisChannelType = 50024,
	InvalidOauth2AccessToken,

	InvalidRecipients = 50033,
	OneOfTheMessagesProvidedWasTooOldForBulkDelete,
	InvalidFormBodyOrContentType,
	InviteAcceptedToGuildWithoutTheBotBeingIn,

	InvalidAPIVersion = 50041,

	CannotDeleteChannelRequiredForCommunityGuilds = 50074,

	TwoFactorAuthenticationIsRequired = 60003,

	ReactionWasBlocked = 90001,

	APIResourceOverloaded = 130000,
}

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
	InvalidClientID,
	InvalidOrigin,
	InvalidToken,
	InvalidUser,

	Oauth2Error = 5000,
	SelectChannelTimedOut,
	GetGuildTimedOut,
	SelectVoiceForceRequired,
	CaptureShortcutAlreadyListening,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes
 */
export enum RPCCloseEventCodes {
	InvalidClientID = 4000,
	InvalidOrigin,
	RateLimited,
	TokenRevoked,
	InvalidVersion,
	InvalidEncoding,
}

/**
 * https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-params
 */
export interface GatewayConnectQuery {
	v: string;
	encoding: 'json' | 'etf';
	compress?: 'zlib-stream';
}

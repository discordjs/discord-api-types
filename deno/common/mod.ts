/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes
 */
export const enum RESTJSONErrorCodes {
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
	UnknownWebhook,

	UnknownBan = 10026,
	UnknownSKU,
	UnknownStoreListing,
	UnknownEntitlement,
	UnknownBuild,
	UnknownLobby,
	UnknownBranch,

	UnknownRedistributable = 10036,

	UnknownGuildTemplate = 10057,

	UnknownApplicationCommand = 10063,

	BotsCannotUseThisEndpoint = 20001,
	OnlyBotsCanUseThisEndpoint,

	AnnouncementEditLimitExceeded = 20022,

	ChannelSendRateLimit = 20028,

	MaximumNumberOfGuildsReached = 30001,
	MaximumNumberOfFriendsReached,
	MaximumNumberOfPinsReachedForTheChannel,

	MaximumNumberOfGuildRolesReached = 30005,

	MaximumNumberOfWebhooksReached = 30007,

	MaximumNumberOfReactionsReached = 30010,

	MaximumNumberOfGuildChannelsReached = 30013,

	MaximumNumberOfAttachmentsInAMessageReached = 30015,
	MaximumNumberOfInvitesReached,

	GuildAlreadyHasTemplate = 30031,

	Unauthorized = 40001,
	VerifyYourAccount,

	RequestEntityTooLarge = 40005,
	FeatureTemporarilyDisabledServerSide,
	UserBannedFromThisGuild,

	ThisMessageWasAlreadyCrossposted = 40033,

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

	InvalidWebhookToken = 50027,

	InvalidRecipients = 50033,
	OneOfTheMessagesProvidedWasTooOldForBulkDelete,
	InvalidFormBodyOrContentType,
	InviteAcceptedToGuildWithoutTheBotBeingIn,

	InvalidAPIVersion = 50041,

	CannotDeleteChannelRequiredForCommunityGuilds = 50074,

	InvalidStickerSent = 50081,

	TwoFactorAuthenticationIsRequired = 60003,

	ReactionWasBlocked = 90001,

	APIResourceOverloaded = 130000,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes
 */
export const enum RPCErrorCodes {
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
	OAuth2Error = 5000,
	SelectChannelTimedOut,
	GetGuildTimedOut,
	SelectVoiceForceRequired,
	CaptureShortcutAlreadyListening,
}

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes
 */
export const enum RPCCloseEventCodes {
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

/**
 * https://discord.com/developers/docs/reference#snowflakes
 */
export type Snowflake = `${bigint}`;

/**
 * https://discord.com/developers/docs/topics/permissions
 * @internal
 */
export type Permissions = `${bigint}`;

/**
 * https://discord.com/developers/docs/reference#message-formatting-formats
 */
export const FormattingPatterns = {
	/**
	 * Regular expression for matching a user mention, strictly without a nickname
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	User: /<@(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a user mention, strictly with a nickname
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	UserWithNickname: /<@!(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a user mention, with or without a nickname
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	UserWithOptionalNickname: /<@!?(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a channel mention
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	Channel: /<#(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a role mention
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	Role: /<@&(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a custom emoji, either static or animated
	 *
	 * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
	 */
	Emoji: /<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching strictly an animated custom emoji
	 *
	 * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
	 */
	AnimatedEmoji: /<(?<animated>a):(?<name>\w{2,32}):(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching strictly a static custom emoji
	 *
	 * The `name` and `id` group properties are present on the `exec` result of this expression
	 */
	StaticEmoji: /<:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
} as const;

/**
 * Freezes the formatting patterns
 * @internal
 */
Object.freeze(FormattingPatterns);

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

	UnknownInteraction = 10062,
	UnknownApplicationCommand,

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

	MaximumThreadParticipants = 30033,

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
	OAuth2ApplicationDoesNotHaveBot,
	OAuth2ApplicationLimitReached,
	InvalidOAuth2State,
	MissingPermissions,
	InvalidToken,
	NoteWasTooLong,
	ProvidedTooFewOrTooManyMessagesToDelete,

	MessageCanOnlyBePinnedInTheChannelItWasSentIn = 50019,
	InviteCodeInvalidOrTaken,
	CannotExecuteActionOnSystemMessage,

	CannotExecuteActionOnThisChannelType = 50024,
	InvalidOAuth2AccessToken,

	InvalidWebhookToken = 50027,

	InvalidRecipients = 50033,
	OneOfTheMessagesProvidedWasTooOldForBulkDelete,
	InvalidFormBodyOrContentType,
	InviteAcceptedToGuildWithoutTheBotBeingIn,

	InvalidAPIVersion = 50041,

	CannotDeleteChannelRequiredForCommunityGuilds = 50074,

	InvalidStickerSent = 50081,

	InvalidActionOnArchivedThread = 50083,
	InvalidThreadNotificationSettings,
	ParameterEarlierThanCreation,

	TwoFactorAuthenticationIsRequired = 60003,

	ReactionWasBlocked = 90001,

	APIResourceOverloaded = 130000,

	ThreadAlreadyCreatedForMessage = 160004,
	ThreadLocked,
	MaximumActiveThreads,
	MaximumActiveAnnoucementThreads,
}

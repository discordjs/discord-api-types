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
	UnknownWebhookService,

	UnknownSession = 10020,

	UnknownBan = 10026,
	UnknownSKU,
	UnknownStoreListing,
	UnknownEntitlement,
	UnknownBuild,
	UnknownLobby,
	UnknownBranch,
	UnknownStoreDirectoryLayout,

	UnknownRedistributable = 10036,

	UnknownGiftCode = 10038,

	UnknownStream = 10049,
	UnknownPremiumServerSubscribeCooldown,

	UnknownGuildTemplate = 10057,

	UnknownDiscoverableServerCategory = 10059,
	UnknownSticker,

	UnknownInteraction = 10062,
	UnknownApplicationCommand,

	UnknownApplicationCommandPermissions = 10066,
	UnknownStageInstance,
	UnknownGuildMemberVerificationForm,
	UnknownGuildWelcomeScreen,
	UnknownGuildScheduledEvent,
	UnknownGuildScheduledEventUser,

	BotsCannotUseThisEndpoint = 20001,
	OnlyBotsCanUseThisEndpoint,

	ExplicitContentCannotBeSentToTheDesiredRecipient = 20009,

	NotAuthorizedToPerformThisActionOnThisApplication = 20012,

	ActionCannotBePerformedDueToSlowmodeRateLimit = 20016,

	OnlyTheOwnerOfThisAccountCanPerformThisAction = 20018,

	AnnouncementEditLimitExceeded = 20022,

	ChannelSendRateLimit = 20028,

	StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords = 20031,

	GuildPremiumSubscriptionLevelTooLow = 20035,

	MaximumNumberOfGuildsReached = 30001,
	MaximumNumberOfFriendsReached,
	MaximumNumberOfPinsReachedForTheChannel,
	MaximumNumberOfRecipientsReached,
	MaximumNumberOfGuildRolesReached,

	MaximumNumberOfWebhooksReached = 30007,
	MaximumNumberOfEmojisReached,

	MaximumNumberOfReactionsReached = 30010,

	MaximumNumberOfGuildChannelsReached = 30013,

	MaximumNumberOfAttachmentsInAMessageReached = 30015,
	MaximumNumberOfInvitesReached,

	MaximumNumberOfAnimatedEmojisReached = 30018,
	MaximumNumberOfServerMembersReached,

	MaximumNumberOfServerCategoriesReached = 30030,

	GuildAlreadyHasTemplate = 30031,

	MaximumThreadParticipants = 30033,

	MaximumNumberOfNonGuildMemberBansHasBeenExceeded = 30035,

	MaximumNumberOfBanFetchesHasBeenReached = 30037,

	MaximumNumberOfStickersReached = 30039,
	MaximumNumberOfPruneRequestsHasBeenReached,

	Unauthorized = 40001,
	VerifyYourAccount,
	OpeningDirectMessagesTooFast,

	RequestEntityTooLarge = 40005,
	FeatureTemporarilyDisabledServerSide,
	UserBannedFromThisGuild,

	TargetUserIsNotConnectedToVoice = 40032,
	ThisMessageWasAlreadyCrossposted,

	ApplicationCommandWithThatNameAlreadyExists = 40041,

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
	MissingRequiredOAuth2Scope,

	InvalidWebhookToken = 50027,
	InvalidRole,

	InvalidRecipients = 50033,
	OneOfTheMessagesProvidedWasTooOldForBulkDelete,
	InvalidFormBodyOrContentType,
	InviteAcceptedToGuildWithoutTheBotBeingIn,

	InvalidAPIVersion = 50041,

	FileUploadedExceedsMaximumSize = 50045,
	InvalidFileUploaded,

	CannotSelfRedeemThisGift = 50054,

	PaymentSourceRequiredToRedeemGift = 50070,

	CannotDeleteChannelRequiredForCommunityGuilds = 50074,

	InvalidStickerSent = 50081,

	InvalidActionOnArchivedThread = 50083,
	InvalidThreadNotificationSettings,
	ParameterEarlierThanCreation,

	ServerNotAvailableInYourLocation = 50095,

	ServerNeedsMonetizationEnabledToPerformThisAction = 50097,

	ServerNeedsMoreBoostsToPerformThisAction = 50101,

	TwoFactorAuthenticationIsRequired = 60003,

	NoUsersWithDiscordTagExist = 80004,

	ReactionWasBlocked = 90001,

	APIResourceOverloaded = 130000,

	TheStageIsAlreadyOpen = 150006,

	CannotReplyWithoutPermissionToReadMessageHistory = 160002,

	ThreadAlreadyCreatedForMessage = 160004,
	ThreadLocked,
	MaximumActiveThreads,
	MaximumActiveAnnouncementThreads,

	InvalidJSONForUploadedLottieFile = 170001,
	UploadedLottiesCannotContainRasterizedImages,
	StickerMaximumFramerateExceeded,
	StickerFrameCountExceedsMaximumOf1000Frames,
	LottieAnimationMaximumDimensionsExceeded,
	StickerFramerateIsTooSmallOrTooLarge,
	StickerAnimationDurationExceedsMaximumOf5Seconds,
}

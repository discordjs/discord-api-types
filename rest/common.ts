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

	UnknownVoiceState = 10065,
	UnknownApplicationCommandPermissions,
	UnknownStageInstance,
	UnknownGuildMemberVerificationForm,
	UnknownGuildWelcomeScreen,
	UnknownGuildScheduledEvent,
	UnknownGuildScheduledEventUser,

	UnknownTag = 10087,

	BotsCannotUseThisEndpoint = 20001,
	OnlyBotsCanUseThisEndpoint,

	ExplicitContentCannotBeSentToTheDesiredRecipient = 20009,

	NotAuthorizedToPerformThisActionOnThisApplication = 20012,

	ActionCannotBePerformedDueToSlowmodeRateLimit = 20016,
	TheMazeIsntMeantForYou,
	OnlyTheOwnerOfThisAccountCanPerformThisAction,

	AnnouncementEditLimitExceeded = 20022,

	UnderMinimumAge = 20024,

	ChannelSendRateLimit = 20028,
	ServerSendRateLimit,

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
	MaximumNumberOfGroupDMsReached,

	MaximumNumberOfGuildChannelsReached = 30013,

	MaximumNumberOfAttachmentsInAMessageReached = 30015,
	MaximumNumberOfInvitesReached,

	MaximumNumberOfAnimatedEmojisReached = 30018,
	MaximumNumberOfServerMembersReached,

	MaximumNumberOfServerCategoriesReached = 30030,

	GuildAlreadyHasTemplate = 30031,
	MaximumNumberOfApplicationCommandsReached,
	MaximumThreadParticipantsReached,
	MaximumDailyApplicationCommandCreatesReached,
	MaximumNumberOfNonGuildMemberBansHasBeenExceeded,

	MaximumNumberOfBanFetchesHasBeenReached = 30037,
	MaximumNumberOfUncompletedGuildScheduledEventsReached,

	MaximumNumberOfStickersReached = 30039,
	MaximumNumberOfPruneRequestsHasBeenReached,

	MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached = 30042,

	MaximumNumberOfEditsToMessagesOlderThanOneHourReached = 30046,
	MaximumNumberOfPinnedThreadsInForumHasBeenReached,
	MaximumNumberOfTagsInForumHasBeenReached,

	BitrateIsTooHighForChannelOfThisType = 30052,

	MaximumNumberOfPremiumEmojisReached = 30056,

	MaximumNumberOfWebhooksPerGuildReached = 30058,

	MaximumNumberOfChannelPermissionOverwritesReached = 30060,
	TheChannelsForThisGuildAreTooLarge,

	Unauthorized = 40001,
	VerifyYourAccount,
	OpeningDirectMessagesTooFast,
	SendMessagesHasBeenTemporarilyDisabled,
	RequestEntityTooLarge,
	FeatureTemporarilyDisabledServerSide,
	UserBannedFromThisGuild,

	ConnectionHasBeenRevoked = 40012,

	TargetUserIsNotConnectedToVoice = 40032,
	ThisMessageWasAlreadyCrossposted,

	ApplicationCommandWithThatNameAlreadyExists = 40041,

	ApplicationInteractionFailedToSend = 40043,

	CannotSendAMessageInAForumChannel = 40058,

	InteractionHasAlreadyBeenAcknowledged = 40060,
	TagNamesMustBeUnique,
	ServiceResourceIsBeingRateLimited,

	ThereAreNoTagsAvailableThatCanBeSetByNonModerators = 40066,
	TagRequiredToCreateAForumPostInThisChannel,

	MissingAccess = 50001,
	InvalidAccountType,
	CannotExecuteActionOnDMChannel,
	GuildWidgetDisabled,
	CannotEditMessageAuthoredByAnotherUser,
	CannotSendAnEmptyMessage,
	CannotSendMessagesToThisUser,
	CannotSendMessagesInNonTextChannel,
	ChannelVerificationLevelTooHighForYouToGainAccess,
	OAuth2ApplicationDoesNotHaveBot,
	OAuth2ApplicationLimitReached,
	InvalidOAuth2State,
	MissingPermissions,
	InvalidToken,
	NoteWasTooLong,
	ProvidedTooFewOrTooManyMessagesToDelete,
	InvalidMFALevel,

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

	InvalidActivityAction = 50039,

	InvalidAPIVersion = 50041,

	FileUploadedExceedsMaximumSize = 50045,
	InvalidFileUploaded,

	CannotSelfRedeemThisGift = 50054,
	InvalidGuild,

	InvalidRequestOrigin = 50067,
	InvalidMessageType,

	PaymentSourceRequiredToRedeemGift = 50070,

	CannotModifyASystemWebhook = 50073,
	CannotDeleteChannelRequiredForCommunityGuilds,

	CannotEditStickersWithinMessage = 50080,
	InvalidStickerSent,

	InvalidActionOnArchivedThread = 50083,
	InvalidThreadNotificationSettings,
	ParameterEarlierThanCreation,
	CommunityServerChannelsMustBeTextChannels,

	TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor = 50091,

	ServerNotAvailableInYourLocation = 50095,

	ServerNeedsMonetizationEnabledToPerformThisAction = 50097,

	ServerNeedsMoreBoostsToPerformThisAction = 50101,

	RequestBodyContainsInvalidJSON = 50109,

	OwnershipCannotBeMovedToABotUser = 50132,

	FailedToResizeAssetBelowTheMinimumSize = 50138,

	CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji = 50144,
	CannotConvertBetweenPremiumEmojiAndNormalEmoji,
	UploadedFileNotFound,

	CannotDeleteGuildSubscriptionIntegration = 50163,

	YouDoNotHavePermissionToSendThisSticker = 50600,

	TwoFactorAuthenticationIsRequired = 60003,

	NoUsersWithDiscordTagExist = 80004,

	ReactionWasBlocked = 90001,

	ApplicationNotYetAvailable = 110001,

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

	CannotUpdateAFinishedEvent = 180000,

	FailedToCreateStageNeededForStageEvent = 180002,

	MessageWasBlockedByAutomaticModeration = 200000,
	TitleWasBlockedByAutomaticModeration,

	WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId = 220001,
	WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId,
	WebhooksCanOnlyCreateThreadsInForumChannels,
	WebhookServicesCannotBeUsedInForumChannels,

	MessageBlockedByHarmfulLinksFilter = 240000,
}

/**
 * https://discord.com/developers/docs/reference#locales
 */
export enum Locale {
	Indonesian = 'id',
	EnglishUS = 'en-US',
	EnglishGB = 'en-GB',
	Bulgarian = 'bg',
	ChineseCN = 'zh-CN',
	ChineseTW = 'zh-TW',
	Croatian = 'hr',
	Czech = 'cs',
	Danish = 'da',
	Dutch = 'nl',
	Finnish = 'fi',
	French = 'fr',
	German = 'de',
	Greek = 'el',
	Hindi = 'hi',
	Hungarian = 'hu',
	Italian = 'it',
	Japanese = 'ja',
	Korean = 'ko',
	Lithuanian = 'lt',
	Norwegian = 'no',
	Polish = 'pl',
	PortugueseBR = 'pt-BR',
	Romanian = 'ro',
	Russian = 'ru',
	SpanishES = 'es-ES',
	Swedish = 'sv-SE',
	Thai = 'th',
	Turkish = 'tr',
	Ukrainian = 'uk',
	Vietnamese = 'vi',
}

export type LocaleString = `${Locale}`;

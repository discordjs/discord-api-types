/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes
 */
export enum RESTJSONErrorCodes {
	GeneralError,

	UnknownAccount = 10_001,
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

	UnknownSession = 10_020,

	UnknownBan = 10_026,
	UnknownSKU,
	UnknownStoreListing,
	UnknownEntitlement,
	UnknownBuild,
	UnknownLobby,
	UnknownBranch,
	UnknownStoreDirectoryLayout,

	UnknownRedistributable = 10_036,

	UnknownGiftCode = 10_038,

	UnknownStream = 10_049,
	UnknownPremiumServerSubscribeCooldown,

	UnknownGuildTemplate = 10_057,

	UnknownDiscoverableServerCategory = 10_059,
	UnknownSticker,

	UnknownInteraction = 10_062,
	UnknownApplicationCommand,

	UnknownVoiceState = 10_065,
	UnknownApplicationCommandPermissions,
	UnknownStageInstance,
	UnknownGuildMemberVerificationForm,
	UnknownGuildWelcomeScreen,
	UnknownGuildScheduledEvent,
	UnknownGuildScheduledEventUser,

	UnknownTag = 10_087,

	BotsCannotUseThisEndpoint = 20_001,
	OnlyBotsCanUseThisEndpoint,

	ExplicitContentCannotBeSentToTheDesiredRecipient = 20_009,

	NotAuthorizedToPerformThisActionOnThisApplication = 20_012,

	ActionCannotBePerformedDueToSlowmodeRateLimit = 20_016,
	TheMazeIsntMeantForYou,
	OnlyTheOwnerOfThisAccountCanPerformThisAction,

	AnnouncementEditLimitExceeded = 20_022,

	UnderMinimumAge = 20_024,

	ChannelSendRateLimit = 20_028,
	ServerSendRateLimit,

	StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords = 20_031,

	GuildPremiumSubscriptionLevelTooLow = 20_035,

	MaximumNumberOfGuildsReached = 30_001,
	MaximumNumberOfFriendsReached,
	MaximumNumberOfPinsReachedForTheChannel,
	MaximumNumberOfRecipientsReached,
	MaximumNumberOfGuildRolesReached,

	MaximumNumberOfWebhooksReached = 30_007,
	MaximumNumberOfEmojisReached,

	MaximumNumberOfReactionsReached = 30_010,
	MaximumNumberOfGroupDMsReached,

	MaximumNumberOfGuildChannelsReached = 30_013,

	MaximumNumberOfAttachmentsInAMessageReached = 30_015,
	MaximumNumberOfInvitesReached,

	MaximumNumberOfAnimatedEmojisReached = 30_018,
	MaximumNumberOfServerMembersReached,

	MaximumNumberOfServerCategoriesReached = 30_030,

	GuildAlreadyHasTemplate = 30_031,
	MaximumNumberOfApplicationCommandsReached,
	MaximumThreadParticipantsReached,
	MaximumDailyApplicationCommandCreatesReached,
	MaximumNumberOfNonGuildMemberBansHasBeenExceeded,

	MaximumNumberOfBanFetchesHasBeenReached = 30_037,
	MaximumNumberOfUncompletedGuildScheduledEventsReached,

	MaximumNumberOfStickersReached = 30_039,
	MaximumNumberOfPruneRequestsHasBeenReached,

	MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached = 30_042,

	MaximumNumberOfEditsToMessagesOlderThanOneHourReached = 30_046,
	MaximumNumberOfPinnedThreadsInForumHasBeenReached,
	MaximumNumberOfTagsInForumHasBeenReached,

	BitrateIsTooHighForChannelOfThisType = 30_052,

	MaximumNumberOfPremiumEmojisReached = 30_056,

	MaximumNumberOfWebhooksPerGuildReached = 30_058,

	MaximumNumberOfChannelPermissionOverwritesReached = 30_060,
	TheChannelsForThisGuildAreTooLarge,

	Unauthorized = 40_001,
	VerifyYourAccount,
	OpeningDirectMessagesTooFast,
	SendMessagesHasBeenTemporarilyDisabled,
	RequestEntityTooLarge,
	FeatureTemporarilyDisabledServerSide,
	UserBannedFromThisGuild,

	ConnectionHasBeenRevoked = 40_012,

	TargetUserIsNotConnectedToVoice = 40_032,
	ThisMessageWasAlreadyCrossposted,

	ApplicationCommandWithThatNameAlreadyExists = 40_041,

	ApplicationInteractionFailedToSend = 40_043,

	CannotSendAMessageInAForumChannel = 40_058,

	InteractionHasAlreadyBeenAcknowledged = 40_060,
	TagNamesMustBeUnique,
	ServiceResourceIsBeingRateLimited,

	ThereAreNoTagsAvailableThatCanBeSetByNonModerators = 40_066,
	TagRequiredToCreateAForumPostInThisChannel,

	AnEntitlementHasAlreadyBeenGrantedForThisResource = 40_074,

	MissingAccess = 50_001,
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

	MessageCanOnlyBePinnedInTheChannelItWasSentIn = 50_019,
	InviteCodeInvalidOrTaken,
	CannotExecuteActionOnSystemMessage,

	CannotExecuteActionOnThisChannelType = 50_024,
	InvalidOAuth2AccessToken,
	MissingRequiredOAuth2Scope,

	InvalidWebhookToken = 50_027,
	InvalidRole,

	InvalidRecipients = 50_033,
	OneOfTheMessagesProvidedWasTooOldForBulkDelete,
	InvalidFormBodyOrContentType,
	InviteAcceptedToGuildWithoutTheBotBeingIn,

	InvalidActivityAction = 50_039,

	InvalidAPIVersion = 50_041,

	FileUploadedExceedsMaximumSize = 50_045,
	InvalidFileUploaded,

	CannotSelfRedeemThisGift = 50_054,
	InvalidGuild,

	InvalidSKU = 50_057,

	InvalidRequestOrigin = 50_067,
	InvalidMessageType,

	PaymentSourceRequiredToRedeemGift = 50_070,

	CannotModifyASystemWebhook = 50_073,
	CannotDeleteChannelRequiredForCommunityGuilds,

	CannotEditStickersWithinMessage = 50_080,
	InvalidStickerSent,

	InvalidActionOnArchivedThread = 50_083,
	InvalidThreadNotificationSettings,
	ParameterEarlierThanCreation,
	CommunityServerChannelsMustBeTextChannels,

	TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor = 50_091,

	ServerNotAvailableInYourLocation = 50_095,

	ServerNeedsMonetizationEnabledToPerformThisAction = 50_097,

	ServerNeedsMoreBoostsToPerformThisAction = 50_101,

	RequestBodyContainsInvalidJSON = 50_109,

	OwnerCannotBePendingMember = 50_131,
	OwnershipCannotBeMovedToABotUser,

	FailedToResizeAssetBelowTheMinimumSize = 50_138,

	CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji = 50_144,
	CannotConvertBetweenPremiumEmojiAndNormalEmoji,
	UploadedFileNotFound,

	VoiceMessagesDoNotSupportAdditionalContent = 50_159,
	VoiceMessagesMustHaveASingleAudioAttachment,
	VoiceMessagesMustHaveSupportingMetadata,
	VoiceMessagesCannotBeEdited,
	CannotDeleteGuildSubscriptionIntegration,

	YouCannotSendVoiceMessagesInThisChannel = 50_173,

	TheUserAccountMustFirstBeVerified = 50_178,

	YouDoNotHavePermissionToSendThisSticker = 50_600,

	TwoFactorAuthenticationIsRequired = 60_003,

	NoUsersWithDiscordTagExist = 80_004,

	ReactionWasBlocked = 90_001,

	ApplicationNotYetAvailable = 110_001,

	APIResourceOverloaded = 130_000,

	TheStageIsAlreadyOpen = 150_006,

	CannotReplyWithoutPermissionToReadMessageHistory = 160_002,

	ThreadAlreadyCreatedForMessage = 160_004,
	ThreadLocked,
	MaximumActiveThreads,
	MaximumActiveAnnouncementThreads,

	InvalidJSONForUploadedLottieFile = 170_001,
	UploadedLottiesCannotContainRasterizedImages,
	StickerMaximumFramerateExceeded,
	StickerFrameCountExceedsMaximumOf1000Frames,
	LottieAnimationMaximumDimensionsExceeded,
	StickerFramerateIsTooSmallOrTooLarge,
	StickerAnimationDurationExceedsMaximumOf5Seconds,

	CannotUpdateAFinishedEvent = 180_000,

	FailedToCreateStageNeededForStageEvent = 180_002,

	MessageWasBlockedByAutomaticModeration = 200_000,
	TitleWasBlockedByAutomaticModeration,

	WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId = 220_001,
	WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId,
	WebhooksCanOnlyCreateThreadsInForumChannels,
	WebhookServicesCannotBeUsedInForumChannels,

	MessageBlockedByHarmfulLinksFilter = 240_000,

	CannotEnableOnboardingRequirementsAreNotMet = 350_000,
	CannotUpdateOnboardingWhileBelowRequirements,
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

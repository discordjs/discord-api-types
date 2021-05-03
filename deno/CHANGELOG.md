## [0.18.1](https://github.com/discordjs/discord-api-types/compare/0.18.0...0.18.1) (2021-05-03)

### Bug Fixes

- **APIInvite:** `expires_at` is nullable ([#128](https://github.com/discordjs/discord-api-types/issues/128)) ([44b956a](https://github.com/discordjs/discord-api-types/commit/44b956ad858a457e7671ced38529b433b02efbde))

### Features

- add new interfaces for interaction-related structures ([#129](https://github.com/discordjs/discord-api-types/issues/129)) ([bd638b9](https://github.com/discordjs/discord-api-types/commit/bd638b97e5d26abd8a4f1edbd0f56ddc7d3a30a0))
- **APIInvite:** add `expires_at` field and `with_expiration` param ([#127](https://github.com/discordjs/discord-api-types/issues/127)) ([82ca0ce](https://github.com/discordjs/discord-api-types/commit/82ca0ce5c44ad2e93b3c4875baa82720ea8dd221))
- **ApplicationCommandOptionType:** add `MENTIONABLE` (9) ([#126](https://github.com/discordjs/discord-api-types/issues/126)) ([91afb0b](https://github.com/discordjs/discord-api-types/commit/91afb0bb49015c02b6000c27d07e703011dc540d))

# [0.18.0](https://github.com/discordjs/discord-api-types/compare/0.16.0...0.18.0) (2021-04-18)

### Bug Fixes

- **APIInvite:** `channel` is not optional ([#123](https://github.com/discordjs/discord-api-types/issues/123)) ([abe0513](https://github.com/discordjs/discord-api-types/commit/abe05136fd169f483fe09a213259b4cbd526497b))

### Code Refactoring

- **Invite:** rename `InviteTargetUserType` to `InviteTargetType` ([#124](https://github.com/discordjs/discord-api-types/issues/124)) ([bc9ab45](https://github.com/discordjs/discord-api-types/commit/bc9ab4556ca8a7c8e4c7942c87fa322c91b733dc))

### BREAKING CHANGES

- **Invite:** `InviteTargetUserType` is renamed to `InviteTargetType`, to match the documentation.
  - Reference: https://github.com/discord/discord-api-docs/pull/2690

# [0.17.0](https://github.com/discordjs/discord-api-types/compare/0.16.0...0.17.0) (2021-04-17)

### Bug Fixes

- **APIChannel:** `rtc_region` is optional ([#118](https://github.com/discordjs/discord-api-types/issues/118)) ([617f507](https://github.com/discordjs/discord-api-types/commit/617f507427fae6456de228a23809ab04c1df13f6))

### Code Refactoring

- **APISticker:** remove `preview_asset` ([#119](https://github.com/discordjs/discord-api-types/issues/119)) ([9817623](https://github.com/discordjs/discord-api-types/commit/9817623291ec852a831c3de225e90a65d83dac7f))

### Features

- **WebhookMessage:** add `GET` route types ([#120](https://github.com/discordjs/discord-api-types/issues/120)) ([3294fb1](https://github.com/discordjs/discord-api-types/commit/3294fb15ae6c259c1b53b7f2eca4ea8dca2f2372))

### BREAKING CHANGES

- **APISticker:** This removes the `preview_asset` property from sticket objects
  - Reference: https://github.com/discord/discord-api-docs/commit/b9b8db2
- **APIChannel:** This corrects the fact that `rtc_region` isn't present on non-voice-like channels

# [0.16.0](https://github.com/discordjs/discord-api-types/compare/0.15.1...0.16.0) (2021-04-14)

### Features

- **Guild:** add `nsfw` property ([#116](https://github.com/discordjs/discord-api-types/issues/116)) ([21b572b](https://github.com/discordjs/discord-api-types/commit/21b572b7f25a320e40f8ca2e63d6bd8b111403aa))
- **RESTJSONErrorCode:** add `UnknownInteraction` error code ([#115](https://github.com/discordjs/discord-api-types/issues/115)) ([ced37d0](https://github.com/discordjs/discord-api-types/commit/ced37d0a5ebdc80887662529922c57e2531e1e5b))

### docs

- **Routes:** add `GET` routes to `webhookMessages` ([#114](https://github.com/discordjs/discord-api-types/issues/114)) ([6451679](https://github.com/discordjs/discord-api-types/commit/6451679c9acb9d7fde593914452577669473841d))

### BREAKING CHANGES

- **Routes:** possibly a breaking change due to the fact that the messageID is now strictly typed as a Snowflake or `@me`
  - Reference: discord/discord-api-docs#2410

## [0.15.1](https://github.com/discordjs/discord-api-types/compare/0.15.0...0.15.1) (2021-04-12)

### Bug Fixes

- **TypeScript:** imports not working in TypeScript ([4738c33](https://github.com/discordjs/discord-api-types/commit/4738c33b062d359a1c2fbb35cdd2daf128ab6e5b))

# [0.15.0](https://github.com/discordjs/discord-api-types/compare/0.14.0...0.15.0) (2021-04-11)

### Bug Fixes

- **APIApplicationCommand:** default_permission ([#111](https://github.com/discordjs/discord-api-types/issues/111)) ([9420c3e](https://github.com/discordjs/discord-api-types/commit/9420c3e0af7b2486f0e49bb680ed98e0d9f5c625))
- **Scripts:** `await` in `versions` script, log any errors from deno one ([9113eb1](https://github.com/discordjs/discord-api-types/commit/9113eb133c4627445e2bcd4583c243dde74a20ee))

### BREAKING CHANGES

- **APIApplicationCommand:** This renames the `default_permissions` property to `default_permission`, the correct spelling.

# [0.14.0](https://github.com/discordjs/discord-api-types/compare/0.13.3...0.14.0) (2021-04-11)

### Bug Fixes

- **APIMessage:** correct type for `application` ([ed2cbe8](https://github.com/discordjs/discord-api-types/commit/ed2cbe82c56f872ee01a9eb6991ef70dc22d8c1f))
- **GatewayGuildMemberUpdateDispatchData:** correct types ([14f14e2](https://github.com/discordjs/discord-api-types/commit/14f14e227955af41ed2823f11c6e8d03d12549ba))
- **GatewayPresenceUpdateData:** `activities` may not be `null` ([bb3cb04](https://github.com/discordjs/discord-api-types/commit/bb3cb04e016840f66eecbe39c2e07aea8ea12bc8))
- **GatewayVoiceServerUpdateDispatchData:** `endpoint` is nullable ([e8203a1](https://github.com/discordjs/discord-api-types/commit/e8203a1112a834ce9aaae4ab95f711d3aaffc20f))
- **GuildWelcomeScreenChannel:** document missing `description` property ([238695b](https://github.com/discordjs/discord-api-types/commit/238695b44d8547d51782e3d9d9729e2db85bc444))
- **OAuth2:** `scope` can be optional / not required ([bbe56a9](https://github.com/discordjs/discord-api-types/commit/bbe56a97564ce8c317f291080327484f0d987e1c))
- **OAuth2:** remove invalid parameters from refresh token request ([1c02450](https://github.com/discordjs/discord-api-types/commit/1c024507f3f55b922565845c2bedac615ffa24d5))
- **RPC:** version `RPC` same as` rest`, export again in `shortcuts` ([67e0ba1](https://github.com/discordjs/discord-api-types/commit/67e0ba1834e6d9de9ad00bd452f5e8da59ff1cc6))
- **Utils:** correct import for deno users ([42dd75f](https://github.com/discordjs/discord-api-types/commit/42dd75f2581b2a8862e4f0446b42ff838f923de0))

### chore

- **Gateway:** remove `guild_subscriptions` ([ab8b289](https://github.com/discordjs/discord-api-types/commit/ab8b289ac8f99fe1a998ef06320ad9046aafa1d2))
- **GatewayReady:** un-document `private_channels` ([457edf4](https://github.com/discordjs/discord-api-types/commit/457edf4ed43327fb871d3b1638745b905518ef91))
- **Integrations:** remove routes that bots can no longer interact with ([577c5bd](https://github.com/discordjs/discord-api-types/commit/577c5bd040dd1dc258ca6c414cf6ac69ae84916c))
- **MessageGetReactions:** remove `before` pagination ([0ec26b7](https://github.com/discordjs/discord-api-types/commit/0ec26b731cda570f34e59e05a8c21f272b1fd64e))
- **Oauth2Scopes:** remove `rpc.api` ([7ee8511](https://github.com/discordjs/discord-api-types/commit/7ee85113ea8107106460889a2eaa42b251ee05d0))
- **Permissions:** rename `USE_APPLICATION_COMMANDS` to `USE_SLASH_COMMANDS` ([2aa7f7a](https://github.com/discordjs/discord-api-types/commit/2aa7f7a7b8da3d4d46a7743830562d996d32120b))
- **UserFlags:** un-document `SYSTEM` flag ([1774d4c](https://github.com/discordjs/discord-api-types/commit/1774d4c4749d303f24bfb3c754cf79a4ca7ef699))

### Code Refactoring

- restructure module ([81cdfc2](https://github.com/discordjs/discord-api-types/commit/81cdfc2d9c523d98edd0a69f976879e848e1167b))

### Features

- **APIApplication:** document `terms_of_service` and `privacy_policy` ([598cbfb](https://github.com/discordjs/discord-api-types/commit/598cbfb958a67d5ba61696ba877ea0bae4c4be55))
- **APIAttachment:** add `content_type` ([2d432d1](https://github.com/discordjs/discord-api-types/commit/2d432d145eb8a009b092b27b6231252d7b2f2823))
- **APIChannel:** add `rtc_region` ([#108](https://github.com/discordjs/discord-api-types/issues/108)) ([07ba907](https://github.com/discordjs/discord-api-types/commit/07ba9072429dec85a13479dc211ec1f9d8788acf))
- **APIChannel:** add `video_quality_mode` ([#106](https://github.com/discordjs/discord-api-types/issues/106)) ([d8d7bcc](https://github.com/discordjs/discord-api-types/commit/d8d7bccea617ad0d1150b9d2aed3b26ec1e4f99a))
- **APIInteraction:** add type-check utilities ([3307201](https://github.com/discordjs/discord-api-types/commit/33072011c2ea9ace8350dedc0cd1068660dc2ece))
- **Exports:** add `globals` to the exported sub-modules ([5d35f61](https://github.com/discordjs/discord-api-types/commit/5d35f61334480af983c4767373ef05e395da2e18))
- **Gateway:** add `INTEGRATION_*` events ([9c3fab0](https://github.com/discordjs/discord-api-types/commit/9c3fab052619609eb543ff400c2b813b69c6b99f))
- **GuildWelcomeScreen:** document `welcome-screen` endpoint ([169ecde](https://github.com/discordjs/discord-api-types/commit/169ecde47a6a911309630e952ab26b805ac87cf0))
- **Interactions:** add batch command create / update ([edfe70a](https://github.com/discordjs/discord-api-types/commit/edfe70a1eeec9be1104ec68a20d95e83512b3268))
- **Interactions:** add Slash Command Permissions ([f517f35](https://github.com/discordjs/discord-api-types/commit/f517f3596f458a2c2e4c4a26d5c13bbed4c4a71f))
- **Invites:** document `target_application` & correct property names ([97c8ab3](https://github.com/discordjs/discord-api-types/commit/97c8ab3f5165c6f161e9338e944cff8b296756d5))
- **MessageFlags:** `EPHEMERAL` desc and added `LOADING` ([#109](https://github.com/discordjs/discord-api-types/issues/109)) ([4462255](https://github.com/discordjs/discord-api-types/commit/4462255168af2ad66c9c7405500e80d3fa41de33))
- **PatchAPIWebhookMessage:** add `file` property ([fc2f3c5](https://github.com/discordjs/discord-api-types/commit/fc2f3c58cf5ea2a8c0a1a14a62a16f432b1776e2))
- **Webhook:** add & document `url` property ([77e5bb6](https://github.com/discordjs/discord-api-types/commit/77e5bb624d86e4bc8696c8dac4f513c27eb8aff1))
- invite reminder system message type and flag ([#105](https://github.com/discordjs/discord-api-types/issues/105)) ([b90714f](https://github.com/discordjs/discord-api-types/commit/b90714f677c67c009ddb6d00734ab8998c194350))
- stage channels! ([#107](https://github.com/discordjs/discord-api-types/issues/107)) ([6cd7542](https://github.com/discordjs/discord-api-types/commit/6cd75426c6d7da145b40a656e4c1a1d3d26bfb1f))

### BREAKING CHANGES

- **APIInteraction:** This commit removes the `guild_id` property from `APIDMInteraction`
  which allows type-checks to work with the `in` operator.
  Because of that, we also provide utility functions that help with those type checks.
  Use them in your code by importing the `Utils` object, or by directly importing them.
  Check the README for examples
- **OAuth2:** This commit removes parameters that are not expected
  in the refresh token request body

Reference: https://github.com/discord/discord-api-docs/commit/eaa12cbc8f96cf7cfe8c530f88e60582c24ca5dd

- **GatewayReady:** This property has been deprecated for a while, and was
  returning an empty array for bot users. This commit removes it entirely

Reference: https://github.com/discord/discord-api-docs/commit/f36156dbb641f5c4d4f4593f345bfd6e27fdee08

- **Permissions:** This commit brings consistency with the documentation,
  where the permission is documented as `USE_SLASH_COMMANDS`, whereas the
  client has it as `USE_APPLICATION_COMMANDS` internally

Reference: https://github.com/discord/discord-api-docs/commit/c7d25885c5cd80a49b31609a40b70603b35f9dec

- **MessageGetReactions:** This query parameter is not usable and was not respected
  by the API.

Reference: https://github.com/discord/discord-api-docs/commit/f72b084773d4d3989fb19be4fb4d9cf276a1e6b3

- **OAuth2:** This removes the `scope` property from the authorization
  code flow, as it is not expected there.

Reference: https://github.com/discord/discord-api-docs/commit/57965033ab4216a0bb853e85d6912531cd5a9981

- **Gateway:** This removes `guild_subscriptions`, as it has been
  deprecated in favor of `intents`.

Reference: https://github.com/discord/discord-api-docs/commit/8de017436d37e56fab14cb8f68f0448a45ebc731

- **Oauth2Scopes:** This removes the `rpc.api` scope, as it has been removed
  from the documentation.

Reference: https://github.com/discord/discord-api-docs/commit/2641d9808f676e7316483d152cdb37ed1168f968

- **APIMessage:** This removes the `APIMessageApplication` interface, as it has
  been removed from the documentation, being replaced with the OAuth2 application.

Reference: https://github.com/discord/discord-api-docs/commit/ff0c831e424f1bc17dd3cde62da48d5c3d933e88

- **APIApplication:** This renames the `GatewayPresenceLimit` flag to
  `GatewayPresenceLimited`, for consistency with `GatewayGuildMembersLimited`
  and the documented name.

Reference: https://github.com/discord/discord-api-docs/commit/39b254bed1cc396c475e508a3f2bf328815605c9

- **GatewayVoiceServerUpdateDispatchData:** Any code that expects `endpoint` to never be null needs
  to be updated, and the conditions specified in the documentation need
  to be respected regarding that.

Reference: https://github.com/discord/discord-api-docs/commit/e887382fafd4c4417f7ba62963984f25bcb643f6

- **Invites:** This renames `target_user_type` to `target_type`,
  the actual value the API expects.

Reference: https://github.com/discord/discord-api-docs/commit/1b4e363e324eb1f49a47e32cb0108fbe276c8e0e

- **GatewayPresenceUpdateData:** Clearing `activities` is done by setting them to an empty
  array, not by setting them to `null`.

Reference: https://github.com/discord/discord-api-docs/commit/5bf598b864fb89262fce07137f68ce6e7e583432

- **UserFlags:** This removes a flag that bots should not use, as Discord
  said this is an internal flag.

Reference: https://github.com/discord/discord-api-docs/commit/9293f0d490ac6acf9d627e429e5a8131b303b528

- **Integrations:** This removes the 3 routes that bots can no longer access.

Reference: https://github.com/discord/discord-api-docs/commit/efe4e5808b6826d40302e265a5ae9b5b65d92fe7

- **Exports:** Certain objects from this file have been moved to their
  appropriate spot (such as JSON Error Codes)
- Files have been moved around in order to keep them
  organized. Exports might also be missing, so please report if that is the
  case.

## [0.13.3](https://github.com/discordjs/discord-api-types/compare/0.13.2...0.13.3) (2021-03-28)

## [0.13.2](https://github.com/discordjs/discord-api-types/compare/0.13.1...0.13.2) (2021-03-28)

### Bug Fixes

- **ApplicationCommandInteractionDataOptionSubCommandGroup:** typo ([#102](https://github.com/discordjs/discord-api-types/issues/102)) ([15c171c](https://github.com/discordjs/discord-api-types/commit/15c171c558a10cd6d1c4880e725af0e63dd82255))

## [0.13.1](https://github.com/discordjs/discord-api-types/compare/0.13.0...0.13.1) (2021-03-27)

### Bug Fixes

- **APIInteractionResponse:** `data` should not always be present ([#100](https://github.com/discordjs/discord-api-types/issues/100)) ([ffcd95d](https://github.com/discordjs/discord-api-types/commit/ffcd95d597a5d1c5b3ea072cd1dfb44f079de4b7))

# [0.13.0](https://github.com/discordjs/discord-api-types/compare/0.12.1...0.13.0) (2021-03-27)

### Bug Fixes

- **deno:** replace `const enum` exports in deno with normal `enum`s ([#89](https://github.com/discordjs/discord-api-types/issues/89)) ([7343fab](https://github.com/discordjs/discord-api-types/commit/7343fabe82e4321808bac784aed600afa8cf4249))
- **RESTPostAPIChannelMessageJSONBody:** mark `tts` as a full boolean ([#96](https://github.com/discordjs/discord-api-types/issues/96)) ([9d8d090](https://github.com/discordjs/discord-api-types/commit/9d8d090c9c6cd5be1f7b578b2f6a6387544f3359))
- **RESTPostAPIGuildsJSONBody:** make some fields nullable ([#91](https://github.com/discordjs/discord-api-types/issues/91)) ([ae1900d](https://github.com/discordjs/discord-api-types/commit/ae1900dc2f65065153b1bf2437348e63b63db49e))

### Features

- **APIApplication:** add ApplicationFlags ([#92](https://github.com/discordjs/discord-api-types/issues/92)) ([92f76f1](https://github.com/discordjs/discord-api-types/commit/92f76f1a3c8acf80689b994e9bfaec70d198aaa1))
- **APIApplicationCommandInteractionData:** add `resolved` ([#86](https://github.com/discordjs/discord-api-types/issues/86)) ([24155ae](https://github.com/discordjs/discord-api-types/commit/24155aeb71d46de48353ce01bfb48e197a84e59b))
- **APIBaseInteraction:** add application_id ([#98](https://github.com/discordjs/discord-api-types/issues/98)) ([0582f88](https://github.com/discordjs/discord-api-types/commit/0582f883c517e5fdc2373ac0a85717a7bfeec018))
- **APIInteraction:** DM slash commands and property descriptions ([#84](https://github.com/discordjs/discord-api-types/issues/84)) ([d0b3106](https://github.com/discordjs/discord-api-types/commit/d0b310675848f4724e47c490b06d828f7ede204c))
- **APIInteractionResponse, APIInteractionResponseType:** update for UI changes ([#90](https://github.com/discordjs/discord-api-types/issues/90)) ([eafe7ba](https://github.com/discordjs/discord-api-types/commit/eafe7ba96fc6e771579850a8a7de36adade8efdc))
- **APIMessage:** add `interaction` ([#93](https://github.com/discordjs/discord-api-types/issues/93)) ([0f29b32](https://github.com/discordjs/discord-api-types/commit/0f29b32e05abe89f70f72989024b9c63493782fa))
- **APIMessageReferenceSend:** add `fail_if_not_exists` ([#82](https://github.com/discordjs/discord-api-types/issues/82)) ([855f36d](https://github.com/discordjs/discord-api-types/commit/855f36d9309ae69f57da723648d3791e3134089e))
- **PermissionFlagsBits:** add `USE_APPLICATION_COMMANDS` ([#85](https://github.com/discordjs/discord-api-types/issues/85)) ([ceb787b](https://github.com/discordjs/discord-api-types/commit/ceb787ba36ed05f25f9acab86496d3054cb15013))
- **rest:** api base routes ([#87](https://github.com/discordjs/discord-api-types/issues/87)) ([466fa95](https://github.com/discordjs/discord-api-types/commit/466fa95b0e239b7984275959886b995a5020640a))
- add Application Command events ([#75](https://github.com/discordjs/discord-api-types/issues/75)) ([da2c2e9](https://github.com/discordjs/discord-api-types/commit/da2c2e9ada39482fce095c47339b40d6c24e683a))
- add GET single Application Command ([#76](https://github.com/discordjs/discord-api-types/issues/76)) ([5826da2](https://github.com/discordjs/discord-api-types/commit/5826da22e30839b1f9fcd73479f8bc0f213001bd))
- implement FormatPatterns ([#79](https://github.com/discordjs/discord-api-types/issues/79)) ([4e4a084](https://github.com/discordjs/discord-api-types/commit/4e4a0840036eddb89a1d49d69f59905dba206afb))
- **OAuth2:** add `/oauth2/[@me](https://github.com/me)` route ([#73](https://github.com/discordjs/discord-api-types/issues/73)) ([84759d1](https://github.com/discordjs/discord-api-types/commit/84759d19bc4cd0f33f0a94608c1af2b4d6a820c6))
- **Webhook:** add Edit Webhook Message result and error 50027 ([#71](https://github.com/discordjs/discord-api-types/issues/71)) ([4c77a5d](https://github.com/discordjs/discord-api-types/commit/4c77a5d90acf627574eff571a92a6703c6ea2d13))

## [0.12.1](https://github.com/discordjs/discord-api-types/compare/0.12.0...0.12.1) (2021-01-05)

### Bug Fixes

- run deno workflow only on branch push ([#66](https://github.com/discordjs/discord-api-types/issues/66)) ([0ef4620](https://github.com/discordjs/discord-api-types/commit/0ef46202f6c8c257e6300e634b675e7e1b6ffa90))

### Features

- add Snowflake and Permissions types ([#69](https://github.com/discordjs/discord-api-types/issues/69)) ([549a6f0](https://github.com/discordjs/discord-api-types/commit/549a6f023698f05829f1dfdf1190c027a994d6cd))

# [0.12.0](https://github.com/discordjs/discord-api-types/compare/0.11.2...0.12.0) (2021-01-01)

### Bug Fixes

- **APIApplication:** flags should be omitted in REST, not optional everywhere ([#57](https://github.com/discordjs/discord-api-types/issues/57)) ([664ad80](https://github.com/discordjs/discord-api-types/commit/664ad800ccdfb84cc1547dd151c0f6e16157e04b))
- **RESTPatchAPIChannelJSONBody:** add missing bitrate field ([#60](https://github.com/discordjs/discord-api-types/issues/60)) ([15892ec](https://github.com/discordjs/discord-api-types/commit/15892ec870ff818d7f66bd9b57969638e5f17e1f))

### Features

- **GatewayActivity:** add missing fields ([#39](https://github.com/discordjs/discord-api-types/issues/39)) ([dccdfe0](https://github.com/discordjs/discord-api-types/commit/dccdfe044fb4c02b6cfc910e2d39e469ebd9c75a))

## [0.11.2](https://github.com/discordjs/discord-api-types/compare/0.11.1...0.11.2) (2020-12-20)

## [0.11.1](https://github.com/discordjs/discord-api-types/compare/0.11.0...0.11.1) (2020-12-19)

### Bug Fixes

- **APIAuditLogEntry:** user_id is not nullable ([#52](https://github.com/discordjs/discord-api-types/issues/52)) ([2b89beb](https://github.com/discordjs/discord-api-types/commit/2b89beb52b66a4865124b75069ca6bc3d5886c48))
- **RESTPostAPIGuildsJSONBody:** system_channel_flags is optional ([#53](https://github.com/discordjs/discord-api-types/issues/53)) ([ba4c0d7](https://github.com/discordjs/discord-api-types/commit/ba4c0d78f4ba3755f524b5f63420a36580a1a08e))

# [0.11.0](https://github.com/discordjs/discord-api-types/compare/0.10.0...0.11.0) (2020-12-19)

### Bug Fixes

- **APIGuildMember:** drop nullability of `pending` prop ([#49](https://github.com/discordjs/discord-api-types/issues/49)) ([c2f0dee](https://github.com/discordjs/discord-api-types/commit/c2f0deeebd28fa3a09f795d1b263ff8fd5d9ae4d))
- **RESTPatchAPIGuildJSONBody:** multiple properties are actually nullable ([#48](https://github.com/discordjs/discord-api-types/issues/48)) ([018fc4f](https://github.com/discordjs/discord-api-types/commit/018fc4f8ea4d50f719820001822778079a055fa3))

# [0.10.0](https://github.com/discordjs/discord-api-types/compare/0.9.1...0.10.0) (2020-12-09)

### Features

- server templates ([#25](https://github.com/discordjs/discord-api-types/issues/25)) ([7d873f7](https://github.com/discordjs/discord-api-types/commit/7d873f73c7a8c64630c57d3eaf33d8c4913ed835))

## [0.9.1](https://github.com/discordjs/discord-api-types/compare/0.9.0...0.9.1) (2020-11-22)

# [0.9.0](https://github.com/discordjs/discord-api-types/compare/0.8.0...0.9.0) (2020-11-22)

### Features

- **Message:** reply updates ([#34](https://github.com/discordjs/discord-api-types/issues/34)) ([21b9ae4](https://github.com/discordjs/discord-api-types/commit/21b9ae4aaf29c276d1a6ccc4c79ace8d64a53e9d))
- **Message:** Stickers ([#32](https://github.com/discordjs/discord-api-types/issues/32)) ([39ea1f4](https://github.com/discordjs/discord-api-types/commit/39ea1f4429e5194576200635f885ab102763060b))

# [0.8.0](https://github.com/discordjs/discord-api-types/compare/0.7.0...0.8.0) (2020-11-03)

### Bug Fixes

- webhookPlatform route ([#36](https://github.com/discordjs/discord-api-types/issues/36)) ([666a0c7](https://github.com/discordjs/discord-api-types/commit/666a0c71528e385677570b5359ba266276202a95))
- **GatewayPresence:** correct type for sent activity objects ([#30](https://github.com/discordjs/discord-api-types/issues/30)) ([61db1ee](https://github.com/discordjs/discord-api-types/commit/61db1eee256037588ef27533c234cb01f1f699a4))

# [0.7.0](https://github.com/discordjs/discord-api-types/compare/0.6.0...0.7.0) (2020-10-18)

### Bug Fixes

- **GatewayHeartbeat:** d is nullable ([#26](https://github.com/discordjs/discord-api-types/issues/26)) ([0982610](https://github.com/discordjs/discord-api-types/commit/098261073163eeb4fcfc217dea3511ccea1f27c5))
- **GatewayIdentify:** use correct presence interface ([#28](https://github.com/discordjs/discord-api-types/issues/28)) ([91c63f0](https://github.com/discordjs/discord-api-types/commit/91c63f05ca1e8e92c4c1df124365405fe8d34108))

### Features

- **APIGuildWidgetMember:** add activity and use proper status type ([#24](https://github.com/discordjs/discord-api-types/issues/24)) ([f058ed6](https://github.com/discordjs/discord-api-types/commit/f058ed6aa1f7593c22e4a3f0c9dd2f4bbd0190dc))

# [0.6.0](https://github.com/discordjs/discord-api-types/compare/0.5.0...0.6.0) (2020-10-04)

### Bug Fixes

- **APIChannel:** position is optional ([#21](https://github.com/discordjs/discord-api-types/issues/21)) ([061a147](https://github.com/discordjs/discord-api-types/commit/061a147fbb381738b28ca3fb73fa1a7be0e1b108))
- **RESTPostAPIGuildsJSONBody:** use correct types ([#22](https://github.com/discordjs/discord-api-types/issues/22)) ([dcf8ddf](https://github.com/discordjs/discord-api-types/commit/dcf8ddf25b26a9c72dbb1b5712503e6d5e516ad1))

### Features

- v8 support ([#14](https://github.com/discordjs/discord-api-types/issues/14)) ([11b95c8](https://github.com/discordjs/discord-api-types/commit/11b95c86099e609128a8ca76d06d43498fae72f5))

# [0.5.0](https://github.com/discordjs/discord-api-types/compare/0.4.1...0.5.0) (2020-09-19)

### Bug Fixes

- correct typos ([#18](https://github.com/discordjs/discord-api-types/issues/18)) ([97c7b4e](https://github.com/discordjs/discord-api-types/commit/97c7b4ea24852f49b5f952e81a0e6f21ed405316))
- **APIUser:** premium_type is optional ([#19](https://github.com/discordjs/discord-api-types/issues/19)) ([8cf1ba3](https://github.com/discordjs/discord-api-types/commit/8cf1ba3f4f3c28f962afad4bfcc02f5bb897286a))
- **GatewayIdentifyProperties:** rename `device` to `$device` ([#17](https://github.com/discordjs/discord-api-types/issues/17)) ([9e5c5b5](https://github.com/discordjs/discord-api-types/commit/9e5c5b5aac30e931255f39790123b4bd3458a16f))

## [0.4.1](https://github.com/discordjs/discord-api-types/compare/0.4.0...0.4.1) (2020-09-18)

### Features

- add oauth2 types ([#16](https://github.com/discordjs/discord-api-types/issues/16)) ([10fdeba](https://github.com/discordjs/discord-api-types/commit/10fdeba1286e385e087d6c9405872f948507f183))

# [0.4.0](https://github.com/discordjs/discord-api-types/compare/0.3.0...0.4.0) (2020-09-16)

### Features

- **ActivityType:** add Competing activity type ([#11](https://github.com/discordjs/discord-api-types/issues/11)) ([94d0a16](https://github.com/discordjs/discord-api-types/commit/94d0a1680532412c8d5f9659056f87a37d1def7d))

# [0.3.0](https://github.com/discordjs/discord-api-types/compare/v0.2.0...0.3.0) (2020-09-14)

### Bug Fixes

- **APIMessage:** Correct APIMessage#mentions type ([#9](https://github.com/discordjs/discord-api-types/issues/9)) ([fe1868b](https://github.com/discordjs/discord-api-types/commit/fe1868b04f8a9f4be1c09ffba0afa60f4def8595))

# [0.2.0](https://github.com/discordjs/discord-api-types/compare/v0.1.1...v0.2.0) (2020-09-10)

### Bug Fixes

- **Readme:** add missing semicolon ([#1](https://github.com/discordjs/discord-api-types/issues/1)) ([5e3e101](https://github.com/discordjs/discord-api-types/commit/5e3e1016b5fe274d33503d36771fc276fd384ccf))

## [0.1.1](https://github.com/discordjs/discord-api-types/compare/767a833a12a8268b9f1b780f338da6f28cefa5cd...v0.1.1) (2020-08-22)

### Bug Fixes

- set target version to ES2020 ([767a833](https://github.com/discordjs/discord-api-types/commit/767a833a12a8268b9f1b780f338da6f28cefa5cd))

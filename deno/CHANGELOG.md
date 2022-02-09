# [0.27.0](https://github.com/discordjs/discord-api-types/compare/0.26.1...0.27.0) (2022-02-09)

### Bug Fixes

- **GatewayThreadCreateDispatchData:** `newly_created` is optional, and `true` when present ([#312](https://github.com/discordjs/discord-api-types/issues/312)) ([87b9b08](https://github.com/discordjs/discord-api-types/commit/87b9b0885a3734b376e64da51d7667b74558f7e5))

### Code Refactoring

- **ActivityType:** change `Game` to `Playing` ([#298](https://github.com/discordjs/discord-api-types/issues/298)) ([08a8b28](https://github.com/discordjs/discord-api-types/commit/08a8b28ee1ed2041744d922db35dab24f3861469))
- **UserFlags:** remove `None` ([#308](https://github.com/discordjs/discord-api-types/issues/308)) ([8e13cd8](https://github.com/discordjs/discord-api-types/commit/8e13cd80c66d11d93157a053e329ad98ece4a457))

### Features

- **APIGuildPreview:** add `stickers` ([#279](https://github.com/discordjs/discord-api-types/issues/279)) ([310c68f](https://github.com/discordjs/discord-api-types/commit/310c68f034812072ca3cacbeaff1f5b9454e3409))
- **APIInteraction:** add locale props to interactions ([#273](https://github.com/discordjs/discord-api-types/issues/273)) ([03b8d3f](https://github.com/discordjs/discord-api-types/commit/03b8d3fee032fb77213389019baa2b80377dcfdc))
- **APIMessageInteraction:** add `member` field ([#299](https://github.com/discordjs/discord-api-types/issues/299)) ([80ed7ba](https://github.com/discordjs/discord-api-types/commit/80ed7ba1c1ebb2e12d3a04339d4ff0209be9bbef))
- **APIScheduledEvent:** add `image` prop ([#303](https://github.com/discordjs/discord-api-types/issues/303)) ([663c4e9](https://github.com/discordjs/discord-api-types/commit/663c4e97fbe2029ab040388b50d5600bfe281c4f))
- **APIThreadMetadata:** add `create_timestamp` field ([#301](https://github.com/discordjs/discord-api-types/issues/301)) ([d95d956](https://github.com/discordjs/discord-api-types/commit/d95d9562dcc514556f3a4ced3e8f3ee4c5ed1282))
- **ApplicationCommand:** attachment application command option type ([#272](https://github.com/discordjs/discord-api-types/issues/272)) ([71c4e6a](https://github.com/discordjs/discord-api-types/commit/71c4e6aecd044ce5282742c0e47bff7b64b890f7))
- **GatewayThreadCreateDispatch:** Add `newly_created` field` ([#311](https://github.com/discordjs/discord-api-types/issues/311)) ([7e54215](https://github.com/discordjs/discord-api-types/commit/7e542152da2e58f44c2314d5bd3b04a518fa979e))
- **Locales:** add locale string enum ([#297](https://github.com/discordjs/discord-api-types/issues/297)) ([b07d5a0](https://github.com/discordjs/discord-api-types/commit/b07d5a0c2273b6b51b44542b638a768c36d0f184))
- **MessageFlags:** add `FailedToMentionSomeRolesInThread` ([#280](https://github.com/discordjs/discord-api-types/issues/280)) ([76588d9](https://github.com/discordjs/discord-api-types/commit/76588d9d384f71ace05d96de17889e4490874462))
- **RESTAPIPostChannelMessage, RESTAPIPostWebhookMessage:** add flags for creation ([#300](https://github.com/discordjs/discord-api-types/issues/300)) ([4194bd9](https://github.com/discordjs/discord-api-types/commit/4194bd9054a7e4b004f9244706f423292a8a0e56))
- **RESTJSONErrorCodes:** add error 30042 ([#305](https://github.com/discordjs/discord-api-types/issues/305)) ([9c2b185](https://github.com/discordjs/discord-api-types/commit/9c2b185367b1ea2e432355d76af8f19e8fca7398))
- **RESTJSONErrorCodes:** add error 30046 ([#304](https://github.com/discordjs/discord-api-types/issues/304)) ([56d3975](https://github.com/discordjs/discord-api-types/commit/56d39756c0d973ec56fe6e1eeb75d827f50aac81))
- **RESTJSONErrorCodes:** add error 40004 ([#314](https://github.com/discordjs/discord-api-types/issues/314)) ([269a75c](https://github.com/discordjs/discord-api-types/commit/269a75ccf7b413bfc031849713e919ebb8d87a1a))
- **RESTJSONErrorCodes:** add error 50068 ([#302](https://github.com/discordjs/discord-api-types/issues/302)) ([7655e20](https://github.com/discordjs/discord-api-types/commit/7655e2024800abc4431011668b83373e0868485e))
- **RESTJSONErrorCodes:** add error code 50086 ([#286](https://github.com/discordjs/discord-api-types/issues/286)) ([51fb37c](https://github.com/discordjs/discord-api-types/commit/51fb37cbba44677870f0f916bd1416bdbd34e052))
- **RESTPatchAPIGuildMember:** add `communication_disabled_until` field ([#289](https://github.com/discordjs/discord-api-types/issues/289)) ([5056b0f](https://github.com/discordjs/discord-api-types/commit/5056b0f2b3798480dbbc193fd80dedfefedff4fc))
- **RESTPatchAPIGuildMember:** add modify current member and deprecate nick route ([#262](https://github.com/discordjs/discord-api-types/issues/262)) ([9a982ff](https://github.com/discordjs/discord-api-types/commit/9a982ff8d9592a02d78f24295efd756dc0c69fa8))
- **RouteBases:** add base for guild scheduled events ([#293](https://github.com/discordjs/discord-api-types/issues/293)) ([83f29b6](https://github.com/discordjs/discord-api-types/commit/83f29b692839cc51869bcafdaf387b68731e0a28))
- **UserFlags:** add `Spammer` flag ([#294](https://github.com/discordjs/discord-api-types/issues/294)) ([03f12d7](https://github.com/discordjs/discord-api-types/commit/03f12d71eef2661ee5290152952ea1adc9a92383))

### types

- Add tagged `type` unions for channel types ([#200](https://github.com/discordjs/discord-api-types/issues/200)) ([2c1fbda](https://github.com/discordjs/discord-api-types/commit/2c1fbda621fc1c1ea227295c578e6d8486dbc4f2))

### BREAKING CHANGES

- **UserFlags:** The `None` user flag is bye-bye (although I doubt anyone is using it)
- All of the channel types are now split based on their type. As such, you will need to assert the type (either by checking it with the enum or by casting the data as the correct channel) before accessing data.
  _If you encounter any missing properties due to this, please open an issue! This is a big change, and we hope nothing is missing_

- **ActivityType:** `Game` was renamed to `Playing`

## [0.26.1](https://github.com/discordjs/discord-api-types/compare/0.26.0...0.26.1) (2022-01-02)

### Bug Fixes

- **APIApplicationCommandOption:** correct type for integer and number ([#284](https://github.com/discordjs/discord-api-types/issues/284)) ([fe1f531](https://github.com/discordjs/discord-api-types/commit/fe1f5313a8fc13d0a2433738cce9be37f5d9eeb5))

### Features

- **APIAuditLogChangeData:** Add `communication_disabled_until` ([#281](https://github.com/discordjs/discord-api-types/issues/281)) ([0cf51ab](https://github.com/discordjs/discord-api-types/commit/0cf51abc267bd6246a7952e7f6a23fa8c5db290a))
- **APIGuildScheduledEvent:** add more precise types for stage instance/voice/external events ([#278](https://github.com/discordjs/discord-api-types/issues/278)) ([751aee6](https://github.com/discordjs/discord-api-types/commit/751aee6fa7d4c542324a30e9b9bc641b0e7a8bf4))
- **ApplicationFlags:** add embedded application flags ([#277](https://github.com/discordjs/discord-api-types/issues/277)) ([9f4f59c](https://github.com/discordjs/discord-api-types/commit/9f4f59c8e55f78caf614e27e28b6bca939665ca5))

# [0.26.0](https://github.com/discordjs/discord-api-types/compare/0.25.2...0.26.0) (2021-12-24)

### Bug Fixes

- **APIInvite:** channel can be null ([#182](https://github.com/discordjs/discord-api-types/issues/182)) ([c67d426](https://github.com/discordjs/discord-api-types/commit/c67d426e3d3634eb0756f07029b9176cfc5873ce))
- **GatewayStageInstance:** Stage Instance dispatches not included in `GatewayDispatchPayload` ([#267](https://github.com/discordjs/discord-api-types/issues/267)) ([46db72d](https://github.com/discordjs/discord-api-types/commit/46db72da2fd14a51047b4e66e934738785e72d96))
- **NonDispatchPayload:** `t` & `s` fields are always null on non-dispatch payloads ([#259](https://github.com/discordjs/discord-api-types/issues/259)) ([315ce35](https://github.com/discordjs/discord-api-types/commit/315ce3584917635b93a26123470f37a10bd8d846))
- only a partial object is needed when updating attachments ([#263](https://github.com/discordjs/discord-api-types/issues/263)) ([7ab780b](https://github.com/discordjs/discord-api-types/commit/7ab780b3aefb3c8c34a8114db3ace6c4e6ae3206))
- **StickerPack:** Optional `banner_asset_id` ([#270](https://github.com/discordjs/discord-api-types/issues/270)) ([7eee39d](https://github.com/discordjs/discord-api-types/commit/7eee39d86c0d40857d0bf6fc0d4d1e31cda1895c))

### Features

- Add API error code `50055` ([#256](https://github.com/discordjs/discord-api-types/issues/256)) ([b01716b](https://github.com/discordjs/discord-api-types/commit/b01716bf22fba617c0a09084ff607127366432b6))
- Add API error code 50109 ([#268](https://github.com/discordjs/discord-api-types/issues/268)) ([bfc5e46](https://github.com/discordjs/discord-api-types/commit/bfc5e46f5374289997219c35aa0b992dfaa4ec40))
- add support for user guild member read oauth2 scope and route ([#254](https://github.com/discordjs/discord-api-types/issues/254)) ([e9d02a1](https://github.com/discordjs/discord-api-types/commit/e9d02a19fc3b4fad2f488b0db3b63d6301878730))
- **APIAuditLog:** add `guild_scheduled_events` prop ([#251](https://github.com/discordjs/discord-api-types/issues/251)) ([c7efcd5](https://github.com/discordjs/discord-api-types/commit/c7efcd55059673ab9fc8e6ef9711050700274057))
- **APIGuildMember:** add guild timeouts ([#235](https://github.com/discordjs/discord-api-types/issues/235)) ([0bbc972](https://github.com/discordjs/discord-api-types/commit/0bbc9721f6e18eb559c40e207f60218e7862d4ea))
- **GatewayThreadMemberUpdateDispatchData:** add `guild_id` extra field ([#266](https://github.com/discordjs/discord-api-types/issues/266)) ([2c72242](https://github.com/discordjs/discord-api-types/commit/2c72242a03bd5adfd0fc145bf5645d1bad59254e))
- **RESTJSONErrorCodes:** add error 20029 ([#257](https://github.com/discordjs/discord-api-types/issues/257)) ([9e619fc](https://github.com/discordjs/discord-api-types/commit/9e619fc460337d53c85fc3977c89489c14bd8254))
- bring in support for TS 4.5's `exactOptionalPropertyTypes` ([#275](https://github.com/discordjs/discord-api-types/issues/275)) ([c20e5ae](https://github.com/discordjs/discord-api-types/commit/c20e5ae2a9edcca529e233a4deb634bc760076d2))

### Cleanups

- Make application command option union easier to use ([#250](https://github.com/discordjs/discord-api-types/issues/250)) ([8bbb819](https://github.com/discordjs/discord-api-types/commit/8bbb81942b3f87e46273bb75a12e2db4ef7ee797))
- **ChatInputCommandOptions:** cleanup chat input options ([#274](https://github.com/discordjs/discord-api-types/issues/274)) ([7fe78ce](https://github.com/discordjs/discord-api-types/commit/7fe78cec25a07dcd5d7ba2af3a5d773620c2d3cf))

### BREAKING CHANGES

- **StickerPack:** `banner_asset_id` is now optional. Reference PR: https://github.com/discord/discord-api-docs/pull/4245
- **APIInvite:** this marks the channel property of invites as possibly null
- **ChatInputCommandOptions:** A lot of the options were renamed and split up to clean up internal code.
  All option interfaces that ended in a plural (`*Options`) have had their pluralization removed (`*Option` now).
  `APIApplicationCommandInteractionDataOptionWithValues` has been renamed to `APIApplicationCommandInteractionDataBasicOption`,
  and every `*InteractionDataOptions{Type}` interfaces have been renamed to `*InteractionData{Type}Option`
  (i.e.: `ApplicationCommandInteractionDataOptionString` -> `APIApplicationCommandInteractionDataStringOption`).

## [0.25.2](https://github.com/discordjs/discord-api-types/compare/0.25.1...0.25.2) (2021-11-30)

### Bug Fixes

- **APISelectMenuComponent:** `options` property is required ([#248](https://github.com/discordjs/discord-api-types/issues/248)) ([51dee6e](https://github.com/discordjs/discord-api-types/commit/51dee6e0e5bb4d749b9f0436e7ec9d4793e56567))

### Features

- **Guild:** boost progress bars ([#227](https://github.com/discordjs/discord-api-types/issues/227)) ([47382b6](https://github.com/discordjs/discord-api-types/commit/47382b6183a1d232053fef23691d423f8af88f88))

## [0.25.1](https://github.com/discordjs/discord-api-types/compare/0.25.0...0.25.1) (2021-11-30)

### Bug Fixes

- **deno:** faulty import paths for guild scheduled events ([#245](https://github.com/discordjs/discord-api-types/issues/245)) ([44c0f05](https://github.com/discordjs/discord-api-types/commit/44c0f05cb2fc2b9ea50745530ae94a669a839594))

# [0.25.0](https://github.com/discordjs/discord-api-types/compare/0.24.0...0.25.0) (2021-11-29)

### Bug Fixes

- **APIApplicationCommandOption:** remove `default` property ([#242](https://github.com/discordjs/discord-api-types/issues/242)) ([faa8bf4](https://github.com/discordjs/discord-api-types/commit/faa8bf494bc79b844ce73e1892461e8440dc7abc))
- correct types for autocomplete interaction data ([#234](https://github.com/discordjs/discord-api-types/issues/234)) ([691abb5](https://github.com/discordjs/discord-api-types/commit/691abb581fb17093b5fa139f3ff53cbc0ad0b2a1))
- correct types for REST attachments ([#238](https://github.com/discordjs/discord-api-types/issues/238)) ([fa54b9d](https://github.com/discordjs/discord-api-types/commit/fa54b9de5522b9fa9d5367650950f8b0e44f6e14))
- make subcommand options optional ([#241](https://github.com/discordjs/discord-api-types/issues/241)) ([7379a34](https://github.com/discordjs/discord-api-types/commit/7379a345e820703a59a2d754c8ee7c0f0c710e09))

### Code Refactoring

- **UserFlags:** update flag names ([#229](https://github.com/discordjs/discord-api-types/issues/229)) ([f2d62e3](https://github.com/discordjs/discord-api-types/commit/f2d62e3cdf6128357f65e946fe1926cf915a6395))

### Features

- add guild scheduled event ([#186](https://github.com/discordjs/discord-api-types/issues/186)) ([d333962](https://github.com/discordjs/discord-api-types/commit/d333962715a58bd5ac14ad80e900b43b02777794))
- **RESTPostAPIChannelThreadsJSONBody:** add `rate_limit_per_user` ([#237](https://github.com/discordjs/discord-api-types/issues/237)) ([1e52e0c](https://github.com/discordjs/discord-api-types/commit/1e52e0ceab31465c7bbd820e332ef219ad715916))
- add max/min option for number-based options ([#221](https://github.com/discordjs/discord-api-types/issues/221)) ([bc1d03e](https://github.com/discordjs/discord-api-types/commit/bc1d03e527b9d37fac6d76cfbb51f4eeb8238e7b))
- add maze api error ([#228](https://github.com/discordjs/discord-api-types/issues/228)) ([7a15c97](https://github.com/discordjs/discord-api-types/commit/7a15c9786333fb6f2259f42536cfbf2cf0e43db8))
- **ActivityFlags:** add new flags ([#207](https://github.com/discordjs/discord-api-types/issues/207)) ([0f51d8e](https://github.com/discordjs/discord-api-types/commit/0f51d8e83f8aa53efde5c01849aaf09b91d15cbd))
- **ApplicationFlags:** add message content intent flags ([#226](https://github.com/discordjs/discord-api-types/issues/226)) ([d189e36](https://github.com/discordjs/discord-api-types/commit/d189e36c49cd230f98798ff57b668a6fe56df11b))
- **Attachments:** multi uploads and alt text ([#223](https://github.com/discordjs/discord-api-types/issues/223)) ([fdf133e](https://github.com/discordjs/discord-api-types/commit/fdf133ef45d3871defb46e47079c2acdd65e69d7))
- **GuildSystemChannelFlags:** add suppress member join sticker replies flag ([#222](https://github.com/discordjs/discord-api-types/issues/222)) ([4021dae](https://github.com/discordjs/discord-api-types/commit/4021dae44b331198d164a7c93dbc1242184efdf7))
- **Interactions:** add autocomplete api types ([#205](https://github.com/discordjs/discord-api-types/issues/205)) ([3b9320d](https://github.com/discordjs/discord-api-types/commit/3b9320dbf2cbbae7db44f00e8deaf336ab052e8b))
- **UserFlags:** add `BOT_HTTP_INTERACTIONS` flag ([#212](https://github.com/discordjs/discord-api-types/issues/212)) ([a015f96](https://github.com/discordjs/discord-api-types/commit/a015f96fcb4a74866f884db87732876095788111))

### BREAKING CHANGES

- **UserFlags:** All user flags now follow the internal name, with descriptions added for what they represent. This means you'll have to do some minor renaming in your code if you check for flags.
- **APIApplicationCommandOption:** If you were using the `default` property for ApplicationCommandOptions, it has been removed, as Discord wasn't even taking it into account anymore.
- The types for autocomplete interactions have been corrected.

# [0.24.0](https://github.com/discordjs/discord-api-types/compare/0.23.1...0.24.0) (2021-10-16)

### Bug Fixes

- **APISelectMenuComponent:** make options field optional ([#209](https://github.com/discordjs/discord-api-types/issues/209)) ([0c592a0](https://github.com/discordjs/discord-api-types/commit/0c592a0950431f43143bf1c32589bce2dd842b44))

### Code Refactoring

- **APIVoiceRegion:** removed `vip` property ([#214](https://github.com/discordjs/discord-api-types/issues/214)) ([7db6953](https://github.com/discordjs/discord-api-types/commit/7db69531d86fe5bdd462747b1e1287ee6b2dc496))

### Features

- **APIApplicationCommand:** add `channel_types` field to channel options ([#198](https://github.com/discordjs/discord-api-types/issues/198)) ([77396b5](https://github.com/discordjs/discord-api-types/commit/77396b557c6f3d4f85cfc4cd3b253638bc5b449d))
- **APIAttachment:** add ephemeral field ([#199](https://github.com/discordjs/discord-api-types/issues/199)) ([2aee879](https://github.com/discordjs/discord-api-types/commit/2aee87960070cb56979d3ced453c8cd64e81f150))
- **APIGuildMember:** add per guild avatars ([#208](https://github.com/discordjs/discord-api-types/issues/208)) ([0331518](https://github.com/discordjs/discord-api-types/commit/0331518c49c4761f900bacd8ca8a92e38b36b6e9))
- **APIRole:** add role icons ([#204](https://github.com/discordjs/discord-api-types/issues/204)) ([1076822](https://github.com/discordjs/discord-api-types/commit/1076822b90a1b6facf74aa3f2a6750566b3feb53))
- **InteractionResolvedChannels:** add `parent_id` and `thread_metadata` fields to resolved channels ([#210](https://github.com/discordjs/discord-api-types/issues/210)) ([64e4e52](https://github.com/discordjs/discord-api-types/commit/64e4e5246cd61eadf35591b8afdf4c5922fd4086))
- **PermissionFlagBits:** update thread permissions ([#181](https://github.com/discordjs/discord-api-types/issues/181)) ([68d97ae](https://github.com/discordjs/discord-api-types/commit/68d97aed1425002677acdf1d5444b36d3cfcc322))
- **PermissionFlagsBits:** add `StartEmbeddedActivities` ([#197](https://github.com/discordjs/discord-api-types/issues/197)) ([4bbe1ea](https://github.com/discordjs/discord-api-types/commit/4bbe1eaa867da810a1d039b21c3fc78208a50801))
- **RESTJSONErrorCodes:** add error 50101 ([#202](https://github.com/discordjs/discord-api-types/issues/202)) ([b453d75](https://github.com/discordjs/discord-api-types/commit/b453d75e4d13d34836247929be56c042cbc4b762))
- **Routes:** add missing OAuth2 routes ([#218](https://github.com/discordjs/discord-api-types/issues/218)) ([9dd3446](https://github.com/discordjs/discord-api-types/commit/9dd3446b64f31ae0831944f5c608095d650142d7))

### BREAKING CHANGES

- **APIVoiceRegion:** The `vip` property has been removed.

## [0.23.1](https://github.com/discordjs/discord-api-types/compare/0.23.0...0.23.1) (2021-09-08)

### Bug Fixes

- **RESTPostAPIBaseApplicationCommandsJSONBody:** omit `version` field ([#195](https://github.com/discordjs/discord-api-types/issues/195)) ([43cc755](https://github.com/discordjs/discord-api-types/commit/43cc755e3390437d11f7733477a2c86afd6daf23))

# [0.23.0](https://github.com/discordjs/discord-api-types/compare/0.22.0...0.23.0) (2021-09-07)

### Bug Fixes

- **AuditLog:** correct `nickname` type ([#189](https://github.com/discordjs/discord-api-types/issues/189)) ([64937e2](https://github.com/discordjs/discord-api-types/commit/64937e2311bf5e688f6789d9e66827e980e4e01c))
- **Embed:** correct certain optional types as being required ([#192](https://github.com/discordjs/discord-api-types/issues/192)) ([e628f0f](https://github.com/discordjs/discord-api-types/commit/e628f0f6f089a0840b9d69bea930dd3ad7fa7462))
- import causing error 404 on deno ([#178](https://github.com/discordjs/discord-api-types/issues/178)) ([8fcd0f2](https://github.com/discordjs/discord-api-types/commit/8fcd0f2222a77a1a0b19888d699e98d450268cc8))

### chore

- **Gateway:** remove `APPLICATION_COMMAND_*` events ([#191](https://github.com/discordjs/discord-api-types/issues/191)) ([d590caf](https://github.com/discordjs/discord-api-types/commit/d590caf359b61aa77780385437929f443cbf4a26))

### Features

- **APIApplicationCommand:** add `version` field ([#193](https://github.com/discordjs/discord-api-types/issues/193)) ([ecbed18](https://github.com/discordjs/discord-api-types/commit/ecbed180424c0975c52208f0f803b08f105df04a))
- **APIUser:** add `banner` and `accent_color` ([#183](https://github.com/discordjs/discord-api-types/issues/183)) ([b07b903](https://github.com/discordjs/discord-api-types/commit/b07b9030c134fdaf53f500d319c88067c1a8a175))
- **Interactions:** context menu items ([#166](https://github.com/discordjs/discord-api-types/issues/166)) ([fdc1c1a](https://github.com/discordjs/discord-api-types/commit/fdc1c1a5b411d8ef3d635ad90bd97c2b1bf77cf1))
- **JSONErrorCodes:** add `160002` ([#190](https://github.com/discordjs/discord-api-types/issues/190)) ([8b49887](https://github.com/discordjs/discord-api-types/commit/8b49887c7f732fe88cadb1e6ca17e0dc12db25f9))
- **MessageType:** add ContextMenuCommand and rename ApplicationCommand to ChatInputCommand ([#180](https://github.com/discordjs/discord-api-types/issues/180)) ([0024823](https://github.com/discordjs/discord-api-types/commit/0024823d053c15491011eb6d11c314e299689ba5))
- **Threads:** add `invitable` ([#185](https://github.com/discordjs/discord-api-types/issues/185)) ([b6babf2](https://github.com/discordjs/discord-api-types/commit/b6babf2ee2c66817ac99752d14feed2d574ecb14))

### BREAKING CHANGES

- **Gateway:** The three Application Command events have been removed
- **Embed:**
  - `APIEmbedAuthor#name` is required, not optional
  - `APIEmbedThumbnail#url` is required, not optional
  - `APIEmbedImage#url` is required, not optional

# [0.22.0](https://github.com/discordjs/discord-api-types/compare/0.21.0...0.22.0) (2021-07-31)

### Bug Fixes

- **Gateway:** thread list sync now sends an array as documented ([#174](https://github.com/discordjs/discord-api-types/issues/174)) ([a93235c](https://github.com/discordjs/discord-api-types/commit/a93235c9df2bc36a337c03e8ba08986e6e377483))
- **MessageComponent:** correct type for emoji ([#176](https://github.com/discordjs/discord-api-types/issues/176)) ([b75b05f](https://github.com/discordjs/discord-api-types/commit/b75b05f0d50014335fefc8bb8969d519ed0076d3))

### chore

- **ApplicationCommandOptionType:** casing changes for subcommands ([#175](https://github.com/discordjs/discord-api-types/issues/175)) ([f93b6be](https://github.com/discordjs/discord-api-types/commit/f93b6be2528c80f8dc038282a7d6ddb3c4685c2f))

### Features

- thread updates ([#167](https://github.com/discordjs/discord-api-types/issues/167)) ([47100bc](https://github.com/discordjs/discord-api-types/commit/47100bcf2c154146baecb359e1c00ecca9939ffa))

### BREAKING CHANGES

- **ApplicationCommandOptionType:** This renames `SubCommand` to `Subcommand`, and `SubCommandGroup` to `SubcommandGroup`
- `Routes#channelJoinedArchivedThreads` is now spelled right (from `Routes#channelJoinedArhivedThreads`)
- **Gateway:** `GatewayThreadListSync#members` is now an array of APIThreadMember instead of a Record of GatewayThreadListSyncMember

# [0.21.0](https://github.com/discordjs/discord-api-types/compare/0.20.1...0.21.0) (2021-07-30)

### Bug Fixes

- change resolved index types to string ([#169](https://github.com/discordjs/discord-api-types/issues/169)) ([d338409](https://github.com/discordjs/discord-api-types/commit/d338409410854cc1f97f9903fdc2565e1f45e778))
- export APIPingInteraction ([#168](https://github.com/discordjs/discord-api-types/issues/168)) ([ef2a0ae](https://github.com/discordjs/discord-api-types/commit/ef2a0aeb07cdd04b47e6cb0d40dd8a1b2a77b491))
- **APIInteraction:** bring back Ping type ([#164](https://github.com/discordjs/discord-api-types/issues/164)) ([ff75eb3](https://github.com/discordjs/discord-api-types/commit/ff75eb3f5dfd7597968c26133d125cfe40ee5838))

### Features

- **ApplicationCommandOptionType:** add Number (10) ([#153](https://github.com/discordjs/discord-api-types/issues/153)) ([6f15e53](https://github.com/discordjs/discord-api-types/commit/6f15e537dfee5bda383572cd725c05246c97ca62))
- **Globals:** revert template bigint type to string type ([#171](https://github.com/discordjs/discord-api-types/issues/171)) ([f299507](https://github.com/discordjs/discord-api-types/commit/f2995073e033b050ab459c42b480e626f3f6ae8e))

### Reverts

- fix: change resolved index types to string ([#172](https://github.com/discordjs/discord-api-types/issues/172)) ([647905e](https://github.com/discordjs/discord-api-types/commit/647905e16bfeb689e644695657ac5f05920c0c4c))

### BREAKING CHANGES

- **Globals:** The type for Snowflake and Permissions is reverted from the `${bigint}` template type back to a normal string type

## [0.20.2](https://github.com/discordjs/discord-api-types/compare/0.21.0...0.20.2) (2021-07-21)

### Bug Fixes

- **APIInteraction:** bring back Ping type ([#164](https://github.com/discordjs/discord-api-types/issues/164)) ([ff75eb3](https://github.com/discordjs/discord-api-types/commit/ff75eb3f5dfd7597968c26133d125cfe40ee5838))

## [0.20.1](https://github.com/discordjs/discord-api-types/compare/0.20.0...0.20.1) (2021-07-20)

### Features

- **Interactions:** add interaction response and followup route ([#162](https://github.com/discordjs/discord-api-types/issues/162)) ([f99f07f](https://github.com/discordjs/discord-api-types/commit/f99f07f72e95a9537a955eb942b52e345c1067d6))

# [0.20.0](https://github.com/discordjs/discord-api-types/compare/0.19.0...0.20.0) (2021-07-20)

### chore

- Add more missing stuff ([#160](https://github.com/discordjs/discord-api-types/issues/160)) ([d009554](https://github.com/discordjs/discord-api-types/commit/d009554caed6c738c4a801f00806ab7cc4ac7e16))

### Code Refactoring

- change `xID` to `xId` ([#159](https://github.com/discordjs/discord-api-types/issues/159)) ([323e531](https://github.com/discordjs/discord-api-types/commit/323e531a77aa75397ee1ce59f0db35b08b80b606))
- rename `isStyledButton` to `isInteractionButton` ([#158](https://github.com/discordjs/discord-api-types/issues/158)) ([634f64d](https://github.com/discordjs/discord-api-types/commit/634f64d4ce143bd0a6b9ccf0ffb1241c21550958))

### Features

- **PermissionFlagsBits:** add `UseExternalStickers` (1n << 37n) ([#154](https://github.com/discordjs/discord-api-types/issues/154)) ([5dccc6b](https://github.com/discordjs/discord-api-types/commit/5dccc6b2a3711e14d499ee9a2122403a80da99fe))
- **RESTJSONErrorCodes:** add sticker errors ([#155](https://github.com/discordjs/discord-api-types/issues/155)) ([8dbeca0](https://github.com/discordjs/discord-api-types/commit/8dbeca0fc91cafef59eb8ee30bcfee9ab14a422c))

### BREAKING CHANGES

- `GatewayGuildMemberUpdateDispatchData#joined_at` is properly marked as nullable now
- In v9, `thread_id` was incorrectly placed in `RESTPostAPIWebhookWithTokenJSONBody` and has been moved to `RESTPostAPIWebhookWithTokenQuery`
- All types that contained the `ID` word in them have had it renamed to `Id` (ex: `APIButtonComponentWithCustomID` is now `APIButtonComponentWithCustomId`)
- The `isStyledButton` util has been renamed to `isInteractionButton`

# [0.19.0](https://github.com/discordjs/discord-api-types/compare/0.18.1...0.19.0) (2021-07-19)

### Bug Fixes

- **FormattingPatterns:** fix StyledTimestamp ([#147](https://github.com/discordjs/discord-api-types/issues/147)) ([dd12c6a](https://github.com/discordjs/discord-api-types/commit/dd12c6ac9902d1b300a167f0acd9fba5192aaa91))
- **RESTOAuth2:** correct casing of `OAuth` ([#134](https://github.com/discordjs/discord-api-types/issues/134)) ([f0b2766](https://github.com/discordjs/discord-api-types/commit/f0b2766d5b55bd9b8b8ba9c506a868dafcdca568))
- **RESTPostAPIWebhookWithTokenJSONBody:** add missing components ([#152](https://github.com/discordjs/discord-api-types/issues/152)) ([ca933ae](https://github.com/discordjs/discord-api-types/commit/ca933ae84d54456f0a443e5e8bd10b7613271f62))
- fix autopublish CD ([#140](https://github.com/discordjs/discord-api-types/issues/140)) ([8627c9d](https://github.com/discordjs/discord-api-types/commit/8627c9d2195aaa0a97de2fdf9f64ba0c0ff6db02))

### chore

- Get up to date _again_ ([#156](https://github.com/discordjs/discord-api-types/issues/156)) ([86e0736](https://github.com/discordjs/discord-api-types/commit/86e0736726fb4ef13736510fa6d69f20383d5ea5))
- **RESTErrorCodes:** correct casing for OAuth ([ca6612e](https://github.com/discordjs/discord-api-types/commit/ca6612e0a4f313731009a37a81c3a0834e6a0cd8))

### Code Refactoring

- **Enums:** make property casing consistent ([#131](https://github.com/discordjs/discord-api-types/issues/131)) ([aa5e26d](https://github.com/discordjs/discord-api-types/commit/aa5e26d92b587bf9b4fc33e038a6d3c8586597c2))

### Features

- **Stickers:** sticker packs, sticker routes, and guild stickers ([#145](https://github.com/discordjs/discord-api-types/issues/145)) ([4a83629](https://github.com/discordjs/discord-api-types/commit/4a836293d5224a6cad19c50bc074a9ef9b0f0af4))
- add stage instance related typings to audit logs ([#151](https://github.com/discordjs/discord-api-types/issues/151)) ([836e8fb](https://github.com/discordjs/discord-api-types/commit/836e8fb29491f8df72c0caf2eb5c05ed2bda3191))
- **APIGuild:** add `nsfw_level` ([#149](https://github.com/discordjs/discord-api-types/issues/149)) ([5256ac7](https://github.com/discordjs/discord-api-types/commit/5256ac7f97d35200f1676721a80ad0f57d05cab7))
- **Channel:** add embeds to post / patch ([#143](https://github.com/discordjs/discord-api-types/issues/143)) ([13d483e](https://github.com/discordjs/discord-api-types/commit/13d483ef2e53373438e8b03fed681232626b2670))
- **FormattingPatterns:** add timestamp ([#146](https://github.com/discordjs/discord-api-types/issues/146)) ([16eae7e](https://github.com/discordjs/discord-api-types/commit/16eae7eafe9ef6001f664a30c0f78d6982d2e54c))
- **RESTErrors:** add types for rest errors ([#122](https://github.com/discordjs/discord-api-types/issues/122)) ([7b47fc9](https://github.com/discordjs/discord-api-types/commit/7b47fc96809aed2b28e15064f308651b08a5b74d))
- **Threads:** add typed thread creation ([#148](https://github.com/discordjs/discord-api-types/issues/148)) ([f393ba5](https://github.com/discordjs/discord-api-types/commit/f393ba520d7d6d2aacaca7b3ca5d355fab614f6e))
- add typings for stage instance ([#144](https://github.com/discordjs/discord-api-types/issues/144)) ([e36ef9e](https://github.com/discordjs/discord-api-types/commit/e36ef9e1d225d8e8c849c3198e628202eedbd20b))
- **Interactions:** components and component interactions ([#132](https://github.com/discordjs/discord-api-types/issues/132)) ([036bb03](https://github.com/discordjs/discord-api-types/commit/036bb035c9d6ddf780bab5af4884861d08f04d24))
- **Threads:** add default auto archive and minor tweaks ([#142](https://github.com/discordjs/discord-api-types/issues/142)) ([d2b6276](https://github.com/discordjs/discord-api-types/commit/d2b62761194064b38e38045a72ee8b38c920ada6))
- api v9 and threads ([#133](https://github.com/discordjs/discord-api-types/issues/133)) ([d1498c3](https://github.com/discordjs/discord-api-types/commit/d1498c3ce2eaea11c9946726ef758f7de489253b))

### BREAKING CHANGES

- `APISelectOption` has been renamed to `APISelectMenuOption`
- APISelectMenuOption#default is now properly marked as optional

- Updated OAuth2 Application types
- `APIApplication#owner` is now marked as optional, per the docs

- Correct APIAuditLogChangeKeyNick's key
- This renames APIAuditLogChangeKeyNick's key from `mute` to `nick`

- Add `application_id` to APIMessage
- Correct type of `id` and `user_id` in APIThreadMember
- The type of `id` and `user_id` in APIThreadMember are now marked as optional; read the TSDoc for when it's actually optional

- Correctly version API route in RouteBases
- This changes the `RouteBases.api` to be versioned based on the API version you're importing. **Make sure to update your code to handle that**

- Added new guild features
  ref: https://github.com/discordjs/discord-api-types/pull/156/commits/4d36e533cffecbcce13e968a7803e5a68e021106

- Cleaned up interaction types
- While this shouldn't be necessary, this is a warning that types for interactions HAVE changed and you may need to update your code. For the most part, the types _should_ be the same, more accurate and strictly typed. You will also see that every type of interaction has a Guild/DM counterpart exported (ex: APIApplicationCommandGuildInteraction vs APIApplicationCommandInteraction, where the former has all the guild properties, while the latter has all properties that depend on context marked as optional).

- Add message property to MessageComponent interactions
- **RESTErrorCodes:** This properly capitalizes certain error codes with the right OAuth capitalization
- **RESTOAuth2:** `RESTGetAPIOauth2CurrentApplicationResult` and `RESTGetAPIOauth2CurrentAuthorizationResult` have been renamed to `RESTGetAPIOAuth2CurrentApplicationResult ` and `RESTGetAPIOAuth2CurrentAuthorizationResult`, to correct the casing of `OAuth`

- **Enums:** Enum keys have been normalized, and they are all PascalCased now (for API v8 and above). API v6 did not receive these changes.

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

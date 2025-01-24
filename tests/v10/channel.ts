import type {
	ChannelType,
	APIPartialChannel,
	APIGroupDMChannel,
	APIDMChannel,
	APIGuildChannel,
	APITextChannel,
	APIThreadChannel,
	APIGuildVoiceChannel,
	APIGuildStageVoiceChannel,
} from '../../v10';
import { expectAssignable, expectNotAssignable } from '../__utils__/type-assertions';

type AnyGuildChannel = APIGuildChannel<ChannelType>;

declare const partialChannel: APIPartialChannel;
declare const dmChannel: APIDMChannel;
declare const groupDMChannel: APIGroupDMChannel;
declare const guildChannel: AnyGuildChannel;
declare const guildTextChannel: APITextChannel;
declare const guildThreadChannel: APIThreadChannel;
declare const guildVoiceChannel: APIGuildVoiceChannel;
declare const guildVoiceStageChannel: APIGuildStageVoiceChannel;

// Make sure types follow expected hierarchy
// @ts-expect-error - dmChannel is not assignable to AnyGuildChannel
expectNotAssignable<AnyGuildChannel>(dmChannel);
// @ts-expect-error - groupDMChannel is not assignable to AnyGuildChannel
expectNotAssignable<AnyGuildChannel>(groupDMChannel);
expectAssignable<AnyGuildChannel>(guildTextChannel);
expectAssignable<AnyGuildChannel>(guildThreadChannel);
expectAssignable<AnyGuildChannel>(guildVoiceChannel);
expectAssignable<AnyGuildChannel>(guildVoiceStageChannel);

// Test channel names are properly typed
// Always non-null present for non-DM channels, always null for DM channel
expectAssignable<string | null | undefined>(partialChannel.name);
expectAssignable<string | null>(groupDMChannel.name);
expectAssignable<null>(dmChannel.name);
expectAssignable<string>(guildChannel.name);

// Test last pin timestamp
expectAssignable<string | null | undefined>(dmChannel.last_pin_timestamp);
expectAssignable<string | null | undefined>(groupDMChannel.last_pin_timestamp);
expectAssignable<string | null | undefined>(guildTextChannel.last_pin_timestamp);
expectAssignable<string | null | undefined>(guildThreadChannel.last_pin_timestamp);

let _: any;

// @ts-expect-error - last_pin_timestamp does not exist on this channel type
_ = guildVoiceChannel.last_pin_timestamp;
// @ts-expect-error - last_pin_timestamp does not exist on this channel type
_ = guildVoiceStageChannel.last_pin_timestamp;

// Test rate limit types
expectAssignable<number | undefined>(guildTextChannel.default_thread_rate_limit_per_user);

// @ts-expect-error - default_thread_rate_limit_per_user does not exist on this channel type
_ = guildVoiceChannel.default_thread_rate_limit_per_user;

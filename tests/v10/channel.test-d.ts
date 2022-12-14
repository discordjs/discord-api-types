import { expectType, expectAssignable, expectNotAssignable, expectError } from 'tsd';
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
expectNotAssignable<AnyGuildChannel>(dmChannel);
expectNotAssignable<AnyGuildChannel>(groupDMChannel);
expectAssignable<AnyGuildChannel>(guildTextChannel);
expectAssignable<AnyGuildChannel>(guildThreadChannel);
expectAssignable<AnyGuildChannel>(guildVoiceChannel);
expectAssignable<AnyGuildChannel>(guildVoiceStageChannel);

// Test channel names are properly typed
// Always non-null present for non-DM channels, always null for DM channel
expectType<string | null | undefined>(partialChannel.name);
expectType<string | null>(groupDMChannel.name);
expectType<null>(dmChannel.name);
expectType<string>(guildChannel.name);

// Test last pin timestamp
expectType<string | null | undefined>(dmChannel.last_pin_timestamp);
expectType<string | null | undefined>(groupDMChannel.last_pin_timestamp);
expectType<string | null | undefined>(guildTextChannel.last_pin_timestamp);
expectType<string | null | undefined>(guildThreadChannel.last_pin_timestamp);
expectError(guildVoiceChannel.last_pin_timestamp);
expectError(guildVoiceStageChannel.last_pin_timestamp);

// Test rate limit types
expectType<number | undefined>(guildTextChannel.default_thread_rate_limit_per_user);
expectError(guildVoiceChannel.default_thread_rate_limit_per_user);

import { expectType } from 'tsd';
import type { ChannelType, APIPartialChannel, APIGroupDMChannel, APIDMChannel, APIGuildChannel } from '../../v10';

declare const partialChannel: APIPartialChannel;
declare const groupDMChannel: APIGroupDMChannel;
declare const dmChannel: APIDMChannel;
declare const guildChannel: APIGuildChannel<ChannelType>;

// Test channel names are properly typed
// Always non-null present for non-DM channels, always null for DM channel
expectType<string | null | undefined>(partialChannel.name);
expectType<string | null>(groupDMChannel.name);
expectType<null>(dmChannel.name);
expectType<string>(guildChannel.name);

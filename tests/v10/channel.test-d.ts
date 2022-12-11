import { expectType } from 'tsd';
import type { ChannelType, APIPartialChannel, APIGroupDMChannel, APIDMChannel, APIGuildChannel } from '../../v10';

const anything: unknown = null;

// Test channel names are properly typed
// Always non-null present for non-DM channels, always null for DM channel
expectType<string | null | undefined>((anything as APIPartialChannel).name);
expectType<string | null | undefined>((anything as APIGroupDMChannel).name);
expectType<null | undefined>((anything as APIDMChannel).name);
expectType<string | undefined>((anything as APIGuildChannel<ChannelType>).name);

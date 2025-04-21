import { strictEqual } from 'node:assert';
import { Routes } from '../../v10';

const channelId = '1320466398597615666';
const messageId = '1320622300642545705';

const expected = `/channels/${channelId}/messages/${messageId}/reactions/%F0%9F%95%99/@me`;

// Run multiple times to ensure that the validation isn't intermittent
strictEqual(Routes.channelMessageOwnReaction(channelId, messageId, '%F0%9F%95%99'), expected);
strictEqual(Routes.channelMessageOwnReaction(channelId, messageId, '%F0%9F%95%99'), expected);
strictEqual(Routes.channelMessageOwnReaction(channelId, messageId, '%F0%9F%95%99'), expected);

// make sure that the emoji is properly encoded
const emoji = '🕙';

strictEqual(Routes.channelMessageOwnReaction(channelId, messageId, emoji), expected);

// test custom emojis too
const animated = '1_:1234567890';
const encodedExpected = '1_%3A1234567890';

const expected2 = `/channels/${channelId}/messages/${messageId}/reactions/${encodedExpected}/@me`;

strictEqual(Routes.channelMessageOwnReaction(channelId, messageId, animated), expected2);
strictEqual(Routes.channelMessageOwnReaction(channelId, messageId, encodedExpected), expected2);

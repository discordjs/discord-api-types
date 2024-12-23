import { strictEqual } from 'node:assert';
import { Routes } from '../../v10';

const expected = '/channels/1320466398597615666/messages/1320622300642545705/reactions/%F0%9F%95%99/@me';

strictEqual(Routes.channelMessageOwnReaction('1320466398597615666', '1320622300642545705', '%F0%9F%95%99'), expected);
strictEqual(Routes.channelMessageOwnReaction('1320466398597615666', '1320622300642545705', '%F0%9F%95%99'), expected);
strictEqual(Routes.channelMessageOwnReaction('1320466398597615666', '1320622300642545705', '%F0%9F%95%99'), expected);

const emoji = '🕙';

strictEqual(Routes.channelMessageOwnReaction('1320466398597615666', '1320622300642545705', emoji), expected);

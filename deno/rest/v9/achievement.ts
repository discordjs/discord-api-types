import type { APIAchievement } from '../../payloads/v10/achievement.ts';

/**
 * https://discord.com/developers/docs/game-sdk/achievements#get-achievements
 */
export type RESTGetAPIAchievementsResult = APIAchievement[];

/**
 * https://discord.com/developers/docs/game-sdk/achievements#get-achievement
 */
export type RESTGetAPIAchievementResult = APIAchievement;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#create-achievement
 */
export type RESTPostAPIAchievementJSONBody = Omit<APIAchievement, 'application_id' | 'id'>;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#create-achievement
 */
export type RESTPostAPIAchievementResult = APIAchievement;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#update-achievement
 */
export type RESTPatchAPIAchievementJSONBody = Omit<Partial<APIAchievement>, 'application_id' | 'id'>;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#update-achievement
 */
export type RESTPatchAPIAchievementResult = APIAchievement;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#delete-achievement
 */
export type RESTDeleteAPIAchievementResult = never;

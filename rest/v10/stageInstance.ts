import type { Snowflake } from '../../globals';
import type { APIStageInstance, StageInstancePrivacyLevel } from '../../payloads/v10/index';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface } from '../../utils/internals';

/**
 * https://discord.com/developers/docs/resources/stage-instance#create-stage-instance
 */
export interface RESTPostAPIStageInstanceJSONBody {
	/**
	 * The id of the stage channel
	 */
	channel_id: Snowflake;
	/**
	 * The topic of the stage instance (1-120 characters)
	 */
	topic: string;
	/**
	 * The privacy level of the stage instance
	 *
	 * @default GuildOnly
	 */
	privacy_level?: StageInstancePrivacyLevel;
}

/**
 * https://discord.com/developers/docs/resources/stage-instance#create-stage-instance
 */
export type RESTPostAPIStageInstanceResult = APIStageInstance;

/**
 * https://discord.com/developers/docs/resources/stage-instance#get-stage-instance
 */
export type RESTGetAPIStageInstanceResult = APIStageInstance;

/**
 * https://discord.com/developers/docs/resources/stage-instance#update-stage-instance
 */
export type RESTPatchAPIStageInstanceJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * The topic of the stage instance (1-120 characters)
	 */
	topic?: string;
	/**
	 * The privacy level of the stage instance
	 */
	privacy_level?: StageInstancePrivacyLevel;
}>;

/**
 * https://discord.com/developers/docs/resources/stage-instance#update-stage-instance
 */
export type RESTPatchAPIStageInstanceResult = APIStageInstance;

/**
 * https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance
 */
export type RESTDeleteAPIStageInstanceResult = never;

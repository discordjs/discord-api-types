import type { Snowflake } from '../../globals.ts';
import type { APIStageInstance, StageInstancePrivacyLevel } from '../../payloads/v8/mod.ts';

/**
 * https://docs.discord.com/developers/resources/stage-instance#create-stage-instance
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
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
	privacy_level?: StageInstancePrivacyLevel | undefined;
}

/**
 * https://docs.discord.com/developers/resources/stage-instance#create-stage-instance
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPostAPIStageInstanceResult = APIStageInstance;

/**
 * https://docs.discord.com/developers/resources/stage-instance#get-stage-instance
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIStageInstanceResult = APIStageInstance;

/**
 * https://docs.discord.com/developers/resources/stage-instance#update-stage-instance
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface RESTPatchAPIStageInstanceJSONBody {
	/**
	 * The topic of the stage instance (1-120 characters)
	 */
	topic?: string | undefined;
	/**
	 * The privacy level of the stage instance
	 */
	privacy_level?: StageInstancePrivacyLevel | undefined;
}

/**
 * https://docs.discord.com/developers/resources/stage-instance#update-stage-instance
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTPatchAPIStageInstanceResult = APIStageInstance;

/**
 * https://docs.discord.com/developers/resources/stage-instance#delete-stage-instance
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTDeleteAPIStageInstanceResult = never;

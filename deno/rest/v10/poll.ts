import type { Snowflake } from '../../globals.ts';
import type { APIMessage, APIUser } from '../../v10.ts';

/**
 * https://discord.com/developers/docs/resources/poll#get-answer-voters
 */
export interface RESTGetAPIPollAnswerVotersQuery {
	/**
	 * Get users after this user ID
	 */
	after?: Snowflake;
	/**
	 * Max number of users to return (1-100)
	 *
	 * @default 25
	 */
	limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/poll#get-answer-voters
 */
export interface RESTGetAPIPollAnswerVotersResult {
	/**
	 * Users who created to this answer
	 */
	users: APIUser[];
}

/**
 * https://discord.com/developers/docs/resources/poll#expire-poll
 */
export type RESTPostAPIPollExpireResult = APIMessage;

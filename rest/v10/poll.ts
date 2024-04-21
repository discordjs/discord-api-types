import type { Snowflake } from '../../globals';
import type { APIMessage, APIPoll, APIPollAnswer, APIUser } from '../../v10';

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
 * https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure
 */
export interface RESTAPIPollCreate extends Omit<APIPoll, 'answers' | 'expiry' | 'results'> {
	/**
	 * Number of hours the poll should be open for, up to 7 days
	 */
	duration: number;
	/**
	 * Each of the answers available in the poll, up to 10
	 */
	answers: Omit<APIPollAnswer, 'answer_id'>[];
}

/**
 * https://discord.com/developers/docs/resources/poll#get-answer-voters
 */
export interface RESTGetAPIPollAnswerVotersResult {
	/**
	 * Users who voted for this answer
	 */
	users: APIUser[];
}

/**
 * https://discord.com/developers/docs/resources/poll#expire-poll
 */
export type RESTPostAPIPollExpireResult = APIMessage;

/**
 * Types extracted from https://discord.com/developers/docs/resources/poll
 */

import type { APIPartialEmoji } from './emoji.ts';

/**
 * https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure
 */
export interface APIPoll {
	/**
	 * The question of the poll
	 */
	question: APIPollMedia;
	/**
	 * Each of the answers available in the poll
	 */
	answers: APIPollAnswer[];
	/**
	 * The time when the poll ends (IS08601 timestamp)
	 */
	expiry: string;
	/**
	 * Whether a user can select multiple answers
	 */
	allow_multiselect: boolean;
	/**
	 * The layout type of the poll
	 */
	layout_type: PollLayoutType;
	/**
	 * The results of the poll
	 */
	results: APIPollResults;
}

/**
 * https://discord.com/developers/docs/resources/poll#layout-type
 */
export enum PollLayoutType {
	/**
	 * The, uhm, default layout type
	 */
	Default = 1,
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
 */
export interface APIPollMedia {
	/**
	 * The text of the field
	 */
	text?: string;
	/**
	 * The emoji of the field
	 */
	emoji?: APIPartialEmoji;
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
 */
export interface APIPollAnswer {
	/**
	 * The ID of the answer
	 */
	answer_id: number;
	/**
	 * The data of the answer
	 */
	media: APIPollMedia;
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure
 */
export interface APIPollResults {
	/**
	 * Whether the votes have been precisely counted
	 */
	is_finalized: boolean;
	/**
	 * The counts for each answer
	 */
	answer_counts: APIPollAnswerCount[];
}

/**
 * https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure
 */
export interface APIPollAnswerCount {
	/**
	 * The `answer_id`
	 */
	id: number;
	/**
	 * The number of votes for this answer
	 */
	count: number;
	/**
	 * Whether the current user voted for this answer
	 */
	me_voted: boolean;
}

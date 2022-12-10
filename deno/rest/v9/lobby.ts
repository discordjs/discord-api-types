import type { Snowflake } from '../../globals.ts';
import type { APILobby } from '../../payloads/v10/lobby.ts';

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby
 */
export type RESTPostAPILobbyJSONBody = Pick<APILobby, 'application_id'> &
	Omit<Partial<APILobby>, 'id' | 'owner_id' | 'secret'>;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby
 */
export type RESTPostAPILobbyResult = APILobby;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#update-lobby
 */
export type RESTPatchAPILobbyJSONBody = Pick<Partial<APILobby>, 'type' | 'metadata' | 'capacity'>;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#update-lobby
 */
export type RESTPatchAPILobbyResult = APILobby;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#delete-lobby
 */
export type RESTDeleteAPILobbyResult = never;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#update-lobby-member
 */
export type RESTPatchAPILobbyMemberJSONBody = Pick<Partial<APILobby>, 'metadata'>;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search
 */
export interface RESTPostAPILobbySearchJSONBody {
	/**
	 * The application id
	 */
	application_id: Snowflake;
	/**
	 * The filter to check against
	 */
	filter: SearchFilter[];
	/**
	 * How to sort the results
	 */
	sort: SearchSort[];
	/**
	 * Limit of lobbies returned
	 *
	 * @default 25
	 */
	limit: number;
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search-searchfilter-object
 */
export interface SearchFilter {
	key: string;
	value: string;
	cast: SearchCast;
	comparison: SearchComparison;
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search-searchcast-types
 */
export enum SearchCast {
	String = 1,
	Number,
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search-searchcomparison-types
 */
export enum SearchComparison {
	EqualToOrLessThan = -2,
	LessThan = -1,
	Equal = 0,
	EqualToOrGreaterThan = 1,
	GreaterThan = 2,
	NotEqual = 3,
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search-searchsort-object
 */
export interface SearchSort {
	key: string;
	cast: SearchCast;
	near_value: string;
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#send-lobby-data
 */
export interface RESTPostAPILobbyDataJSONBody {
	/**
	 * Message content to be sent to other lobby members
	 */
	data: string;
}

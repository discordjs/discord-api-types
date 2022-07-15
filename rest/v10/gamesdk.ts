import type { Snowflake } from '../../globals';
import type { APIAchievement, APIEntitlement, APILobby, APISKU } from '../../payloads/v10/gamesdk';

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
export type RESTPatchAPIAchievementJSONBody = Omit<APIAchievement, 'application_id' | 'id'>;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#update-achievement
 */
export type RESTPatchAPIAchievementResult = APIAchievement;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#delete-achievement
 */
export type RESTDeleteAPIAchievementResult = never;

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
export type RESTPatchAPILobbyMemberJSONBody = Pick<APILobby, 'metadata'>;

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

/**
 * https://discord.com/developers/docs/game-sdk/store#get-entitlements
 */
export interface RESTGetAPIEntitlementsQuery {
	/**
	 * The user id to look up entitlements for
	 */
	user_id?: Snowflake;
	/**
	 * Comma-delimited set of SKU ids (snowflakes) to check entitlements for
	 */
	sku_ids?: string;
	/**
	 * Whether to include the payment data in the entitlement
	 */
	with_payments?: boolean;
	/**
	 * Retrieve entitlements before this date
	 */
	before?: Snowflake;
	/**
	 * Retrieve entitlements after this date
	 */
	after?: Snowflake;
	/**
	 * Entitlements to return (minimum 1, maximum 100)
	 *
	 * @default 100
	 */
	limit?: number;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#get-entitlements
 */
export type RESTGetAPIEntitlementsResult = APIEntitlement[];

/**
 * https://discord.com/developers/docs/game-sdk/store#get-entitlement
 */
export type RESTGetAPIEntitlementQuery = Pick<RESTGetAPIEntitlementsQuery, 'with_payments'>;

/**
 * https://discord.com/developers/docs/game-sdk/store#get-entitlement
 */
export type RESTGetAPIEntitlementResult = APIEntitlement;

/**
 * https://discord.com/developers/docs/game-sdk/store#get-skus
 */
export type RESTGetAPISKUsResult = APISKU[];

/**
 * https://discord.com/developers/docs/game-sdk/store#consume-sku
 */
export type RESTPostAPISKUConsumeResult = never;

/**
 * https://discord.com/developers/docs/game-sdk/store#delete-test-entitlement
 */
export type RESTDeleteAPITestEntitlementResult = never;

/**
 * https://discord.com/developers/docs/game-sdk/store#create-purchase-discount
 */
export interface RESTPutAPISKUDiscountJSONBody {
	/**
	 * The percentage of the discount (minimum of 1, maximum of 100)
	 */
	percent_off: number;
	/**
	 * The time to live for the discount, in seconds (minimum of 60, maximum of 3600)
	 *
	 * @default 600
	 */
	ttl?: number;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#delete-purchase-discount
 */
export type RESTDeleteAPISKUDiscountResult = never;

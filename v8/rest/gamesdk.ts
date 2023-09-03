import type { Snowflake } from '../../common/index';
import type { APIAchievement, APIEntitlement, APILobby, APISKU } from '../payloads/gamesdk';

/**
 * https://discord.com/developers/docs/game-sdk/achievements#get-achievements
 */
export type RESTGetAPIAchievementsResult = APIAchievement[];

/**
 * https://discord.com/developers/docs/game-sdk/achievements#get-achievement
 */
export type RESTGETAPIAchievementResult = APIAchievement;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#create-achievement-parameters
 */
export interface RESTPostAPIAchievementJSONBody {
	/**
	 * The name of the achievement
	 */
	name: string;
	/**
	 * The user-facing achievement description
	 */
	description: string;
	/**
	 * If the achievement is secret
	 */
	secret: boolean;
	/**
	 * If the achievement is secure
	 */
	secure: boolean;
	/**
	 * base64 png/jpeg image for the achievement icon
	 *
	 * See https://discord.com/developers/docs/reference#image-data
	 */
	icon: string;
}

/**
 * https://discord.com/developers/docs/game-sdk/achievements#create-achievement
 */
export type RESTPostAPIAchievementResult = APIAchievement;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#update-achievement-parameters
 */
export type RESTPatchAPIAchievementJSONBody = Partial<RESTPostAPIAchievementJSONBody>;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#update-achievement
 */
export type RESTPatchAPIAchievementResult = APIAchievement;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#delete-achievement
 */
export type RESTDeleteAPIAchievementResult = never;

/**
 * https://discord.com/developers/docs/game-sdk/achievements#update-user-achievement-parameters
 */
export interface RESTPutAPIUpdateUserAchievementJSONBody {
	/**
	 * The user's progress towards completing the achievement
	 */
	percent_complete: number;
}

/**
 * https://discord.com/developers/docs/game-sdk/achievements#update-user-achievement
 */
export interface RESTPutAPIUpdateUserAchievementResult {}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-parameters
 */
export type RESTPostAPICreateLobbyJSONBody = Omit<APILobby, 'secret' | 'id' | 'owner_id'> & { capacity?: number };

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby
 */
export type RESTPostAPICreateLobbyResult = APILobby;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-update-parameters
 */
export type RESTPatchAPICUpdateLobbyJSONBody = Partial<
	Omit<APILobby, 'secret' | 'id' | 'owner_id' | 'region' | 'application_id'>
>;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#update-lobby
 */
export type RESTPatchAPIUpdateLobbyResult = APILobby;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#delete-lobby
 */
export type RESTDeleteAPIDeleteLobbyResult = never;

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#update-lobby-member-parameters
 */
export interface RESTPatchAPILobbyMemberJSONBody {
	/**
	 * Metadata for the lobby member
	 */
	metadata: Record<string, string>;
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#update-lobby-member
 */
export interface RESTPatchAPILobbyMemberResult {}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search-searchfilter-object
 */
export interface CreateLobbySearchFilterObject {
	/**
	 * The metadata key to search
	 */
	key: string;
	/**
	 * The value of the metadata key to validate against
	 */
	value: string;
	/**
	 * The type to cast `value` as
	 */
	cast: CreateLobbySearchFilterObject;
	/**
	 * How to compare the metadata values
	 */
	comparison: CreateLobbySearchSearchComparison;
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search-searchcomparison-types
 */
export const enum CreateLobbySearchSearchComparison {
	EQUAL_TO_OR_LESS_THAN = -2,
	LESS_THAN,
	EQUAL,
	EQUAL_TO_OR_GREATER_THAN,
	GREATER_THAN,
	NOT_EQUAL,
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search-searchsort-object
 */
export interface CreateLobbySearchSearchSort {
	/**
	 * The metadata key on which to sort lobbies that meet the search criteria
	 */
	key: string;
	/**
	 * The type to cast `value` as
	 */
	cast: CreateLobbySearchCast;
	/**
	 * The value around which to sort the key
	 */
	near_value: string;
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search-searchcast-types
 */
export const enum CreateLobbySearchCast {
	STRING = 1,
	NUMBER,
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#create-lobby-search-parameters
 */
export interface RESTPostAPICreateLobbySearchJSONBody {
	/**
	 * The id of the application the lobby is under
	 */
	application_id: Snowflake;
	/**
	 * The filter to check against
	 */
	filter: CreateLobbySearchFilterObject;
	/**
	 * How to sort the results
	 */
	sort: CreateLobbySearchSearchSort;
	/**
	 * Limit of lobbies returned
	 *
	 * @default 25
	 */
	limit: number;
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#send-lobby-data
 */
export interface RESTPostAPISendLobyDataJSONBody {
	/**
	 * A message to be sent to other lobby members
	 */
	data: string;
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#send-lobby-data
 */
export type RESTPostAPISendLobyDataResult = never;

/**
 * https://discord.com/developers/docs/game-sdk/store#get-entitlement-query-parameters
 */
export interface RESTGetAPIEntitlementQuery {
	/**
	 * Whether or not to include payment data for each entitlement
	 */
	with_payments?: boolean;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#get-entitlement
 */
export type RESTGetAPIEntitlementResponse = APIEntitlement;

/**
 * https://discord.com/developers/docs/game-sdk/store#get-entitlements-query-parameters
 */
export interface RESTGetAPIGetEntitlementsQuery extends RESTGetAPIEntitlementQuery {
	/**
	 * The user id to look up entitlements for
	 */
	user_id?: Snowflake;
	/**
	 * The list SKU ids to check entitlements for
	 */
	sku_ids?: string;

	/**
	 * Retrieve entitlements before this time
	 */
	before?: Snowflake;
	/**
	 * Retrieve entitlements after this time
	 */
	after?: Snowflake;
	/**
	 * Number of entitlements to return (1-100)
	 *
	 * @default 100
	 */
	limit?: number;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#get-entitlements
 */
export type RESTGetAPIEntitlements = APIEntitlement[];

/**
 * https://discord.com/developers/docs/game-sdk/store#get-skus
 */
export type RESTGetAPISKUSResult = APISKU[];

/**
 * https://discord.com/developers/docs/game-sdk/store#consume-sku
 */
export type RESTPostAPISKUConsume = never;

/**
 * https://discord.com/developers/docs/game-sdk/store#delete-test-entitlement
 */
export type RESTDeleteAPIDeleteTestEntitlement = never;

/**
 * https://discord.com/developers/docs/game-sdk/store#create-purchase-discount-parameters
 */
export interface RESTPutAPICreatePurchaseDiscountJSONBody {
	/**
	 * The percentage to discount (1-100)
	 */
	percent_off: number;
	/**
	 * The time to live for the discount, in seconds (60-3600)
	 *
	 * @default 600
	 */
	ttl?: number;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#create-purchase-discount
 */
export type RESTPutAPICreatePurchaseDiscountResponse = never;

/**
 * https://discord.com/developers/docs/game-sdk/store#delete-purchase-discount
 */
export type RESTDeletePurchaseDiscountResult = never;

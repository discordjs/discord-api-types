import type { Snowflake } from '../../globals';
import type { APIEntitlement, APISKU } from '../../payloads/v10/store';

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

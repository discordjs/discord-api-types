import type { Snowflake } from '../../globals';
import type { APIEntitlement, APISKU } from '../../v10';

/**
 * https://discord.com/developers/docs/monetization/entitlements#list-entitlements
 */
export interface RESTListAPIEntitlementsQuery {
	/**
	 * User ID to look up entitlements for
	 */
	user_id?: Snowflake | undefined;
	/**
	 * Optional list of SKU IDs to check entitlements for
	 */
	sku_ids?: Snowflake[] | undefined;
	/**
	 * Retrieve entitlements before this time
	 */
	before?: Snowflake | undefined;
	/**
	 * Retrieve entitlements after this time
	 */
	after?: Snowflake | undefined;
	/**
	 * Number of entitlements to return, 1-100, default 100
	 */
	limit?: number | undefined;
	/**
	 * Guild ID to look up entitlements for
	 */
	guild_id?: Snowflake | undefined;
	/**
	 * Whether entitlements should be omitted
	 */
	exclude_ended?: boolean | undefined;
}

/**
 * https://discord.com/developers/docs/monetization/entitlements#list-entitlements
 */
export type RESTListAPIEntitlementsResult = APIEntitlement[];

/**
 * https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement
 */
export interface RESTPostAPIEntitlementQuery {
	/**
	 * ID of the SKU to grant the entitlement to
	 */
	sku_id: Snowflake | undefined;
	/**
	 * ID of the guild or user to grant the entitlement to
	 */
	owner_id: Snowflake | undefined;
	/**
	 * Where to create the entitlement
	 */
	owner_type: APITestEntitlementOwnerType | undefined;
}

/**
 * https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement
 */
export type RESTPostAPITestEntitlementResult = Exclude<APIEntitlement, 'subscription_id' | 'starts_at' | 'ends_at'>;

/**
 * https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement
 */
export enum APITestEntitlementOwnerType {
	GuildSubscription = 1,
	UserSubscription,
}

/**
 * https://discord.com/developers/docs/monetization/entitlements#delete-test-entitlement
 */
export type RESTDeleteAPITestEntitlementResult = never;

/**
 * https://discord.com/developers/docs/monetization/skus#list-skus
 */
export interface RESTListAPISKUsQuery {
	/**
	 * Available flags: Server Subscriptions: 1 << 7, User Subscriptions: 1 << 8
	 */
	flags?: number | undefined;
}
/**
 * https://discord.com/developers/docs/monetization/skus#list-skus
 */
export type RESTListAPISKUsResult = APISKU[];

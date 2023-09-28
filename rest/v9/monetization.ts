import type { Snowflake } from '../../globals';
import type { APIEntitlement, APISKU } from '../../v10';

/**
 * https://discord.com/developers/docs/monetization/entitlements#list-entitlements
 */
export interface RESTGetAPIEntitlementsQuery {
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
export type RESTGetAPIEntitlementsResult = APIEntitlement[];

/**
 * https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement
 */
export interface RESTPostAPIEntitlementBody {
	/**
	 * ID of the SKU to grant the entitlement to
	 */
	sku_id: Snowflake;
	/**
	 * ID of the guild or user to grant the entitlement to
	 */
	owner_id: Snowflake;
	/**
	 * Where to create the entitlement
	 */
	owner_type: APIEntitlementOwnerType;
}

/**
 * https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement
 */
export type RESTPostAPIEntitlementResult = Omit<APIEntitlement, 'subscription_id' | 'starts_at' | 'ends_at'>;

/**
 * https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement
 */
export enum APIEntitlementOwnerType {
	GuildSubscription = 1,
	UserSubscription,
}

/**
 * https://discord.com/developers/docs/monetization/entitlements#delete-test-entitlement
 */
export type RESTDeleteAPIEntitlementResult = never;

/**
 * https://discord.com/developers/docs/monetization/skus#list-skus
 */
export interface RESTGetAPISKUsQuery {
	/**
	 * SKU flags combined as a bitfield
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 */
	flags?: SKUFlags | undefined;
}

/**
 * https://discord.com/developers/docs/monetization/skus#list-skus
 */
export enum SKUFlags {
	ServerSubscriptions = 1 << 7,
	UserSubscriptions = 1 << 8,
}

/**
 * https://discord.com/developers/docs/monetization/skus#list-skus
 */
export type RESTGetAPISKUsResult = APISKU[];

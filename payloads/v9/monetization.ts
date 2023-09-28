import type { Snowflake } from '../../globals';

export interface APIEntitlement {
	/**
	 * ID of the entitlement
	 */
	id: Snowflake;
	/**
	 * ID of the SKU
	 */
	sku_id: Snowflake;
	/**
	 * ID of the user that is granted access to the entitlement's sku
	 */
	user_id?: Snowflake;
	/**
	 * ID of the guild that is granted access to the entitlement's sku
	 */
	guild_id?: Snowflake;
	/**
	 * ID of the parent application
	 */
	application_id: Snowflake;
	/**
	 * Type of entitlement
	 */
	type: EntitlementType;
	/**
	 * Not applicable for App Subscriptions. Subscriptions are not consumed and will be false
	 */
	consumed: boolean;
	/**
	 * Start date at which the entitlement is valid. Not present when using test entitlements.
	 */
	starts_at?: number;
	/**
	 * Date at which the entitlement is no longer valid. Not present when using test entitlements.
	 */
	ends_at?: number;
}

export enum EntitlementType {
	/**
	 * Entitlement was purchased as an app subscription
	 */
	ApplicationSubscription = 8,
}

export interface APISKU {
	/**
	 * ID of SKU
	 */
	id: Snowflake;
	/**
	 * Type of SKU
	 */
	type: SKUType;
	/**
	 * ID of the parent application
	 */
	application_id: Snowflake;
	/**
	 * Customer-facing name of your premium offering
	 */
	name: string;
	/**
	 * System-generated URL slug based on the SKU's name
	 */
	slug: string;
}

export enum SKUType {
	/**
	 * Represents a recurring subscription
	 */
	Subscription = 5,
	/**
	 * System-generated group for each Subscription SKU created
	 */
	SubscriptionGroup = 6,
}

import type { Snowflake } from '../../globals.ts';

/**
 * https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-structure
 */
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
	 * Whether the entitlement was deleted
	 */
	deleted: boolean;
	/**
	 * Start date at which the entitlement is valid. Not present when using test entitlements.
	 */
	starts_at?: string;
	/**
	 * Date at which the entitlement is no longer valid. Not present when using test entitlements.
	 */
	ends_at?: string;
	/**
	 * For consumable items, whether or not the entitlement has been consumed
	 */
	consumed?: boolean;
}

/**
 * https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types
 */
export enum EntitlementType {
	/**
	 * Entitlement was purchased by user
	 */
	Purchase = 1,
	/**
	 * Entitlement for Discord Nitro subscription
	 */
	PremiumSubscription,
	/**
	 * Entitlement was gifted by developer
	 */
	DeveloperGift,
	/**
	 * Entitlement was purchased by a dev in application test mode
	 */
	TestModePurchase,
	/**
	 * Entitlement was granted when the SKU was free
	 */
	FreePurchase,
	/**
	 * Entitlement was gifted by another user
	 */
	UserGift,
	/**
	 * Entitlement was claimed by user for free as a Nitro Subscriber
	 */
	PremiumPurchase,
	/**
	 * Entitlement was purchased as an app subscription
	 */
	ApplicationSubscription,
}

/**
 * https://discord.com/developers/docs/monetization/skus#sku-object-sku-structure
 */
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
	/**
	 * SKU flags combined as a bitfield
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 */
	flags: SKUFlags;
}

/**
 * https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags
 */
export enum SKUFlags {
	/**
	 * SKU is available for purchase
	 */
	Available = 1 << 2,
	/**
	 * Recurring SKU that can be purchased by a user and applied to a single server.
	 * Grants access to every user in that server.
	 */
	GuildSubscription = 1 << 7,
	/**
	 * Recurring SKU purchased by a user for themselves. Grants access to the purchasing user in every server.
	 */
	UserSubscription = 1 << 8,
}

export enum SKUType {
	/**
	 * Durable one-time purchase
	 */
	Durable = 2,
	/**
	 * Consumable one-time purchase
	 */
	Consumable = 3,
	/**
	 * Represents a recurring subscription
	 */
	Subscription = 5,
	/**
	 * System-generated group for each Subscription SKU created
	 */
	SubscriptionGroup = 6,
}

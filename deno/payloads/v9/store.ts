/**
 * Types extracted from https://discord.com/developers/docs/game-sdk/store
 */

import type { Snowflake } from '../../globals.ts';
import type { LocalizationMap } from '../common.ts';

export interface APISKU {
	/**
	 * Unique id of this SKU
	 */
	id: Snowflake;
	/**
	 * The type of this SKU
	 */
	type: SKUType;
	/**
	 * The name of this SKU
	 */
	name: string;
	/**
	 * The price of this SKU
	 */
	price: APISKUPrice;
	/**
	 * @unstable This field is missing documentation
	 */
	dependent_sku_id: Snowflake | null;
	/**
	 * The application id
	 */
	application_id: Snowflake;
	/**
	 * @unstable This field is missing documentation
	 */
	manifest_labels: Snowflake[];
	/**
	 * @unstable This field is missing documentation
	 */
	access_type: number;
	/**
	 * @unstable This field is missing documentation
	 */
	features: number[];
	/**
	 * @unstable This field is missing documentation
	 */
	system_requirements: Record<string, unknown>;
	/**
	 * @unstable This field is missing documentation
	 */
	content_ratings: Record<string, unknown>;
	/**
	 * @unstable This field is missing documentation
	 */
	release_date: string;
	/**
	 * @unstable This field is missing documentation
	 */
	legal_notice: Record<string, unknown>;
	/**
	 * @unstable This field is missing documentation
	 */
	price_tier: number;
	/**
	 * @unstable This field is missing documentation
	 */
	premium: boolean;
	/**
	 * @unstable This field is missing documentation
	 */
	locales: keyof LocalizationMap[];
	/**
	 * @unstable This field is missing documentation
	 */
	bundled_skus: Snowflake[] | null;
}

export enum SKUType {
	/**
	 * The SKU is a game
	 */
	Application = 1,
	/**
	 * The SKU is a DLC
	 */
	DLC,
	/**
	 * The SKU is consumable (in-app purchase)
	 */
	Consumable,
	/**
	 * The SKU is a bundle (comprising by `Application`, `DLC` and `Consumable` all together)
	 */
	Bundle,
}

export interface APISKUPrice {
	/**
	 * The amount of money the SKU costs
	 */
	amount: number;
	/**
	 * The currency the amount is in
	 */
	currency: string;
}

export interface APIEntitlement {
	/**
	 * Unique id of this entitlement
	 */
	id: Snowflake;
	/**
	 * The type of this entitlement
	 */
	type: EntitlementType;
	/**
	 * The id of the SKU to which the user is entitled
	 */
	sku_id: Snowflake;
	/**
	 * The id of the user this entitlement belongs to
	 */
	user_id: Snowflake;
	/**
	 * The application id
	 */
	application_id: Snowflake;
	/**
	 * The payment date of this entitlement
	 */
	payment?: APIEntitlementPayment;
}

export enum EntitlementType {
	/**
	 * Entitlement was purchased
	 */
	Purchase = 1,
	/**
	 * Entitlement for a Discord Nitro subscription
	 */
	PremiumSubscription,
	/**
	 * Entitlement was gifted by a developer
	 */
	DeveloperGift,
	/**
	 * Entitlement was purchased by a dev in application test mode
	 */
	TestModePurchase,
	/**
	 * Entitlement was was granted when the SKU was free
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
}

export interface APIEntitlementPayment {
	/**
	 * Unique id of this payment
	 */
	id: Snowflake;
	/**
	 * The amount paid
	 */
	amount: number;
	/**
	 * The currency the amount is in
	 */
	currency: string;
	/**
	 * The amount of tax paid
	 */
	tax: number;
	/**
	 * Whether the amount is tax-inclusive
	 */
	tax_inclusive: boolean;
}

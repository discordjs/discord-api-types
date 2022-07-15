/**
 * Types extracted from https://discord.com/developers/docs/game-sdk/sdk-starter-guide
 */

import type { Snowflake } from '../../globals';
import type { LocalizationMap } from '../common';

export interface APIAchievement {
	/**
	 * Unique id of the application
	 */
	application_id: Snowflake;
	/**
	 * Name of this achievement
	 */
	name: string;
	/**
	 * Localization dictionary for the `name` field
	 */
	name_localizations: LocalizationMap | null;
	/**
	 * The description of this achievement
	 */
	description: string;
	/**
	 * Localization dictionary for the `description` field
	 */
	description_localizations: keyof LocalizationMap | null;
	/**
	 * Whether this achievement is secret
	 */
	secret: boolean;
	/**
	 * Whether this achievement is secure
	 */
	secure: boolean;
	/**
	 * Unique id of this achievement
	 */
	id: Snowflake;
	/**
	 * The achievement icon hash
	 */
	icon_hash: string;
}

export interface APILobby {
	/**
	 * Unique id of this lobby
	 */
	id: Snowflake;
	/**
	 * The type of this lobby (whether it is private or public)
	 *
	 * @default Private
	 */
	type: LobbyType;
	/**
	 * The user id of the lobby owner
	 */
	owner_id: Snowflake;
	/**
	 * The password of this lobby
	 */
	secret: string;
	/**
	 * The maximum capacity of this lobby
	 *
	 * @default 16
	 */
	capacity: number;
	/**
	 * Whether this lobby can be joined
	 */
	locked: boolean;
	/**
	 * Unique id of the application
	 */
	application_id: Snowflake;
	/**
	 * Metadata for this lobby. key/value pairs with type `string`
	 *
	 * @default {}
	 */
	metadata: Record<string, string>;
	/**
	 * The region of this lobby. Defaults the region of the requesting server's IP address
	 */
	region: LobbyRegion;
}

export enum LobbyRegion {
	Atlanta = 'atlanta',
	Brazil = 'brazil',
	Bucharest = 'bucharest',
	BuenosAires = 'buenos-aires',
	Dubai = 'dubai',
	Finland = 'finland',
	Hongkong = 'hongkong',
	India = 'india',
	Japan = 'japan',
	Madrid = 'madrid',
	Milan = 'milan',
	Montreal = 'montreal',
	Newark = 'newark',
	Rotterdam = 'rotterdam',
	Russia = 'russia',
	SantaClara = 'santa-clara',
	Santiago = 'santiago',
	Seattle = 'seattle',
	Singapore = 'singapore',
	SouthKorea = 'south-korea',
	SouthAfrica = 'southafrica',
	StPete = 'st-pete',
	Stockholm = 'stockholm',
	Sydney = 'sydney',
	UsCentral = 'us-central',
	UsEast = 'us-east',
	UsSouth = 'us-south',
	UsWest = 'us-west',
}

export enum LobbyType {
	Private = 1,
	Public,
}

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
	locales: LocalizationMap[];
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
	Dlc,
	/**
	 * The SKU is consumable (in-app purchase)
	 */
	Consumable,
	/**
	 * The SKU is a bundle (comprising by `Application`, `Dlc` and `Consumable` all together)
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

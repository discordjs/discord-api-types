/**
 * Types extracted from https://discord.com/developers/docs/game-sdk/achievements#the-api-way
 */
import type { Snowflake } from '../../common/index';

/**
 * https://discord.com/developers/docs/game-sdk/achievements#data-models-achievement-struct
 */
export interface APIAchievement {
	/**
	 * the unique id of the application
	 */
	application_id: Snowflake;

	/**
	 * the name of the achievement as an achievement locale object
	 */
	name: APIAchievementLocale;
	/**
	 * the user-facing achievement description as an achievement locale object
	 */
	description: APIAchievementLocale;
	/**
	 * if the achievement is secret
	 */
	secret: boolean;
	/**
	 * if the achievement is secure
	 */
	secure: boolean;
	/**
	 * the unique id of the achievement
	 */
	id: number;
	/**
	 * 	the hash of the icon
	 */
	icon_hash: string;
}

/**
 * https://discord.com/developers/docs/game-sdk/achievements#data-models-achievement-locale-object
 */
export interface APIAchievementLocale {
	/**
	 * the default locale for the achievement
	 */
	default: string;
	/**
	 * object of accepted locales as the key and achievement translations as the value
	 */
	localizations?: Record<AcceptedLocales, string>;
}

/**
 * https://discord.com/developers/docs/dispatch/field-values#predefined-field-values-accepted-locales
 */
export const enum AcceptedLocales {
	'en-US' = 'English (United States)',
	'en-GB' = 'English (Great Britain)',
	'zh-CN' = 'Chinese (China)',
	'zh-TW' = ' CHinese (Taiwan)',
	cs = 'Czech',
	da = 'Danish',
	nl = 'Dutch',
	fr = 'French',
	de = 'German',
	el = 'Greek',
	hu = 'Hungarian',
	it = 'Italian',
	ja = 'Japanese',
	ko = 'Korean',
	no = 'Norwegian',
	pl = 'Polish',
	'pt-BR' = 'Portuguese (Brazil)',
	ru = 'Russian',
	'es-ES' = 'Spanish (Spain)',
	'sv-SE' = 'Swedish',
	tr = 'Turkish',
	bg = 'Bulgarian',
	uk = 'Ukrainian',
	fi = 'Finnish',
	hr = 'Croatian',
	ro = 'Romanian',
	lt = 'Lithuanian',
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#data-models-lobbytype-enum
 */
export const enum LobbyType {
	Private = 1,
	Public,
}

/**
 * https://discord.com/developers/docs/game-sdk/lobbies#data-models-lobby-struct
 */
export interface APILobby {
	/**
	 * the max capacity of the lobby
	 *
	 * @default 16
	 */
	capacity: number;
	/**
	 * the region in which to make the lobby - defaults to the region of the requesting server's IP address
	 */
	region: string;
	/**
	 * the password to the lobby
	 */
	secret: string;
	/**
	 * your application id
	 */
	application_id: Snowflake;
	/**
	 * metadata for the lobby - key/value pairs with types `string`
	 */
	metadata: Record<string, string>;
	/**
	 * if the lobby is public or private
	 */
	type: LobbyType;
	/**
	 * the unique id of the lobby
	 */
	id: Snowflake;
	/**
	 * the id of the lobby owner
	 */
	owner_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#data-models-entitlementtype-enum
 */
export const enum EntitlementType {
	/**
	 * entitlement was purchased
	 */
	Purchase = 1,
	/**
	 * entitlement for a Discord Nitro subscription
	 */
	PremiumSubscription,
	/**
	 * entitlement was gifted by a developer
	 */
	DeveloperGift,
	/**
	 * entitlement was purchased by a dev in application test mode
	 */
	TestModePurchase,
	/**
	 * entitlement was granted when the SKU was free
	 */
	FreePurchase,
	/**
	 * entitlement was gifted by another user
	 */
	UserGift,
	/**
	 * entitlement was claimed by user for free as a Nitro Subscriber
	 */
	PremiumPurchase,
}

export interface APIEntitlement {
	/**
	 * the ID of the user this entitlement belongs to
	 */
	user_id: Snowflake;
	/**
	 * the ID of the SKU to which the user is entitled
	 */
	sku_id: Snowflake;
	/**
	 * the ID of the application this entitlement belongs to
	 */
	application_id: Snowflake;
	/**
	 * the unique ID of this entitlement
	 */
	id: Snowflake;
	/**
	 * the kind of entitlement it is
	 */
	type: EntitlementType;
	/**
	 * payment data for this entitled -- to recieve this data you must specifiy `with_patments` in respective query bodies
	 */
	payment?: APIPaymentData;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#httpspecific-data-models-limited-payment-data-object
 */
export interface APIPaymentData {
	/**
	 * unique ID of the payment
	 */
	id: Snowflake;
	/**
	 * the currency the payment was made in
	 */
	currency: number;
	/**
	 * the amount paid
	 */
	amount: number;
	/**
	 * the amount of tax
	 */
	tax: number;
	/**
	 * whether the amount is tax-inclusive
	 */
	tax_inclusive: boolean;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#data-models-skutype-enum
 */
export const enum APISKUType {
	/**
	 * SKU is a game
	 */
	Application = 1,
	/**
	 * SKU is a DLC
	 */
	DLC,
	/**
	 * SKU is a consumable (in-app purchase)
	 */
	Consumable,
	/**
	 * SKU is a bundle (comprising the other 3 types)
	 */
	Bundle,
}

/**
 * https://discord.com/developers/docs/game-sdk/store#data-models-skuprice-struct
 */
export interface APISKUPrice {
	/**
	 * the amount of money the SKU costs
	 */
	amount: number;
	/**
	 * the currency the amount is in
	 */
	currency: string;
}

export interface APISKU {
	/**
	 * The unique ID of this SKU
	 */
	id: Snowflake;
	/**
	 * The type of this SKU
	 */
	type: APISKUType;
	/**
	 * This field is lacking documentation
	 * @unstable
	 */
	dependent_sku_id: Snowflake | null;
	/**
	 * The ID of the application this SKU belongs to
	 */
	application_id: Snowflake;
	/**
	 * This field is lacking documentation
	 * @unstable
	 */
	manifest_labels: Snowflake[];
	name: string;
	/**
	 * The field is lacking documentation
	 * @unstable
	 */
	access_type: number;
	/**
	 * The field is lacking documentation
	 * @unstable
	 */
	features: number[];
	/**
	 * The field is lacking documentation
	 * @unstable
	 */
	system_requirements: {}; // eslint-disable-line @typescript-eslint/ban-types
	/**
	 * The field is lacking documentation
	 * @unstable
	 */
	content_ratings: {}; // eslint-disable-line @typescript-eslint/ban-types
	release_date: string;
	/**
	 * The field is lacking documentation
	 * @unstable
	 */
	legal_notice: {}; // eslint-disable-line @typescript-eslint/ban-types
	/**
	 * The field is lacking documentation
	 * @unstable
	 */
	price_tier: number;
	price: APISKUPrice;
	premium: boolean;
	/**
	 * The field is lacking documentation
	 * @unstable
	 */
	locales: keyof AcceptedLocales[];
	/**
	 * The field is lacking documentation
	 * @unstable
	 */
	bundled_skus: string | null;
}

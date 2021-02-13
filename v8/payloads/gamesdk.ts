/**
 * Types extracted from https://discord.com/developers/docs/game-sdk
 */
import type { Snowflake } from '../../common/index';

/**
 * https://discord.com/developers/docs/game-sdk/achievements#data-models-achievement-struct
 */
export interface APIAchievement {
	/**
	 * Achievement id
	 */
	id: number;
	/**
	 * The id of the application this achievement belongs to
	 */
	application_id: Snowflake;

	/**
	 * Achievement name
	 */
	name: APIAchievementLocale;
	/**
	 * Achievement description
	 */
	description: APIAchievementLocale;
	/**
	 * If the achievement is secret
	 */
	secret: boolean;
	/**
	 * If the achievement is secure
	 */
	secure: boolean;
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
	 * Lobby id
	 */
	id: Snowflake;
	/**
	 * The max capacity of the lobby
	 *
	 * @default 16
	 */
	capacity: number;
	/**
	 * The region in which to make the lobby - defaults to the region of the requesting server's IP address
	 */
	region: string;
	/**
	 * The password to the lobby
	 */
	secret: string;
	/**
	 * The id of the application this achievement belongs to
	 */
	application_id: Snowflake;
	/**
	 * Metadata for the lobby
	 */
	metadata: Record<string, string>;
	/**
	 * If the lobby is public or private
	 */
	type: LobbyType;
	/**
	 * The id of the lobby owner
	 */
	owner_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#data-models-entitlementtype-enum
 */
export const enum EntitlementType {
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
}

export interface APIEntitlement {
	/**
	 * Entitlement id
	 */
	id: Snowflake;
	/**
	 * The id of the user this entitlement belongs to
	 */
	user_id: Snowflake;
	/**
	 * The id of the SKU to which the user is entitled
	 */
	sku_id: Snowflake;
	/**
	 * The id of the application this entitlement belongs to
	 */
	application_id: Snowflake;
	/**
	 * The type of the entitlement
	 */
	type: EntitlementType;
	/**
	 * Payment data for this entitlement
	 *
	 * To recieve this data you must specifiy `with_patments` in respective query bodies
	 */
	payment?: APIPaymentData;
}

/**
 * https://discord.com/developers/docs/game-sdk/store#httpspecific-data-models-limited-payment-data-object
 */
export interface APIPaymentData {
	/**
	 * Payment id
	 */
	id: Snowflake;
	/**
	 * The currency the payment was made in
	 */
	currency: number;
	/**
	 * The amount paid
	 */
	amount: number;
	/**
	 * The amount of tax paid
	 */
	tax: number;
	/**
	 * Whether the amount is tax-inclusive
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
	 * The amount of money the SKU costs
	 */
	amount: number;
	/**
	 * The currency the amount is in
	 */
	currency: string;
}

export interface APISKU {
	/**
	 * SKU id
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
	 * The id of the application this SKU belongs to
	 */
	application_id: Snowflake;
	/**
	 * This field is lacking documentation
	 * @unstable
	 */
	manifest_labels: Snowflake[];
	/**
	 * The name of this SKU
	 */
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
	/**
	 * The date this SKU was released
	 */
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
	/**
	 * The price of this SKU
	 */
	price: APISKUPrice;
	/**
	 * Whether or not this SKU is premium
	 */
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

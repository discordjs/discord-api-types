import type { Snowflake } from '../../globals.ts';

/**
 * https://discord.com/developers/docs/resources/discovery#discovery-metadata-object
 */
export interface APIDiscoveryMetadata {
	/**
	 * The guild id
	 */
	guild_id: Snowflake;
	/**
	 * The id of the primary discovery category set for this guild
	 */
	primary_category_id: number;
	/**
	 * Up to 10 discovery search keywords set for this guild
	 */
	keywords?: string[];
	/**
	 * Whether guild info is shown when custom emojis from this guild are clicked
	 */
	emoji_discoverability_enabled: boolean;
	/**
	 * When the server's partner application was accepted or denied, for applications via Server Settings
	 */
	partner_actioned_timestamp: string;
	/**
	 * When the server applied for partnership, if it has a pending application
	 */
	partner_application_timestamp: string;
	/**
	 * Ids of up to 5 discovery subcategories set for this guild
	 */
	category_ids: number[];
}

/**
 * https://discord.com/developers/docs/resources/discovery#discovery-category-object
 */
export interface APIDiscoveryCategory {
	/**
	 * Numeric id of the category
	 */
	id: number;
	/**
	 * The name of this category, in multiple languages
	 */
	name: APIDiscoveryCategoryName;
	/**
	 * Whether this category can be set as a guild's primary category
	 */
	is_primary: boolean;
}

/**
 * https://discord.com/developers/docs/resources/discovery#discovery-category-object
 */
export interface APIDiscoveryCategoryName {
	/**
	 * The name in English
	 */
	default: string;
	/**
	 * The name in other languages
	 */
	localizations?: Record<string, string>;
}

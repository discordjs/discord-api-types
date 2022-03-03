import type { APIDiscoveryCategory } from '../../payloads/v10/discovery.ts';

export type RESTGetListDiscoveryCategoriesResult = APIDiscoveryCategory[];

export interface RESTGetValidDiscoverySearchTerm {
	/**
	 * Whether the provided term is valid
	 */
	valid: boolean;
}

export interface RESTPatchGuildDiscoveryMetadataJSONBody {
	/**
	 * The id of the primary discovery category
	 */
	primary_category_id?: number;
	/**
	 * Up to 10 discovery search keywords
	 */
	keywords?: string[];
	/**
	 * Whether guild info should be shown when custom emojis and stickers from this guild are clicked
	 */
	emoji_discoverability_enabled?: boolean;
}

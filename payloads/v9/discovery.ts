import type { Snowflake } from '../../globals';

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
	partner_actioned_timestamp?: string;
	/**
	 * When the server applied for partnership, if it has a pending application
	 */
	partner_application_timestamp?: string;
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
	name: string;
	/**
	 * Whether this category can be set as a guild's primary category
	 */
	is_primary: boolean;
}

/**
 * https://discord.com/developers/docs/resources/discovery#discovery-requirements-structure
 */
export interface APIDiscoveryRequirements {
	/**
	 * The guild id
	 */
	guild_id?: Snowflake;
	/**
	 * Whether the guild has not been flagged by Trust & Safety
	 */
	safe_environment?: boolean;
	/**
	 * Whether the guild meets the activity requirements
	 */
	healthy?: boolean | null;
	/**
	 * Whether the guild's activity metrics have not yet been calculated
	 */
	health_score_pending?: boolean;
	/**
	 * Whether the guild meets its minimum member count requirement
	 */
	size?: boolean;
	/**
	 * Banned terms found in the guild's name, description, and channel names
	 */
	nsfw_properties?: APIDiscoveryRequirementsNSFWProperties;
	/**
	 * Whether the guild has the 2FA requirement for moderation enabled
	 */
	protected?: boolean;
	/**
	 * Whether the guild meets the requirements to be in Discovery
	 */
	sufficient?: boolean | null;
	/**
	 * Whether the grace period can allow the guild to remain in Discovery
	 */
	sufficient_without_grace_period?: boolean;
	/**
	 * Whether the guild has a rules channel set
	 */
	valid_rules_channel?: boolean;
	/**
	 * Whether the guild meets the new member retention requirement
	 */
	retention_healthy?: boolean | null;
	/**
	 * Whether the guild meets the weekly visitor and communicator requirements
	 */
	engagement_healthy?: boolean | null;
	/**
	 * Whether the guild meets its minimum age requirement
	 */
	age?: boolean;
	/**
	 * The guild's minimum age requirement, in days
	 */
	minimum_age?: number;
	/**
	 * The guild's activity metrics
	 */
	health_score?: APIDiscoveryRequirementsHealthScore;
	/**
	 * The guild's minimum member count requirement
	 */
	minimum_size?: number;
	/**
	 * When the guild's grace period ends
	 */
	grace_period_end_date?: string;
}

/**
 * https://discord.com/developers/docs/resources/discovery#discovery-requirements-nsfw-properties-structure
 */
export interface APIDiscoveryRequirementsNSFWProperties {
	/**
	 * Ids of channels with names containing banned terms
	 */
	channels?: Snowflake[];
	/**
	 * The banned terms found in the channel names
	 */
	channel_banned_keywords?: Record<Snowflake, string[]>;
	/**
	 * The guild name, if it contains banned terms
	 */
	name?: string;
	/**
	 * The banned terms found in the guild name
	 */
	name_banned_keywords?: string[];
	/**
	 * The guild description, if it contains banned terms
	 */
	description?: string;
	/**
	 * The banned terms found in the guild description
	 */
	description_banned_keywords?: string[];
}

/**
 * https://discord.com/developers/docs/resources/discovery#discovery-requirements-health-score-structure
 */
export interface APIDiscoveryRequirementsHealthScore {
	/**
	 * Average weekly number of users who talk in the guild and have been on Discord for 8 weeks+
	 */
	avg_nonnew_communicators: string | null;
	/**
	 * Average weekly number of users who view the guild and have been on Discord for 8 weeks+
	 */
	avg_nonnew_participators: string | null;
	/**
	 * Average number of users who join the guild per week
	 */
	num_intentful_joiners: string | null;
	/**
	 * Average proportion of new members who remain in the guild for at least a week
	 */
	perc_ret_w1_intentful: number | null;
}

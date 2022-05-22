/**
 * Types extracted from https://discord.com/developers/docs/resources/auto-moderation
 */

import type { Snowflake } from '../../globals';

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure
 */
export interface APIAutoModerationRule {
	/**
	 * The id of this rule
	 */
	id: Snowflake;
	/**
	 * The guild which this rule belongs to
	 */
	guild_id: Snowflake;
	/**
	 * The rule name
	 */
	name: string;
	/**
	 * The user id who created this rule
	 */
	creator_id: Snowflake;
	/**
	 * The rule event type
	 */
	event_type: AutoModerationRuleEventType;
	/**
	 * The rule trigger type
	 */
	trigger_type: AutoModerationRuleTriggerType;
	/**
	 * The rule trigger metadata
	 */
	trigger_metadata: never;
	/**
	 * The actions which will execute when this rule is triggered
	 */
	actions: APIAutoModerationAction[];
	/**
	 * Whether this rule is enabled
	 */
	enabled: boolean;
	/**
	 * The role ids that shouldn't be affected by this rule (Maximum of 20)
	 */
	exempt_roles: Snowflake[];
	/**
	 * The channel ids that shouldn't be affected by this rule (Maximum of 50)
	 */
	exempt_channels: Snowflake[];
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types
 */
export enum AutoModerationRuleTriggerType {
	/**
	 * Check if any words from a user defined list of keywords exist in content
	 */
	KeyWords = 1,
	/**
	 * Check if any known harmful links exist in content
	 */
	HarmfulLinks,
	/**
	 * Check if content represents generic spam
	 */
	Spam,
	/**
	 * Check if any words from built in pre-determined lists of words exist in content
	 */
	DefaultKeywordList,
}

// TODO: Add AutoModerationRuleTriggerMetadata object (?)

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types
 */
export enum AutoModerationRuleEventType {
	/**
	 * When a member sends a message on a guild
	 */
	MessageSend = 1,
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-action-structure
 */
export interface APIAutoModerationAction {
	/**
	 * The action type
	 */
	type: AutoModerationActionType;
	/**
	 * Additional metadata needed during execution for this specific action type
	 */
	metadata: never;
}

export enum AutoModerationActionType {
	/**
	 * Blocks the content of a message according to the rule
	 */
	BlockMessage = 1,
	/**
	 * Records original message in a specified channel
	 */
	LogToChannel,
}

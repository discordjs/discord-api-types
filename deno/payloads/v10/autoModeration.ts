import type { Snowflake } from '../../globals.ts';

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
	 * The user which first created this rule
	 */
	creator_id: Snowflake;

	/**
	 * The rule event type
	 */
	event_type: APIAutoModerationRuleEventType;

	/**
	 * The rule trigger type
	 */
	trigger_type: APIAutoModerationRuleTriggerType;

	/**
	 * The rule trigger metadata
	 */
	trigger_metadata: APIAutoModerationRuleTriggerMetadata;

	/**
	 * The actions which will execute when the rule is triggered
	 */
	actions: APIAutoModerationRuleAction[];

	/**
	 * Whether the rule is enabled
	 */
	enabled: boolean;

	/**
	 * The role ids that should not be affected by the rule
	 *
	 * Maxiumum of `20`
	 */
	exempt_roles: Snowflake[];

	/**
	 * The channel ids that should not be affected by the rule
	 *
	 * Maxiumum of `50`
	 */
	exempt_channels: Snowflake[];
}

export enum APIAutoModerationRuleEventType {
	/**
	 * When a member sends or edits a message in the guild
	 */
	MessageSend = 1,
}

export interface APIAutoModerationRuleAction {
	/**
	 * The type of action
	 */
	type: APIAutoModerationRuleActionType;

	/**
	 * The metadata for the action
	 */
	metadata: APIAutoModerationRuleActionMetadata;
}
/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types
 */
export enum APIAutoModerationRuleActionType {
	/**
	 * Blocks the content of a message according to the rule
	 */
	BlockMessage = 1,

	/**
	 * Logs user content to a specified channel
	 */
	SendAlertMessage,

	/**
	 * Timeout user for a specified duration
	 *
	 * Can only be used by `Keywords` rules
	 */
	Timeout,
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export enum APIAutoModerationRuleTriggerType {
	/**
	 * Check if content contains words from a user defined list of keywords
	 *
	 * Maximum of `3` per guild
	 */
	Keyword = 1,

	/**
	 * Check if content contains any harmful links
	 *
	 * Maximum of `1` per guild
	 */
	HarmfulLink,

	/**
	 * Check if content represents generic spam
	 *
	 * Maximum of `1` per guild
	 */
	Spam,

	/**
	 * Check if content contains words from internal pre-defined wordsets
	 *
	 * Maximum of `1` per guild
	 */
	KeywordPreset,
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata
 */
export interface APIAutoModerationRuleTriggerMetadata {
	keyword_filter: string[];

	presets: APIAutoModerationRuleKeywordPresetTypes[];
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types
 */
export enum APIAutoModerationRuleKeywordPresetTypes {
	/**
	 * Words that may be considered forms of swearing or cursing
	 */
	Profanity = 1,

	/**
	 * Words that refer to sexually explicit behavior or activity
	 */
	SexualContent,

	/**
	 * Personal insults or words that may be considered hate speech
	 */
	Slurs,
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
export interface APIAutoModerationRuleActionMetadata {
	/**
	 * Channel to which user content should be logged
	 */
	channel_id: string;

	/**
	 * Timeout duration in seconds
	 *
	 * Maxiumum of 4 weeks (2419200 seconds)
	 */
	duration_seconds: number;
}

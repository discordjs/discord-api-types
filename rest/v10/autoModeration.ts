import type { Snowflake } from '../../globals';
import type {
	APIAutoModerationRule,
	APIAutoModerationRuleAction,
	APIAutoModerationRuleEventType,
	APIAutoModerationRuleTriggerMetadata,
	APIAutoModerationRuleTriggerType,
} from '../../payloads/v10/autoModeration';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface } from '../../utils/internals';

/**
 * https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild
 */
export type RESTGetAPIAutoModerationRules = APIAutoModerationRule[];

/**
 * https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule
 */
export type RESTGetAPIAutoModerationRule = APIAutoModerationRule;

/**
 * https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule
 */
export type RESTPostAPIAutoModerationRuleJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * The rule name
	 */
	name: string;

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
	 *
	 * Can be omited based on the trigger type
	 */
	trigger_metadata: APIAutoModerationRuleTriggerMetadata;

	/**
	 * The actions which will execute when the rule is triggered
	 */
	actions: APIAutoModerationRuleAction[];

	/**
	 * Whether the rule is enabled
	 *
	 * @default false
	 */
	enabled: boolean;

	/**
	 * The role ids that should not be affected by the rule
	 *
	 * Maxiumum of `20`
	 */
	exempt_roles?: Snowflake[];

	/**
	 * The channel ids that should not be affected by the rule
	 *
	 * Maxiumum of `50`
	 */
	exempt_channels?: Snowflake[];
}>;

/**
 * https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule
 */
export type RESTPostAPIAutoModerationRuleResult = APIAutoModerationRule;

/**
 * https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
 */
export type RESTPatchAPIAutoModerationRule = Partial<RESTPostAPIAutoModerationRuleJSONBody>;

/**
 * https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
 */
export type RESTPatchAPIAutoModerationRuleResult = APIAutoModerationRule;

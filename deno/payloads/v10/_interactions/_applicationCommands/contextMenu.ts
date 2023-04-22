import type { Snowflake } from '../../../../globals.ts';
import type { APIMessage } from '../../channel.ts';
import type { APIApplicationCommandInteractionWrapper, ApplicationCommandType } from '../applicationCommands.ts';
import type { APIDMInteractionWrapper, APIGuildInteractionWrapper, APIUserInteractionDataResolved } from '../base.ts';
import type { APIBaseApplicationCommandInteractionData } from './internals.ts';

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export interface APIUserApplicationCommandInteractionData
	extends APIBaseApplicationCommandInteractionData<ApplicationCommandType.User> {
	target_id: Snowflake;
	resolved: APIUserInteractionDataResolved;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export interface APIMessageApplicationCommandInteractionData
	extends APIBaseApplicationCommandInteractionData<ApplicationCommandType.Message> {
	target_id: Snowflake;
	resolved: APIMessageApplicationCommandInteractionDataResolved;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIMessageApplicationCommandInteractionDataResolved {
	messages: Record<Snowflake, APIMessage>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export type APIContextMenuInteractionData =
	| APIUserApplicationCommandInteractionData
	| APIMessageApplicationCommandInteractionData;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIUserApplicationCommandInteraction =
	APIApplicationCommandInteractionWrapper<APIUserApplicationCommandInteractionData>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIUserApplicationCommandDMInteraction = APIDMInteractionWrapper<APIUserApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIUserApplicationCommandGuildInteraction =
	APIGuildInteractionWrapper<APIUserApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIMessageApplicationCommandInteraction =
	APIApplicationCommandInteractionWrapper<APIMessageApplicationCommandInteractionData>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIMessageApplicationCommandDMInteraction =
	APIDMInteractionWrapper<APIMessageApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIMessageApplicationCommandGuildInteraction =
	APIGuildInteractionWrapper<APIMessageApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIContextMenuInteraction = APIUserApplicationCommandInteraction | APIMessageApplicationCommandInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIContextMenuDMInteraction =
	| APIUserApplicationCommandDMInteraction
	| APIMessageApplicationCommandDMInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIContextMenuGuildInteraction =
	| APIUserApplicationCommandGuildInteraction
	| APIMessageApplicationCommandGuildInteraction;

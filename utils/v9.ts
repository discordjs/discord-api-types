import {
	APIApplicationCommandDMInteraction,
	APIApplicationCommandGuildInteraction,
	APIApplicationCommandInteraction,
	APIDMInteraction,
	APIGuildInteraction,
	APIInteraction,
} from '../payloads/v9/index';

/**
 * A type-guard check for guild interactions.
 * @param interaction The interaction to check against the
 * @returns A boolean that indicates if the interaction was received from a guild
 */
export function isGuildInteraction(interaction: APIInteraction): interaction is APIGuildInteraction {
	return Reflect.has(interaction, 'guild_id');
}

/**
 * A type-guard check for DM interactions.
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction was received from a direct message
 */
export function isDMInteraction(interaction: APIInteraction): interaction is APIDMInteraction {
	return !isGuildInteraction(interaction);
}

/**
 * A type-guard check for guild application command interactions.
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the command interaction was received from a guild
 */
export function isApplicationCommandGuildInteraction(
	interaction: APIApplicationCommandInteraction,
): interaction is APIApplicationCommandGuildInteraction {
	return isGuildInteraction(interaction);
}

/**
 * A type-guard check for direct message application command interactions.
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the command interaction was received from a direct message
 */
export function isApplicationCommandDMInteraction(
	interaction: APIApplicationCommandInteraction,
): interaction is APIApplicationCommandDMInteraction {
	return !isGuildInteraction(interaction);
}

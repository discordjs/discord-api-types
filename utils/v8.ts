import {
	APIApplicationCommandDMInteraction,
	APIApplicationCommandGuildInteraction,
	APIApplicationCommandInteraction,
	APIButtonComponent,
	APIButtonComponentWithCustomID,
	APIButtonComponentWithURL,
	APIDMInteraction,
	APIGuildInteraction,
	APIInteraction,
	ButtonStyle,
} from '../payloads/v8/index';

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

/**
 * A type-guard check for buttons that have a `url` attached to them.
 * @param button The button to check against
 * @returns A boolean that indicates if the button has a `url` attached to it
 */
export function isLinkButton(component: APIButtonComponent): component is APIButtonComponentWithURL {
	return component.style === ButtonStyle.Link;
}

/**
 * A type-guard check for buttons that have a `custom_id` attached to them.
 * @param button The button to check against
 * @returns A boolean that indicates if the button has a `custom_id` attached to it
 */
export function isStyledButton(component: APIButtonComponent): component is APIButtonComponentWithCustomID {
	return component.style !== ButtonStyle.Link;
}

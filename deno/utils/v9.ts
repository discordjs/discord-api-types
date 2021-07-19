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
	APIMessageComponentDMInteraction,
	APIMessageComponentGuildInteraction,
	APIMessageComponentInteraction,
	ButtonStyle,
} from '../payloads/v9/mod.ts';

// Interactions

/**
 * A type-guard check for DM interactions
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction was received in a DM channel
 */
export function isDMInteraction(interaction: APIInteraction): interaction is APIDMInteraction {
	return Reflect.has(interaction, 'user');
}

/**
 * A type-guard check for guild interactions
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction was received in a guild
 */
export function isGuildInteraction(interaction: APIInteraction): interaction is APIGuildInteraction {
	return Reflect.has(interaction, 'guild_id');
}

// ApplicationCommandInteractions

/**
 * A type-guard check for DM application command interactions
 * @param interaction The application command interaction to check against
 * @returns A boolean that indicates if the application command interaction was received in a DM channel
 */
export function isApplicationCommandDMInteraction(
	interaction: APIApplicationCommandInteraction,
): interaction is APIApplicationCommandDMInteraction {
	return isDMInteraction(interaction);
}

/**
 * A type-guard check for guild application command interactions
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the application command interaction was received in a guild
 */
export function isApplicationCommandGuildInteraction(
	interaction: APIApplicationCommandInteraction,
): interaction is APIApplicationCommandGuildInteraction {
	return isGuildInteraction(interaction);
}

// MessageComponentInteractions

/**
 * A type-guard check for DM message component interactions
 * @param interaction The message component interaction to check against
 * @returns A boolean that indicates if the message component interaction was received in a DM channel
 */
export function isMessageComponentDMInteraction(
	interaction: APIMessageComponentInteraction,
): interaction is APIMessageComponentDMInteraction {
	return isDMInteraction(interaction);
}

/**
 * A type-guard check for guild message component interactions
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the message component interaction was received in a guild
 */
export function isMessageComponentGuildInteraction(
	interaction: APIMessageComponentInteraction,
): interaction is APIMessageComponentGuildInteraction {
	return isGuildInteraction(interaction);
}

// Buttons

/**
 * A type-guard check for buttons that have a `url` attached to them.
 * @param component The button to check against
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

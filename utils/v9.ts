import type {
	APIApplicationCommandDMInteraction,
	APIApplicationCommandGuildInteraction,
	APIApplicationCommandInteraction,
	APIButtonComponent,
	APIButtonComponentWithCustomId,
	APIButtonComponentWithURL,
	APIChatInputApplicationCommandInteraction,
	APIContextMenuInteraction,
	APIDMInteraction,
	APIGuildInteraction,
	APIInteraction,
	APIMessageComponentButtonInteraction,
	APIMessageComponentDMInteraction,
	APIMessageComponentGuildInteraction,
	APIMessageComponentInteraction,
	APIMessageComponentSelectMenuInteraction,
} from '../payloads/v9/index';
import { ApplicationCommandType, ButtonStyle, ComponentType, InteractionType } from '../payloads/v9/index';

// Interactions

/**
 * A type-guard check for DM interactions
 *
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction was received in a DM channel
 */
export function isDMInteraction(interaction: APIInteraction): interaction is APIDMInteraction {
	return Reflect.has(interaction, 'user');
}

/**
 * A type-guard check for guild interactions
 *
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction was received in a guild
 */
export function isGuildInteraction(interaction: APIInteraction): interaction is APIGuildInteraction {
	return Reflect.has(interaction, 'guild_id');
}

// ApplicationCommandInteractions

/**
 * A type-guard check for DM application command interactions
 *
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
 *
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
 *
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
 *
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
 *
 * @param component The button to check against
 * @returns A boolean that indicates if the button has a `url` attached to it
 */
export function isLinkButton(component: APIButtonComponent): component is APIButtonComponentWithURL {
	return component.style === ButtonStyle.Link;
}

/**
 * A type-guard check for buttons that have a `custom_id` attached to them.
 *
 * @param component The button to check against
 * @returns A boolean that indicates if the button has a `custom_id` attached to it
 */
export function isInteractionButton(component: APIButtonComponent): component is APIButtonComponentWithCustomId {
	return component.style !== ButtonStyle.Link;
}

// Message Components

/**
 * A type-guard check for message component interactions
 *
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction is a message component
 */
export function isMessageComponentInteraction(
	interaction: APIInteraction,
): interaction is APIMessageComponentInteraction {
	return interaction.type === InteractionType.MessageComponent;
}

/**
 * A type-guard check for button message component interactions
 *
 * @param interaction The message component interaction to check against
 * @returns A boolean that indicates if the message component is a button
 */
export function isMessageComponentButtonInteraction(
	interaction: APIMessageComponentInteraction,
): interaction is APIMessageComponentButtonInteraction {
	return interaction.data.component_type === ComponentType.Button;
}

/**
 * A type-guard check for select menu message component interactions
 *
 * @param interaction The message component interaction to check against
 * @returns A boolean that indicates if the message component is a select menu
 */
export function isMessageComponentSelectMenuInteraction(
	interaction: APIMessageComponentInteraction,
): interaction is APIMessageComponentSelectMenuInteraction {
	return [
		ComponentType.StringSelect,
		ComponentType.UserSelect,
		ComponentType.RoleSelect,
		ComponentType.MentionableSelect,
		ComponentType.ChannelSelect,
	].includes(interaction.data.component_type);
}

// Application Commands

/**
 * A type-guard check for chat input application commands.
 *
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction is a chat input application command
 */
export function isChatInputApplicationCommandInteraction(
	interaction: APIApplicationCommandInteraction,
): interaction is APIChatInputApplicationCommandInteraction {
	return interaction.data.type === ApplicationCommandType.ChatInput;
}

/**
 * A type-guard check for context menu application commands.
 *
 * @param interaction The interaction to check against
 * @returns A boolean that indicates if the interaction is a context menu application command
 */
export function isContextMenuApplicationCommandInteraction(
	interaction: APIApplicationCommandInteraction,
): interaction is APIContextMenuInteraction {
	return (
		interaction.data.type === ApplicationCommandType.Message || interaction.data.type === ApplicationCommandType.User
	);
}

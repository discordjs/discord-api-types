import type { RESTPostAPIWebhookWithTokenJSONBody } from '../../../v10';
import type { APIActionRowComponent, APIComponentInModalActionRow } from '../channel';
import type { APIApplicationCommandOptionChoice } from './applicationCommands';

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type}
 */
export enum InteractionType {
	Ping = 1,
	ApplicationCommand,
	MessageComponent,
	ApplicationCommandAutocomplete,
	ModalSubmit,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object}
 */
export type APIInteractionResponse =
	| APIApplicationCommandAutocompleteResponse
	| APIInteractionResponseChannelMessageWithSource
	| APIInteractionResponseDeferredChannelMessageWithSource
	| APIInteractionResponseDeferredMessageUpdate
	| APIInteractionResponseLaunchActivity
	| APIInteractionResponsePong
	| APIInteractionResponseUpdateMessage
	| APIModalInteractionResponse
	| APIPremiumRequiredInteractionResponse;

export interface APIInteractionResponsePong {
	type: InteractionResponseType.Pong;
}

export interface APIApplicationCommandAutocompleteResponse {
	type: InteractionResponseType.ApplicationCommandAutocompleteResult;
	data: APICommandAutocompleteInteractionResponseCallbackData;
}

export interface APIModalInteractionResponse {
	type: InteractionResponseType.Modal;
	data: APIModalInteractionResponseCallbackData;
}

export interface APIPremiumRequiredInteractionResponse {
	type: InteractionResponseType.PremiumRequired;
}

export interface APIInteractionResponseChannelMessageWithSource {
	type: InteractionResponseType.ChannelMessageWithSource;
	data: APIInteractionResponseCallbackData;
}

export interface APIInteractionResponseDeferredChannelMessageWithSource {
	type: InteractionResponseType.DeferredChannelMessageWithSource;
	data?: Pick<APIInteractionResponseCallbackData, 'flags'>;
}

export interface APIInteractionResponseDeferredMessageUpdate {
	type: InteractionResponseType.DeferredMessageUpdate;
}

export interface APIInteractionResponseUpdateMessage {
	type: InteractionResponseType.UpdateMessage;
	data?: APIInteractionResponseCallbackData;
}

export interface APIInteractionResponseLaunchActivity {
	type: InteractionResponseType.LaunchActivity;
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type}
 */
export enum InteractionResponseType {
	/**
	 * ACK a `Ping`
	 */
	Pong = 1,
	/**
	 * Respond to an interaction with a message
	 */
	ChannelMessageWithSource = 4,
	/**
	 * ACK an interaction and edit to a response later, the user sees a loading state
	 */
	DeferredChannelMessageWithSource,
	/**
	 * ACK a button interaction and update it to a loading state
	 */
	DeferredMessageUpdate,
	/**
	 * ACK a button interaction and edit the message to which the button was attached
	 */
	UpdateMessage,
	/**
	 * For autocomplete interactions
	 */
	ApplicationCommandAutocompleteResult,
	/**
	 * Respond to an interaction with an modal for a user to fill-out
	 */
	Modal,
	/**
	 * Respond to an interaction with an upgrade button, only available for apps with monetization enabled
	 *
	 * @deprecated Send a button with Premium type instead.
	 * {@link https://discord.com/developers/docs/change-log#premium-apps-new-premium-button-style-deep-linking-url-schemes | Learn more here}
	 */
	PremiumRequired,

	/**
	 * Launch the Activity associated with the app.
	 *
	 * @remarks
	 * Only available for apps with Activities enabled
	 */
	LaunchActivity = 12,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure}
 */
export type APIInteractionResponseCallbackData = Omit<RESTPostAPIWebhookWithTokenJSONBody, 'avatar_url' | 'username'>;

export interface APICommandAutocompleteInteractionResponseCallbackData {
	choices?: APIApplicationCommandOptionChoice[];
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal}
 */
export interface APIModalInteractionResponseCallbackData {
	/**
	 * A developer-defined identifier for the component, max 100 characters
	 */
	custom_id: string;
	/**
	 * The title of the popup modal
	 */
	title: string;
	/**
	 * Between 1 and 5 (inclusive) components that make up the modal
	 */
	components: APIActionRowComponent<APIComponentInModalActionRow>[];
}

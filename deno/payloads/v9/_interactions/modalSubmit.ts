import type { APIBaseInteraction, InteractionType, APIModalActionRowComponent } from '../mod.ts';

/**
 * https://discord.com/developers/docs/interactions/message-components#component-object-component-structure
 */
export interface APIModalSubmission {
	/**
	 * A developer-defined identifier for the component, max 100 characters
	 */
	custom_id: string;
	/**
	 * A list of child components
	 */
	components?: APIModalActionRowComponent[];
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIModalSubmitInteraction = APIBaseInteraction<InteractionType.ModalSubmit, APIModalSubmission>;

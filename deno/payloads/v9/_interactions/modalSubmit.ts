import type { APIBaseInteraction, InteractionType, APIModalActionRowComponent, ComponentType } from '../mod.ts';

export interface ModalSubmitComponent {
	type: ComponentType;
	custom_id: string;
	value: string;
}

export interface ModalSubmitActionRowComponent extends Omit<APIModalActionRowComponent, 'components'> {
	components: ModalSubmitComponent[];
}

export interface APIModalSubmission {
	/**
	 * A developer-defined identifier for the component, max 100 characters
	 */
	custom_id: string;
	/**
	 * A list of child components
	 */
	components?: ModalSubmitActionRowComponent[];
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIModalSubmitInteraction = APIBaseInteraction<InteractionType.ModalSubmit, APIModalSubmission>;

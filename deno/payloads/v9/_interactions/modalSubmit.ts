import type { APIBaseComponent, APILabelComponent } from '../channel.ts';
import type {
	APIBaseInteraction,
	APIDMInteractionWrapper,
	APIGuildInteractionWrapper,
	ComponentType,
	InteractionType,
} from '../mod.ts';

export interface ModalSubmitComponent {
	type: ComponentType;
	custom_id: string;
	value: string;
}

export interface ModalSubmitActionRowComponent extends APIBaseComponent<ComponentType.ActionRow> {
	components: ModalSubmitComponent[];
}

export interface ModalSubmitLabelComponent extends APIBaseComponent<ComponentType.Label> {
	component: APILabelComponent;
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure}
 */
export interface APIModalSubmission {
	/**
	 * A developer-defined identifier for the component, max 100 characters
	 */
	custom_id: string;
	/**
	 * A list of child components
	 */
	components: (ModalSubmitActionRowComponent | ModalSubmitLabelComponent)[];
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIModalSubmitInteraction = APIBaseInteraction<InteractionType.ModalSubmit, APIModalSubmission> &
	Required<Pick<APIBaseInteraction<InteractionType.ModalSubmit, APIModalSubmission>, 'data'>>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIModalSubmitDMInteraction = APIDMInteractionWrapper<APIModalSubmitInteraction>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIModalSubmitGuildInteraction = APIGuildInteractionWrapper<APIModalSubmitInteraction>;

import type { APIBaseComponent } from '../channel';
import type {
	APIBaseInteraction,
	APIDMInteractionWrapper,
	APIGuildInteractionWrapper,
	ComponentType,
	InteractionType,
} from '../index';

export interface APIBaseModalSubmitComponent<T extends ComponentType> extends APIBaseComponent<T> {
	type: T;
	custom_id: string;
}

export interface APIModalSubmitTextInputComponent extends APIBaseModalSubmitComponent<ComponentType.TextInput> {
	value: string;
}

export interface APIModalSubmitStringSelectComponent extends APIBaseModalSubmitComponent<ComponentType.StringSelect> {
	values: string[];
}

export type ModalSubmitComponent = APIModalSubmitStringSelectComponent | APIModalSubmitTextInputComponent;

export interface ModalSubmitActionRowComponent extends APIBaseComponent<ComponentType.ActionRow> {
	components: APIModalSubmitTextInputComponent[];
}

export interface ModalSubmitLabelComponent extends APIBaseComponent<ComponentType.Label> {
	component: ModalSubmitComponent;
}

export type APIModalSubmissionComponent = ModalSubmitActionRowComponent | ModalSubmitLabelComponent;

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
	components: APIModalSubmissionComponent[];
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

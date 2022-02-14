import type { APIActionRowComponent, APIModalActionRowComponent } from '../channel.ts';
import type {
	APIBaseInteraction,
	InteractionType,
	ComponentType,
	APIDMInteractionWrapper,
	APIGuildInteractionWrapper,
} from '../mod.ts';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface ModalSubmitComponent {
	type: ComponentType;
	custom_id: string;
	value: string;
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface ModalSubmitActionRowComponent
	extends Omit<APIActionRowComponent<APIModalActionRowComponent>, 'components'> {
	components: ModalSubmitComponent[];
}

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
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
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIModalSubmitInteraction = APIBaseInteraction<InteractionType.ModalSubmit, APIModalSubmission> &
	Required<Pick<APIBaseInteraction<InteractionType.ModalSubmit, APIModalSubmission>, 'data'>>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIModalSubmitDMInteraction = APIDMInteractionWrapper<APIModalSubmitInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIModalSubmitGuildInteraction = APIGuildInteractionWrapper<APIModalSubmitInteraction>;

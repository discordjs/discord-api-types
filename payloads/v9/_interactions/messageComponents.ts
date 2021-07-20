import type { ComponentType } from '../channel';
import type { APIBaseInteraction, InteractionType } from '../interactions';
import type { APIDMInteractionWrapper, APIGuildInteractionWrapper } from './base';

export type APIMessageComponentInteraction = APIBaseInteraction<
	InteractionType.MessageComponent,
	APIMessageComponentInteractionData
> &
	Required<
		Pick<
			APIBaseInteraction<InteractionType.MessageComponent, APIMessageComponentInteractionData>,
			'channel_id' | 'data' | 'message'
		>
	>;

export type APIMessageComponentInteractionData = APIMessageButtonInteractionData | APIMessageSelectMenuInteractionData;

export interface APIMessageComponentBaseInteractionData<CType extends ComponentType> {
	/**
	 * The `custom_id` of the component
	 */
	custom_id: string;
	/**
	 * The type of the component
	 */
	component_type: CType;
}

export type APIMessageButtonInteractionData = APIMessageComponentBaseInteractionData<ComponentType.Button>;

export interface APIMessageSelectMenuInteractionData
	extends APIMessageComponentBaseInteractionData<ComponentType.SelectMenu> {
	values: string[];
}

export type APIMessageComponentDMInteraction = APIDMInteractionWrapper<APIMessageComponentInteraction>;

export type APIMessageComponentGuildInteraction = APIGuildInteractionWrapper<APIMessageComponentInteraction>;

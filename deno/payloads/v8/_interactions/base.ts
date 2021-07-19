import { Permissions, Snowflake } from '../../../globals.ts';
import { InteractionType } from '../../v8.ts';
import { APIMessage } from '../channel.ts';
import { APIGuildMember } from '../guild.ts';
import { APIUser } from '../user.ts';

/**
 * https://discord.com/developers/docs/interactions/slash-commands#message-interaction-object-message-interaction-structure
 */
export interface APIMessageInteraction {
	/**
	 * ID of the interaction
	 */
	id: Snowflake;
	/**
	 * The type of interaction
	 */
	type: InteractionType;
	/**
	 * The name of the ApplicationCommand
	 */
	name: string;
	/**
	 * The user who invoked the interaction
	 */
	user: APIUser;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface APIInteractionGuildMember extends APIGuildMember {
	permissions: Permissions;
	user: APIUser;
}

// INTERACTIONS RECEIVED

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-object
 */
export interface APIBaseInteraction<Type extends InteractionType, Data extends unknown> {
	/**
	 * ID of the interaction
	 */
	id: Snowflake;
	/**
	 * ID of the application this interaction is for
	 */
	application_id: Snowflake;
	/**
	 * The type of interaction
	 */
	type: Type;
	/**
	 * The command data payload
	 */
	data?: Data;
	/**
	 * The guild it was sent from
	 */
	guild_id?: Snowflake;
	/**
	 * The channel it was sent from
	 */
	channel_id?: Snowflake;
	/**
	 * Guild member data for the invoking user, including permissions
	 *
	 * **This is only sent when an interaction is invoked in a guild**
	 */
	member?: APIInteractionGuildMember;
	/**
	 * User object for the invoking user, if invoked in a DM
	 */
	user?: APIUser;
	/**
	 * A continuation token for responding to the interaction
	 */
	token: string;
	/**
	 * Read-only property, always `1`
	 */
	version: 1;
	/**
	 * For components, the message they were attached to
	 */
	message?: APIMessage;
}

export type APIDMInteractionWrapper<Original extends APIBaseInteraction<InteractionType, unknown>> = Omit<
	Original,
	'member' | 'guild_id'
> &
	Required<Pick<Original, 'user'>>;

export type APIGuildInteractionWrapper<Original extends APIBaseInteraction<InteractionType, unknown>> = Omit<
	Original,
	'user'
> &
	Required<Pick<Original, 'member' | 'guild_id'>>;

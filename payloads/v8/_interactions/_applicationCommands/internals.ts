import type { Snowflake } from '../../../../globals';
import type { ApplicationCommandType } from '../applicationCommands';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIBaseApplicationCommandInteractionData<Type extends ApplicationCommandType> {
	id: Snowflake;
	type: Type;
	name: string;
}

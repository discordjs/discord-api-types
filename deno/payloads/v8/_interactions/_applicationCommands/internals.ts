import type { Snowflake } from '../../../../globals.ts';
import type { ApplicationCommandType } from '../applicationCommands.ts';

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIBaseApplicationCommandInteractionData<Type extends ApplicationCommandType> {
	id: Snowflake;
	type: Type;
	name: string;
}

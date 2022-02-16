import type { Snowflake } from '../../../../globals.ts';
import type { ApplicationCommandType } from '../applicationCommands.ts';

export interface APIBaseApplicationCommandInteractionData<Type extends ApplicationCommandType> {
	id: Snowflake;
	type: Type;
	name: string;
}

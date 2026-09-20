import type { Snowflake } from '../../../../../globals.ts';
import type { ApplicationCommandOptionAllowedChannelType } from '../../../channel.ts';
import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export interface APIApplicationCommandChannelOption extends APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Channel> {
	channel_types?: ApplicationCommandOptionAllowedChannelType[];
}

export type APIApplicationCommandInteractionDataChannelOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Channel,
	Snowflake
>;

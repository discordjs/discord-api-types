import type { APIGatewayBotInfo, APIGatewayInfo } from '../../payloads/v9/index';

/**
 * @see {@link https://docs.discord.com/developers/topics/gateway#get-gateway}
 */
export type RESTGetAPIGatewayResult = APIGatewayInfo;

/**
 * @see {@link https://docs.discord.com/developers/topics/gateway#get-gateway-bot}
 */
export type RESTGetAPIGatewayBotResult = APIGatewayBotInfo;

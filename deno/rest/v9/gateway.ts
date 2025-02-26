import type { APIGatewayBotInfo, APIGatewayInfo } from '../../payloads/v9/mod.ts';

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway}
 */
export type RESTGetAPIGatewayResult = APIGatewayInfo;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export type RESTGetAPIGatewayBotResult = APIGatewayBotInfo;

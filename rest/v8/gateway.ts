import type { APIGatewayBotInfo, APIGatewayInfo } from '../../payloads/v8/index';

/**
 * https://discord.com/developers/docs/topics/gateway#get-gateway
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGatewayResult = APIGatewayInfo;

/**
 * https://discord.com/developers/docs/topics/gateway#get-gateway-bot
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGatewayBotResult = APIGatewayBotInfo;

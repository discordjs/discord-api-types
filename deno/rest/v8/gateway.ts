import type { APIGatewayBotInfo, APIGatewayInfo } from '../../payloads/v8/mod.ts';

/**
 * https://docs.discord.com/developers/topics/gateway#get-gateway
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGatewayResult = APIGatewayInfo;

/**
 * https://docs.discord.com/developers/topics/gateway#get-gateway-bot
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type RESTGetAPIGatewayBotResult = APIGatewayBotInfo;

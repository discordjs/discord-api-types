/**
 * https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-params
 */
export interface GatewayUrlQuery {
	v: string;
	encoding: 'json' | 'etf';
	compress?: 'zlib-stream';
}

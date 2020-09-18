import type { APIApplication, APIGuild, APIWebhook } from '../payloads';

/**
 * https://discord.com/developers/docs/topics/oauth2#get-current-application-information
 */
export type RESTGetAPIOauth2CurrentApplicationResult = APIApplication;

/**
 * https://discord.com/developers/docs/topics/oauth2#authorization-code-grant
 */
export interface RESTOAuth2AuthorizationQuery {
	response_type: 'code';
	client_id: string;
	scope: string;
	redirect_uri?: string;
	state?: string;
	prompt?: 'consent' | 'none';
}

/**
 * https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-redirect-url-example
 */
export interface RESTOAuth2AuthorizationQueryResult {
	code: string;
	state?: string;
}

/**
 * https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-redirect-url-example
 */
export interface RESTPostOAuth2AccessTokenURIEncodedData {
	client_id: string;
	client_secret: string;
	grant_type: 'authorization_code';
	code: string;
	redirect_uri?: string;
	scope: string;
}

/**
 * https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response
 */
export interface RESTPostOAuth2AccessTokenResult {
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
}

/**
 * https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-refresh-token-exchange-example
 */
export interface RESTPostOAuth2RefreshTokenURIEncodedData {
	client_id: string;
	client_secret: string;
	grant_type: 'refresh_token';
	refresh_token: string;
	redirect_uri?: string;
	scope: string;
}

export type RESTPostOAuth2RefreshTokenResult = RESTPostOAuth2AccessTokenResult;

/**
 * https://discord.com/developers/docs/topics/oauth2#implicit-grant
 */
export interface RESTOAuth2ImplicitAuthorizationQuery {
	response_type: 'token';
	client_id: string;
	scope: string;
	redirect_uri?: string;
	state?: string;
	prompt?: 'consent' | 'none';
}

/**
 * https://discord.com/developers/docs/topics/oauth2#implicit-grant-redirect-url-example
 */
export type RESTOAuth2ImplicitAuthorizationURIFragmentResult = Omit<RESTPostOAuth2AccessTokenResult, 'refresh_token'>;

/**
 * https://discord.com/developers/docs/topics/oauth2#client-credentials-grant
 */
export interface RESTPostOAuth2ClientCredentialsURIEncodedData {
	client_id: string;
	client_secret: string;
	grant_type: 'client_credentials';
	scope: string;
}

export type RESTPostOAuth2ClientCredentialsResult = RESTOAuth2ImplicitAuthorizationURIFragmentResult;

/**
 * https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow-bot-auth-parameters
 */
export interface RESTOAuth2BotAuthorizationQuery {
	client_id: string;
	scope: string;
	/**
	 * The required permissions bitfield, stringified
	 */
	permissions?: string;
	guild_id?: string;
	disable_guild_select?: boolean;
}

/**
 * https://discord.com/developers/docs/topics/oauth2#advanced-bot-authorization
 */
export interface RESTOAuth2AdvancedBotAuthorizationQuery {
	client_id: string;
	/**
	 * This assumes you include the `bot` scope alongside others (like `identify` for example)
	 */
	scope: string;
	/**
	 * The required permissions bitfield, stringified
	 */
	permissions?: string;
	guild_id?: string;
	disable_guild_select?: boolean;
	response_type: string;
	redirect_uri?: string;
}

export interface RESTOAuth2AdvancedBotAuthorizationQueryResult {
	code: string;
	state?: string;
	guild_id: string;
	permissions: string;
}

/**
 * https://discord.com/developers/docs/topics/oauth2#advanced-bot-authorization-extended-bot-authorization-access-token-example
 */
export interface RESTPostOAuth2AccessTokenWithBotAndGuildsScopeResult {
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
	guild: APIGuild;
}

/**
 * https://discord.com/developers/docs/topics/oauth2#webhooks-webhook-token-response-example
 */
export interface RESTPostOAuth2AccessTokenWithBotAndWebhookIncomingScopeResult {
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	scope: string;
	webhook: APIWebhook;
}

export type RESTPostOAuth2AccessTokenWithBotAndGuildsAndWebhookIncomingScopeResult = RESTPostOAuth2AccessTokenWithBotAndGuildsScopeResult &
	RESTPostOAuth2AccessTokenWithBotAndWebhookIncomingScopeResult;

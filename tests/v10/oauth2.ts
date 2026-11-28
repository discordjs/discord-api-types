import type {
	OAuth2Scopes,
	RESTOAuth2AuthorizationQuery,
	RESTOAuth2BotAuthorizationQuery,
	RESTOAuth2AdvancedBotAuthorizationQuery,
	RESTPostOAuth2AccessTokenURLEncodedData,
	RESTPostOAuth2RefreshTokenURLEncodedData,
} from '../../v10';
import { expectAssignable, expectNotAssignable } from '../__utils__/type-assertions';

declare const validBotScope:
	OAuth2Scopes.Bot | 'applications.commands bot identify' | 'applications.commands bot' | 'bot identify' | 'bot';

declare const invalidBotScope:
	| OAuth2Scopes.ApplicationsCommands
	| ''
	| 'applications.commands identify'
	| 'applications.commands'
	| 'bot%20identify';

expectAssignable<RESTOAuth2BotAuthorizationQuery['scope']>(validBotScope);
// @ts-expect-error - invalid scope
expectNotAssignable<RESTOAuth2BotAuthorizationQuery['scope']>(invalidBotScope);

expectAssignable<RESTOAuth2AdvancedBotAuthorizationQuery['scope']>(validBotScope);
// @ts-expect-error - invalid scope
expectNotAssignable<RESTOAuth2AdvancedBotAuthorizationQuery['scope']>(invalidBotScope);

{
	expectAssignable<RESTPostOAuth2AccessTokenURLEncodedData>({
		code: 'code',
		grant_type: 'authorization_code',
		redirect_uri: 'https://discord.com',
	});

	expectAssignable<RESTPostOAuth2AccessTokenURLEncodedData>({
		client_id: '123456789',
		client_secret: 'very secret',
		code: 'code',
		grant_type: 'authorization_code',
		redirect_uri: 'https://discord.com',
	});

	// @ts-expect-error - client_secret or code_verifier is missing
	expectNotAssignable<RESTPostOAuth2AccessTokenURLEncodedData>({
		client_id: '123456789',
		code: 'code',
		grant_type: 'authorization_code',
		redirect_uri: 'https://discord.com',
	});

	// @ts-expect-error - client_id is missing
	expectNotAssignable<RESTPostOAuth2AccessTokenURLEncodedData>({
		client_secret: 'very secret',
		code: 'code',
		grant_type: 'authorization_code',
		redirect_uri: 'https://discord.com',
	});

	expectAssignable<RESTPostOAuth2AccessTokenURLEncodedData>({
		code: 'code',
		code_verifier: 'verifier',
		grant_type: 'authorization_code',
		redirect_uri: 'https://discord.com',
	});

	expectAssignable<RESTPostOAuth2AccessTokenURLEncodedData>({
		client_id: '123456789',
		client_secret: 'very secret',
		code: 'code',
		code_verifier: 'verifier',
		grant_type: 'authorization_code',
		redirect_uri: 'https://discord.com',
	});

	expectAssignable<RESTPostOAuth2AccessTokenURLEncodedData>({
		client_id: '123456789',
		code: 'code',
		code_verifier: 'verifier',
		grant_type: 'authorization_code',
		redirect_uri: 'https://discord.com',
	});

	// @ts-expect-error - client_id is missing
	expectNotAssignable<RESTPostOAuth2AccessTokenURLEncodedData>({
		client_secret: 'very secret',
		code: 'code',
		code_verifier: 'verifier',
		grant_type: 'authorization_code',
		redirect_uri: 'https://discord.com',
	});
}

{
	expectAssignable<RESTPostOAuth2RefreshTokenURLEncodedData>({
		grant_type: 'refresh_token',
		refresh_token: 'a real token this is',
	});

	expectAssignable<RESTPostOAuth2RefreshTokenURLEncodedData>({
		client_id: '123456789',
		client_secret: 'very secret',
		grant_type: 'refresh_token',
		refresh_token: 'a real token this is',
	});

	expectAssignable<RESTPostOAuth2RefreshTokenURLEncodedData>({
		client_id: '123456789',
		grant_type: 'refresh_token',
		refresh_token: 'a real token this is',
	});

	// @ts-expect-error - client_id is missing
	expectNotAssignable<RESTPostOAuth2RefreshTokenURLEncodedData>({
		client_secret: 'very secret',
		grant_type: 'refresh_token',
		refresh_token: 'a real token this is',
	});
}

{
	expectAssignable<RESTOAuth2AuthorizationQuery>({
		client_id: '123456789',
		code_challenge: 'challenge',
		code_challenge_method: 'S256',
		response_type: 'code',
		scope: 'identify',
	});

	expectNotAssignable<RESTOAuth2AuthorizationQuery>({
		client_id: '123456789',
		code_challenge: 'challenge',
		// @ts-expect-error - only S256 is supported
		code_challenge_method: 'plain',
		response_type: 'code',
		scope: 'identify',
	});
}

import type { OAuth2Scopes, RESTOAuth2BotAuthorizationQuery, RESTOAuth2AdvancedBotAuthorizationQuery } from '../../v10';
import { expectAssignable, expectNotAssignable } from '../__utils__/type-assertions';

declare const validBotScope:
	| OAuth2Scopes.Bot
	| 'applications.commands bot identify'
	| 'applications.commands bot'
	| 'bot identify'
	| 'bot';

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

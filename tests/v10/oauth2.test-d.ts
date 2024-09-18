import { expectAssignable, expectNotAssignable } from 'tsd';
import type { OAuth2Scopes, RESTOAuth2BotAuthorizationQuery, RESTOAuth2AdvancedBotAuthorizationQuery } from '../../v10';

declare const validBotScope:
	| OAuth2Scopes.Bot
	| 'bot'
	| 'bot identify'
	| 'applications.commands bot'
	| 'applications.commands bot identify';
declare const invalidBotScope:
	| OAuth2Scopes.ApplicationsCommands
	| 'applications.commands'
	| 'applications.commands identify'
	| 'bot%20identify'
	| '';

expectAssignable<RESTOAuth2BotAuthorizationQuery['scope']>(validBotScope);
expectNotAssignable<RESTOAuth2BotAuthorizationQuery['scope']>(invalidBotScope);

expectAssignable<RESTOAuth2AdvancedBotAuthorizationQuery['scope']>(validBotScope);
expectNotAssignable<RESTOAuth2AdvancedBotAuthorizationQuery['scope']>(invalidBotScope);

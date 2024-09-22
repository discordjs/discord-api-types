import { expectAssignable } from 'tsd';
import type { APIGuildOnboarding, RESTPutAPIGuildOnboardingJSONBody } from '../../v10';

declare const onboarding: APIGuildOnboarding;

expectAssignable<RESTPutAPIGuildOnboardingJSONBody>({});
expectAssignable<RESTPutAPIGuildOnboardingJSONBody>(onboarding);
expectAssignable<RESTPutAPIGuildOnboardingJSONBody>({
	default_channel_ids: ['123456789012345678'],
	prompts: [
		{
			id: '123456789012345678',
			title: 'This is a title',
			options: [
				{
					title: 'yeet',
					emoji_name: '😎',
					role_ids: undefined,
				},
				{
					id: '123456789012345678',
					title: 'yeet with id',
					emoji_id: '123456789012345678',
				},
			],
			in_onboarding: undefined,
		},
	],
	enabled: undefined,
});

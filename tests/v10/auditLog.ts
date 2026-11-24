import type { APIAuditLogChange, APIGuildOnboardingPrompt, APIGuildOnboardingPromptOption } from '../../v10';
import { GuildOnboardingMode } from '../../v10';
import { expectAssignable } from '../__utils__/type-assertions';

declare const change: APIAuditLogChange;

switch (change.key) {
	case 'default_channel_ids':
		expectAssignable<string[] | undefined>(change.new_value);
		expectAssignable<string[] | undefined>(change.old_value);
		break;
	case 'mode':
		expectAssignable<GuildOnboardingMode | undefined>(change.new_value);
		break;
	case 'prompts':
		expectAssignable<APIGuildOnboardingPrompt[] | undefined>(change.new_value);
		break;
	case 'options':
		expectAssignable<APIGuildOnboardingPromptOption[] | undefined>(change.new_value);
		break;
	case 'title':
		expectAssignable<string | undefined>(change.new_value);
		break;
	case 'single_select':
	case 'required':
	case 'in_onboarding':
		expectAssignable<boolean | undefined>(change.new_value);
		break;
	default:
		break;
}

import type {
	RESTPatchAPIApplicationCommandJSONBody,
	RESTPostAPIApplicationCommandsJSONBody,
	RESTPostAPIBaseApplicationCommandsJSONBody,
	RESTPostAPIApplicationGuildCommandsJSONBody,
	RESTPostAPIChatInputApplicationCommandsJSONBody,
	RESTPostAPIContextMenuApplicationCommandsJSONBody,
	RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody,
	RESTPutAPIApplicationCommandsJSONBody,
	RESTPutAPIApplicationGuildCommandsJSONBody,
} from '../../v10';
import { ApplicationCommandType, EntryPointCommandHandlerType } from '../../v10';
import { expectAssignable } from '../__utils__/type-assertions';

const chatInputCommand = {
	name: 'Chat input',
	description: 'description',
	options: [],
};

const contextMenuCommand = {
	type: ApplicationCommandType.User as const,
	name: 'Context menu',
};

const primaryEntryPointCommand = {
	type: ApplicationCommandType.PrimaryEntryPoint as const,
	name: 'Entry point',
	handler: EntryPointCommandHandlerType.DiscordLaunchActivity,
};

expectAssignable<RESTPostAPIApplicationCommandsJSONBody>(chatInputCommand);
expectAssignable<RESTPostAPIApplicationCommandsJSONBody>(contextMenuCommand);
expectAssignable<RESTPostAPIApplicationCommandsJSONBody>(primaryEntryPointCommand);
expectAssignable<RESTPutAPIApplicationCommandsJSONBody>([
	chatInputCommand,
	contextMenuCommand,
	primaryEntryPointCommand,
]);
expectAssignable<RESTPostAPIApplicationGuildCommandsJSONBody>(chatInputCommand);
expectAssignable<RESTPutAPIApplicationGuildCommandsJSONBody>([chatInputCommand, contextMenuCommand]);
expectAssignable<RESTPatchAPIApplicationCommandJSONBody>({ options: [] });
expectAssignable<RESTPatchAPIApplicationCommandJSONBody>({
	handler: EntryPointCommandHandlerType.AppHandler,
});

// @ts-expect-error - Options are not on all types.
expectAssignable<keyof RESTPostAPIBaseApplicationCommandsJSONBody>('options');
expectAssignable<keyof RESTPostAPIChatInputApplicationCommandsJSONBody>('options');

// @ts-expect-error - Options are only valid for chat input commands.
expectAssignable<keyof RESTPostAPIContextMenuApplicationCommandsJSONBody>('options');
// @ts-expect-error - Options are only valid for chat input commands.
expectAssignable<keyof RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody>('options');

// @ts-expect-error - Handler is not on all types.
expectAssignable<keyof RESTPostAPIBaseApplicationCommandsJSONBody>('handler');

// @ts-expect-error - Handler is only valid for primary entry point commands.
expectAssignable<keyof RESTPostAPIChatInputApplicationCommandsJSONBody>('handler');
// @ts-expect-error - Handler is only valid for primary entry point commands.
expectAssignable<keyof RESTPostAPIContextMenuApplicationCommandsJSONBody>('handler');
expectAssignable<keyof RESTPostAPIPrimaryEntryPointApplicationCommandJSONBody>('handler');

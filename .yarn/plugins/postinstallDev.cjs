/**
 * Altered from https://github.com/sachinraja/yarn-plugin-postinstall-dev/blob/main/sources/index.ts

MIT License

Copyright (c) 2021-2022 Sachin Raja

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

const scriptName = 'postinstallDev';

module.exports = {
    name: 'postinstall-dev-script',
    factory: (require) => ({
        hooks: {
            /**
             * @param {import('@yarnpkg/core').Project} project
             * @param {Parameters<import('@yarnpkg/core').Hooks['afterAllInstalled']>[1]} options
            */
            async afterAllInstalled(project, options) {
                /**
                 * @type {import('@yarnpkg/core')}
                 */
                const { scriptUtils, InstallMode } = require('@yarnpkg/core');

                if (options.mode === InstallMode.UpdateLockfile) {
                    return;
                }

                const locator = project.topLevelWorkspace.anchoredLocator;

                if (await scriptUtils.hasPackageScript(locator, scriptName, { project })) {
                    const exitCode = await scriptUtils.executePackageScript(locator, scriptName, [], {
                        project,
                        stdin: process.stdin,
                        stdout: process.stdout,
                        stderr: process.stderr,
                    });

                    if (exitCode !== 0) {
                        const error = new Error(`${scriptName} script failed with exit code ${exitCode}`);
                        error.stack = undefined;

                        throw error;
                    }
                }
            },
        },
    }),
};

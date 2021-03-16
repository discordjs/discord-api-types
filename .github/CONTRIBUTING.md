# discord-api-types Contributing Guide

**The issue tracker is only for bug reports and enhancement suggestions. If you have a question, please ask it in the [Discord server](https://discord.gg/bRCvFy9) instead of opening an issue, or on [GitHub Discussions](https://github.com/discordjs/discord-api-types/discussions) – you will get redirected there anyway.**

- [Code of Conduct](https://github.com/discordjs/discord-api-types/blob/main/.github/CODE_OF_CONDUCT.md)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing Tests](#contributing-tests)

## Pull Request Guidelines

- Checkout a topic branch from a base branch, e.g. `main`, and merge back against that branch.

- If adding a new feature:

  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing a bug:

  - If you are resolving a special issue, add `fix/close #xxxx[,#xxxx]` (#xxxx is the issue id) in your PR body for a better release log, e.g.

  ```
  fix(Guild): handle events correctly

  close #28
  ```

  - Provide a detailed description of the bug in the PR. Live demo preferred.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- Make sure tests pass!

- Commit messages must follow the [commit message convention](./COMMIT_CONVENTION.md) so that changelogs can be automatically generated. Commit messages are automatically validated before commit (by invoking [Git Hooks](https://git-scm.com/docs/githooks) via [husky](https://github.com/typicode/husky)).

- No need to worry about code style as long as you have installed the dev dependencies - modified files are automatically formatted with Prettier on commit (by invoking [Git Hooks](https://git-scm.com/docs/githooks) via [husky](https://github.com/typicode/husky)).

## Development Setup

You will need [Node.js](http://nodejs.org) **version 12+**, and [npm](https://www.npmjs.com/).

After cloning the repo, run:

```bash
$ npm i # install the dependencies of the project
```

A high level overview of tools used:

- [TypeScript](https://www.typescriptlang.org/) as the development language
- [ESLint](https://eslint.org/) for code-style
- [Prettier](https://prettier.io/) for code formatting

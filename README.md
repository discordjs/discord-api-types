<div style="text-align:center;"><h1>Discord API Types</h1></div>

[![GitHub](https://img.shields.io/github/license/discordjs/discord-api-types)](https://github.com/discordjs/discord-api-types/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/discord-api-types?color=crimson&logo=npm)](https://www.npmjs.com/package/discord-api-types)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&link=https://www.patreon.com/vladfrangu)](https://www.patreon.com/vladfrangu)
[![Ko-fi Donate](https://img.shields.io/badge/kofi-donate-brightgreen.svg?label=Donate%20with%20Ko-fi&logo=ko-fi&colorB=F16061&link=https://ko-fi.com/wolfgalvlad&logoColor=FFFFFF)](https://ko-fi.com/wolfgalvlad)

Simple type definitions for the [Discord API](https://discord.com/developers/docs/intro).

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install discord-api-types
yarn add discord-api-types
pnpm add discord-api-types
```

## Project Structure

The exports of each API version is split into three main parts:

- Everything exported with the `API` prefix represents a payload you may get from the REST API *or* the Gateway.

- Everything exported with the `Gateway` prefix represents data that ONLY comes from or is directly related to the Gateway.

- Everything exported with the `REST` prefix represents data that ONLY comes from or is directly related to the REST API.

  - For endpoint options, they will follow the following structure: `REST<HTTP Method><Type><Query|(JSON|FormData)Body|Result>` where the type represents what it will return.

    - For example, `RESTPostAPIChannelMessageJSONBody` or `RESTGetAPIGatewayBotInfoResult`.

  - If a type ends with `Result`, then it represents the expected result by calling its accompanying route.

    - Types that are exported as `never` usually mean the result will be a `204 No Content`, so you can safely ignore it. This does **not** account for errors.

- Anything else that is miscellaneous will be exported based on what it represents (for example the `REST` route object).

- There may be types exported that are identical for all versions. These will be exported as is and can be found in the `common` directory. They will still be prefixed accordingly as described above.

**Warning**: This package documents just KNOWN (and documented) properties. Anything that isn't documented will NOT be added to this package (unless said properties are in an open Pull Request to Discord's [API Documentation repository](https://github.com/discord/discord-api-docs) or known through other means *and have received the green light to be used*). For clarification's sake, this means that properties that are only known through the process of datamining and have not yet been confirmed in a way as described will NOT be included.

## Usage

You can `require` / `import` the module directly, which will give you the latest types as of the current API version. This is considered the `default` version and will be updated according to Discord's default API version; this means it may break at any point in time.

> We **strongly recommend** you use a version when importing this module! This will prevent breaking changes when updating the module.

```js
const { APIUserData } = require('discord-api-types');
```

```ts
// TypeScript/ES Module support
import { APIUserData } from 'discord-api-types'
```

You should instead consider adding the API version you want to target by appending `/v*`, where the `*` represends the API version.

```js
const { APIUserData } = require('discord-api-types/v6');
```

```ts
// TypeScript/ES Module support
import { APIUserData } from 'discord-api-types/v6';
```

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

We also provide typings compatible with the [deno](https://deno.land/) runtime. You have 3 ways you can import them:

1. Directly from GitHub

```ts
// Importing the default API version
import { APIUser } from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/.deno/mod.ts';

// Importing a specific API version
import { APIUser } from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/.deno/v8/mod.ts';
```

2. From [deno.land/x](https://deno.land/x)

```ts
// Importing the default API version
import { APIUser } from 'https://deno.land/x/discord_api_types@0.12.0/mod.ts';

// Importing a specific API version
import { APIUser } from 'https://deno.land/x/discord_api_types@0.12.0/v8/mod.ts';
```

3. From [skypack.dev](https://www.skypack.dev/)

```ts
// Importing the default API version
import { APIUser } from 'https://cdn.skypack.dev/discord-api-types?dts';

// Importing a specific API version
import { APIUser } from 'https://cdn.skypack.dev/discord-api-types/v8?dts';
```

## Project Structure

The exports of each API version is split into three main parts:

- Everything exported with the `API` prefix represents a payload you may get from the REST API _or_ the Gateway.

- Everything exported with the `Gateway` prefix represents data that ONLY comes from or is directly related to the Gateway.

- Everything exported with the `REST` prefix represents data that ONLY comes from or is directly related to the REST API.

  - For endpoint options, they will follow the following structure: `REST<HTTP Method><Type><Query|(JSON|FormData)Body|Result>` where the type represents what it will return.

    - For example, `RESTPostAPIChannelMessageJSONBody` or `RESTGetAPIGatewayBotInfoResult`.

    - Some exported types (specifically OAuth2 related ones) may not respect this entire structure due to the nature of the fields. They will start with either `RESTOAuth2` or with something similar to `REST<HTTP Method>OAuth2`

  - If a type ends with `Result`, then it represents the expected result by calling its accompanying route.

    - Types that are exported as `never` usually mean the result will be a `204 No Content`, so you can safely ignore it. This does **not** account for errors.

- Anything else that is miscellaneous will be exported based on what it represents (for example the `REST` route object).

- There may be types exported that are identical for all versions. These will be exported as is and can be found in the `common` directory. They will still be prefixed accordingly as described above.

**Warning**: This package documents just KNOWN (and documented) properties. Anything that isn't documented will NOT be added to this package (unless said properties are in an open Pull Request to Discord's [API Documentation repository](https://github.com/discord/discord-api-docs) or known through other means _and have received the green light to be used_). For clarification's sake, this means that properties that are only known through the process of data mining and have not yet been confirmed in a way as described will NOT be included.

## Usage

You can `require` / `import` the module directly, which will give you the latest types as of the current API version. This is considered the `default` version and will be updated according to Discord's default API version; this means it may break at any point in time.

> We **strongly recommend** you use a version when importing this module! This will prevent breaking changes when updating the module.

```js
const { APIUser } = require('discord-api-types');
```

```ts
// TypeScript/ES Module support
import { APIUser } from 'discord-api-types';
```

You should instead consider adding the API version you want to target by appending `/v*`, where the `*` represents the API version.

```js
const { APIUser } = require('discord-api-types/v8');
```

```ts
// TypeScript/ES Module support
import { APIUser } from 'discord-api-types/v8';
```

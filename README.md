# Discord API Types

Simple type defitions for the [Discord API](https://discord.com/developers/docs/intro)

## How it's done

The exports of each API version is split into three main parts:

- Everything exported with the `API` prefix represents a payload you may get from the REST API *or* the Gateway
- Everything exported with the `Gateway` prefix represents data that ONLY comes from or is directly referred to the Gateway
- Everything exported with the `REST` prefix represents data that ONLY comes from or is directly reffered to the REST API
  - For endpoint options, they will follow the following structure: `REST<HTTP Method><Type><Query|<JSON|FormData>Body|Result>` where the type represents what it will return
  - If a type ends with `Result`, then it represents the expected result by calling it's accompanying route
    - Types that are exported as `never` usually mean the result will be a `204 No Content`, so you can safely ignore it. This does **not** account for errors
- Anything else that is miscellaneous will be exported based on what it represents (for example the REST route object)
- There may be exported things from all versions - common throughout all API versions - that will simply be exported as is and are present in the `common` directory. They will still be prefixed with `REST` or `Gateway` accordingly.

**Warning**: This package documents just KNOWN (and documented) properties. Anything that isn't documented will NOT be added to this package (unless said properties are already PR'd to Discord's [API Documentation repository](https://github.com/discord/discord-api-docs) or known through other means and have received the green light to be used)

## How to use

You can require / import the module directly, which will give you the latest types as of the current API version. This is considered the `default` version and may break at any point in time.

> We **strongly recommend** you use a version when importing this module! This will prevent breaking changes when updating the module.

```js
const { APIUserData } = require('discord-api-types');
```

```ts
// TypeScript support
import { APIUserData } from 'discord-api-types'
```

You may also add the API version you want to use by appending `/v*`, where the * represends the API version

```js
const { APIUserData } = require('discord-api-types/v6');
```

```ts
// TypeScript support
import { APIUserData } from 'discord-api-types/v6';
```

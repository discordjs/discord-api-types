import type { GatewayMessageCreateDispatch } from '../../v10';

declare const messageCreateDispatch: GatewayMessageCreateDispatch;

// @ts-expect-error - missing user
const _ = messageCreateDispatch.d.member?.user;

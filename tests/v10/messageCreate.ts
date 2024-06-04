import { expectError } from 'tsd';
import { GatewayMessageCreateDispatch } from '../../v10';

declare const messageCreateDispatch: GatewayMessageCreateDispatch;

expectError(messageCreateDispatch.d.member?.user);

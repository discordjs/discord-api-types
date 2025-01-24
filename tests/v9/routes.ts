import { CDNRoutes, Routes } from '../../rest/v9/index';
import { expectAssignable } from '../__utils__/type-assertions';

expectAssignable<Record<string, (...args: any[]) => `/${string}`>>(Routes);
expectAssignable<Record<string, (...args: any[]) => `/${string}`>>(CDNRoutes);

import { expectAssignable } from 'tsd';
import { CDNRoutes, Routes } from '../../rest/v9/index';

expectAssignable<Record<string, (...args: any[]) => `/${string}`>>(Routes);
expectAssignable<Record<string, (...args: any[]) => `/${string}`>>(CDNRoutes);

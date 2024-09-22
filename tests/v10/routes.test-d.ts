import { expectAssignable } from 'tsd';
import { CDNRoutes, Routes } from '../../rest/v10/index';

expectAssignable<Record<string, (...args: any[]) => `/${string}`>>(Routes);
expectAssignable<Record<string, (...args: any[]) => `/${string}`>>(CDNRoutes);

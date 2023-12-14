import * as trpc from '@trpc/server';
import { procedure, router } from './trpc';
export const appRouter = router({
  getGreeting: procedure.query(async () => 'hello tRPC v10!'),
});
export type AppRouter = typeof appRouter;
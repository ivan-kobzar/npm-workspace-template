import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

const routes = app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export type AppType = typeof routes;

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

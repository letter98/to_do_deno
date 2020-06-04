import { serve } from "https://deno.land/std@0.55.0/http/server.ts";
import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './routes.ts'

const HOST = '127.0.0.1';
const PORT = 8099;
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)
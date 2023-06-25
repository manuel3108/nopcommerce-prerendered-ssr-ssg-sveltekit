import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.53e8292b.js","_app/immutable/chunks/scheduler.0d975f0c.js","_app/immutable/chunks/index.9312a719.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];

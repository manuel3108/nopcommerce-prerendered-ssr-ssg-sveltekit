import * as server from '../entries/pages/category/_category_/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/category/_category_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/category/[category]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.4f9804cd.js","_app/immutable/chunks/scheduler.0d975f0c.js","_app/immutable/chunks/index.9312a719.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/3.72dfea2e.css"];
export const fonts = [];

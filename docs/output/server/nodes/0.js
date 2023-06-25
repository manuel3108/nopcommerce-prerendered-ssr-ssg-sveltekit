import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.112c531f.js","_app/immutable/chunks/scheduler.0d975f0c.js","_app/immutable/chunks/index.9312a719.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/0.35a92e06.css"];
export const fonts = [];

import * as universal from '../entries/pages/product/_product_/_page.js';
import * as server from '../entries/pages/product/_product_/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/product/_product_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/product/[product]/+page.js";
export { server };
export const server_id = "src/routes/product/[product]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.92186dac.js","_app/immutable/chunks/scheduler.0d975f0c.js","_app/immutable/chunks/index.9312a719.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/4.5bb64f05.css"];
export const fonts = [];

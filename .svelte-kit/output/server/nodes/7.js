import * as server from '../entries/pages/events/_type_/_event_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_type_/_event_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/[type]/[event]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.C0F4Yjei.js","_app/immutable/chunks/scheduler.CELf-BBk.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.th4lOInj.js"];
export const stylesheets = ["_app/immutable/assets/7.Duu1pfsr.css","_app/immutable/assets/Right-corner.D6AEqOdc.css"];
export const fonts = [];

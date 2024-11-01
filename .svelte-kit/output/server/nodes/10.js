import * as server from '../entries/pages/startup/_event_/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/startup/_event_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/startup/[event]/+page.server.js";
export const imports = ["_app/immutable/nodes/10.D5lRldLa.js","_app/immutable/chunks/scheduler.CELf-BBk.js","_app/immutable/chunks/index.th4lOInj.js"];
export const stylesheets = ["_app/immutable/assets/10.Dfrj5lJx.css","_app/immutable/assets/Right-corner.D6AEqOdc.css"];
export const fonts = [];

import * as server from '../entries/pages/events/_type_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_type_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/[type]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.49TrHIBB.js","_app/immutable/chunks/scheduler.CELf-BBk.js","_app/immutable/chunks/index.th4lOInj.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/SectionHeader.noMTXUhh.js","_app/immutable/chunks/stores.CJ36z0qt.js","_app/immutable/chunks/index.BALHysrm.js","_app/immutable/chunks/EventCard.B47WH7B_.js"];
export const stylesheets = ["_app/immutable/assets/6.BiuS9rUv.css","_app/immutable/assets/SectionHeader.CzndUnBw.css","_app/immutable/assets/EventCard._3O1MTNL.css"];
export const fonts = [];

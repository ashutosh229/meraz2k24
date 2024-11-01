import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Cy847yVN.js","_app/immutable/chunks/scheduler.CELf-BBk.js","_app/immutable/chunks/index.th4lOInj.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.es.ClDhyaKY.js","_app/immutable/chunks/stores.CJ36z0qt.js","_app/immutable/chunks/index.BALHysrm.js","_app/immutable/chunks/stores.CiunHjvt.js","_app/immutable/chunks/entry.9UK4DMKs.js"];
export const stylesheets = ["_app/immutable/assets/0.CIm9cvAT.css","_app/immutable/assets/index.C9Zzwpzs.css"];
export const fonts = ["_app/immutable/assets/metal-mania-latin-ext-400-normal.CrwyUkxc.woff2","_app/immutable/assets/metal-mania-all-400-normal.B_avwJf4.woff","_app/immutable/assets/metal-mania-latin-400-normal.CT_THgr-.woff2"];

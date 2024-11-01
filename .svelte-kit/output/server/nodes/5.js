

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.C3SrwVEP.js","_app/immutable/chunks/scheduler.CELf-BBk.js","_app/immutable/chunks/index.th4lOInj.js","_app/immutable/chunks/SectionHeader.noMTXUhh.js","_app/immutable/chunks/SubSectionHeader.DE78bQyp.js"];
export const stylesheets = ["_app/immutable/assets/5.ChsdI26P.css","_app/immutable/assets/SectionHeader.CzndUnBw.css","_app/immutable/assets/SubSectionHeader.DnL34ngU.css"];
export const fonts = [];

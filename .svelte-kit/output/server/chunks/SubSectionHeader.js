import { c as create_ssr_component, d as escape } from "./ssr.js";
const css = {
  code: '.root.svelte-ylgvvu{position:relative;display:flex;justify-content:center;font-family:"Yusei Magic";max-width:100vw}.heading-text.svelte-ylgvvu{font-size:3rem;justify-content:center;align-items:center;font-family:Cormorant;color:#7cc7ff}@media(max-width: 768px){.heading-text.svelte-ylgvvu{font-size:2.7rem}}@media(max-width: 480px){.heading-text.svelte-ylgvvu{font-size:2.5rem}}',
  map: '{"version":3,"file":"SubSectionHeader.svelte","sources":["SubSectionHeader.svelte"],"sourcesContent":["<script>\\n  /** @type {string} */\\n  export let name = \\"\\";\\n  export let padding = 1;\\n<\/script>\\n<style lang=\\"scss\\">.root {\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  font-family: \\"Yusei Magic\\";\\n  max-width: 100vw;\\n}\\n\\n.heading-text {\\n  font-size: 3rem;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: Cormorant; /* Updated font style */\\n  color: #7cc7ff; /* Changed color to light blue */\\n}\\n\\n@media (max-width: 768px) {\\n  .heading-text {\\n    font-size: 2.7rem;\\n  }\\n}\\n@media (max-width: 480px) {\\n  .heading-text {\\n    font-size: 2.5rem;\\n  }\\n}</style>\\n\\n\\n<div class=\\"root\\">\\n  <div class=\\"heading-text\\" style=\\"padding-left:{padding}rem;\\">\\n    {name}\\n  </div>\\n</div>\\n\\n"],"names":[],"mappings":"AAKmB,mBAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,aAAa,CAC1B,SAAS,CAAE,KACb,CAEA,2BAAc,CACZ,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,SAAS,CACtB,KAAK,CAAE,OACT,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAc,CACZ,SAAS,CAAE,MACb,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAc,CACZ,SAAS,CAAE,MACb,CACF"}'
};
const SubSectionHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { padding = 1 } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  $$result.css.add(css);
  return `<div class="root svelte-ylgvvu"><div class="heading-text svelte-ylgvvu" style="${"padding-left:" + escape(padding, true) + "rem;"}">${escape(name)}</div></div>`;
});
export {
  SubSectionHeader as S
};

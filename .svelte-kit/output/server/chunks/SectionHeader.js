import { c as create_ssr_component, d as escape } from "./ssr.js";
const css = {
  code: ".root.svelte-zu3mg7{position:relative;display:flex;justify-content:center;max-width:100vw;font-family:CinzelDecorative;color:#ffbe4a}.icon.svelte-zu3mg7{position:relative;width:clamp(2vw, 60px, 10vw);top:50%;transform:translateY(-50%)}.heading-text.svelte-zu3mg7{justify-content:center;align-items:center;font-family:CinzelDecorative;text-transform:uppercase;padding-left:1vw;font-size:36px;font-weight:400;line-height:52px;letter-spacing:0em;text-align:left;color:#7cc7ff}@media(max-width: 1000px){.heading-text.svelte-zu3mg7{font-size:3rem}}@media(max-width: 480px){.heading-text.svelte-zu3mg7{font-size:2.8rem}}",
  map: '{"version":3,"file":"SectionHeader.svelte","sources":["SectionHeader.svelte"],"sourcesContent":["<script>\\n  /** @type {string} */\\n  export let name = \\"\\";\\n  export let padding = 1;\\n<\/script>\\n<style lang=\\"scss\\">.root {\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  max-width: 100vw;\\n  font-family: CinzelDecorative;\\n  color: #ffbe4a;\\n}\\n\\n.icon {\\n  position: relative;\\n  width: clamp(2vw, 60px, 10vw);\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n\\n.heading-text {\\n  justify-content: center;\\n  align-items: center;\\n  font-family: CinzelDecorative;\\n  text-transform: uppercase;\\n  padding-left: 1vw;\\n  font-size: 36px;\\n  font-weight: 400;\\n  line-height: 52px;\\n  letter-spacing: 0em;\\n  text-align: left;\\n  color: #7cc7ff;\\n}\\n\\n@media (max-width: 1000px) {\\n  .heading-text {\\n    font-size: 3rem;\\n  }\\n}\\n@media (max-width: 480px) {\\n  .heading-text {\\n    font-size: 2.8rem;\\n  }\\n}</style>\\n<svelte:head></svelte:head><svelte:window />\\n\\n\\n<!-- <link rel=\\"preconnect\\" href=\\"https://fonts.googleapis.com\\" />\\n<link rel=\\"preconnect\\" href=\\"https://fonts.gstatic.com\\" crossorigin />\\n<link\\n  href=\\"https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap\\"\\n  rel=\\"stylesheet\\"\\n/> -->\\n<div class=\\"root\\">\\n  <div>\\n    <img src=\\"/assets/Stars.png\\" class=\\"icon\\" alt=\\"\\" />\\n  </div>\\n  <h1 class=\\"heading-text\\" style=\\"padding-left:{padding}rem;\\">\\n    {name}\\n  </h1>\\n  <div>\\n    <img src=\\"/assets/Stars.png\\" class=\\"icon\\" alt=\\"\\" />\\n  </div>\\n</div>\\n\\n"],"names":[],"mappings":"AAKmB,mBAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,gBAAgB,CAC7B,KAAK,CAAE,OACT,CAEA,mBAAM,CACJ,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,MAAM,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAC7B,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,WAAW,IAAI,CAC5B,CAEA,2BAAc,CACZ,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,gBAAgB,CAC7B,cAAc,CAAE,SAAS,CACzB,YAAY,CAAE,GAAG,CACjB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,GAAG,CACnB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,OACT,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,2BAAc,CACZ,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAc,CACZ,SAAS,CAAE,MACb,CACF"}'
};
const SectionHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { padding = 1 } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_undefined_START --><!-- HEAD_undefined_END -->`, ""}  <div class="root svelte-zu3mg7"><div data-svelte-h="svelte-1msz1xu"><img src="/assets/Stars.png" class="icon svelte-zu3mg7" alt=""></div> <h1 class="heading-text svelte-zu3mg7" style="${"padding-left:" + escape(padding, true) + "rem;"}">${escape(name)}</h1> <div data-svelte-h="svelte-1msz1xu"><img src="/assets/Stars.png" class="icon svelte-zu3mg7" alt=""></div></div>`;
});
export {
  SectionHeader as S
};
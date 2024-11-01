import { c as create_ssr_component, a as subscribe, f as set_store_value, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
import { c as collapsingNavbar } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $collapsingNavbar, $$unsubscribe_collapsingNavbar;
  $$unsubscribe_collapsingNavbar = subscribe(collapsingNavbar, (value) => $collapsingNavbar = value);
  set_store_value(collapsingNavbar, $collapsingNavbar = false, $collapsingNavbar);
  $$unsubscribe_collapsingNavbar();
  return `${$$result.head += `<!-- HEAD_svelte-huubh0_START --><link href="https://fonts.googleapis.com/css?family=Press Start 2P" rel="stylesheet"><!-- HEAD_svelte-huubh0_END -->`, ""} ${validate_component(SectionHeader, "SectionHeader").$$render($$result, { name: "Work in progress" }, {}, {})} <img src="/assets/construction.svg" style="height: 60vh; width: 100%" alt="Construction">`;
});
export {
  Page as default
};

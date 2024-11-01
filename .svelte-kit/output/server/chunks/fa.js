import { c as create_ssr_component, b as add_attribute, d as escape, n as null_to_empty } from "./ssr.js";
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    " "
  );
}
const css = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: `{"version":3,"file":"fa.svelte","sources":["fa.svelte"],"sourcesContent":["<script>\\nimport {\\n  joinCss,\\n  getStyles,\\n  getTransform,\\n} from './utils';\\n\\nlet clazz = '';\\nexport { clazz as class };\\nexport let id = '';\\nexport let style = '';\\n\\nexport let icon;\\n\\nexport let size = '';\\nexport let color = '';\\n\\nexport let fw = false;\\nexport let pull = '';\\n\\nexport let scale = 1;\\nexport let translateX = 0;\\nexport let translateY = 0;\\nexport let rotate = '';\\nexport let flip = false;\\n\\nexport let spin = false;\\nexport let pulse = false;\\n\\n// Duotone Icons\\nexport let primaryColor = '';\\nexport let secondaryColor = '';\\nexport let primaryOpacity = 1;\\nexport let secondaryOpacity = 0.4;\\nexport let swapOpacity = false;\\n\\nlet i;\\nlet c;\\nlet s;\\nlet transform;\\n\\n$: i = (icon && icon.icon) || [0, 0, '', [], ''];\\n\\n$: c = joinCss(\\n  [\\n    clazz,\\n    'svelte-fa',\\n    spin && 'spin',\\n    pulse && 'pulse',\\n  ],\\n  ' ',\\n);\\n\\n$: s = getStyles(style, size, pull, fw);\\n\\n$: transform = getTransform(scale, translateX, translateY, rotate, flip, 512);\\n<\/script>\\n<style>\\n.spin {\\n  animation: spin 2s 0s infinite linear;\\n}\\n\\n.pulse {\\n  animation: spin 1s infinite steps(8);\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n</style>\\n\\n\\n{#if i[4]}\\n  <svg\\n    {id}\\n    class={c}\\n    style={s}\\n    viewBox={\`0 0 \${i[0]} \${i[1]}\`}\\n    aria-hidden=\\"true\\"\\n    role=\\"img\\"\\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n  >\\n    <g\\n      transform={\`translate(\${i[0] / 2} \${i[1] / 2})\`}\\n      transform-origin={\`\${i[0] / 4} 0\`}\\n    >\\n      <g {transform}>\\n        {#if typeof i[4] == 'string'}\\n          <path\\n            d={i[4]}\\n            fill={color || primaryColor || 'currentColor'}\\n            transform={\`translate(\${i[0] / -2} \${i[1] / -2})\`}\\n          />\\n        {:else}\\n          <path\\n            d={i[4][0]}\\n            fill={secondaryColor || color || 'currentColor'}\\n            fill-opacity={swapOpacity != false ? primaryOpacity : secondaryOpacity}\\n            transform={\`translate(\${i[0] / -2} \${i[1] / -2})\`}\\n          />\\n          <path\\n            d={i[4][1]}\\n            fill={primaryColor || color || 'currentColor'}\\n            fill-opacity={swapOpacity != false ? secondaryOpacity : primaryOpacity}\\n            transform={\`translate(\${i[0] / -2} \${i[1] / -2})\`}\\n          />\\n        {/if}\\n      </g>\\n    </g>\\n  </svg>\\n{/if}\\n"],"names":[],"mappings":"AA0DA,oBAAM,CACJ,SAAS,CAAE,mBAAI,CAAC,EAAE,CAAC,EAAE,CAAC,QAAQ,CAAC,MACjC,CAEA,qBAAO,CACL,SAAS,CAAE,mBAAI,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,CACrC,CAEA,WAAW,mBAAK,CACd,EAAG,CACD,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF"}`
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let c;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0) $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0) $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0) $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0) $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0) $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0) $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0) $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0) $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0) $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0) $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0) $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0) $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0) $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0) $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css);
  i = icon && icon.icon || [0, 0, "", [], ""];
  c = joinCss([clazz, "svelte-fa", spin && "spin", pulse && "pulse"], " ");
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id, 0)} class="${escape(null_to_empty(c), true) + " svelte-1cj2gr0"}"${add_attribute("style", s, 0)}${add_attribute("viewBox", `0 0 ${i[0]} ${i[1]}`, 0)} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g${add_attribute("transform", `translate(${i[0] / 2} ${i[1] / 2})`, 0)}${add_attribute("transform-origin", `${i[0] / 4} 0`, 0)}><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)}${add_attribute("transform", `translate(${i[0] / -2} ${i[1] / -2})`, 0)}></path>` : `<path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)}${add_attribute("transform", `translate(${i[0] / -2} ${i[1] / -2})`, 0)}></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)}${add_attribute("transform", `translate(${i[0] / -2} ${i[1] / -2})`, 0)}></path>`}</g></g></svg>` : ``}`;
});
export {
  Fa as F
};

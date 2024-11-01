import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = ` ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => `<!DOCTYPE html>\r
<html lang="en">\r
	<head>\r
		<meta charset="utf-8" />\r
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\r
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\r
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\r
		<link rel="manifest" href="/site.webmanifest">\r
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">\r
		<meta name="msapplication-TileColor" content="#da532c">\r
		<meta name="theme-color" content="#ffffff">\r
		<meta name="viewport" content="width=device-width, initial-scale=1" />\r
		<base href="/" />\r
		<meta name="theme-color" content="#000000" />\r
		\r
\r
		<!--  Essential META Tags -->\r
		<meta name="description" content="Meraz'24 is TechnoCultural Fest of IIT Bhilai. It is the biggest techno-cultural fest of central India." />\r
\r
		<meta name="keywords" content="Meraz 2k24, Meraz, Meraz'24, Meraz24, 2k24, IITBh, Bhilai, IIT Bhilai, Fest, TechnoCultural, Technology, Cultural, Durg, Central India">\r
\r
		<meta property="og:title" content="Meraz'24'" />\r
		<meta property="og:description" content="Meraz'24 is TechnoCultural Fest of IIT Bhilai. It is the biggest techno-cultural fest of central India." />\r
		<meta property="og:image" content="http://meraz2k24.in/favicon.png" />\r
		<meta property="og:url" content="https://meraz2k24.in" />\r
		<meta name="twitter:card" content="Meraz'24 Fest of IIT Bhilai" />\r
\r
		<!--  Non-Essential, But Recommended -->\r
		<meta property="og:site_name" content="Meraz '24" />\r
		<meta name="twitter:image:alt" content="Meraz'24 Fest" />\r
\r
		<meta name="og:type" content="Meraz'24 Fest" />\r
		<meta name="fb:app_id" content="Meraz'24 Fest" />\r
		<script data-goatcounter="https://meraz2k24.goatcounter.com/count" async src="//gc.zgo.at/count.js"><\/script>\r
				` + head + '\r\n	</head>\r\n	<body>\r\n		<div id="svelte">' + body + `</div>\r
		<script type="application/ld+json">\r
			{\r
			  "@context": "http://schema.org",\r
			  "@type": "Event",\r
			  "name": "Meraz'24 Fest",\r
			  "startDate": "2024-03-15",\r
			  "endDate": "2024-03-17",\r
			  "url": "https://meraz2k24.in",\r
			  "description": "Meraz'24 - Techno Cultural Fest of IIT Bhilai",\r
			  "image": "http://meraz2k24.in/favicon.png",\r
			  "location": {\r
				"@type": "Place\r
				",\r
				"name": "IIT Bhilai",\r
				"address": {\r
				  "@type": "PostalAddress",\r
				  "streetAddress": "IIT Bhilai Campus",\r
				  "addressLocality": "Kutelabhata, Bhilai",\r
				  "addressRegion": "Chhattisgarh",\r
				  "postalCode": "491001",\r
				  "addressCountry": "India"\r
				}\r
			  },\r
			  "organizer": {\r
				"@type": "Organization",\r
				"name": "IIT Bhilai"\r
			  }\r
			}\r
			<\/script>\r
	</body>\r
</html>\r
\r
`,
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "12wa4am"
};
async function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  read_implementation as c,
  options as d,
  set_private_env as e,
  prerendering as f,
  set_public_env as g,
  get_hooks as h,
  set_safe_public_env as i,
  set_read_implementation as j,
  set_assets as k,
  set_building as l,
  set_manifest as m,
  set_prerendering as n,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};

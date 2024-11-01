import { c as create_ssr_component, d as escape, b as add_attribute, a as subscribe, f as set_store_value, v as validate_component, e as each } from "../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
import { S as SubSectionHeader } from "../../../chunks/SubSectionHeader.js";
import { c as collapsingNavbar } from "../../../chunks/stores.js";
const sponsorshipData = [
  {
    title: "Sponsor",
    card_width: 28,
    card_height: 20,
    entries: [
      {
        name: "Bank of Baroda",
        logo: "BOB.jpg"
      },
      {
        name: "IBITF",
        logo: "ibitf.webp"
      }
    ]
  },
  {
    title: "Sustainability Partner",
    card_width: 28,
    card_height: 20,
    entries: [
      {
        name: "ABIS",
        logo: "abis.png"
      }
    ]
  },
  {
    title: "Event Sponsor",
    card_width: 28,
    card_height: 20,
    entries: [
      {
        name: "Career Launcher",
        logo: "career-launcher.png"
      }
    ]
  },
  {
    title: "Beauty Partner",
    card_width: 28,
    card_height: 20,
    entries: [
      {
        name: "Aishwarya's Makeover Salon",
        logo: "aishwarya-salon.jpeg"
      }
    ]
  },
  {
    title: "Digital Partner",
    card_width: 28,
    card_height: 20,
    entries: [
      {
        name: "UNSTOP",
        logo: "unstop.jpeg"
      }
    ]
  },
  {
    title: "Other Sponsors",
    card_width: 28,
    card_height: 20,
    entries: [
      {
        name: "Slick",
        logo: "Slick.png"
      },
      {
        name: "Stories by Inside Me",
        logo: "Stories by Inside me.jpg"
      },
      {
        name: "Crazy Cakes and Bakers",
        logo: "ccb.jpeg"
      },
      {
        name: "Gigmakers",
        logo: "gigmakers.webp"
      },
      {
        name: "Hyderabad Perls",
        logo: "hydrabad.jpg"
      },
      {
        name: "Kaksha Cafe",
        logo: "kaksha.jpeg"
      },
      {
        name: "Kavazilla Hospitality",
        logo: "kawa.jpeg"
      },
      {
        name: "Street Foods of Bharat",
        logo: "street.jpeg"
      },
      {
        name: "Bistro",
        logo: "bistro.jpeg"
      }
    ]
  }
];
const css$3 = {
  code: ".card-container.svelte-1ghhagj{display:flex;flex-direction:column;padding:1.25rem;align-items:center}.card-img-container.svelte-1ghhagj:hover{transform:scale(1.1)}.card-img-container.svelte-1ghhagj{margin:1rem;position:relative;transition:all 0.3s ease-in-out}.frame-container.svelte-1ghhagj{width:var(--width);height:var(--height)}.image-container.svelte-1ghhagj{position:absolute;top:5%;left:10%;bottom:1%;right:10%;object-fit:contain}.sponsor-image.svelte-1ghhagj{position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #c5a584}.sponsor-name.svelte-1ghhagj{font-size:2rem;margin:0.5rem;margin-top:1.5rem;font-family:LibreBaskerville}@media(max-width: 480px){.frame-container.svelte-1ghhagj{width:calc(var(--width) - 10) rem;height:calc(var(--height) - 5) rem}.sponsor-name.svelte-1ghhagj{font-size:1.5rem;margin:0.3rem;margin-top:1rem;font-family:LibreBaskerville}.image-container.svelte-1ghhagj{top:8%;left:6%;bottom:5%;right:6%}}",
  map: '{"version":3,"file":"SponsorCard.svelte","sources":["SponsorCard.svelte"],"sourcesContent":["<script>\\n  import { faRulerHorizontal } from \\"@fortawesome/free-solid-svg-icons\\";\\n  export let frameContainerWidth = 30;\\n  export let frameContainerHeight = 30;\\n\\n  export let sponsorName = \\"\\";\\n  export let logoName = \\"\\";\\n<\/script>\\n<style lang=\\"scss\\">.card-container {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 1.25rem;\\n  align-items: center;\\n}\\n\\n.card-img-container:hover {\\n  transform: scale(1.1);\\n}\\n\\n.card-img-container {\\n  margin: 1rem;\\n  position: relative;\\n  transition: all 0.3s ease-in-out;\\n}\\n\\n.frame-container {\\n  width: var(--width);\\n  height: var(--height);\\n}\\n\\n.image-container {\\n  position: absolute;\\n  top: 5%;\\n  left: 10%;\\n  bottom: 1%;\\n  right: 10%;\\n  object-fit: contain;\\n}\\n\\n.sponsor-image {\\n  position: absolute;\\n  width: 100%;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border: 2px solid #c5a584;\\n}\\n\\n.sponsor-name {\\n  font-size: 2rem;\\n  margin: 0.5rem;\\n  margin-top: 1.5rem;\\n  font-family: LibreBaskerville;\\n}\\n\\n@media (max-width: 480px) {\\n  .frame-container {\\n    width: calc(var(--width) - 10) rem;\\n    height: calc(var(--height) - 5) rem;\\n  }\\n  .sponsor-name {\\n    font-size: 1.5rem;\\n    margin: 0.3rem;\\n    margin-top: 1rem;\\n    font-family: LibreBaskerville;\\n  }\\n  .image-container {\\n    top: 8%;\\n    left: 6%;\\n    bottom: 5%;\\n    right: 6%;\\n  }\\n}</style>\\n\\n\\n<div class=\\"card-container\\">\\n  <div class=\\"card-img-container\\">\\n    <img\\n      class=\\"frame-container\\"\\n      src=\\"/assets/sponsors/sponsor_frame.svg\\"\\n      alt=\\"\\"\\n      style=\\"--width: {frameContainerWidth}rem; --height: {frameContainerHeight}rem;\\"\\n    />\\n    <div class=\\"image-container\\">\\n      <img class=\\"sponsor-image\\" src={`${logoName}`} alt=\\"not found\\" />\\n    </div>\\n  </div>\\n  <div class=\\"sponsor-name\\">{sponsorName}</div>\\n</div>\\n\\n"],"names":[],"mappings":"AAQmB,8BAAgB,CACjC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,OAAO,CAChB,WAAW,CAAE,MACf,CAEA,kCAAmB,MAAO,CACxB,SAAS,CAAE,MAAM,GAAG,CACtB,CAEA,kCAAoB,CAClB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WACvB,CAEA,+BAAiB,CACf,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,MAAM,CAAE,IAAI,QAAQ,CACtB,CAEA,+BAAiB,CACf,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,EAAE,CACP,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,EAAE,CACV,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,OACd,CAEA,6BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACpB,CAEA,4BAAc,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,MAAM,CACd,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,gBACf,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,+BAAiB,CACf,KAAK,CAAE,KAAK,IAAI,OAAO,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAClC,MAAM,CAAE,KAAK,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAClC,CACA,4BAAc,CACZ,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,MAAM,CACd,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,gBACf,CACA,+BAAiB,CACf,GAAG,CAAE,EAAE,CACP,IAAI,CAAE,EAAE,CACR,MAAM,CAAE,EAAE,CACV,KAAK,CAAE,EACT,CACF"}'
};
const SponsorCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { frameContainerWidth = 30 } = $$props;
  let { frameContainerHeight = 30 } = $$props;
  let { sponsorName = "" } = $$props;
  let { logoName = "" } = $$props;
  if ($$props.frameContainerWidth === void 0 && $$bindings.frameContainerWidth && frameContainerWidth !== void 0) $$bindings.frameContainerWidth(frameContainerWidth);
  if ($$props.frameContainerHeight === void 0 && $$bindings.frameContainerHeight && frameContainerHeight !== void 0) $$bindings.frameContainerHeight(frameContainerHeight);
  if ($$props.sponsorName === void 0 && $$bindings.sponsorName && sponsorName !== void 0) $$bindings.sponsorName(sponsorName);
  if ($$props.logoName === void 0 && $$bindings.logoName && logoName !== void 0) $$bindings.logoName(logoName);
  $$result.css.add(css$3);
  return `<div class="card-container svelte-1ghhagj"><div class="card-img-container svelte-1ghhagj"><img class="frame-container svelte-1ghhagj" src="/assets/sponsors/sponsor_frame.svg" alt="" style="${"--width: " + escape(frameContainerWidth, true) + "rem; --height: " + escape(frameContainerHeight, true) + "rem;"}"> <div class="image-container svelte-1ghhagj"><img class="sponsor-image svelte-1ghhagj"${add_attribute("src", `${logoName}`, 0)} alt="not found"></div></div> <div class="sponsor-name svelte-1ghhagj">${escape(sponsorName)}</div></div>`;
});
const css$2 = {
  code: ".hanging_lantern.svelte-8yyaaz.svelte-8yyaaz{position:absolute;top:0;left:3.75vw}.hanging_stars.svelte-8yyaaz.svelte-8yyaaz{display:flex;gap:1rem;justify-content:center;position:relative}.hanging_stars.svelte-8yyaaz>img.svelte-8yyaaz{object-fit:contain}.hanging_stars_smaller.svelte-8yyaaz.svelte-8yyaaz{height:10vw;width:10vw;position:absolute;left:15vw;top:-0.25vw;object-fit:contain}.hanging_stars_bigger.svelte-8yyaaz.svelte-8yyaaz{height:20vw;width:20vw;position:absolute;left:0;object-fit:contain}@media(max-width: 900px){.hanging_lantern.svelte-8yyaaz.svelte-8yyaaz{display:none}}",
  map: '{"version":3,"file":"Hanging_lantern_left.svelte","sources":["Hanging_lantern_left.svelte"],"sourcesContent":["<script>\\n<\/script>\\n<style lang=\\"scss\\">.hanging_lantern {\\n  position: absolute;\\n  top: 0;\\n  left: 3.75vw;\\n}\\n\\n.hanging_stars {\\n  display: flex;\\n  gap: 1rem;\\n  justify-content: center;\\n  position: relative;\\n}\\n\\n.hanging_stars > img {\\n  object-fit: contain;\\n}\\n\\n.hanging_stars_smaller {\\n  height: 10vw;\\n  width: 10vw;\\n  position: absolute;\\n  left: 15vw;\\n  top: -0.25vw;\\n  object-fit: contain;\\n}\\n\\n.hanging_stars_bigger {\\n  height: 20vw;\\n  width: 20vw;\\n  position: absolute;\\n  left: 0;\\n  object-fit: contain;\\n}\\n\\n@media (max-width: 900px) {\\n  .hanging_lantern {\\n    display: none;\\n  }\\n}</style>\\n\\n\\n<div class=\\"hanging_lantern\\">\\n  <div class=\\"hanging_stars\\">\\n    <img\\n      src=\\"/assets/sponsors/Hangingstars_bigger.png\\"\\n      alt=\\"\\"\\n      class=\\"hanging_stars_bigger\\"\\n    />\\n    <img\\n      src=\\"/assets/sponsors/Hangingstars_smaller.png\\"\\n      alt=\\"\\"\\n      class=\\"hanging_stars_smaller\\"\\n    />\\n  </div>\\n</div>\\n\\n"],"names":[],"mappings":"AAEmB,4CAAiB,CAClC,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,MACR,CAEA,0CAAe,CACb,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,QACZ,CAEA,4BAAc,CAAG,iBAAI,CACnB,UAAU,CAAE,OACd,CAEA,kDAAuB,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,IAAI,CACV,GAAG,CAAE,OAAO,CACZ,UAAU,CAAE,OACd,CAEA,iDAAsB,CACpB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,UAAU,CAAE,OACd,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,4CAAiB,CACf,OAAO,CAAE,IACX,CACF"}'
};
const Hanging_lantern_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="hanging_lantern svelte-8yyaaz" data-svelte-h="svelte-d3z5fq"><div class="hanging_stars svelte-8yyaaz"><img src="/assets/sponsors/Hangingstars_bigger.png" alt="" class="hanging_stars_bigger svelte-8yyaaz"> <img src="/assets/sponsors/Hangingstars_smaller.png" alt="" class="hanging_stars_smaller svelte-8yyaaz"></div></div>`;
});
const css$1 = {
  code: ".hanging_lantern.svelte-912w6m.svelte-912w6m{position:absolute;top:0;right:3.75vw}.hanging_stars.svelte-912w6m.svelte-912w6m{display:flex;gap:1rem;justify-content:center;position:relative}.hanging_stars.svelte-912w6m>img.svelte-912w6m{object-fit:contain}.hanging_stars_smaller.svelte-912w6m.svelte-912w6m{height:10vw;width:10vw;position:absolute;right:15vw;top:-0.25vw;object-fit:contain}.hanging_stars_bigger.svelte-912w6m.svelte-912w6m{height:20vw;width:20vw;position:absolute;right:0;object-fit:contain}@media(max-width: 900px){.hanging_lantern.svelte-912w6m.svelte-912w6m{display:none}}",
  map: '{"version":3,"file":"Hanging_lantern_right.svelte","sources":["Hanging_lantern_right.svelte"],"sourcesContent":["<script>\\n<\/script>\\n<style lang=\\"scss\\">.hanging_lantern {\\n  position: absolute;\\n  top: 0;\\n  right: 3.75vw;\\n}\\n\\n.hanging_stars {\\n  display: flex;\\n  gap: 1rem;\\n  justify-content: center;\\n  position: relative;\\n}\\n\\n.hanging_stars > img {\\n  object-fit: contain;\\n}\\n\\n.hanging_stars_smaller {\\n  height: 10vw;\\n  width: 10vw;\\n  position: absolute;\\n  right: 15vw;\\n  top: -0.25vw;\\n  object-fit: contain;\\n}\\n\\n.hanging_stars_bigger {\\n  height: 20vw;\\n  width: 20vw;\\n  position: absolute;\\n  right: 0;\\n  object-fit: contain;\\n}\\n\\n@media (max-width: 900px) {\\n  .hanging_lantern {\\n    display: none;\\n  }\\n}</style>\\n\\n\\n<div class=\\"hanging_lantern\\">\\n  <div class=\\"hanging_stars\\">\\n    <img\\n      src=\\"/assets/sponsors/Hangingstars_bigger.png\\"\\n      alt=\\"\\"\\n      class=\\"hanging_stars_bigger\\"\\n    />\\n    <img\\n      src=\\"/assets/sponsors/Hangingstars_smaller.png\\"\\n      alt=\\"\\"\\n      class=\\"hanging_stars_smaller\\"\\n    />\\n  </div>\\n</div>\\n\\n"],"names":[],"mappings":"AAEmB,4CAAiB,CAClC,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,MACT,CAEA,0CAAe,CACb,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,QACZ,CAEA,4BAAc,CAAG,iBAAI,CACnB,UAAU,CAAE,OACd,CAEA,kDAAuB,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,OAAO,CACZ,UAAU,CAAE,OACd,CAEA,iDAAsB,CACpB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,UAAU,CAAE,OACd,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,4CAAiB,CACf,OAAO,CAAE,IACX,CACF"}'
};
const Hanging_lantern_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="hanging_lantern svelte-912w6m" data-svelte-h="svelte-d3z5fq"><div class="hanging_stars svelte-912w6m"><img src="/assets/sponsors/Hangingstars_bigger.png" alt="" class="hanging_stars_bigger svelte-912w6m"> <img src="/assets/sponsors/Hangingstars_smaller.png" alt="" class="hanging_stars_smaller svelte-912w6m"></div></div>`;
});
const css = {
  code: '.sponsor-main-container.svelte-1o8q0jm{background-image:url("/assets/sponsors/Background_image(moon&sky)_new.png");font-family:BluuNext, "Yusei Magic";font-size:1.5rem;text-align:center;align-items:center;display:flex;flex-direction:column;justify-content:center;background-size:contain;padding-bottom:9.563rem;background-position:center;width:100%}.sponsors-grid-container.svelte-1o8q0jm{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;flex-direction:row}.sub-title.svelte-1o8q0jm{margin-top:3.188rem;margin-bottom:2.25rem;font-family:"Yusei Magic", BluuNext;color:#7cc7ff;display:inline-block;align-content:center;text-transform:uppercase;text-decoration:underline}.sponsor-heading.svelte-1o8q0jm{margin-top:1rem;color:#7cc7ff;font-family:BluuNext, "Yusei Magic"}.single-sponsor.svelte-1o8q0jm{margin:3rem}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import sponsorshipData from \\"$lib/data/sponsorship.json\\";\\n  import SectionHeader from \\"$lib/components/SectionHeader.svelte\\";\\n  import SubSectionHeader from \\"$lib/components/SubSectionHeader.svelte\\";\\n  import SponsorCard from \\"$lib/components/SponsorCard.svelte\\";\\n  import { collapsingNavbar } from \\"$lib/stores\\";\\n  import HangingLanternLeft from \\"$lib/components/Hanging_lantern_left.svelte\\";\\n  import HangingLanternRight from \\"$lib/components/Hanging_lantern_right.svelte\\";\\n  $collapsingNavbar = false;\\n<\/script>\\n<style lang=\\"scss\\">.sponsor-main-container {\\n  background-image: url(\\"/assets/sponsors/Background_image(moon&sky)_new.png\\");\\n  font-family: BluuNext, \\"Yusei Magic\\";\\n  font-size: 1.5rem;\\n  text-align: center;\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  background-size: contain;\\n  padding-bottom: 9.563rem;\\n  background-position: center;\\n  width: 100%;\\n}\\n\\n.sponsors-grid-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: row;\\n}\\n\\n.sub-title {\\n  margin-top: 3.188rem;\\n  margin-bottom: 2.25rem;\\n  font-family: \\"Yusei Magic\\", BluuNext;\\n  color: #7cc7ff;\\n  display: inline-block;\\n  align-content: center;\\n  text-transform: uppercase;\\n  text-decoration: underline;\\n}\\n\\n.sponsor-heading {\\n  margin-top: 1rem;\\n  color: #7cc7ff;\\n  font-family: BluuNext, \\"Yusei Magic\\";\\n}\\n\\n.single-sponsor {\\n  margin: 3rem;\\n}</style>\\n<svelte:head>\\n  <title>Sponsors | Meraz'24</title>\\n  <link rel=\\"stylesheet\\" href=\\"https://fonts.googleapis.com/css?family=Lato\\" />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.googleapis.com\\" />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.gstatic.com\\" crossorigin />\\n  <link\\n    href=\\"https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald&family=Silkscreen&display=swap\\"\\n    rel=\\"stylesheet\\"\\n  />\\n</svelte:head>\\n\\n\\n<div class=\\"sponsor-main-container\\">\\n  <HangingLanternLeft />\\n  <HangingLanternRight />\\n  <div class=\\"sponsor-heading\\">\\n    <SectionHeader name=\\"Sponsors\\" />\\n  </div>\\n  {#each sponsorshipData as sponsorship}\\n    <div class=\\"sponsor-container\\">\\n      <div class=\\"sub-title\\">\\n        <SubSectionHeader name={sponsorship.title} />\\n      </div>\\n      <div class=\\"sponsors-grid-container\\">\\n        {#each sponsorship.entries as entry}\\n          <div class=\\"single-sponsor\\">\\n            <SponsorCard\\n              frameContainerWidth={sponsorship[\\"card_width\\"]}\\n              frameContainerHeight={sponsorship[\\"card_height\\"]}\\n              sponsorName={entry.name}\\n              logoName={\\"/assets/sponsors/\\" + entry.logo}\\n            />\\n          </div>\\n        {/each}\\n      </div>\\n    </div>\\n  {/each}\\n</div>\\n\\n"],"names":[],"mappings":"AAUmB,sCAAwB,CACzC,gBAAgB,CAAE,0DAA0D,CAC5E,WAAW,CAAE,QAAQ,CAAC,CAAC,aAAa,CACpC,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,eAAe,CAAE,OAAO,CACxB,cAAc,CAAE,QAAQ,CACxB,mBAAmB,CAAE,MAAM,CAC3B,KAAK,CAAE,IACT,CAEA,uCAAyB,CACvB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,GAClB,CAEA,yBAAW,CACT,UAAU,CAAE,QAAQ,CACpB,aAAa,CAAE,OAAO,CACtB,WAAW,CAAE,aAAa,CAAC,CAAC,QAAQ,CACpC,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,YAAY,CACrB,aAAa,CAAE,MAAM,CACrB,cAAc,CAAE,SAAS,CACzB,eAAe,CAAE,SACnB,CAEA,+BAAiB,CACf,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,QAAQ,CAAC,CAAC,aACzB,CAEA,8BAAgB,CACd,MAAM,CAAE,IACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $collapsingNavbar, $$unsubscribe_collapsingNavbar;
  $$unsubscribe_collapsingNavbar = subscribe(collapsingNavbar, (value) => $collapsingNavbar = value);
  set_store_value(collapsingNavbar, $collapsingNavbar = false, $collapsingNavbar);
  $$result.css.add(css);
  $$unsubscribe_collapsingNavbar();
  return `${$$result.head += `<!-- HEAD_svelte-oap43k_START -->${$$result.title = `<title>Sponsors | Meraz&#39;24</title>`, ""}<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DotGothic16&amp;family=Oswald&amp;family=Silkscreen&amp;display=swap" rel="stylesheet"><!-- HEAD_svelte-oap43k_END -->`, ""} <div class="sponsor-main-container svelte-1o8q0jm">${validate_component(Hanging_lantern_left, "HangingLanternLeft").$$render($$result, {}, {}, {})} ${validate_component(Hanging_lantern_right, "HangingLanternRight").$$render($$result, {}, {}, {})} <div class="sponsor-heading svelte-1o8q0jm">${validate_component(SectionHeader, "SectionHeader").$$render($$result, { name: "Sponsors" }, {}, {})}</div> ${each(sponsorshipData, (sponsorship) => {
    return `<div class="sponsor-container"><div class="sub-title svelte-1o8q0jm">${validate_component(SubSectionHeader, "SubSectionHeader").$$render($$result, { name: sponsorship.title }, {}, {})}</div> <div class="sponsors-grid-container svelte-1o8q0jm">${each(sponsorship.entries, (entry) => {
      return `<div class="single-sponsor svelte-1o8q0jm">${validate_component(SponsorCard, "SponsorCard").$$render(
        $$result,
        {
          frameContainerWidth: sponsorship["card_width"],
          frameContainerHeight: sponsorship["card_height"],
          sponsorName: entry.name,
          logoName: "/assets/sponsors/" + entry.logo
        },
        {},
        {}
      )} </div>`;
    })}</div> </div>`;
  })}</div>`;
});
export {
  Page as default
};

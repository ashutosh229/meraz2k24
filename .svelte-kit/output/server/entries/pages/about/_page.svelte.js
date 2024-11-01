import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
import { A as AftermovieSection } from "../../../chunks/AftermovieSection.js";
const css = {
  code: '.svelte-1lsramv.svelte-1lsramv{margin:0;box-sizing:border-box}.aboutmeraz.svelte-1lsramv.svelte-1lsramv{text-align:center;font-family:"BluuNext", "Yusei Magic", sans-serif;display:flex;justify-content:center;align-items:center;height:calc(100vh - 80px);width:100vw;background-color:transparent;background-image:url("/assets/about_page_background_image_top_new.webp");background-size:cover;background-position:center;background-repeat:no-repeat}.content.svelte-1lsramv.svelte-1lsramv{padding:11vw;width:100%;position:relative;font-size:3vh;font-family:Libre Baskerville;text-align:center;line-height:5vh;background-image:url("/assets/new_about_content_background.webp");background-size:cover;background-position:center;background-repeat:no-repeat}.introheading.svelte-1lsramv.svelte-1lsramv{font-size:5vh;font-family:Libre Baskerville}.intro.svelte-1lsramv.svelte-1lsramv,.introheading.svelte-1lsramv.svelte-1lsramv{position:relative;z-index:100}@media(max-width: 480px){.intro.svelte-1lsramv>p.svelte-1lsramv{font-size:1rem;text-align:justify}.introheading.svelte-1lsramv.svelte-1lsramv{line-height:3.5rem}}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import SectionHeader from \\"$lib/components/SectionHeader.svelte\\";\\n  import AftermovieSection from \\"$lib/components/AftermovieSection.svelte\\";\\n  let meraz2022 = \\"ztJsklsTg8M\\";\\n  let meraz2019 = \\"fjtuMhY1KK8\\";\\n  let meraz2018 = \\"uOQbTb4-ejs\\";\\n  let meraz2024 = \\"1mJP_haSq-4\\";\\n  let vhead2022 = \\"Aftermovie'22\\";\\n  let vhead2019 = \\"Aftermovie'19\\";\\n  let vhead2018 = \\"Aftermovie'18\\";\\n  let vhead2024 = \\"Aftermovie'24\\";\\n<\/script>\\n<style lang=\\"scss\\">* {\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\n.aboutmeraz {\\n  text-align: center;\\n  font-family: \\"BluuNext\\", \\"Yusei Magic\\", sans-serif;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: calc(100vh - 80px);\\n  width: 100vw;\\n  background-color: transparent;\\n  background-image: url(\\"/assets/about_page_background_image_top_new.webp\\");\\n  background-size: cover; /* Adjust to cover entire width and height */\\n  background-position: center;\\n  background-repeat: no-repeat; /* Prevent repeating */\\n}\\n\\n.content {\\n  padding: 11vw;\\n  width: 100%;\\n  position: relative;\\n  font-size: 3vh;\\n  font-family: Libre Baskerville; /* Apply Libre Baskerville to description text */\\n  text-align: center;\\n  line-height: 5vh;\\n  background-image: url(\\"/assets/new_about_content_background.webp\\");\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n}\\n\\n.introheading {\\n  font-size: 5vh;\\n  font-family: Libre Baskerville; /* Apply Libre Baskerville to heading */\\n}\\n\\n.intro,\\n.introheading {\\n  position: relative;\\n  z-index: 100;\\n}\\n\\n.bgimg {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background-image: url(\\"assets/aboutBgImg.png\\");\\n  background-size: cover;\\n  width: 100%;\\n  height: 100%;\\n  z-index: -100;\\n}\\n\\n@media (max-width: 480px) {\\n  .intro > p {\\n    font-size: 1rem;\\n    text-align: justify;\\n  }\\n  .introheading {\\n    line-height: 3.5rem;\\n  }\\n}</style>\\n<svelte:head>\\n  <title>About | Meraz'24</title>\\n  <link rel=\\"stylesheet\\" href=\\"https://fonts.googleapis.com/css?family=Lato\\" />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.googleapis.com\\" />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.gstatic.com\\" crossorigin />\\n  <link\\n    href=\\"https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap\\"\\n    rel=\\"stylesheet\\"\\n  />\\n  <link\\n    href=\\"https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap\\"\\n    rel=\\"stylesheet\\"\\n  />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.googleapis.com\\" />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.gstatic.com\\" crossorigin />\\n  <link\\n    href=\\"https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Upright:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap\\"\\n    rel=\\"stylesheet\\"\\n  />\\n</svelte:head>\\n\\n<!-- JAVASCRIPT -->\\n<!-- SVELTE -->\\n<!-- HTML STRUCTURE -->\\n<div>\\n  <div class=\\"aboutmeraz\\">\\n    <SectionHeader name=\\"About Meraz 4.0\\" />\\n  </div>\\n  <div class=\\"content\\">\\n    <div class=\\"introheading\\">\\n      Discover A new <u style=\\"color: #7CC7FF\\">YOU</u>.\\n    </div>\\n    <br />\\n    <div class=\\"intro\\">\\n      <p>\\n        Welcome to Meraz 4.0, IIT Bhilai's yearly techno-cultural festival; the\\n        vivacious spectacle that breaks through barriers and stokes passions.\\n        Meraz, which is rooted in the long history of techno-cultural events at\\n        IIT Bhilai, is a tribute to our dedication to developing talent and\\n        promoting an exploratory and growing attitude.\\n      </p>\\n      <br />\\n      <p>\\n        It's where diverse talents converge, and horizons expand. No matter\\n        their background, everyone has the chance to showcase skills, forge new\\n        connections, and chart the course towards a dynamic future. From the\\n        intricacies of technology and IT to the elegance of fashion and the\\n        artistry of culinary pursuits, Meraz presents a tantalizing glimpse of\\n        what's to come.\\n      </p>\\n      <br />\\n      <p>\\n        Join us on this exhilarating journey at Meraz, where you're invited to\\n        discover a new you, witness the kindling and confluence of talents,\\n        immerse your senses in an extravaganza that promises to not only paint\\n        the campus in a myriad of bright hues, but also to splash those paints\\n        on all those who attend it, so that you leave with memories ever so\\n        colorful!\\n      </p>\\n      <br />\\n    </div>\\n    <br />\\n    <br />\\n    <AftermovieSection bind:vid={meraz2024} bind:vhead={vhead2024} />\\n    <AftermovieSection bind:vid={meraz2022} bind:vhead={vhead2022} />\\n    <AftermovieSection bind:vid={meraz2019} bind:vhead={vhead2019} />\\n    <AftermovieSection bind:vid={meraz2018} bind:vhead={vhead2018} />\\n  </div>\\n</div>\\n<!-- STYLES -->\\n\\n"],"names":[],"mappings":"AAYmB,8BAAE,CACnB,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,UACd,CAEA,yCAAY,CACV,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,UAAU,CAAC,CAAC,aAAa,CAAC,CAAC,UAAU,CAClD,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC1B,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,WAAW,CAC7B,gBAAgB,CAAE,uDAAuD,CACzE,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,SACrB,CAEA,sCAAS,CACP,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,KAAK,CAAC,WAAW,CAC9B,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,gBAAgB,CAAE,gDAAgD,CAClE,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,SACrB,CAEA,2CAAc,CACZ,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,KAAK,CAAC,WACrB,CAEA,oCAAM,CACN,2CAAc,CACZ,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,GACX,CAaA,MAAO,YAAY,KAAK,CAAE,CACxB,qBAAM,CAAG,gBAAE,CACT,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,OACd,CACA,2CAAc,CACZ,WAAW,CAAE,MACf,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let meraz2022 = "ztJsklsTg8M";
  let meraz2019 = "fjtuMhY1KK8";
  let meraz2018 = "uOQbTb4-ejs";
  let meraz2024 = "1mJP_haSq-4";
  let vhead2022 = "Aftermovie'22";
  let vhead2019 = "Aftermovie'19";
  let vhead2018 = "Aftermovie'18";
  let vhead2024 = "Aftermovie'24";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1eoqvw7_START -->${$$result.title = `<title>About | Meraz&#39;24</title>`, ""}<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" class="svelte-1lsramv"><link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-1lsramv"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin class="svelte-1lsramv"><link href="https://fonts.googleapis.com/css2?family=DotGothic16&amp;family=Oswald:wght@500&amp;family=Silkscreen&amp;display=swap" rel="stylesheet" class="svelte-1lsramv"><link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&amp;display=swap" rel="stylesheet" class="svelte-1lsramv"><link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-1lsramv"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin class="svelte-1lsramv"><link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&amp;family=Cormorant+Upright:wght@300;400;500;600;700&amp;family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet" class="svelte-1lsramv"><!-- HEAD_svelte-1eoqvw7_END -->`, ""}    <div class="svelte-1lsramv"><div class="aboutmeraz svelte-1lsramv">${validate_component(SectionHeader, "SectionHeader").$$render($$result, { name: "About Meraz 4.0" }, {}, {})}</div> <div class="content svelte-1lsramv"><div class="introheading svelte-1lsramv" data-svelte-h="svelte-19j1zuh">Discover A new <u style="color: #7CC7FF" class="svelte-1lsramv">YOU</u>.</div> <br class="svelte-1lsramv"> <div class="intro svelte-1lsramv" data-svelte-h="svelte-zozuqd"><p class="svelte-1lsramv">Welcome to Meraz 4.0, IIT Bhilai&#39;s yearly techno-cultural festival; the
        vivacious spectacle that breaks through barriers and stokes passions.
        Meraz, which is rooted in the long history of techno-cultural events at
        IIT Bhilai, is a tribute to our dedication to developing talent and
        promoting an exploratory and growing attitude.</p> <br class="svelte-1lsramv"> <p class="svelte-1lsramv">It&#39;s where diverse talents converge, and horizons expand. No matter
        their background, everyone has the chance to showcase skills, forge new
        connections, and chart the course towards a dynamic future. From the
        intricacies of technology and IT to the elegance of fashion and the
        artistry of culinary pursuits, Meraz presents a tantalizing glimpse of
        what&#39;s to come.</p> <br class="svelte-1lsramv"> <p class="svelte-1lsramv">Join us on this exhilarating journey at Meraz, where you&#39;re invited to
        discover a new you, witness the kindling and confluence of talents,
        immerse your senses in an extravaganza that promises to not only paint
        the campus in a myriad of bright hues, but also to splash those paints
        on all those who attend it, so that you leave with memories ever so
        colorful!</p> <br class="svelte-1lsramv"></div> <br class="svelte-1lsramv"> <br class="svelte-1lsramv"> ${validate_component(AftermovieSection, "AftermovieSection").$$render(
      $$result,
      { vid: meraz2024, vhead: vhead2024 },
      {
        vid: ($$value) => {
          meraz2024 = $$value;
          $$settled = false;
        },
        vhead: ($$value) => {
          vhead2024 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(AftermovieSection, "AftermovieSection").$$render(
      $$result,
      { vid: meraz2022, vhead: vhead2022 },
      {
        vid: ($$value) => {
          meraz2022 = $$value;
          $$settled = false;
        },
        vhead: ($$value) => {
          vhead2022 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(AftermovieSection, "AftermovieSection").$$render(
      $$result,
      { vid: meraz2019, vhead: vhead2019 },
      {
        vid: ($$value) => {
          meraz2019 = $$value;
          $$settled = false;
        },
        vhead: ($$value) => {
          vhead2019 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(AftermovieSection, "AftermovieSection").$$render(
      $$result,
      { vid: meraz2018, vhead: vhead2018 },
      {
        vid: ($$value) => {
          meraz2018 = $$value;
          $$settled = false;
        },
        vhead: ($$value) => {
          vhead2018 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> `;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

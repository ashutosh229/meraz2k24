import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as Fa } from "../../../chunks/fa.js";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { S as SectionHeader } from "../../../chunks/SectionHeader.js";
const css = {
  code: '.svelte-1bbksuz.svelte-1bbksuz{color:white}#info.svelte-1bbksuz.svelte-1bbksuz{padding:20px}.nonhiddenInfo.svelte-1bbksuz.svelte-1bbksuz{padding:10px;margin-top:10px}.team.svelte-1bbksuz.svelte-1bbksuz{width:30%;padding:15px;color:black;text-align:center;min-width:350px}.bottom.svelte-1bbksuz.svelte-1bbksuz{margin-top:10px;width:100%;display:flex;flex-direction:row;justify-content:space-around;margin-bottom:50px;flex-wrap:wrap}.back.svelte-1bbksuz.svelte-1bbksuz{background-color:rgba(2, 11, 26, 0.92);height:auto;padding:10px;background-repeat:no-repeat;background-size:cover}.parent.svelte-1bbksuz.svelte-1bbksuz{scroll-snap-align:start;scroll-margin-top:75px;background-color:rgba(34, 127, 173, 0.1);object-fit:cover;border-radius:12px;margin:10px;border-width:3px;border-style:solid;border:1 round solid rgb(177, 177, 177)}.top.svelte-1bbksuz.svelte-1bbksuz{display:flex}span.svelte-1bbksuz.svelte-1bbksuz{font-family:"Josefin Sans", sans-serif}h2.svelte-1bbksuz.svelte-1bbksuz{font-weight:normal;font-family:"Cormorant Upright", serif}h2.svelte-1bbksuz span.svelte-1bbksuz{color:transparent;background:rgb(255, 255, 255);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}p.svelte-1bbksuz.svelte-1bbksuz,a.svelte-1bbksuz.svelte-1bbksuz{font-family:"Libre Baskerville", serif;font-size:16px}iframe.svelte-1bbksuz.svelte-1bbksuz{width:100%;margin:40px;height:460px}@media(min-width: 800px){.parent.svelte-1bbksuz.svelte-1bbksuz{margin:75px;padding:10px}}@media(max-width: 800px){.back.svelte-1bbksuz.svelte-1bbksuz{height:auto}.parent.svelte-1bbksuz.svelte-1bbksuz{flex-direction:column}iframe.svelte-1bbksuz.svelte-1bbksuz{margin:20px;width:90%;height:200px}.team.svelte-1bbksuz.svelte-1bbksuz{min-width:100%}}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import Fa from \\"svelte-fa/src/fa.svelte\\";\\n  import {\\n    faPhoneAlt,\\n    faEnvelope,\\n    faMapMarkedAlt,\\n  } from \\"@fortawesome/free-solid-svg-icons\\";\\n\\n  import SectionHeader from \\"$lib/components/SectionHeader.svelte\\";\\n  let heading = \\"Contact Us\\";\\n\\n  let isClicked = false;\\n  function handleClick() {\\n    isClicked = !isClicked;\\n    console.log(isClicked);\\n  }\\n  let isClicked2 = false;\\n  function handleClick2() {\\n    isClicked2 = !isClicked2;\\n    console.log(isClicked2);\\n  }\\n  let isClicked3 = false;\\n  function handleClick3() {\\n    isClicked3 = !isClicked3;\\n    console.log(isClicked3);\\n  }\\n  let isClicked4 = false;\\n  function handleClick4() {\\n    isClicked4 = !isClicked4;\\n    console.log(isClicked4);\\n  }\\n  let isClicked5 = false;\\n  function handleClick5() {\\n    isClicked5 = !isClicked5;\\n    console.log(isClicked5);\\n  }\\n  let isClicked6 = false;\\n  function handleClick6() {\\n    isClicked6 = !isClicked6;\\n    console.log(isClicked6);\\n  }\\n<\/script>\\n<style lang=\\"scss\\">* {\\n  color: white;\\n}\\n\\n#info {\\n  padding: 20px;\\n}\\n\\n.hiddenInfo {\\n  display: none;\\n  padding: 10px;\\n  margin-top: 10px;\\n}\\n\\n.nonhiddenInfo {\\n  padding: 10px;\\n  margin-top: 10px;\\n}\\n\\n.team {\\n  width: 30%;\\n  padding: 15px;\\n  color: black;\\n  text-align: center;\\n  min-width: 350px;\\n}\\n\\n.bottom {\\n  margin-top: 10px;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  margin-bottom: 50px;\\n  flex-wrap: wrap;\\n}\\n\\n.back {\\n  background-color: rgba(2, 11, 26, 0.92);\\n  height: auto;\\n  padding: 10px;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n.parent {\\n  scroll-snap-align: start;\\n  scroll-margin-top: 75px;\\n  background-color: rgba(34, 127, 173, 0.1);\\n  object-fit: cover;\\n  border-radius: 12px;\\n  margin: 10px;\\n  border-width: 3px;\\n  border-style: solid;\\n  border: 1 round solid rgb(177, 177, 177);\\n}\\n\\n.top {\\n  display: flex;\\n}\\n\\nspan {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n}\\n\\nh2 {\\n  font-weight: normal;\\n  font-family: \\"Cormorant Upright\\", serif;\\n}\\nh2 span {\\n  color: transparent;\\n  background: rgb(255, 255, 255);\\n  background-clip: text;\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n}\\n\\np,\\na {\\n  font-family: \\"Libre Baskerville\\", serif;\\n  font-size: 16px;\\n}\\n\\niframe {\\n  width: 100%;\\n  margin: 40px;\\n  height: 460px;\\n}\\n\\n@media (min-width: 800px) {\\n  .parent {\\n    margin: 75px;\\n    padding: 10px;\\n  }\\n}\\n@media (max-width: 800px) {\\n  .back {\\n    height: auto;\\n  }\\n  .parent {\\n    flex-direction: column;\\n  }\\n  iframe {\\n    margin: 20px;\\n    width: 90%;\\n    height: 200px;\\n  }\\n  .team {\\n    min-width: 100%;\\n  }\\n}</style>\\n<svelte:head>\\n  <title>Contact | Meraz'24</title>\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.googleapis.com\\" />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.gstatic.com\\" crossorigin />\\n  <link\\n    href=\\"https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Upright:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap\\"\\n    rel=\\"stylesheet\\"\\n  />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.googleapis.com\\" />\\n  <link rel=\\"preconnect\\" href=\\"https://fonts.gstatic.com\\" crossorigin />\\n  <link\\n    href=\\"https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Upright:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap\\"\\n    rel=\\"stylesheet\\"\\n  />\\n</svelte:head>\\n\\n\\n<div class=\\"back\\">\\n  <div class=\\"aboutmeraz\\">\\n    <SectionHeader bind:name={heading} />\\n  </div>\\n  <div\\n    class=\\"parent\\"\\n    style=\\"background:rgb(66, 66, 66, 25%);\\tborder-radius: 12px;\\"\\n  >\\n    <div class=\\"top\\">\\n      <iframe\\n        title=\\"IIT Bhilai Map\\"\\n        id=\\"map-iframe\\"\\n        src=\\"https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=IIT%20Bhilai+(Meraz)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed\\"\\n        frameborder=\\"0\\"\\n        scrolling=\\"no\\"\\n        marginheight=\\"0\\"\\n        marginwidth=\\"0\\"\\n      />\\n    </div>\\n    <div class=\\"bottom\\">\\n      <div class=\\"team\\" id=\\"info\\">\\n        <h2>\\n          <Fa icon={faPhoneAlt} />\\n          <span>Phone</span>\\n        </h2>\\n        <div class=\\"nonhiddenInfo\\">\\n          <div id=\\"poc\\">\\n            <p>Elavartha Nikhil Reddy (CoSA Events Head) - 8790367047</p>\\n            <p>Sooraj Reddy (CoSA President) - 9391436084</p>\\n            <p>Atharva Bhatnagar (CoSA Treasurer) - 8447973545</p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"team\\" id=\\"info\\">\\n        <h2>\\n          <Fa icon={faEnvelope} />\\n          <span>E-mail</span>\\n        </h2>\\n        <div class=\\"nonhiddenInfo\\">\\n          <div id=\\"poc\\">\\n            <p>\\n              <a href=\\"mailto:eventshead_cosa@iitbhilai.ac.in\\"\\n                >eventshead_cosa@iitbhilai.ac.in\\n              </a>\\n            </p>\\n            <p>\\n              <a href=\\"mailto:President_CoSA@iitbhilai.ac.in\\"\\n                >president_CoSA@iitbhilai.ac.in\\n              </a>\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"team\\" id=\\"info\\">\\n        <h2>\\n          <Fa icon={faPhoneAlt} />\\n          <span>Address</span>\\n        </h2>\\n        <div class=\\"nonhiddenInfo\\">\\n          <div id=\\"poc\\">\\n            <p>\\n              Indian Institute of Technology Bhilai <br />\\n              Kutelabhata, Durg Chhattisgarh <br />\\n              India - 491002\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"team\\" id=\\"info\\" on:click={handleClick}>\\n        <h2>\\n          <Fa icon={faEnvelope} />\\n          <span>Registration and Help Desk</span>\\n        </h2>\\n        <div class=\\"nonhiddenInfo\\">\\n          <div id=\\"poc\\">\\n            <p>Shreya Nukala - 8185820990</p>\\n            <p>Sanyam Sharma - 8360795487</p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"team\\" id=\\"info\\" on:click={handleClick2}>\\n        <h2>\\n          <Fa icon={faEnvelope} />\\n          <span>Transportation</span>\\n        </h2>\\n        <div class=\\"nonhiddenInfo\\">\\n          <div id=\\"poc\\">\\n            <p>Prasanth - 7337599501</p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"team\\" id=\\"info\\" on:click={handleClick3}>\\n        <h2>\\n          <Fa icon={faEnvelope} />\\n          <span>Hospitality</span>\\n        </h2>\\n        <div class=\\"nonhiddenInfo\\">\\n          <div id=\\"poc\\">\\n            <p>Sudeep Ranjan Sahoo - 6372432280</p>\\n            <p>Ishita Saxena - 9454777711</p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"team\\" id=\\"info\\" on:click={handleClick4}>\\n        <h2>\\n          <Fa icon={faEnvelope} />\\n          <span>Security</span>\\n        </h2>\\n        <div class=\\"nonhiddenInfo\\">\\n          <div id=\\"poc\\">\\n            <p>Rajvardhan - 7898547042</p>\\n            <p>Ayushman Tripathi - 6265844927</p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"team\\" id=\\"info\\" on:click={handleClick5}>\\n        <h2>\\n          <Fa icon={faEnvelope} />\\n          <span>Ground Force</span>\\n        </h2>\\n        <div class=\\"nonhiddenInfo\\">\\n          <div id=\\"poc\\">\\n            <p>M Ramesh Naik - 9392783638</p>\\n            <p>B Vamshi Krishna - 7732004234</p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"team\\" id=\\"info\\" on:click={handleClick6}>\\n        <h2>\\n          <Fa icon={faEnvelope} />\\n          <span>Sponsorship</span>\\n        </h2>\\n        <div class=\\"nonhiddenInfo\\">\\n          <div id=\\"poc\\">\\n            <p>Sanskar Pathak - 7415756769</p>\\n            <p>Akash Patel - 9460568832</p>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n"],"names":[],"mappings":"AA0CmB,8BAAE,CACnB,KAAK,CAAE,KACT,CAEA,mCAAM,CACJ,OAAO,CAAE,IACX,CAQA,4CAAe,CACb,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IACd,CAEA,mCAAM,CACJ,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,KACb,CAEA,qCAAQ,CACN,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,YAAY,CAC7B,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IACb,CAEA,mCAAM,CACJ,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CACvC,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KACnB,CAEA,qCAAQ,CACN,iBAAiB,CAAE,KAAK,CACxB,iBAAiB,CAAE,IAAI,CACvB,gBAAgB,CAAE,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzC,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,GAAG,CACjB,YAAY,CAAE,KAAK,CACnB,MAAM,CAAE,CAAC,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzC,CAEA,kCAAK,CACH,OAAO,CAAE,IACX,CAEA,kCAAK,CACH,WAAW,CAAE,cAAc,CAAC,CAAC,UAC/B,CAEA,gCAAG,CACD,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,mBAAmB,CAAC,CAAC,KACpC,CACA,iBAAE,CAAC,mBAAK,CACN,KAAK,CAAE,WAAW,CAClB,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,eAAe,CAAE,IAAI,CACrB,uBAAuB,CAAE,IAAI,CAC7B,uBAAuB,CAAE,WAC3B,CAEA,+BAAC,CACD,+BAAE,CACA,WAAW,CAAE,mBAAmB,CAAC,CAAC,KAAK,CACvC,SAAS,CAAE,IACb,CAEA,oCAAO,CACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,KACV,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAQ,CACN,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IACX,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,mCAAM,CACJ,MAAM,CAAE,IACV,CACA,qCAAQ,CACN,cAAc,CAAE,MAClB,CACA,oCAAO,CACL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,KACV,CACA,mCAAM,CACJ,SAAS,CAAE,IACb,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let heading = "Contact Us";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1buz0j_START -->${$$result.title = `<title>Contact | Meraz&#39;24</title>`, ""}<link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-1bbksuz"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin class="svelte-1bbksuz"><link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&amp;family=Cormorant+Upright:wght@300;400;500;600;700&amp;family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet" class="svelte-1bbksuz"><link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-1bbksuz"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin class="svelte-1bbksuz"><link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&amp;family=Cormorant+Upright:wght@300;400;500;600;700&amp;family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet" class="svelte-1bbksuz"><!-- HEAD_svelte-1buz0j_END -->`, ""} <div class="back svelte-1bbksuz"><div class="aboutmeraz svelte-1bbksuz">${validate_component(SectionHeader, "SectionHeader").$$render(
      $$result,
      { name: heading },
      {
        name: ($$value) => {
          heading = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="parent svelte-1bbksuz" style="background:rgb(66, 66, 66, 25%); border-radius: 12px;"><div class="top svelte-1bbksuz" data-svelte-h="svelte-9pcrga"><iframe title="IIT Bhilai Map" id="map-iframe" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=IIT%20Bhilai+(Meraz)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="svelte-1bbksuz"></iframe></div> <div class="bottom svelte-1bbksuz"><div class="team svelte-1bbksuz" id="info"><h2 class="svelte-1bbksuz">${validate_component(Fa, "Fa").$$render($$result, { icon: faPhoneAlt }, {}, {})} <span class="svelte-1bbksuz" data-svelte-h="svelte-4i1gye">Phone</span></h2> <div class="nonhiddenInfo svelte-1bbksuz" data-svelte-h="svelte-xru52q"><div id="poc" class="svelte-1bbksuz"><p class="svelte-1bbksuz">Elavartha Nikhil Reddy (CoSA Events Head) - 8790367047</p> <p class="svelte-1bbksuz">Sooraj Reddy (CoSA President) - 9391436084</p> <p class="svelte-1bbksuz">Atharva Bhatnagar (CoSA Treasurer) - 8447973545</p></div></div></div> <div class="team svelte-1bbksuz" id="info"><h2 class="svelte-1bbksuz">${validate_component(Fa, "Fa").$$render($$result, { icon: faEnvelope }, {}, {})} <span class="svelte-1bbksuz" data-svelte-h="svelte-148q553">E-mail</span></h2> <div class="nonhiddenInfo svelte-1bbksuz" data-svelte-h="svelte-1leb1d7"><div id="poc" class="svelte-1bbksuz"><p class="svelte-1bbksuz"><a href="mailto:eventshead_cosa@iitbhilai.ac.in" class="svelte-1bbksuz">eventshead_cosa@iitbhilai.ac.in</a></p> <p class="svelte-1bbksuz"><a href="mailto:President_CoSA@iitbhilai.ac.in" class="svelte-1bbksuz">president_CoSA@iitbhilai.ac.in</a></p></div></div></div> <div class="team svelte-1bbksuz" id="info"><h2 class="svelte-1bbksuz">${validate_component(Fa, "Fa").$$render($$result, { icon: faPhoneAlt }, {}, {})} <span class="svelte-1bbksuz" data-svelte-h="svelte-1wbahcu">Address</span></h2> <div class="nonhiddenInfo svelte-1bbksuz" data-svelte-h="svelte-z79v30"><div id="poc" class="svelte-1bbksuz"><p class="svelte-1bbksuz">Indian Institute of Technology Bhilai <br class="svelte-1bbksuz">
              Kutelabhata, Durg Chhattisgarh <br class="svelte-1bbksuz">
              India - 491002</p></div></div></div> <div class="team svelte-1bbksuz" id="info"><h2 class="svelte-1bbksuz">${validate_component(Fa, "Fa").$$render($$result, { icon: faEnvelope }, {}, {})} <span class="svelte-1bbksuz" data-svelte-h="svelte-zz3492">Registration and Help Desk</span></h2> <div class="nonhiddenInfo svelte-1bbksuz" data-svelte-h="svelte-9wjfyd"><div id="poc" class="svelte-1bbksuz"><p class="svelte-1bbksuz">Shreya Nukala - 8185820990</p> <p class="svelte-1bbksuz">Sanyam Sharma - 8360795487</p></div></div></div> <div class="team svelte-1bbksuz" id="info"><h2 class="svelte-1bbksuz">${validate_component(Fa, "Fa").$$render($$result, { icon: faEnvelope }, {}, {})} <span class="svelte-1bbksuz" data-svelte-h="svelte-1sw4abw">Transportation</span></h2> <div class="nonhiddenInfo svelte-1bbksuz" data-svelte-h="svelte-1mua9jx"><div id="poc" class="svelte-1bbksuz"><p class="svelte-1bbksuz">Prasanth - 7337599501</p></div></div></div> <div class="team svelte-1bbksuz" id="info"><h2 class="svelte-1bbksuz">${validate_component(Fa, "Fa").$$render($$result, { icon: faEnvelope }, {}, {})} <span class="svelte-1bbksuz" data-svelte-h="svelte-1kj1l14">Hospitality</span></h2> <div class="nonhiddenInfo svelte-1bbksuz" data-svelte-h="svelte-1a1hg24"><div id="poc" class="svelte-1bbksuz"><p class="svelte-1bbksuz">Sudeep Ranjan Sahoo - 6372432280</p> <p class="svelte-1bbksuz">Ishita Saxena - 9454777711</p></div></div></div> <div class="team svelte-1bbksuz" id="info"><h2 class="svelte-1bbksuz">${validate_component(Fa, "Fa").$$render($$result, { icon: faEnvelope }, {}, {})} <span class="svelte-1bbksuz" data-svelte-h="svelte-11zxj8k">Security</span></h2> <div class="nonhiddenInfo svelte-1bbksuz" data-svelte-h="svelte-1y7s990"><div id="poc" class="svelte-1bbksuz"><p class="svelte-1bbksuz">Rajvardhan - 7898547042</p> <p class="svelte-1bbksuz">Ayushman Tripathi - 6265844927</p></div></div></div> <div class="team svelte-1bbksuz" id="info"><h2 class="svelte-1bbksuz">${validate_component(Fa, "Fa").$$render($$result, { icon: faEnvelope }, {}, {})} <span class="svelte-1bbksuz" data-svelte-h="svelte-cgehje">Ground Force</span></h2> <div class="nonhiddenInfo svelte-1bbksuz" data-svelte-h="svelte-s3i86r"><div id="poc" class="svelte-1bbksuz"><p class="svelte-1bbksuz">M Ramesh Naik - 9392783638</p> <p class="svelte-1bbksuz">B Vamshi Krishna - 7732004234</p></div></div></div> <div class="team svelte-1bbksuz" id="info"><h2 class="svelte-1bbksuz">${validate_component(Fa, "Fa").$$render($$result, { icon: faEnvelope }, {}, {})} <span class="svelte-1bbksuz" data-svelte-h="svelte-1bsi4y">Sponsorship</span></h2> <div class="nonhiddenInfo svelte-1bbksuz" data-svelte-h="svelte-1q11whf"><div id="poc" class="svelte-1bbksuz"><p class="svelte-1bbksuz">Sanskar Pathak - 7415756769</p> <p class="svelte-1bbksuz">Akash Patel - 9460568832</p></div></div></div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
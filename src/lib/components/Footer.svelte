<!-- SVELTE -->

<script>
  import links from "$lib/data/links.json";
</script>

<svelte:head></svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
  rel="stylesheet"
/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Upright:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
  rel="stylesheet"
/>
<svelte:window />

<footer>
  <div class="frame">
    <div class="contact-us">
      <div class="left">
        <div class="address">
          <p class="title">Address</p>
          <p class="content">
            Indian Institute of Technology Bhilai
            <br />
            Bhilai, Chattisgarh, India 491002
          </p>
        </div>
        <br />
        <div class="address">
          <p class="title">Contact Number</p>
          <p class="content">
            <span>Harsh Meena (Convener)</span>
            <br />
            <span>7611088018</span>
            <br /><br />

            <span>Himanshu Rana (President)</span>
            <br />
            <span>8770571371</span>
            <br /><br />
          </p>
        </div>
      </div>
      <div class="rectangle">
        <img
          src="/assets/meraz_logo_final_2024.svg"
          width="100%"
          class="logo"
          alt="Meraz logo"
        />
      </div>
      <div class="address follow">
        <p class="title">Follow Us</p>
        <div class="group">
          <a href="https://www.instagram.com/meraziitbh/">
            <div class="block-1">
              <!-- <img
                src="/assets/orbs_before_hover.svg"
                width="93px"
                class="image-6"
                alt="Instagram logo"
              />
              <img
                src="/assets/orb_insta_h.svg"
                width="93px"
                class="image-7"
                alt="Instagram logo"
                /> -->
              <img
                src="/assets/insta.svg"
                width="93px"
                class="image-6"
                alt="Instagram logo"
              />
              <img
                src="/assets/insta.svg"
                width="93px"
                class="image-7"
                alt="Instagram logo"
              />
            </div>
          </a>
          <a href="https://www.youtube.com/@MerazIITBhilai">
            <div class="block-1">
              <!-- <img
                src="/assets/orb_yt.svg"
                width="93px"
                class="image-6"
                alt="YouTube Logo"
              />
              <img
                src="/assets/orb_yt_h.svg"
                width="93px"
                class="image-7"
                alt="YouTube Logo"
              /> -->
              <img
                src="/assets/yt.svg"
                width="93px"
                class="image-6"
                alt="YouTube Logo"
              />
              <img
                src="/assets/yt.svg"
                width="93px"
                class="image-7"
                alt="YouTube Logo"
              />
            </div>
          </a>
          <a href="https://www.facebook.com/meraz.iitbh">
            <div class="block-1">
              <!-- <img
                src="/assets/orb_fb.svg"
                width="93px"
                class="image-6"
                alt="Facebook Logo"
              />
              <img
                src="/assets/orb_fb_h.svg"
                width="93px"
                class="image-7"
                alt="Facebook Logo"
              /> -->
              <img
                src="/assets/fb.svg"
                width="93px"
                class="image-6"
                alt="Facebook Logo"
              />
              <img
                src="/assets/fb.svg"
                width="93px"
                class="image-7"
                alt="Facebook Logo"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="nav">
      {#each links as { href, text }}
        <a {href} class="text-wrapper-3">{text}</a>
      {/each}
    </div>

    <div class="copyright">
      <h3 class="text-wrapper-6">
        Copyright @ Meraz 5.0 | <a href="/tnc">Terms and Conditions</a>
      </h3>
    </div>
  </div>
</footer>

<!-- STYLES -->
<style lang="scss">
  footer {
    background-color: #252c37; /* Changed background color */
    border-color: #606060;
    border-top-style: solid;
    border-top-width: 1px;
    position: relative;
    font-family: "Libre Baskerville", serif;
  }

  .frame {
    display: flex;
    flex-direction: column;
    height: inherit;
    width: inherit;
  }
  .contact-us {
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: space-evenly;
    width: auto;
    padding: 10px;
    margin: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
  .left {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .address {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    color: #7cc7ff;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: 1px;
    position: relative;
    width: fit-content;
    font-family: "Cormorant Upright", serif;
  }
  .content {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: center;
    margin-top: 0px;
    font-family: "Libre Baskerville", serif;
  }
  .rectangle {
    width: 14%;
    min-width: 196px;
    height: 196px;
  }
  .logo {
    width: 100%;
    height: 100%;
    transform: scale(1.3);
  }

  .group {
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2.5vh 2.5vw;
    align-items: center;
  }

  .copyright {
    display: block;
    height: auto;
    align-content: center;
    border-top: solid;
  }
  .text-wrapper-3 {
    color: #bfbfbf;
    font-family: "Libre Baskerville", serif;
    font-size: var(--navbar-font-size);
    font-style: var(--navbar-font-style);
    font-weight: var(--navbar-font-weight);
    letter-spacing: var(--navbar-letter-spacing);
    line-height: var(--navbar-line-height);
    position: relative;
    width: fit-content;
  }
  .text-wrapper-6 {
    color: #e0e0e0;
    font-family: "Libre Baskerville", serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: center;
  }
  .nav {
    height: auto;
    display: flex;
    direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    font-size: large;
    padding: 2%;
    margin-left: 10%;
    margin-right: 10%;
  }

  a {
    color: #bfbfbf;
    font-family: "Libre Baskerville", serif;
    font-size: var(--navbar-font-size);
    font-style: var(--navbar-font-style);
    font-weight: var(--navbar-font-weight);
    letter-spacing: var(--navbar-letter-spacing);
    line-height: var(--navbar-line-height);
    position: relative;
    width: fit-content;
    text-decoration: none;
    margin: 0 10px;
  }

  a:hover {
    color: #ffffff;
  }
  .block-1 {
    position: relative;
    width: 93px;
    height: 112px;
  }

  .image-6,
  .image-7 {
    width: 100%;
    height: 100%;
    position: absolute;
    transition:
      opacity 0.4s ease-in-out,
      transform 0.3s ease;
  }
  .image-7 {
    opacity: 0;
    transform: scale(1.2);
    filter: none;
  }

  .block-1:hover .image-7 {
    opacity: 1;
    transform: scale(1);
    filter: brightness(0) saturate(100%) invert(62%) sepia(34%) saturate(447%)
      hue-rotate(168deg) brightness(97%) contrast(90%);
  }

  .block-1:hover .image-6 {
    opacity: 0;
    transform: scale(1);
  }

  .block-1 .image-7 {
    filter: none; /* Reset filter when hover is removed */
  }

  // Hide some elements on mobile devices
  @media (max-width: 900px) {
    .address.follow,
    .rectangle,
    .nav {
      display: none;
    }
  }
</style>

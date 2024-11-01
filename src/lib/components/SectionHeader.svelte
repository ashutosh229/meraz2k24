<script>
  /** @type {string} */
  export let name = "";
  export let padding = 1;
</script>

<svelte:head></svelte:head>
<!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
  rel="stylesheet"
/> -->
<svelte:window />

<div class="root">
  <div>
    <img src="/assets/Stars.png" class="icon" alt="" />
  </div>
  <h1 class="heading-text" style="padding-left:{padding}rem;">
    {name}
  </h1>
  <div>
    <img src="/assets/Stars.png" class="icon" alt="" />
  </div>
</div>

<style lang="scss">
  .root {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 100vw;
    font-family: CinzelDecorative;

    color: #ffbe4a;
  }
  .icon {
    position: relative;
    width: clamp(2vw, 60px, 10vw);
    top: 50%;
    transform: translateY(-50%);
  }

  .heading-text {
    // font-size: clamp(2vw, 2.8em, 10vw);
    // font-size: 3.2rem;
    justify-content: center;
    align-items: center;
    // color: #7cc7ff;
    font-family: CinzelDecorative;
    text-transform: uppercase;
    // font-size: 5vh;
    padding-left: 1vw;
    font-size: 36px;
    font-weight: 400;
    line-height: 52px;
    letter-spacing: 0em;
    text-align: left;
    color: #7cc7ff;
  }

  @media (max-width: 1000px) {
    .heading-text {
      font-size: 3rem;
    }
  }

  @media (max-width: 480px) {
    .heading-text {
      font-size: 2.8rem;
    }
  }
</style>

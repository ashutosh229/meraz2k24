<script>
  import Hero from "$lib/components/Hero.svelte";
  import EventUpdate from "$lib/components/EventUpdate.svelte";
  import AboutSection from "$lib/components/AboutSection.svelte";
  import HighlightsSection from "$lib/components/HighlightsSection.svelte";
  import AftermovieSection from "$lib/components/AftermovieSection.svelte";
  import SponsorsSection from "$lib/components/SponsorsSection.svelte";
  import { collapsingNavbar } from "$lib/stores";

  let meraz2022 = "ztJsklsTg8M";
  let vhead2022 = "Aftermovie @ Meraz'22";

  $collapsingNavbar = false;
</script>

<svelte:head>
  <title>Home | Meraz'24</title>
</svelte:head>

<div class="home-content">
  <Hero />
  <HighlightsSection />
  <AftermovieSection bind:vid={meraz2022} bind:vhead={vhead2022} />
  <AboutSection />
  <!--<SponsorsSection />-->
</div>

<style lang="scss">
  .home-content {
    background-image: url(/assets/hero_bg2.jpg);
    background-repeat: both;
  }
</style>

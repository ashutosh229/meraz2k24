<script>
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import { collapsingNavbar } from "$lib/stores";

  $collapsingNavbar = false;
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Press Start 2P"
    rel="stylesheet"
  />
</svelte:head>

<SectionHeader name="Work in progress" />
<img
  src="/assets/construction.svg"
  style="height: 60vh; width: 100%"
  alt="Construction"
/>

<style lang="scss">
</style>

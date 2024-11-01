<script>
  import SectionHeader from "./SectionHeader.svelte";
  import sponsors from "$lib/data/main_sponsors.json";

  let heading = "Main Sponsors";
</script>

<div class="highlights-main-container">
  <SectionHeader name={heading} />
  <div class="highlights-content-holder">
    {#each sponsors as sponsor}
      <img
        alt=""
        class="sponsor-logo"
        src={"/assets/sponsors/" + sponsor.image}
        srcset=""
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .highlights-main-container {
    margin-top: 5em;
    padding-bottom: 5em;
    font-family: LibreBaskerville;
    font-size: 24px;
    text-align: center;
  }
  .highlights-content-holder {
    position: relative;
    margin-top: 2.5em;
    width: 100%;

    padding: 0.2em;
    display: flex;
    flex-wrap: wrap;
    gap: 2em 0.2em;
    justify-content: space-evenly;
  }

  .sponsor-logo {
    min-height: 4em;
    min-width: max(20%, 9em);
    max-height: 8vw;
  }
</style>

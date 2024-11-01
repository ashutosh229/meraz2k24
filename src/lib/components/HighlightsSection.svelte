<script>
  import SectionHeader from "./SectionHeader.svelte";
  import Card from "./Card.svelte";
  import sections from "../data/highlights.json";

  let heading = "Highlights";
</script>

<div class="highlights-main-container">
  {#each sections as section}
    <SectionHeader name={section["title"]} />
    <div class="highlights-content-holder">
      {#each section["events"] as entry}
        <Card data={entry} />
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  .highlights-main-container {
    margin-top: 5em;
    margin-bottom: 5em;
    font-family: LibreBaskerville;
    font-size: 24px;
    text-align: center;
  }
  .highlights-content-holder {
    position: relative;
    margin-top: 2.5em;
    width: 100%;
    max-width: 100vw;

    padding: 0.2em;
    display: flex;
    flex-wrap: wrap;
    gap: 2em max(0.2em, 4.4vw);
    justify-content: space-evenly;
  }
</style>

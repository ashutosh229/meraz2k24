<script>
  import sponsorshipData from "$lib/data/sponsorship.json";
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SubSectionHeader from "$lib/components/SubSectionHeader.svelte";
  import SponsorCard from "$lib/components/SponsorCard.svelte";
  import { collapsingNavbar } from "$lib/stores";
  import HangingLanternLeft from "$lib/components/Hanging_lantern_left.svelte";
  import HangingLanternRight from "$lib/components/Hanging_lantern_right.svelte";
  $collapsingNavbar = false;
</script>

<svelte:head>
  <title>Sponsors | Meraz'24</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald&family=Silkscreen&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="sponsor-main-container">
  <HangingLanternLeft />
  <HangingLanternRight />
  <div class="sponsor-heading">
    <SectionHeader name="Sponsors" />
  </div>

  {#each sponsorshipData as sponsorship}
    <div class="sponsor-container">
      <div class="sub-title">
        <SubSectionHeader name={sponsorship.title} />
      </div>
      <div class="sponsors-grid-container">
        {#each sponsorship.entries as entry}
          <div class="single-sponsor">
            <SponsorCard
              frameContainerWidth={sponsorship["card_width"]}
              frameContainerHeight={sponsorship["card_height"]}
              sponsorName={entry.name}
              logoName={"/assets/sponsors/" + entry.logo}
            />
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .sponsor-main-container {
    background-image: url("/assets/sponsors/Background_image(moon&sky)_new.png");
    font-family: BluuNext, "Yusei Magic";
    font-size: 1.5rem;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: contain;
    padding-bottom: 9.563rem;
    background-position: center;
    width: 100%;
  }

  //.sponsors-container {
  // 	display: flex;
  // 	flex-direction: column;
  // 	align-items: center;
  // 	margin-top: 1.875rem;
  // 	position: relative;
  // 	width:100%;
  // }

  .sponsors-grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    //margin: 0 -1rem;
  }

  .sub-title {
    margin-top: 3.188rem;
    margin-bottom: 2.25rem;
    font-family: "Yusei Magic", BluuNext;
    color: #7cc7ff;
    display: inline-block;
    align-content: center;
    text-transform: uppercase;
    text-decoration: underline;
  }

  .sponsor-heading {
    margin-top: 1rem;
    color: #7cc7ff;
    font-family: BluuNext, "Yusei Magic";
  }

  .single-sponsor {
    margin: 3rem;
  }
</style>

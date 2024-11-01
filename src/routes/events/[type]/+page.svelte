<script>
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import { collapsingNavbar } from "$lib/stores";
  import allEventsData from "$lib/data/events.json";
  import EventCard from "$lib/components/EventCard.svelte";

  export let data;

  let eventsData = allEventsData[data.type];

  $collapsingNavbar = false;
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<svelte:head>
  <title>{capitalizeFirstLetter(data.type)} | Meraz'24</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald&family=Silkscreen&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="sponsor-main-container"
  style="background-image: url(/assets/Background_image.webp)"
>
  <div class="sponsor-heading">
    <SectionHeader name={eventsData["title"]} />
  </div>

  {#each eventsData["eventGroups"] as eventType}
    <div class="sponsor-container">
      <div class="sub-title">{eventType.name}</div>
      <div class="sponsors-grid-container">
        {#each eventType.entries as eventData}
          <div class="single-sponsor">
            {#if eventType["separatePage"]}
              <a href={"/events/" + data.type + "/" + eventData.id}>
                <EventCard
                  frameContainerWidth="28.75"
                  frameContainerHeight="20"
                  sponsorName={eventData.name}
                  logoName={"/assets/event-images/" + eventData.image}
                />
              </a>
            {:else}
              <EventCard
                frameContainerWidth="28.75"
                frameContainerHeight="20"
                sponsorName={eventData.name}
                logoName={"/assets/event-images/" + eventData.image}
              />
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .sponsor-main-container {
    font-family: BluuNext, "Yusei Magic";
    font-size: 1.5rem;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: center;
    padding-bottom: 9.563rem;
    background-position: center;
  }

  .sponsor-heading {
    margin-top: 6.25rem;
    color: #ffbe4a;
    font-family: BluuNext, "Yusei Magic";
  }

  .sub-title {
    margin-top: 3.188rem;
    margin-bottom: 2.25rem;
    font-family: "Yusei Magic", BluuNext;
    font-size: 3rem;
    color: #ffbe4a;
    border-bottom: 0.125px solid #ffbe4a;
    display: inline-block;
    align-content: center;
  }

  .sponsors-grid-container {
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 -1rem;
  }

  .single-sponsor {
    margin-top: 1.5rem;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (max-width: 1640px) {
    .sponsors-grid-container {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 1.625rem;
      grid-column-gap: 7.25rem;
    }
  }

  @media (max-width: 950px) {
    .sponsors-grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 768px) {
    .sub-title {
      font-size: 2.7rem;
    }
  }

  @media (max-width: 480px) {
    .sub-title {
      font-size: 2.5rem;
    }
  }
</style>

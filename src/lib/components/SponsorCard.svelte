<script>
  import { faRulerHorizontal } from "@fortawesome/free-solid-svg-icons";
  export let frameContainerWidth = 30;
  export let frameContainerHeight = 30;

  export let sponsorName = "";
  export let logoName = "";
</script>

<div class="card-container">
  <div class="card-img-container">
    <img
      class="frame-container"
      src="/assets/sponsors/sponsor_frame.svg"
      alt=""
      style="--width: {frameContainerWidth}rem; --height: {frameContainerHeight}rem;"
    />
    <div class="image-container">
      <img class="sponsor-image" src={`${logoName}`} alt="not found" />
    </div>
  </div>
  <div class="sponsor-name">{sponsorName}</div>
</div>

<style lang="scss">
  .card-container {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    align-items: center;
  }

  .card-img-container:hover {
    transform: scale(1.1);
  }

  .card-img-container {
    margin: 1rem;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  .frame-container {
    width: var(--width);
    height: var(--height);
  }

  .image-container {
    position: absolute;
    top: 5%;
    left: 10%;
    bottom: 1%;
    right: 10%;
    object-fit: contain;
  }

  .sponsor-image {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #c5a584;
  }

  .sponsor-name {
    font-size: 2rem;
    margin: 0.5rem;
    margin-top: 1.5rem;
    font-family: LibreBaskerville;
  }

  @media (max-width: 480px) {
    .frame-container {
      width: calc(var(--width) - 10) rem;
      height: calc(var(--height) - 5) rem;
    }

    .sponsor-name {
      font-size: 1.5rem;
      margin: 0.3rem;
      margin-top: 1rem;
      font-family: LibreBaskerville;
    }

    .image-container {
      top: 8%;
      left: 6%;
      bottom: 5%;
      right: 6%;
    }
  }
</style>

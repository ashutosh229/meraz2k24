<script>
</script>

<div class="hanging_lantern">
  <div class="hanging_stars">
    <img
      src="/assets/sponsors/Hangingstars_bigger.png"
      alt=""
      class="hanging_stars_bigger"
    />
    <img
      src="/assets/sponsors/Hangingstars_smaller.png"
      alt=""
      class="hanging_stars_smaller"
    />
  </div>
</div>

<style lang="scss">
  .hanging_lantern {
    position: absolute;
    top: 0;
    right: 3.75vw;
  }
  .hanging_stars {
    display: flex;
    gap: 1rem;
    justify-content: center;
    position: relative;
  }
  .hanging_stars > img {
    object-fit: contain;
  }
  .hanging_stars_smaller {
    height: 10vw;
    width: 10vw;
    position: absolute;
    right: 15vw;
    top: -0.25vw;
    object-fit: contain;
  }
  .hanging_stars_bigger {
    height: 20vw;
    width: 20vw;
    position: absolute;
    right: 0;
    object-fit: contain;
  }
  @media (max-width: 900px) {
    .hanging_lantern {
      display: none;
    }
  }
</style>

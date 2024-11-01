<script>
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import SubSectionHeader from "$lib/components/SubSectionHeader.svelte";
  import { onMount } from "svelte";

  let swipeableElement;
  let touchStartX = 0;
  let touchEndX = 0;
  let checkedItem = 0;

  let input1, input2, input3;

  onMount(() => {
    swipeableElement = document.getElementById("swappableElement");
    swipeableElement.addEventListener("touchstart", handleTouchStart, false);
    swipeableElement.addEventListener("touchmove", handleTouchMove, false);
    swipeableElement.addEventListener("touchend", handleTouchEnd, false);

    input1 = document.getElementById("item-1");
    input2 = document.getElementById("item-2");
    input3 = document.getElementById("item-3");

    if (!navigator.userAgent.match(/mobile/i)) {
      setInterval(() => {
        checkedItem += 1;
        if (checkedItem == 3) {
          checkedItem = 0;
        }
        updateCheckedItem();
      }, 5000);
    }
  });

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
  }

  function handleTouchEnd() {
    handleSwipe();
  }

  function handleSwipe() {
    const swipeDistance = touchStartX - touchEndX;
    const swipeThreshold = 75; // Adjust as needed

    if (swipeDistance > swipeThreshold) {
      // Swipe left
      checkedItem += 1;
      if (checkedItem == 3) {
        checkedItem = 0;
      }
    } else if (swipeDistance < -swipeThreshold) {
      // Swipe right
      checkedItem -= 1;
      if (checkedItem == -1) {
        checkedItem = 2;
      }
    }
    updateCheckedItem();
  }

  function updateCheckedItem() {
    if (checkedItem == 0) {
      input1.checked = true;
    } else if (checkedItem == 1) {
      input2.checked = true;
    } else {
      input3.checked = true;
    }
  }
</script>

<svelte:head>
  <title>Events | Meraz'24</title>
</svelte:head>

<div class="container">
  <SectionHeader name="Events" />
  <input type="radio" name="slider" id="item-1" checked />
  <input type="radio" name="slider" id="item-2" />
  <input type="radio" name="slider" id="item-3" />
  <div class="cards" id="swappableElement">
    <label class="card" for="item-1" id="song-1">
      <img src="/assets/carousal-scitech.webp" alt="Scitech" />
      <a href="/events/scitech"> </a>
      <div class="card-title">
        <SectionHeader name="SciTech" />
      </div>
    </label>
    <label class="card" for="item-2" id="song-2">
      <img src="/assets/carousal-cultural.webp" alt="Culturals" />
      <a href="/events/culturals"> </a>
      <div class="card-title">
        <SectionHeader name="Culturals" />
      </div>
    </label>
    <label class="card" for="item-3" id="song-3">
      <img src="/assets/carousal-informals.webp" alt="Informals" />
      <a href="/events/informals"> </a>
      <div class="card-title">
        <SectionHeader name="Informals" />
      </div>
    </label>
  </div>
  <div class="mobile-cards">
    <div class="mobile-card">
      <a href="/events/scitech">
        <img src="/assets/carousal-scitech.webp" alt="Scitech" />
        <div class="mobile-card-title-container">
          <div class="mobile-card-title">
            <SubSectionHeader name="SciTech" />
          </div>
        </div>
      </a>
    </div>
    <div class="mobile-card">
      <a href="/events/culturals">
        <img src="/assets/carousal-cultural.webp" alt="Culturals" />
        <div class="mobile-card-title-container">
          <div class="mobile-card-title">
            <SubSectionHeader name="Culturals" />
          </div>
        </div>
      </a>
    </div>
    <div class="mobile-card">
      <a href="/events/informals">
        <img src="/assets/carousal-informals.webp" alt="Informals" />
        <div class="mobile-card-title-container">
          <div class="mobile-card-title">
            <SubSectionHeader name="Informals" />
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  input[type="radio"] {
    display: none;
    position: absolute;
  }

  .card {
    position: absolute;
    width: 60%;
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    transition: transform 0.4s ease;
    cursor: pointer;
    a {
      display: none;
      position: absolute;
      top: 0%;
      left: 0%;
      bottom: 0%;
      right: 0%;
      opacity: 0;
    }
    .card-title {
      //  background: #121212dd;
      border-radius: 10px;
      opacity: 0;
      transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    }
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  .container {
    width: 100%;
    height: calc(100vh - 80px);
    background: url("/assets/Background_image.webp");
    background-size: cover;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    // padding-top: 10vh;
    padding-bottom: 10vh;
    overflow-x: hidden;
  }

  .cards {
    position: relative;
    width: 100%;
    height: 90%;
    margin-bottom: 20px;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  #item-1:checked ~ .cards #song-3,
  #item-2:checked ~ .cards #song-1,
  #item-3:checked ~ .cards #song-2 {
    transform: translatex(-40%) scale(0.8);
    opacity: 0.8;
    z-index: 0;
  }

  #item-1:checked ~ .cards #song-2,
  #item-2:checked ~ .cards #song-3,
  #item-3:checked ~ .cards #song-1 {
    transform: translatex(40%) scale(0.8);
    opacity: 0.8;
    z-index: 0;
  }

  #item-1:checked ~ .cards #song-1,
  #item-2:checked ~ .cards #song-2,
  #item-3:checked ~ .cards #song-3 {
    transform: translatex(0) scale(1);
    opacity: 1;
    z-index: 1;

    img {
      box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
    }
  }

  #item-1:checked ~ .cards #song-1 a,
  #item-2:checked ~ .cards #song-2 a,
  #item-3:checked ~ .cards #song-3 a {
    display: block;
    opacity: 100;
    transition: display 0.4s ease-in;
  }
  #item-1:checked ~ .cards #song-1 .card-title,
  #item-2:checked ~ .cards #song-2 .card-title,
  #item-3:checked ~ .cards #song-3 .card-title {
    display: block;
    opacity: 100;
    transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  /* mobile */

  .mobile-cards {
    display: none;
    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      gap: 2vw;
    }
  }
  .mobile-card {
    position: relative;
    width: 80vw;
    height: 40vw;
    .mobile-card-title-container {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #121212aa;
    }
    .mobile-card-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>

<script>
  import { onMount } from "svelte";

  const END_TIME = new Date("Nov 11, 2022 00:00:00").getTime(); // End time of timer
  const TIMER_INTERVAL = 1000;

  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 },
    complete = false;

  onMount(updateTime);
  let interval = setInterval(updateTime, TIMER_INTERVAL);

  function updateTime() {
    const totalSeconds = END_TIME - Date.now();
    if (totalSeconds <= 0) {
      clearInterval(interval);
      complete = true;
    }
    timeLeft = {
      days: Math.floor(totalSeconds / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((totalSeconds % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((totalSeconds % (1000 * 60)) / 1000),
    };
  }
</script>

{#if complete}
  <div class="complete-message">Nov 11-13, 2022</div>
  <!-- <div class="complete-message">Stay Tuned</div> -->
{:else}
  <div class="parent">
    <div class="box">
      {timeLeft.days}
      <span>Days</span>
    </div>
    <div class="box">
      {timeLeft.hours}
      <span>Hours</span>
    </div>
    <div class="box">
      {timeLeft.minutes}
      <span>Minutes</span>
    </div>
    <div class="box">
      {timeLeft.seconds}
      <span>Seconds</span>
    </div>
  </div>
  <!-- <div class="complete-message new1">Trailer Out Now</div> -->
{/if}

<style lang="scss">
  .parent {
    display: flex;
    justify-content: space-around;
    margin: 0;
    // position: absolute;
    // top: 5%;
  }

  .complete-message,
  .parent {
    background-color: #31e1f7;
    font-family: "Metal Mania", sans-serif;
    z-index: 3;
    letter-spacing: 3px;

    // font-family: nouty;
    // letter-spacing: 3px;

    // background-image: url('/assets/gold-texture.jpg');
    // background-repeat: repeat-x;
    // background-position: 0 0;
    font-size: 30%;
    text-transform: uppercase;
    text-align: center;
    color: transparent;
    -webkit-font-smoothing: antialiased;

    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
  }

  .complete-message {
    padding-top: 30px;
    font-size: 3rem;
  }

  @keyframes BackgroundAnimated {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 100%;
    }
  }
  @-webkit-keyframes BackgroundAnimated {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 100%;
    }
  }
  @-ms-keyframes BackgroundAnimated {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 100%;
    }
  }
  @-moz-keyframes BackgroundAnimated {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 100%;
    }
  }

  .box {
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
  .box > span {
    font-size: 70%;
  }
  @media (max-width: 900px) {
    .box {
      font-size: 1.5rem;
    }
  }
</style>

<script>
  import { onMount } from "svelte";
  export let percent;

  const COS_30 = 0.866;
  const SIN_30 = 0.5;
  const SIN_60 = 0.866;
  const COS_60 = 0.5;

  let complete = false;

  $: complete = percent >= 100 ? true : false;

  let tipX = 50;
  let tipY = 50;
  let isMobile = true;

  onMount(() => {
    if (!navigator.userAgent.match(/mobile/i)) {
      isMobile = false;
    }
  });

  function getPosition(percent) {
    let x0 = 0;
    let y0 = 0;
    let radius = 50;
    let p = percent * radius * 0.06;
    if (p < radius && p >= 0) {
      tipX = x0 + radius * COS_30 + p * COS_30;
      tipY = y0 + p * SIN_30;
    } else if (p >= radius && p < 2 * radius) {
      tipX = x0 + 2 * radius * COS_30;
      tipY = y0 + radius * SIN_30 + (p - radius);
    } else if (p >= 2 * radius && p < 3 * radius) {
      tipX = x0 + 2 * radius * COS_30 - (p - 2 * radius) * SIN_60;
      tipY = y0 + (radius * SIN_30 + radius) + (p - 2 * radius) * COS_60;
    } else if (p >= 3 * radius && p < 4 * radius) {
      tipX = x0 + radius * COS_30 - (p - 3 * radius) * COS_30;
      tipY = y0 + 2 * radius - (p - 3 * radius) * SIN_30;
    } else if (p >= 4 * radius && p < 5 * radius) {
      tipX = x0;
      tipY = y0 + (radius * SIN_30 + radius) - (p - 4 * radius);
    } else if (p >= 5 * radius && p < 6 * radius) {
      tipX = x0 + (p - 5 * radius) * SIN_60;
      tipY = y0 + radius * SIN_30 - (p - 5 * radius) * COS_60;
    } else {
      tipX = x0 + radius * COS_30;
      tipY = y0;
    }
  }
  $: getPosition(percent);
</script>

<div class="loader" style="transform: translateY(-{complete ? 200 : 0}%);">
  <div id="wrapper" class="center">
    <svg class="progress hexagon noselect" viewBox="-10 -10 120 135">
      <polygon
        class="fill"
        style={`stroke-dasharray: ${percent * 3.04} 360;`}
        points="50,1 95,25 95,75 50,99 5,75 5,25"
      ></polygon>
      <polygon
        class="blurry-boundary"
        style={`stroke-dasharray: ${percent * 3.04} 360;`}
        points="50,1 95,25 95,75 50,99 5,75 5,25"
      ></polygon>
      <text class="value" x="42%" y="42%">{percent}%</text>
    </svg>
  </div>
  {#if !complete && !isMobile}
    {#each { length: 150 } as _, i}
      <div class="firefly"></div>
    {/each}
  {/if}
</div>

<style lang="scss">
  @use "sass:math";
  .loader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    place-items: center;
    background-color: black;
    transition: transform 0.3s ease-in-out;
    z-index: 9999;
  }

  #wrapper {
    position: relative;
  }

  .progress {
    width: 20rem;
    height: 20rem;
  }

  .progress .fill {
    fill: rgba(0, 0, 0, 0);
    stroke-width: 2;
    stroke: #7cc7ff; /* Changed stroke color to light blue */
    stroke-linecap: round;
    transition: stroke-dasharray 100ms;
  }

  .blurry-boundary {
    fill: none;
    stroke: rgba(
      124,
      199,
      255,
      0.5
    ); /* Changed stroke color to light blue with opacity */
    stroke-width: 6;
    filter: blur(4px);
    animation: glow 1s infinite alternate;
  }

  @keyframes glow {
    0% {
      stroke-width: 6;
    }
    100% {
      stroke-width: 10;
    }
  }

  .progress .value {
    font-family: "Open Sans";
    fill: white;
    text-anchor: middle;
    font-size: 16px;
  }

  .noselect {
    user-select: none;
    cursor: default;
  }

  $quantity: 150;

  .firefly {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 0.4vw;
    height: 0.4vw;
    margin: -0.2vw 0 0 9.8vw;
    animation: ease 200s alternate infinite;
    pointer-events: none;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform-origin: -10vw;
    }

    &::before {
      background: black;
      opacity: 0.4;
      animation: drift ease alternate infinite;
    }

    &::after {
      background: white;
      opacity: 0;
      box-shadow: 0 0 0vw 0vw #7cc7ff; /* Changed box-shadow to light blue */
      animation:
        drift ease alternate infinite,
        flash ease infinite;
    }
  }

  @for $i from 1 through $quantity {
    $steps: math.random(12) + 16;
    $rotationSpeed: math.random(10) + 8s;

    .firefly:nth-child(#{$i}) {
      animation-name: move#{$i};

      &::before {
        animation-duration: #{$rotationSpeed};
      }

      &::after {
        animation-duration:
          #{$rotationSpeed},
          math.random(6000) + 5000ms;
        animation-delay:
          0ms,
          math.random(8000) + 500ms;
      }
    }

    @keyframes move#{$i} {
      @for $step from 0 through $steps {
        #{$step * calc(100 / $steps)}% {
          transform: translateX(math.random(100) - 50vw)
            translateY(math.random(100) - 50vh)
            scale(calc(math.random(75) / 100 + 0.25));
        }
      }
    }
  }

  @keyframes drift {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes flash {
    0%,
    30%,
    100% {
      opacity: 0;
      box-shadow: 0 0 0vw 0vw #7cc7ff; /* Changed box-shadow to light blue */
    }
    5% {
      opacity: 1;
      box-shadow: 0 0 2vw 0.4vw #7cc7ff; /* Changed box-shadow to light blue */
    }
  }
</style>

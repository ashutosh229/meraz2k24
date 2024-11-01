<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faBars } from "@fortawesome/free-solid-svg-icons";
  import { sidebarOpen } from "$lib/stores";
  import { collapsingNavbar } from "$lib/stores";
  import links from "$lib/data/links.json";

  let scrollY;
  let y;
  let posType;

  $: y = $collapsingNavbar ? Math.min(scrollY - 100, 0) : 0;
  $: posType = $collapsingNavbar ? "fixed" : "sticky";
</script>

<svelte:head></svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
  rel="stylesheet"
/>
<svelte:window bind:scrollY />

<div
  class="navbar-sidebar-container"
  style={`transform: translateY(${$sidebarOpen ? -100 : y}%); position: ${posType}`}
>
  <div class="small-navbar-logo-conatiner">
    <a href="/">
      <img alt="" class="small-navbar-logo" src="/assets/meraz_logo_final_2024.svg" srcset="" />
    </a>
  </div>
  <button
    class="sidebarr"
    aria-label="Menu"
    on:click={() => ($sidebarOpen = true)}
  >
    <Fa icon={faBars} size="2x" />
  </button>
</div>
<div
  class="navbar-container"
  style={`transform: translateY(${y}%); position: ${posType};`}
>
  <nav>
    <div class="navbar">
      {#each links as { href, text }, index}
        <li class="navelt">
          <a class="link" {href}>{text}</a>
        </li>
        {#if index == 3}
          <li class="logo">
            <a href="/">
              <img alt="" class="logoo" src="/assets/meraz_logo_final_2024.svg" srcset="" />
            </a>
          </li>
        {/if}
      {/each}
      <div class="regbtn">
        <a
          href="https://unstop.com/p/meraz-registration-pass-meraz-40-indian-institute-of-technology-iit-bhilai-923047"
          >Register</a
        >
      </div>
    </div>
  </nav>
</div>

<!-- CSS STYLING -->

<style lang="scss">
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: LibreBaskerville;
  }

  .navbar-container,
  .navbar-sidebar-container {
    z-index: 1000;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background: var(--bg-secondary);
  }

  div {
    display: inline-block;
  }

  a,
  .link {
    position: relative;
    text-decoration: none;
    color: white;
    font-family: LibreBaskerville;
    transition:
      color 0.25s ease,
      text-decoration 0.25s ease; /* Smooth transition for color and text-decoration */
  }
  .link:hover {
    color: #7cc7ff; /* Change color to 7CC7FF when hovered */
  }

  .link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #7cc7ff; /* Underline color */
    transition: width 0.25s ease; /* Smooth transition for underline */
  }
  .link:hover::after {
    width: 100%; /* Underline effect */
  }

  /* New rule for clicked state */
  .link:active,
  a:active {
    color: #7cc7ff; /* Change color to 7CC7FF when clicked */
  }
  .link:active::after {
    width: 100%; /* Underline effect when clicked */
    background-color: #7cc7ff; /* Change underline color to 7CC7FF when clicked */
  }

  .navbar {
    width: auto;
    height: 80px;
    display: flex;
    margin-right: 10vw;
    margin-left: 10vw;
    background-color: var(--bg-secondary);
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-around;
  }

  .navelt {
    display: inline-block;
    margin: auto;
  }
  .logo {
    display: inline-block;
    padding: 5px;
    margin: auto;
  }

  .logo {
    height: 80px;
    display: auto;
  }
  .logoo {
    height: 100%;
    transition: transform 0.2s;
    transform-origin: top;
  }
  .logoo:hover {
    transform: scale(1.5);
  }

  .regbtn {
    box-sizing: border-box;
    position: absolute;
    right: 1%;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid white;
    border-radius: 10px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 6px 2vw;
    max-width: 10vw;
    font-family: LibreBaskerville;
  }
  .regbtn:hover {
    border: 2px solid #000000;
    background-color: #7cc7ff;
    a {
      font-weight: 900;
      color: #121212;
    }
  }

  .navbar-sidebar-container {
    position: fixed;
    display: flex;
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px #191b21 solid;
    padding: 1%;
    text-align: end;
    transition: transform 200ms linear;
  }
  .sidebarr {
    color: var(--primary);
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translateY(-50%);
    background-color: var(--bg-secondary);
    border: none;
    border-bottom: 1px #191b21 solid;
  }
  .small-navbar-logo-conatiner {
    height: 80px;
    /*display: inline-block;*/
    padding: 0px;
    margin: auto;
  }
  .small-navbar-logo {
    height: 100%;
    transition: transform 0.2s;
  }
  .small-navbar-logo:hover {
    transform: scale(1.2);
  }

  @media (min-width: 1000px) {
    .navbar-sidebar-container,
    .sidebarr,
    .small-navbar-logo-conatiner,
    .small-navbar-logo {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    .navbar {
      display: none;
    }
    .regbtn {
      display: none;
    }
  }
</style>

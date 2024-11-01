<script>
  import LeftCorner from "./Left-corner.svelte";
  import RightCorner from "./Right-corner.svelte";

  /** @type {
   * event.id: string,
   * event.name: string,
   * event.image: string,
   * event.poster : string,
   * event.registerURL: string,
   * event.description: string,
   * event.location: string,
   * event.prizePool: string,
   * event.mode: string,
   * event.poc: [{name: string, contact: string}],
   * event.rulebook: string
   * }
   */
  export let data;

  let isClicked = false;

  function handleClick() {
    // Update the state to indicate that the element is clicked
    isClicked = !isClicked;
  }
</script>

<svelte:head>
  <title>{data.name} | Meraz '24</title>
</svelte:head>

<div class="bodyy">
  <!-- <img class="background" src="/assets/Background_image.png" /> -->
  <div class="frame">
    <div class="top-text">
      <div class="head">
        <img src="/assets/Stars.png" />
        <h1 class="event-title">
          {data.name}
        </h1>
        <img src="/assets/Stars.png" />
      </div>
    </div>
    <div class="venue">
      <div class="text">
        <p>{data.location}</p>
      </div>
      <div class="text">
        <p>
          <u
            ><a href="https://maps.app.goo.gl/YmvSqjx997UZyYMy7">
              View in map</a
            ></u
          >
        </p>
      </div>
    </div>
    <div class="main-container">
      <div class="poster-container">
        <img
          alt="not found"
          class="poster1"
          src={`/assets/posters/${data.poster}`}
          border="0"
        />
        <div class="button-container">
          <a target="_blank" class="block-2" href={data.rulebook}>
            <div class="effect btn-ani">
              <button class="rule-btn hover-effect">Rulebook</button>
              <!--<img class="glitter" src="/assets/E_Stars.svg" alt="" />-->
            </div>
          </a>
          <a target="_blank" class="block-2" href={data.registerURL}>
            <div class="effect btn-ani">
              <button class="reg-btn hover-effect">Register</button>
              <!--<img class="glitter" src="/assets/E_Stars.svg" alt="" />-->
            </div>
          </a>
        </div>
      </div>
      <div class="text-container">
        <div class="description">
          <div class="description-container">
            <p />
            {data.description}
          </div>

          <div class="event-info">
            <div class="text value fund">{data.prizePool}</div>
            <div class="text value mode">
              {data.mode}
            </div>
            <div class="poc-col value">
              <br />
              {#each data.POCs as poc}
                <p>{poc.name}</p>
                <p>+91 {poc.contact}</p>
                <br />
              {/each}
              <br />
            </div>
            <div>
              <h3 class="key prizeKey">Prizes Worth</h3>
            </div>
            <div>
              <h3 class="key modeKey">Event Mode</h3>
            </div>
            <div>
              <h3 class="key pocKey">Point Of Contact</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  * {
    margin: 0;
    // margin-bottom: 100px;
    padding: 0;
  }

  .bodyy {
    // background-image: url('/assets/scitech_bg.png');
    background-color: #006da409;
    color: white;
    padding-top: 5vw;
    height: 120vh;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Josefin Sans", sans-serif;
  }
  .background {
    position: absolute;
    top: 0;
    z-index: -100;
    height: 120vh;
    width: 100vw;
  }
  .head {
    display: flex;
  }
  .frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  .main-container {
    margin-top: 2vh;
    display: flex;
    margin-left: 6%;
    margin-right: 6%;
    object-fit: contain;
    flex-grow: 1;
    height: 70vh;
  }
  .poster1 {
    max-width: 40vw;
    max-height: 70vh;
    border: 5px solid #7cc7ff;
    overflow: hidden;
    object-fit: contain;
    max-width: 100%;

    position: relative;
    //top: 50%;
    left: 50%;
    translate: -50% 0%;
  }
  // .poster-container {
  // 	position: relative;
  // }
  .text-container {
    flex-basis: 80%;
    padding: 3% 2%;
  }
  .event-title {
    text-transform: uppercase;
    font-size: 5vh;
    padding-left: 1vw;
    font-family: CinzelDecorative;
    font-size: 36px;
    font-weight: 400;
    line-height: 52px;
    letter-spacing: 0em;
    text-align: left;
    color: #7cc7ff;
  }

  .description {
    padding-left: 0.8vw;
    padding-right: 0.8vw;
    min-height: 10vw;
    font-family: "Josefin Sans", sans-serif;
    min-width: 60vw;
  }

  .description-container {
    min-height: 10vh;
    font-family: LibreBaskerville;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 2vw;
  }
  .key {
    font-family: LibreBaskerville;
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration: underline;
    color: #7cc7ff;
  }
  .value {
    font-family: LibreBaskerville;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
  }
  //////////////////////// Prize Pool Animation start/////////////////////////
  .magic {
    position: relative;
  }

  .block-1 {
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .block-1 img {
    width: 220px;
  }
  .hat-img,
  .spark-img,
  .money {
    // width: 100%;
    height: 100%;
    position: absolute;
    margin: auto;
    transition: opacity 0.4s;
  }
  .hat-img,
  .spark-img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .spark-img,
  .money {
    opacity: 0;
  }
  .money {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-family: LibreBaskerville;
    font-size: 30px;
    font-weight: 400;
  }
  .shaking .hat-img {
    animation: shaking_hat 4s ease-in-out infinite;
  }
  .magic-block .hat-img {
    animation: hat_movement 1s;
  }
  .magic-block .money {
    animation: popup 1.5s;
  }
  .magic-block .spark-img {
    animation: spark 3s;
  }
  .magic-block .spark-img,
  .magic-block .money {
    opacity: 1;
  }
  @keyframes shaking_hat {
    0% {
      transform: translate(-50%, -50%);
    }
    10% {
      transform: translate(-50%, -57%);
    }
    16% {
      transform: translate(-50%, -57%) rotate(-5deg);
    }
    22% {
      transform: translate(-50%, -57%) rotate(5deg);
    }
    27% {
      transform: translate(-50%, -57%) rotate(-5deg);
    }
    33% {
      transform: translate(-50%, -57%) rotate(5deg);
    }
    50% {
      transform: translate(-50%, -50%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }
  @keyframes hat_movement {
    0% {
      transform: translate(-50%, -50%) rotate(5deg);
    }
    33% {
      transform: translate(-50%, -50%) rotate(-5deg);
    }
    66% {
      transform: translate(-50%, -50%) rotate(5deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-5deg);
    }
  }
  @keyframes popup {
    0% {
      top: 100%;
      left: 50%;
      font-size: 0px;
      // transform: translate(-50%, -50%);
    }
  }
  @keyframes spark {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  //////////////////////// Prize Pool Animation end/////////////////////////

  .venue {
    margin: 5vh;
    display: flex;
    justify-content: center;
    gap: 2vw;
    flex-wrap: wrap;
  }
  .event-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
    grid-template-rows: repeat(2, 1fr);
    margin-top: 5vw;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-content: center;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 5%;
    flex-wrap: nowrap;
    a {
      margin-top: 3vh;
    }
  }
  .hover-effect {
    outline: none;
    width: 192px;
    height: 46.5px;
    border-radius: 7px;
    font-family: LibreBaskerville;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    border: 1.5px solid #464646;
    transition: all 0.4s;
  }

  .reg-btn {
    background: #337cb2;
    max-width: 40vw;
  }
  .rule-btn {
    max-width: 40vw;
    color: #fff;
    background: transparent;
    border: 1px solid #464646;
  }
  .btn-ani {
    position: relative;
  }
  .block-2 {
    position: relative;
  }
  //////////////////////// Buttons Animation Start/////////////////////////
  .hover-effect:hover {
    box-shadow: 0px 2px 5px 2px var(--bg-primary);
    translate: 0px -2px;
  }
  /*.block-2:hover .hover-effect {
		background: #ebb460;
		color: #373737;
		border: 0;
		// width: 205px;
		// height: 42px;
	}

	.glitter {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.glitter {
		opacity: 0;
	}

	.block-2:hover .glitter {
		opacity: 1;
	}*/
  //////////////////////// Buttons Animation end/////////////////////////
  @media screen and (max-width: 900px) {
    .bodyy {
      height: fit-content;
      background-attachment: fixed;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .main-container {
      flex-direction: column;
      height: unset;
    }

    .poster1 {
      max-width: 80vw;
      max-height: 70vh;
    }
    .key {
      padding-top: 5vh;
      // padding-bottom: 4vh;
    }
    .prizeKey {
      padding-top: 5vh;
      padding-bottom: 5vh;
    }
    .event-info {
      grid-template-columns: 1fr;
      grid-template-rows: 0.3fr 1fr repeat(4, 0.3fr);
      grid-template-areas:
        "prizePoolKey"
        "prizePool"
        "eventModeKey"
        "eventMode"
        "pocKey"
        "poc";
      margin-top: 10vh;
      //  place-items: center;
    }
    .magic {
      grid-area: prizePool;
      // padding-bottom: 100px;
    }

    .mode {
      grid-area: eventMode;
    }

    .poc-col {
      grid-area: poc;
    }

    .prizeKey {
      grid-area: prizePoolKey;
    }

    .modeKey {
      grid-area: eventModeKey;
    }

    .pocKey {
      grid-area: pocKey;
    }

    .LeftCorner,
    .RightCorner {
      display: none;
    }
  }
</style>

<script>
  import BackgroundCards from "$lib/designs/cardBackground.svelte";
  import ActualCardBackground from "$lib/designs/ActualCardBackground.svelte";

  /**
   * @type {{ name: string, image: string, comment: string}}
   */
  export let data = {
    name: "",
    image: "",
    comment: "",
  };
</script>

<div class="root">
  <div class="card-background">
    <BackgroundCards />
  </div>
  <div class="bottom-card-container">
    <div class="top-card bottom">
      <div class="card-design">
        <ActualCardBackground />
      </div>
      <div class="top-card-content">
        <div class="card-content-text">
          <p class="event-date">{data.eventDate}</p>
          <p class="event-time">{data.eventTime}</p>
          <p class="event-location">{data.eventLocation}</p>
        </div>
        <div class="card-content-name">
          <div class="card-name">
            {data.name}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="top-card-container">
    <div class="top-card">
      <div class="card-design">
        <ActualCardBackground />
      </div>
      <div class="top-card-content">
        <div class="card-content-tagline">
          <!-- <div class="card-tagline-left">
            {data.comment1}
          </div>
          <div class="card-tagline-right">
            {data.comment2}
          </div>-->
        </div>
        <div
          class="card-content-image"
          style={`background-image: url(/assets/${data["image"]});`}
        ></div>
        <div class="card-content-name">
          <div class="card-name">
            {data.name}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .root {
    position: relative;
    font-family: "BluuNext";
    min-width: max(0.8 * 27vw, 0.8 * 10.8em);
    min-height: max(0.8 * 33vw, 0.8 * 13.2em);
  }
  .card-background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 50;
  }
  .bottom-card-container {
    position: absolute;
    top: 6.5%;
    right: 10%;
    bottom: 6.2%;
    left: 10%;
    transform: rotateZ(4deg);
    z-index: 100;
  }
  .top-card-container {
    position: absolute;
    top: 7%;
    right: 10%;
    bottom: 6.2%;
    left: 10%;
    z-index: 100;
    &:hover {
      .top-card {
        transform: translateX(80%) translateY(10%) rotateZ(15deg);
        transform-origin: bottom;
        //transform: rotateY(180deg);
      }
    }
  }
  .top-card {
    background: #191919;
    width: 100%;
    height: 100%;
    z-index: 110;
    //transform: rotateY(0deg);
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  .top-card.bottom {
    background: #3a3a3a;
  }

  /* Content inside the card */
  .card-design {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 120;
  }
  .top-card-content {
    position: relative;
    z-index: 130;
    width: 100%;
    height: 100%;
  }
  /*.card-content-tagline{
    position: absolute;
    width:    86%;
    top:      4%;
    left:     7%;

    display:         flex;
    vertical-align:  middle;
    justify-content: space-between;
    text-align:      center;
    color:           #AB8D60;
    font-weight:     bold;
  }
  .card-tagline-left, .card-tagline-right{
     font-size: 16px;
  }*/
  .card-content-image {
    position: absolute;
    background-size: cover;
    width: 86%;
    top: 12%;
    left: 7%;
    height: 73%;
  }
  .card-content-text {
    position: absolute;
    width: 86%;
    top: 12%;
    left: 7%;
    height: 73%;
    text-align: center;
    // color: #AB8D60;
    font-weight: bold;
    font-size: max(0.04 * 27vw, 0.04 * 10.8em);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: -20%;
    font-family: LibreBaskerville;
  }
  .card-content-name {
    position: absolute;
    height: 9%;
    width: 86%;
    bottom: 3.5%;
    left: 7%;
    font-family: Cormorant;
    display: flex;
    vertical-align: middle;
    justify-content: center;
    text-align: center;
    color: #c0c0c0;
    font-weight: bold;
    font-size: max(1.6vw, 0.64em);
  }
  .event-date,
  .event-time,
  .event-location {
    margin: 5px 0;
    padding: 0;
    line-height: 1.2;
  }

  .event-date {
    font-size: 1.4em;
  }

  .event-time {
    font-size: 1.2em;
  }

  .event-location {
    font-size: 1.2em;
  }
</style>

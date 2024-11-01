<script>
  import SectionHeader from "./SectionHeader.svelte";
  import LiteYouTube from "svelte-lite-youtube-embed";
  /** @type {string} */
  export let vid = "";
  export let vhead = "";
</script>

<div class="aftermv-main-container">
  <SectionHeader bind:name={vhead} />
  <div class="aftermv-content-holder">
    <div class="container-1"></div>
    <!-- You can keep these as is if needed -->
    <div class="container-2"></div>
    <!-- You can keep these as is if needed -->
    <div class="container-3">
      <!-- Updated container to overlay the frame -->
      <!-- <img
        src="/static/assets/video_frame.png"
        alt="Frame"
        class="frame-overlay"
      /> -->
      <div class="aftermv-content">
        <LiteYouTube
          videoId={vid}
          videoTitle="Meraz 2022 Aftermovie"
          params="enablejsapi=1"
          posterQuality="sddefault"
          posterLoading="eager"
          on:iframeLoaded={(e) => console.log(e.detail.iframe)}
        />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .aftermv-main-container {
    margin-top: 5em;
    margin-bottom: 5em;
    font-family: LibreBaskerville;
    font-size: 24px;
    text-align: center;
  }
  .aftermv-content-holder {
    position: relative;
    margin-top: 2.5em;
    left: 50%;
    transform: translateX(-50%);
    min-width: 30em;
    width: fit-content;
  }

  @media screen and (max-width: 800px) {
    .aftermv-content-holder {
      min-width: 80vw;
    }
  }

  .container-1 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: -10px;
    top: -6px;
    border: 1px solid #c0c0c0;
  }
  .container-2 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: -5px;
    top: +6px;
    border: 1px solid #c0c0c0 ;
  }
    .container-3 {
      position: relative;
      border: 1px solid #c0c0c0 ;
    }

  // .frame-overlay {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%; /* Ensure the frame covers the entire container */
  //   height: 100%; /* Adjust if needed to match the aspect ratio */
  //   pointer-events: none; /* To prevent the frame from blocking interactions */
  // }
  .aftermv-content {
    position: relative;
    z-index: 1; /* Ensure the video thumbnail is below the frame */
    margin: 15px;
    right: 5px;
  }
</style>

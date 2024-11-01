<script>
  import SectionHeader from "./SectionHeader.svelte";

  let heading = "About Meraz";
</script>

<div class="about-main-container">
  <SectionHeader bind:name={heading} />
  <div class="about-content-holder">
    <div class="container-1"></div>
    <div class="container-2"></div>
    <div class="about-content container-3">
      <p>
        Welcome to Meraz 5.0, IIT Bhilai's yearly techno-cultural festival; the
        vivacious spectacle that breaks through barriers and stokes passions.
        Meraz, which is rooted in the long history of techno-cultural events IIT
        Bhilai, is a tribute to our dedication to developing talent and
        promoting an exploratory and growing attitude.
      </p>

      <!--<p>
	It's where diverse talents converge, and horizons expand. No matter
their background, everyone has the chance to showcase skills, forge new
connections, and chart the course towards a dynamic future. From the
intricacies of technology and IT to the elegance of fashion and the artistry of
culinary pursuits, Meraz presents a tantalizing glimpse of what's to come. </p>
			<p>
				Join us on this exhilarating journey at Meraz, where you're invited to
discover a new you, witness the kindling and confluence of talents, immerse
your senses in an extravaganza which promises to not only paint the campus in a
myriad of bright hues, but also to splash those paints on all those who attend
it, so that you leave with memories ever so colourful!
	</p>-->
    </div>
  </div>
</div>

<style lang="scss">
  .about-main-container {
    margin-top: 5em;
    padding-bottom: 5em;
    font-family: LibreBaskervillel;
    font-size: 24px;
    text-align: center;
  }
  .about-content-holder {
    position: relative;
    margin-top: 2.5em;
    left: 50%;
    transform: translateX(-50%);
    min-width: 20em;
    width: 60%;
  }
  @media (max-width: 1000px) {
    .about-content-holder {
      position: relative;
      margin-top: 2.5em;
      left: 50%;
      transform: translateX(-50%);
      min-width: 0em;
      width: 90%;
    }
  }
  .container-1 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: -10px;
    top: -6px;
    border: 1px solid #00008b;
  }
  .container-2 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: -5px;
    top: +6px;
    border: 1px solid #00008b;
  }
  .container-3 {
    position: relative;
    border: 1px solid #00008b;
  }
  .about-content {
    text-align: center;
    padding: 1em 2em;
    text-align: justify;
  }

  @media (max-width: 480px) {
    .about-content {
      font-size: 1rem;
    }
  }
</style>

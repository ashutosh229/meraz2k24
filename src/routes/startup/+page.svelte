<script>
  import SectionHeader from "../../lib/components/SectionHeader.svelte";
  import AftermovieSection from "$lib/components/AftermovieSection.svelte";
  import EventCard from "$lib/components/EventCard.svelte";
</script>

<svelte:head>
  <title>E-Conclave | Meraz'25</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<div class="bodyy">
  <div class="empty"></div>
  <div class="conclave-heading">
    <div class="head">
      <img height="62" width="62" src="/assets/Stars.png" />
      <h1 class="event-title">STARTUPS</h1>
      <img height="62" width="62" src="/assets/Stars.png" />
    </div>
  </div>
  <div class="hero startup">
    <!-- <img class="poster" alt="not found" src="/assets/sponsors/meraz.png" srcset="" /> -->
    <img
      class="frame"
      alt="not found"
      src="/assets/startups_img_bg.svg"
      srcset=""
    />
  </div>
  <!-- </div> -->
  <img src="/assets/Tree.png" alt="not found" srcset="" class="tree" />
  <div class="start">
    <p>
      Welcome to Meraz, the annual techno-cultural fest of IIT Bhilai. This
      vibrant production dismantles barriers and arouses emotions. Meraz 5.0 is
      a monument to our drive to foster talent and promote a curious,
      forward-thinking mentality. Its beginnings can be discovered in the long
      history of IIT Bhilai's techno-cultural activities. Regardless of
      background, it's where people with different skills come together and
      their horizons open up.
    </p>
    <p>
      Aim to bridge the gap between budding entrepreneurs and the resources they
      need to thrive in the competitive business landscape
    </p>
    <p>
      We believe in nurturing the seeds of creativity, guiding startup
      enthusiasts through the intricate pathways of business, and ultimately,
      propelling them towards the zenith of success
    </p>
    <p>Mission to inspire, educate, and connect aspiring entrepreneurs</p>
    <p>
      It serves as the ultimate bridge between aspiring entrepreneurs and the
      dynamic world of business, providing a space for inspiration, mentorship,
      and investment opportunities.
    </p>
    <div class="event-info">
		<!-- <img class="image" src="/assets/frame.png" alt="not found"> -->
      <div class="text value fund image">
		<div>
			<h3 class="key prizeKey">Funding Amount</h3>
		  </div>
        <div>Over <span>&#8377;</span> 1.21 Cr</div>
      </div>
      <div class="text value mode fund image">
		<div>
			<h3 class="key modeKey">Event Mode</h3>
		  </div>
        <!-- {data.mode}  -->Offline
      </div>
      <div class="poc-col value image">
		<div>
			<h3 class="key pocKey">Point Of Contact</h3>
		  </div>
		  <div class="poc">
			<p>Sudeep Ranjan Sahoo<br>+91 6372 432 280</p>
        <p>Gunthi Varshini<br>+91 80965 67259</p>
		  </div>
      </div>
      
      
      
    </div>
    <div class="event-1" style="display: flex; flex-wrap: wrap;">
      <div style="flex-basis: 50%; box-sizing: border-box; padding: 0 5px;">
        <a href="/startup/WizardGrantt">
          <EventCard
            frameContainerWidth="28.75"
            frameContainerHeight="20"
            sponsorName="WizardGrantt"
            logoName="/assets/event-images/econclave/hero_bg.jpg "
          />
        </a>
      </div>
      <div style="flex-basis: 50%; box-sizing: border-box; padding: 0 5px;">
        <a href="/startup/EnchanteX">
          <EventCard
            frameContainerWidth="28.75"
            frameContainerHeight="20"
            sponsorName="EnchanteX"
            logoName="/assets/event-images/econclave/Enchantrx.jpg "
          />
        </a>
      </div>
      <div style="flex-basis: 100%; box-sizing: border-box; padding: 0 5px;">
        <a href="/startup/MysticPitch">
          <EventCard
            frameContainerWidth="28.75"
            frameContainerHeight="20"
            sponsorName="MysticPitch"
            logoName="/assets/event-images/econclave/Mysticpitch.webp"
          />
        </a>
      </div>
    </div>

    <AftermovieSection vid="Z-fvYC9p7ao" vhead="Why EC?" />
  </div>
  <a target="_blank" class="block-2" href="#">
	<div style="padding-bottom: 7rem;">
		<button class="rule-btn hover-effect">Register</button>
	</div>
</a>
</div>

<style lang="scss">
  .bodyy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #020b1a;
  }
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
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
  .empty {
    height: 4vh;
  }
  img {
    width: 100%;
  }
  .rule-btn {
		max-width: 40vw;
		color: #fff;
		background: transparent;
		border: 1px solid #464646;
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
  .image{
	width: 40vh;
	height: 40vh;
	background-image: url(/assets/frame.png);
	background-size: cover;
  }
  .poster {
    position: relative;
    top: 0;
    left: 0;
    margin-top: 6.15%;
    margin-right: 0%;
    object-fit: cover;
    width: 40.4vw;
    height: 40.5vw;
    overflow: hidden;
    border-radius: 50%;
  }
  .frame {
    position: absolute;
    top: 0%;
    height: 36.47rem;
    width: 34.29rem;
  }
  .startup {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero {
    position: relative;
    width: 100%;
    height: 30.5vw;
  }
  .start {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .start > p {
    font-family: LibreBaskerville;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
  }
  .event-info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vw;
	gap: 4rem;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: center;
	gap: 2rem;
    align-content: center;
	padding-top: 10vh;
  }
  .key {
    font-family: Cormorant;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration: underline;
    margin-top: 0px;
  }
  .value {
    font-family: LibreBaskerville;
	color: #0077A2;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
  }
  .value p {
    margin: 0px;
    padding: 0px;
  }
  .fund {
    font-size: 4.5vh;
  }
  .poc-col{
	padding-top: 10vh;
  }
  .poc{
	display: flex;
	flex-direction: column;
	gap: 1rem;
  }
  //////////////////////// Buttons Animation Start/////////////////////////
  /* .block-2:hover .hover-effect {
		background: #ebb460;
		color: #373737;
		border: 0;
	} */

  /*.glitter {
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

  @media (max-width: 1300px) {
    p {
      font-size: 1rem;
    }
    .empty {
      height: 7vh;
    }
    .event-info {
      flex-direction: column;
    }
    .frame{
      height: 27.35rem;
      width: 25.71rem;
    }

  }

  @media (max-width: 900px){
    .frame{
      height: 21.88rem;
      width: 20.56rem;
    }
    .tree{
      margin-top: 2rem;
    }
  }
  @media (max-width: 700px){
    .frame{
      height: 16.41rem;
      width: 15.42rem;
    }
  }

  @media (max-width: 480px) {
    .start > p {
      font-size: 1rem;
      text-align: center;
    }
    .key {
      font-size: 1.7rem;
      margin-bottom: 0rem;
    }
    .fund {
      margin-top: 1rem;
      margin-bottom: 2.8rem;
      font-size: 2.2rem;
      line-height: 0rem;
    }
    .empty {
      height: 0vh;
    }
    .conclave-heading {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    .value {
      margin-bottom: 4rem;
    }
    .frame{
      height: 12.30rem;
      width: 11.56rem;
    }
  }
  
</style>
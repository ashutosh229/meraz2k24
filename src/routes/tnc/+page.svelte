<!-- JAVASCRIPT -->

<script>
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	import AftermovieSection from "$lib/components/AftermovieSection.svelte";
	let meraz2022 = "ztJsklsTg8M";
	let meraz2019 = "fjtuMhY1KK8";
	let meraz2018 = "uOQbTb4-ejs";
	let vhead2022 = "Aftermovie'22";
	let vhead2019 = "Aftermovie'19";
	let vhead2018 = "Aftermovie'18";
</script>


<!-- SVELTE -->

<svelte:head>
	<title>T&C | Meraz'24</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
</svelte:head>


<!-- HTML STRUCTURE -->

<div>
	<div class="content">
		<SectionHeader name="Terms & Conditions"/>

		<p class="guidelines">
			1) IIT Bhilai organizing the event as specified in the website, any
			individual participating in any event in Meraz 5.0 in any form, online or offline, is
			required to accept these Terms & condition.<br><br>
			
			2) No refund will be eligible in case of no show where the participant arrives
			late or does not turn up for the event.<br><br>
			
			3) Only the registered participant can attend the event.
			Replacement or substitution is not allowed.<br><br>
			
			4) No refunds will be eligible to any individual if the event conducted is not
			up to the satisfaction or expectation of the participant.<br><br>
			
			5) In case event is cancelled or postponed, fully or partially,
			should this occur, the revised schedule will be informed to you. The amount
			will not be refunded back under any circumstances.
		</p>

		
	</div>
	
</div>


<!-- CSS STYLING -->

<style lang="scss">
	* {
		margin: 0;
		box-sizing: border-box;	
	}

	.aboutmeraz {
		text-align: center;
		font-family: 'BluuNext', 'Yusei Magic', sans-serif;
		display: table-cell;
		vertical-align: middle;
		height: calc(100vh - 80px);
		width: 100vw;
		background-color: transparent;
		background-image: url(/assets/about-head.webp);
		background-size: cover;
		background-position-x: center;
		background-position-y: top;
	}

	.content {
		padding: 11vw;
		width: 100%;
		position: relative;
		font-size: 3vh;
		font-family: 'Yusei Magic', sans-serif;
		text-align: center;
		line-height: 5vh;
	}

	.introheading {
		font-size: 5vh;
	}

	.intro, .introheading {
		position: relative;
		z-index: 100;
	}

	.bgimg {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url("assets/aboutBgImg.png");
		background-size: cover;
		width: 100%;
		height: 100%;
		z-index: -100;
	}

	.guidelines {
		font-family: 'Libre Baskerville', serif;
		font-size: 1.2rem;
		line-height: 1.8rem;
		text-align: left;
		margin: 0 auto;
		width: 80%;
	}

	@media (max-width: 480px) {
		.intro > p{
			font-size: 1rem;
			text-align: justify;
		}
		.introheading{
			line-height: 3.5rem;
		}
	}
</style>

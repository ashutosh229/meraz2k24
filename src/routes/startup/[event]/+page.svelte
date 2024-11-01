<script>
	import LeftCorner from '../../../routes/events/[type]/[event]/Left-corner.svelte';
	import RightCorner from '../../../routes/events/[type]/[event]/Right-corner.svelte';

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
	<div class="LeftCorner">
		<LeftCorner icon="LeftCorner" />
	</div>
	<div class="frame">
		<div class="top-text">
			<h1 class="event-title">
				{data.name}
			</h1>
		</div>
		<!--<div class="venue">
			<div class="text">
				<p>Event Venue: {data.location}</p>
			</div>
			<div class="text">
	<p><u><a href="https://maps.app.goo.gl/YmvSqjx997UZyYMy7"> View in map</a></u></p>
			</div>
	</div>-->
		<div class="main-container">
			<div class="poster-container">
				<img alt="not found" class="poster1" src={`/assets/posters/${data.poster}`} border="0" />
				<div class="button-container">
					<a target="_blank" class="block-2" href={data.rulebook}>
						<div class="effect btn-ani">
							<button class="rule-btn hover-effect">Rulebook</button>
						</div>
					</a>
					{#if data.registerURL}
						<a target="_blank" class="block-2" href={data.registerURL}>
							<div class="effect btn-ani">
								<button class="reg-btn hover-effect">Register</button>
							</div>
						</a>
					{/if}
				</div>
				<div class="button-container">
					{#if data.problemlist}
						<a target="_blank" class="block-2" href={data.registerURL}>
							<div class="effect btn-ani">
								<button class="rule-btn hover-effect">Problems</button>
							</div>
						</a>
					{/if}
				</div>
			</div>
			<div class="text-container">
				<div class="description">
					<div class="description-container">
						<p />
						{data.description}
					</div>

					<div class="event-info" data-funding={data.funding ? 'true' : 'false'}>
						{#if data.funding}
							<div class="text value fund">
								<div>Over <span>&#8377;</span> {data.funding}</div>
							</div>
						{/if}
						<div class="text value mode">
							<!-- {data.mode}  -->Offline
						</div>
						<div class="poc-col value">
							<br />
							<p>Sudeep Ranjan Sahoo</p>
							<p>+91 6372 432 280</p>
							<br />
							<p>Gunthi Varshini</p>
							<p>+91 80965 67259</p>
							<p></p>
							<br />
							<p>Hasitha Gorerpati</p>
							<p>+91 63013 03292</p>
							<br />
						</div>
						{#if data.funding}
							<div>
								<h3 class="key prizeKey">Funding Amount</h3>
							</div>
						{/if}
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
	<div class="RightCorner">
		<RightCorner info="RightCorner" />
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
		background: linear-gradient(242.28deg, #191b21 -0.41%, rgba(25, 27, 33, 0) 79.12%),
			linear-gradient(
				287.93deg,
				#24262b 0%,
				rgba(36, 38, 43, 0.9145) 68.72%,
				rgba(36, 38, 43, 0.714495) 93.62%,
				rgba(36, 38, 43, 0) 112.6%
			),
			linear-gradient(89.15deg, #332d34 0.77%, rgba(51, 45, 52, 0) 106.07%);
		color: white;
		padding-top: 5vw;
		height: 120vh;
		background-size: cover;
		background-repeat: no-repeat;
		font-family: 'Josefin Sans', sans-serif;
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
	.event-info {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 5vw;
	}

	.poster1 {
		max-width: 40vw;
		max-height: 70vh;
		border: 5px solid #d7b676;
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
		font-family: Yusei Magic;
		font-size: 36px;
		font-weight: 400;
		line-height: 52px;
		letter-spacing: 0em;
		text-align: left;
		color: #ffc367;
	}

	.description {
		padding-left: 0.8vw;
		padding-right: 0.8vw;
		min-height: 10vw;
		font-family: 'Josefin Sans', sans-serif;
		min-width: 60vw;
	}

	.description-container {
		min-height: 10vh;
		font-family: Yusei Magic;
		font-size: 18px;
		font-weight: 400;
		line-height: 26px;
		letter-spacing: 0em;
		text-align: left;
		margin-top: 2vw;
	}
	.fund {
		font-size: 2.8rem;
		color: #ffc727;
	}
	.key {
		font-family: Yusei Magic;
		font-size: 24px;
		font-weight: 400;
		line-height: 35px;
		letter-spacing: 0em;
		text-align: center;
		text-decoration: underline;
	}
	.value {
		font-family: Yusei Magic;
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
		color: #ffc367;
		font-family: Yusei Magic;
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
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		margin-top: 5vw;
	}

	.event-info[data-funding='true'] {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
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
		font-family: Yusei Magic;
		font-size: 24px;
		font-weight: 400;
		letter-spacing: 0em;
		text-align: center;
		border: 1.5px solid #464646;
		transition: all 0.4s;
	}

	.reg-btn {
		background: #ebb460;
		max-width: 40vw;
	}
	.rule-btn {
		max-width: 40vw;
		color: #fff;
		background: transparent;
		border: 1px solid var(--primary);
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
			grid-template-rows: repeat(4, 0.3fr);
			grid-template-areas:
				'eventModeKey'
				'eventMode'
				'pocKey'
				'poc';
			margin-top: 10vh;
			//  place-items: center;
		}
		.event-info[data-funding='true'] {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(3, 0.7fr) repeat(3, auto);
			grid-template-areas:
				'prizePool'
				'prizePoolKey'
				'eventModeKey'
				'eventMode'
				'pocKey'
				'poc';
			margin-top: 10vh;
		}

		.mode {
			grid-area: eventMode;
		}

		.poc-col {
			grid-area: poc;
		}
		.fund {
			grid-area: prizePool;
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
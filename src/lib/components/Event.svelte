<script>
	export let name, image, registerURL;
</script>

<svelte:head>
	<title>{name} | Meraz '24</title>
</svelte:head>

<div class="parent">
	<h1>{name}</h1>
	<div style="display: flex; flex-wrap: wrap;">
		<div style="flex:0.8;">
			<img alt="not found" src={`/assets/event-images/${image}`} alt="Event" />
		</div>
		<div class="description" style="flex:1">
			<div>
				<slot />
			</div>
			{#if registerURL}
				<div style="text-align:center;text-justify: auto;">
					<a href={registerURL} mat-raised-button color="primary" class="register-button">
						Register
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.parent {
		padding-top: 75px;
		scroll-snap-align: start;
		scroll-padding-top: 75px;
		margin: auto 5% 15px 5%;
	}
	a > span {
		text-decoration: underline !important;
	}

	h1 {
		text-align: center;
		letter-spacing: 2px;

		font-weight: normal;
		font-family: 'Metal Mania', cursive;
		color: transparent;
		background: -webkit-linear-gradient(gold, gold, red);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.register-button {
		border-radius: 5px;
		font-size: 1.7rem;
		letter-spacing: 2px;
		color: #111111;
		padding: 5px 15px;
		font-family: 'Metal Mania';
		background-image: url('/assets/gold-texture.jpg');
		transition: 0.25s transform ease-in-out;
		&:hover {
			transform: scale(1.1);
		}
		margin-bottom: 4px;
	}

	img {
		width: 90vw;
		scroll-snap-align: start;
		scroll-margin-top: 75px;
		border-radius: 30px;
		max-height: 70vh;
	}
	@media (min-width: 426px) {
		img {
			position: sticky;
			top: 20%;
			max-width: 40vw;
		}
	}
	.description {
		padding-left: 15px;
	}

	@media screen and (max-width: 425px) {
		.description {
			padding-left: 0px;
			padding-top: 10px;
		}
		img {
			width: 90vw;
		}
	}
</style>

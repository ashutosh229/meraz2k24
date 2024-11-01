<script context="module">
	export const prerender = true;
	export const load = async ({ params }) => ({
		props: {
			key: params.path,
		},
	});
	
</script>

<script>
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '../styles/main.scss';
	import { onMount } from 'svelte';
	import HexagonLoading from './HexagonLoading.svelte';
	import { collapsingNavbar } from '$lib/stores';

	export let key;

	let globalProgress = 0;
	let delay = 40;
	let progressOnComplete = 0;
	let actuallyLoaded = false;
	$collapsingNavbar = false;

	onMount(() => {
		const interval = setInterval(() => {
			if (document.readyState === 'complete' && actuallyLoaded != true) {
				progressOnComplete = globalProgress;
				actuallyLoaded = true;
			}

			if (globalProgress <= 100 && actuallyLoaded) {
				// Increment global progress by atleast 1
				globalProgress += Math.max((100 - progressOnComplete) / 50, 1);
			} else if (globalProgress < 65) {
				globalProgress += 1;
			}

			if (globalProgress >= 100) {
				globalProgress = 100;
				clearInterval(interval);
			}
			globalProgress = Math.floor(globalProgress);
		}, delay);
	});
</script>

<HexagonLoading percent={globalProgress} />

<Header />
<Sidebar />
<PageTransition {key}>
	<slot />
</PageTransition>
<Footer />
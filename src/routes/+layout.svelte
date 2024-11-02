<!-- layout.svelte -->

<script>
	// import { onMount } from 'svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	// import { setupHeightAdjustment } from '../lib/adjustHeight';

	// onMount(() => {
	// 	const cleanup = setupHeightAdjustment();
	// 	return cleanup;
	// });
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	@import '../styles/global.scss';
</style>

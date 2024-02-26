<!-- home/+page.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import { setupHeightAdjustment } from '../lib/adjustHeight';

	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import ArrowDown from '../components/ArrowDown.svelte';

	onMount(() => {
		const cleanup = setupHeightAdjustment();
		return cleanup; // Cette fonction sera appelée lors de la destruction du composant
	});
</script>

<div id="home" class="home" style="background: url('/images/imgVilla.png') center/cover no-repeat;">
	<div class="title">
		<h1>Matthieu Achy</h1>
		<h2>Architecture</h2>
	</div>

	<ArrowDown link="#about" />
</div>

<About />
<Projects />

<style>
	@import '../styles/home.scss';
</style>

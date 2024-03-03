<!-- +page.svelte -->
<script>
	import { onMount } from 'svelte';
	import { setupHeightAdjustment } from '../lib/adjustHeight';

	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import ArrowDown from '../components/ArrowDown.svelte';

	onMount(() => {
		const cleanup = setupHeightAdjustment();
		return cleanup;
	});
</script>

<div
	id="home"
	class="home"
	style="background: url('/images/imgLogement.png') center/cover no-repeat;"
>
	<ArrowDown link="#about" />
</div>

<About />
<Projects />

<style>
	@import '../styles/home.scss';
</style>

<!-- home/+page.svelte -->
<script>
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import ArrowDown from '../components/ArrowDown.svelte';
</script>

<div id="home" class="Home" style="background: url('/images/imgVilla.png') center/cover no-repeat;">
	<ArrowDown link="#about" />
</div>

<About />
<Projects />

<style>
	.Home {
		height: 100vh;
	}
</style>

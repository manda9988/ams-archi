<!-- home/+page.svelte -->
<script>
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import ArrowDown from '../components/ArrowDown.svelte';
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

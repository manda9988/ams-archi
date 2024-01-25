<!-- home/+page.svelte -->
<script>
	import About from '../components/About.svelte';
</script>

<div class="topHome">
	<div class="title">
		<h1>Matthieu Achy</h1>
		<h2>Architecture</h2>
	</div>
	<a href="#section-below" class="arrow-down">
		<i class="fa-solid fa-arrow-down"></i>
	</a>
</div>

<About />

<style>
	@import '../styles/home.scss';
</style>

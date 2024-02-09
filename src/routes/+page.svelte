<!-- home/+page.svelte -->
<script>
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
</script>

<div
	id="home"
	class="topHome"
	style="background: url('/images/topHomeImg.jpeg') center/cover no-repeat;"
>
	<div class="title">
		<h1>Matthieu Achy</h1>
		<h2>Architecture</h2>
	</div>
	<a href="#about" class="arrow-down">
		<i class="fa-solid fa-arrow-down"></i>
	</a>
</div>

<About />
<Projects />

<style>
	@import '../styles/home.scss';
</style>

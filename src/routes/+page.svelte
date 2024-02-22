<!-- home/+page.svelte -->
<script>
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
</script>

<div
	id="home"
	class="topHome"
	style="background: url('/images/imgVilla.png') center/cover no-repeat;"
>
	<a href="#about" class="arrow-down">
		<span class="fa-arrow">↓</span>
	</a>
</div>

<About />
<Projects />

<style>
	@import '../styles/home.scss';
</style>

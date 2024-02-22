<!-- home/+page.svelte -->
<script>
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import ArrowDown from '../components/ArrowDown.svelte';
</script>

<div
	id="home"
	class="topHome"
	style="background: url('/images/imgVilla.png') center/cover no-repeat;"
>
	<ArrowDown link="#about" />
</div>

<About />
<Projects />

<style>
	@import '../styles/home.scss';
</style>

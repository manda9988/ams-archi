<!-- +page.svelte -->
<script>
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import ArrowDown from '../components/ArrowDown.svelte';
</script>

<div
	id="home"
	class="home"
	style="background: url('/images/imgLogement.png') center/cover no-repeat;"
>
	<div class="title">
	
		<h2>Mamori.</h2>
		<h2>ARCHITECTS</h2>
	</div>
	<ArrowDown link="#about" />
</div>

<About />
<Projects />

<style>
	@import '../styles/home.scss';
</style>

<!-- +page.svelte -->
<script>
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import ArrowDown from '../components/ArrowDown.svelte';
</script>

<div
	id="home"
	class="home"
	style="background: url('/images/imgPro1/1.jpg') center/cover no-repeat;"
>
	<div class="title">
		<h2>ams_ architects</h2>
	</div>
	<ArrowDown link="#about" />
</div>

<About />
<Projects />

<style>
	@import '../styles/home.scss';
</style>

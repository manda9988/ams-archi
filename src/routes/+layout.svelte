<!-- layout.svelte -->

<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	@import '../styles/global.scss';
</style>

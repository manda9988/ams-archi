<!-- nav.svelte -->

<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		const navLinks = document.querySelectorAll('.nav-links a, .social-links a');

		navLinks.forEach((link) => {
			link.addEventListener('click', function () {
				const toggle = document.getElementById('toggle');

				if (toggle !== null && toggle instanceof HTMLInputElement) {
					if (toggle.checked) {
						toggle.click();
					}
				}
			});
		});
	});
</script>

<nav class="navbar">
	<a href="/" class="title-link">
		<div class="title">
			<h1>Matthieu Achy</h1>
			<h2>Architecture</h2>
		</div>
	</a>
	<input id="toggle" type="checkbox" />
	<label for="toggle" class="hamburger">
		<div class="top-bun"></div>
		<div class="meat"></div>
		<div class="bottom-bun"></div>
	</label>
	<div class="nav-container">
		<div class="nav-links">
			<a href="#about" on:click|preventDefault={() => goto('/#about')}>About</a>
			<a href="#projects" on:click|preventDefault={() => goto('/#projects')}>Projects</a>
			<a href="#footer" on:click|preventDefault={() => goto('/#footer')}>Contact</a>
		</div>
	</div>
</nav>

<style>
	@import '../styles/nav.scss';
</style>

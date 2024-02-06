<!-- nav.svelte -->

<script>
	import { onMount } from 'svelte';

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
	<input id="toggle" type="checkbox" />
	<label for="toggle" class="hamburger">
		<div class="top-bun"></div>
		<div class="meat"></div>
		<div class="bottom-bun"></div>
	</label>
	<div class="nav-container">
		<div class="links">
			<div class="nav-links">
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#projects">Projects</a>
				<a href="#footerContact">Contact</a>
			</div>

			<div class="social-links">
				<p>Follow me</p>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</a>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
			</div>
		</div>

		<div class="copy-right">©AV. All Rights Reserved. 2024</div>
	</div>
</nav>

<style>
	@import '../styles/nav.scss';
</style>

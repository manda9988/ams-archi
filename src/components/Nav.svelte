<!-- nav.svelte -->

<nav class="navbar">
	<input id="toggle" type="checkbox" />
	<label for="toggle" class="hamburger">
		<div class="top-bun"></div>
		<div class="meat"></div>
		<div class="bottom-bun"></div>
	</label>

	<div class="nav-links">
		<a href="#home">Home</a>
		<a href="#about">About</a>
		<a href="#projects">Projects</a>
		<a href="#contact">Contact</a>
	</div>
	<div class="social-links">
		<a href="#instagram">Instagram</a>
		<a href="#linkedin">LinkedIn</a>
	</div>
	<p class="copy-right">FSA © All Rights Reserved. 2023</p>
</nav>

<style>
	@import '../styles/nav.scss';
</style>

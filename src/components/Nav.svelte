<!-- nav.svelte -->

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
				<a href="#contact">Contact</a>
			</div>
			<div class="social-links">
				<a href="https://instagram.com">INSTAGRAM</a>
				<a href="https://twitter.com">TWITTER</a>
				<a href="https://linkedin.com">LINKEDIN</a>
			</div>
		</div>

		<div class="copy-right">©AV. All Rights Reserved. 2024</div>
	</div>
</nav>

<style>
	@import '../styles/nav.scss';
</style>

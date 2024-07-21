<!-- ArrowDown.svelte -->

<script>
	export let link = '#';
</script>

<a href={link} class="arrow-down">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="30"
		height="30"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="feather feather-chevron-down"
	>
		<polyline points="6 9 12 15 18 9"></polyline>
	</svg>
</a>

<style>
	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.arrow-down {
		cursor: pointer;
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translate(-50%);
		color: rgb(255, 255, 255);
		transition: all 0.6s ease-in-out;
		user-select: none;
	}

	.arrow-down:hover svg {
		animation: blink 2s infinite;
	}
</style>

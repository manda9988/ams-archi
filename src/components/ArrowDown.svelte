<script>
	export let link = '#'; // Permet de personnaliser le lien
</script>

<a href={link} class="arrow-down">
	<span class="fa-arrow">↓</span>
</a>

<style>
	.arrow-down {
		cursor: pointer;
		position: absolute;
		bottom: 16px;
		left: 50%;
		transform: translate(-50%);
		color: rgb(206, 206, 206);
		transition: all 0.6s ease-in-out;
		font-size: 50px;
		font-weight: 100;

		&:hover {
			font-weight: 300;
			color: rgb(230, 230, 230);
		}
	}

	@media (max-width: 768px) {
		.arrow-down {
			font-size: 48px;
		}
	}
	@media (max-width: 550px) {
		.arrow-down {
			font-size: 44px;
		}
	}
</style>

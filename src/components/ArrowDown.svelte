<script>
	export let link = '#'; // Permet de personnaliser le lien
</script>

<a href={link} class="arrow-down"> <i class="fa-solid fa-chevron-down"></i></a>

<style>
	.arrow-down {
		cursor: pointer;
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translate(-50%);
		color: rgb(255, 255, 255);
		transition: all 0.6s ease-in-out;
		user-select: none;
		font-size: 20px;

		&:hover {
			font-size: 24px;
		}
	}

	/* @media (max-width: 768px) {
		.arrow-down {
			bottom: 18px;
			font-size: 18px;
			height: 28px;
			width: 28px;
		}
	}
	@media (max-width: 550px) {
		.arrow-down {
			bottom: 16px;
			font-size: 16px;
			height: 26px;
			width: 26px;
		}
	} */
</style>

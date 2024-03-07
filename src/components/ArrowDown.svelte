<script>
	export let link = '#'; // Permet de personnaliser le lien
</script>

<a href={link} class="arrow-down"> <i class="fa-solid fa-arrow-down"></i></a>

<style>
	.arrow-down {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translate(-50%);
		background: rgb(237, 237, 237);
		color: rgba(62, 62, 62, 0.744);
		transition: all 0.4s ease-in-out;
		user-select: none;
		border-radius: 50%; /* Pour un cercle parfait */
		font-size: 20px;
		height: 30px;
		width: 30px;

		&:hover {
			color: rgb(237, 237, 237);
			background: rgb(62, 62, 62);
		}
	}

	@media (max-width: 768px) {
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
	}
</style>

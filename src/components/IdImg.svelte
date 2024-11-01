<!-- projectIDimg.svelte -->

<script lang="ts">
	import type { Project } from '../lib/types';
	export let project: Project;

	function extractImageName(imageUrl: string): string {
		const imageName = imageUrl.split('/').pop();
		return imageName ? imageName.replace(/%20/g, ' ') : 'Image';
	}
</script>

<section class="idIMG">
	<div class="projects-gallery">
		{#if project.images && project.images.length > 0}
			{#each project.images as imageUrl}
				<div class="project-item">
					<img src={imageUrl} alt={extractImageName(imageUrl)} class="project-image" />
				</div>
			{/each}
		{/if}
	</div>
</section>

<style>
	@import '../styles/idIMG.scss';
</style>

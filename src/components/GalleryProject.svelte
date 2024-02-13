<!-- GalleryProject.svelte -->

<script lang="ts">
	import type { Project } from '../lib/types';
	export let project: Project;
</script>

<section id="proProjects" class="section-projects">
	<div class="projects-gallery">
		{#if project && project.images}
			{#each project.images as imageUrl}
				<div class="project-item">
					<img src={imageUrl} alt="" class="project-image" />
				</div>
			{/each}
		{/if}
	</div>
</section>

<style>
	@import '../styles/galleryProject.scss';
</style>

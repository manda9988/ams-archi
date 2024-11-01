<!-- projectIDimg.svelte -->

<script lang="ts">
	import type { Project } from '../lib/types';
	export let project: Project;
</script>

<section class="idIMG">
	<div class="projects-gallery">
		{#each project.images ?? [] as imageUrl}
			<div class="project-item">
				<img src={imageUrl} alt="" class="project-image" />
			</div>
		{/each}
	</div>
</section>

<style>
	@import '../styles/idIMG.scss';
</style>

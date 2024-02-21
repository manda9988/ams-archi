<!-- projects.svelte -->

<script lang="ts">
	import { projects } from '../lib/projectsData';

	function navigateWithoutSmoothScroll(projectId: string): void {
		window.location.href = `/${projectId}`;
	}
</script>

<section id="projects" class="section-projects">
	<div class="projects-gallery">
		{#each projects as project}
			<a
				href={`/${project.id}`}
				class="project-item"
				on:click|preventDefault={() => navigateWithoutSmoothScroll(project.id)}
			>
				<div class="project-image" style={`background-image: url('${project.imageMain}')`}></div>
				<figure>
					<figcaption>{project.name1}</figcaption>
				</figure>
			</a>
		{/each}
	</div>
</section>

<style>
	@import '../styles/projects.scss';
</style>

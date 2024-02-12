<!-- ProjProjects.svelte -->

<script lang="ts">
	import { projects } from '../lib/projectsData';
	import type { Project } from '../lib/types';

	function getImageUrls(project: Project) {
		return [project.imageUrl1, project.imageUrl2, project.imageUrl3, project.imageUrl4].filter(
			Boolean
		);
	}
</script>

<section id="projects" class="section-projects">
	<h2>Project</h2>

	<div class="projects-gallery">
		{#each projects as project, projectIndex}
			<a href={`/${project.id}`} class="project-item">
				{#each getImageUrls(project) as imageUrl, imgIndex (project.id + '-' + imgIndex)}
					<div class="project-image" style={`background-image: url('${imageUrl}')`}></div>
				{/each}
				<figure>
					<figcaption>{project.name}</figcaption>
				</figure>
			</a>
		{/each}
	</div>
</section>

<style>
	@import '../styles/projprojects.scss';
</style>

<!-- projects.svelte -->

<script>
	import { projects } from '../lib/projectsData';
</script>

<section id="projects" class="section-projects">
	
	<h2>Last Projects</h2>

	<div class="projects-gallery">
		{#each projects as project}
			<a href={`#${project.id}`} class="project-item">
				<div class="project-image" style={`background-image: url('${project.imageUrl}')`}></div>
				<figure>
					<figcaption>{project.name}</figcaption>
				</figure>
			</a>
		{/each}
	</div>
</section>

<style>
	@import '../styles/projects.scss';
</style>

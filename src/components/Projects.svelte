<!-- projects.svelte -->

<script>
	import { projects } from '../lib/projectsData';
</script>

<section class="section-projects">
	<h2>My Projects</h2>

	<div class="projects-gallery">
		{#each projects as project}
			<a
				href={`#${project.id}`}
				class="project-item"
				style={`background-image: url('${project.imageUrl}')`}
			>
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

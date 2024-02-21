<!-- src/routes/[id].svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { projects } from '../../lib/projectsData';
	import GalleryProject from '../../components/GalleryProject.svelte';
	import { onMount } from 'svelte';
	import AboutProjet from '../../components/ProjectIdAbout.svelte';
	import type { Project } from '../../lib/types';

	let project: Project | undefined;

	onMount(() => {
		const projectId = $page.params.id;
		project = projects.find((p) => p.id === projectId) as Project | undefined;
	});
</script>

{#if project}
	<div
		class="projectIdTopHome"
		style={`background: url('${project.imageUrl}') center/cover no-repeat;`}
	>
		<div class="title">
			<h2>{project.nameBis}</h2>
		</div>
		<a href="#about" class="arrow-down">
			<i class="fa-solid fa-arrow-down"></i>
		</a>
	</div>

	<AboutProjet {project} />
	<GalleryProject {project} />
{/if}

<style>
	@import '../../styles/projectIdHome.scss';
</style>

<!-- src/routes/[id].svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { projects } from '../../lib/projectsData';
	import Projects from '../../components/Projects.svelte';
	import { onMount } from 'svelte';
	import ProjAbout from '../../components/ProjAbout.svelte';
	import type { Project } from '../../lib/types';

	let project: Project | undefined;

	onMount(() => {
		const projectId = $page.params.id;
		project = projects.find((p) => p.id === projectId) as Project | undefined;
	});
</script>

{#if project}
	<div
		id="home"
		class="topHome"
		style={`background: url('${project.imageUrl}') center/cover no-repeat;`}
	>
		<div class="title">
			<h1>{project.name}</h1>
			<h2>{project.nameBis}</h2>
		</div>
		<a href="#about" class="arrow-down">
			<i class="fa-solid fa-arrow-down"></i>
		</a>
	</div>

	<ProjAbout {project} />
	<Projects />
{/if}

<style>
	@import '../../styles/home.scss';
</style>

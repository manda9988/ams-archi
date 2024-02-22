<!-- src/routes/[id].svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { projects } from '../../lib/projectsData';
	import { onMount } from 'svelte';
	import type { Project } from '../../lib/types';
	import ProjectIdAbout from '../../components/ProjectIdAbout.svelte';
	import ProjectIDimg from '../../components/ProjectIDimg.svelte';
	import ArrowDown from '../../components/ArrowDown.svelte';

	let project: Project | undefined;

	onMount(() => {
		const projectId = $page.params.id;
		project = projects.find((p) => p.id === projectId) as Project | undefined;
	});
</script>

{#if project}
	<div
		class="idHome"
		style={`background: url('${project.imageMain}') center/cover no-repeat;`}
	>
		<div class="title">
			<h2>{project.name1}</h2>
			<h3>{project.name2}</h3>
		</div>
		<ArrowDown link="#about" />
	</div>

	<ProjectIdAbout {project} />
	<ProjectIDimg {project} />
{/if}

<style>
	@import '../../styles/idHome.scss';
</style>

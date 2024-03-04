<!-- src/routes/[id].svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { setupHeightAdjustment } from '../../lib/adjustHeight';
	import { projects } from '../../lib/projectsData';
	import About from '../../components/About.svelte';
	import IdImg from '../../components/IdImg.svelte';
	import ArrowDown from '../../components/ArrowDown.svelte';
	import type { Project } from '../../lib/types';

	let project: Project | undefined;

	onMount(() => {
		const projectId = $page.params.id;
		project = projects.find((p) => p.id === projectId);

		const cleanup = setupHeightAdjustment();
		return cleanup;
	});
</script>

{#if project}
	<div class="home" style={`background: url('${project.imageMain}') center/cover no-repeat;`}>
		<div class="title">
			<h2>{project.name1}</h2>
			<h3>{project.name2}</h3>
		</div>
		<ArrowDown link="#about" />
	</div>

	<About projectId={$page.params.id} />
	<IdImg {project} />
{/if}

<style>
	@import '../../styles/home.scss';
</style>

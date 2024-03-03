<!-- about.svelte -->

<script lang="ts">
	import { about, projects } from '../lib/projectsData';
	import type { Project } from '../lib/types';

	export let projectId: string | undefined = undefined;

	let content: Project = about;

	if (projectId) {
		const foundProject = projects.find((p) => p.id === projectId);
		content = foundProject ?? about;
	}
</script>

<div id="about" class="about">
	<div class="para-about">
		<div class="paraIntro">
			<p>{content.description1}</p>
		</div>
		<div class="paraUnder">
			{#if content?.descriptions}
				{#each content.descriptions as description}
					<p>{description}</p>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style>
	@import '../styles/about.scss';
</style>

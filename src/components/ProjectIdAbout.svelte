<!-- ProjectIdAbout.svelte -->

<script lang="ts">
	import type { Project } from '../lib/types';

	export let project: Project;
</script>

<div class="projectIdAbout">
	<div class="para-about">
		<div class="paraIntro">
			<p>{project.description}</p>
		</div>

		<div class="paraUnder">
			<p>{project.descriptionBis}</p>
			<p>{project.descriptionTer}</p>
		</div>
	</div>
</div>

<style>
	@import '../styles/projectIdAbout.scss';
</style>

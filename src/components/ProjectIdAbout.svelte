<!-- ProjectIdAbout.svelte -->

<script lang="ts">
	import type { Project } from '../lib/types';

	export let project: Project;
</script>

<div id="projectIdAbout" class="projectIdAbout">
	<div class="para-about">
		<div class="paraIntro">
			<p>{project.description1}</p>
		</div>

		<div class="paraUnder">
			<p>{project.description2}</p>
			<p>{project.description3}</p>
		</div>
	</div>
</div>

<style>
	@import '../styles/projectIdAbout.scss';
</style>

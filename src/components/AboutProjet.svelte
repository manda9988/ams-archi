<!-- AboutProjet.svelte -->

<script lang="ts">
	import type { Project } from '../lib/types';

	export let project: Project;
</script>

<div id="about" class="about">
	<div class="para-about">
		<div class="paraIntro">
			<p>{project.description}</p>
		</div>

		<div class="paraUnder">
			<div class="paraLeft">
				<p>{project.descriptionBis}</p>
				<p>{project.descriptionBis}</p>
			</div>

			<div class="paraRight">
				<p>{project.descriptionTer}</p>
				<p>{project.descriptionTer}</p>
			</div>
		</div>
	</div>
</div>

<style>
	@import '../styles/about.scss';
</style>

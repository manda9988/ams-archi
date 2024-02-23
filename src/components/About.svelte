<!-- about.svelte -->

<script lang="ts">
	import { about, projects } from '../lib/projectsData'; // Ajustez le chemin selon votre structure
	import type { Project } from '../lib/types';

	export let projectId: string | undefined = undefined;

	let project: Project | undefined;
	let content = about; // Utiliser about comme contenu par défaut

	if (projectId) {
		project = projects.find((p) => p.id === projectId);
		if (project) {
			content = {
				description1: project.description1,
				// Utilisez l'opérateur de coalescence nulle pour fournir une valeur par défaut
				description2: project.description2 ?? 'Pas de description disponible.',
				description3: project.description3 ?? 'Pas de description disponible.'
			};
		}
	}
</script>

<div class="about">
	<div class="para-about">
		<div class="paraIntro">
			<p>{content.description1}</p>
		</div>
		<div class="paraUnder">
			<p>{content.description2}</p>
			<p>{content.description3}</p>
		</div>
	</div>
</div>

<style>
	@import '../styles/about.scss';
</style>

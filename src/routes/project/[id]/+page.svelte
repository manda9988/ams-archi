<!-- src/routes/project/[id].svelte -->
<script lang="ts">
	import type { Project } from '../../../app.d.ts';
	import { projects } from '../../../lib/projectsData';
	import About from '../../../components/About.svelte';
	import Projects from '../../../components/Projects.svelte';

	export let project: Project;

	export async function load({ params }: { params: { id: string } }) {
		const foundProject = projects.find((p) => p.id === params.id);
		if (foundProject) {
			project = foundProject;
			return { props: { project } };
		}
		throw new Error('Projet non trouvé');
	}
</script>

<div class="topHome" style={`background-image: url('${project.imageUrl}')`}>
	<div class="title">
		<h1>{project.name}</h1>
		<h2>{project.description}</h2>
	</div>
</div>

<About />
<Projects />

<style>
	@import '../../../styles/home.scss';
</style>

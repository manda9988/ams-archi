<!-- src/routes/[id].svelte -->
<script>
	import { page } from '$app/stores';
	import { projects } from '../../lib/projectsData';
	import About from '../../components/About.svelte';
	import Projects from '../../components/Projects.svelte';
	import { onMount } from 'svelte';

	// Utilisation de JSDoc pour spécifier le type de `project`
	/** @type {{ id: string, name: string, nameBis: string, description: string, descriptionBis: string, imageUrl: string, imageUrl2?: string, imageUrl3?: string, imageUrl4?: string, imageUrl5?: string, imageUrl6?: string } | undefined} */
	let project;

	onMount(() => {
		const projectId = $page.params.id; // Assurez-vous que cela correspond à la façon dont vos routes sont définies
		project = projects.find((p) => p.id === projectId);
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

	<About />
	<Projects />
{/if}

<style>
	@import '../../styles/home.scss';
</style>

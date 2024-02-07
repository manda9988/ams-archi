// src/app.d.ts
export type Project = {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
};

// Assurez-vous de déclarer le type global si nécessaire.
declare global {
	namespace App {
		interface Project extends Project {} // Etendre l'interface si vous avez déjà une déclaration globale.
	}
}

export {};

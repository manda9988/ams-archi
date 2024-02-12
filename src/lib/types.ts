// src/lib/types.ts
export interface Project {
	id: string;
	name: string;
	nameBis: string;
	description: string;
	descriptionBis?: string;
	descriptionTer?: string;
	imageUrl: string;
	images?: string[]; // Tableau d'URLs d'images supplémentaires
}

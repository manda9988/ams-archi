// src/lib/types.ts
export interface Project {
	id: string;
	name1: string;
	name2: string;
	description1: string;
	description2?: string;
	description3?: string;
	imageMain: string;
	images?: string[];
}

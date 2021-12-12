interface ModLoader {
	id: string;
	primary: boolean;
}

interface Minecraft {
	version: string;
	modLoaders?: ModLoader[];
}

export interface ExternalDependency {
	name: string;
	url: string;
	sha: string;
}

export interface ModpackManifestFile {
	projectID: number;
	fileID: number;
	required: boolean;
}

export interface ModpackManifest {
	name: string;
}
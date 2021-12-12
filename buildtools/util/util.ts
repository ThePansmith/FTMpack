/**
 * Returns artifact name body depending on environment variables.
 * Mostly intended to be called by CI/CD.
 */
export function makeArtifactNameBody(baseName: string): string {
	// If the tag is provided by CI, simply just glue it to the base name.
	if (process.env.GITHUB_TAG) {
		return `${baseName}-${process.env.GITHUB_TAG}`;
	}
	// If SHA is provided and the build isn't tagged, append both the branch and short SHA.
	else if (process.env.GITHUB_SHA && process.env.GITHUB_REF && process.env.GITHUB_REF.startsWith("refs/heads/")) {
		const shortCommit = process.env.GITHUB_SHA.substr(0, 7);
		const branch = /refs\/heads\/(.+)/.exec(process.env.GITHUB_REF);
		return `${baseName}-${branch[1]}-${shortCommit}`;
	} else {
		return baseName;
	}
}
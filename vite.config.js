import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
	const isBuild = command === "build";

	return {
		server: {
			open: true,
			middlewareMode: false,
		},
		resolve: {
			alias: {
				"#": resolve(__dirname, "./tests"),
				"@": resolve(__dirname, "./src"),
			},
		},
		build: {
			outDir: "./dist/lib",
			lib: {
				entry: resolve(__dirname, "src/index.js"),
				name: "dai",
				formats: ["es", "cjs", "umd"],
				fileName: "dai",
			},
			emptyOutDir: false,
			minify: true,
			sourcemap: false,
		},
	};
});

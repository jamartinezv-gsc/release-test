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
  };
});

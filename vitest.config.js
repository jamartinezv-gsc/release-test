import { configDefaults, defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      root: ".",
      test: {
        environment: "jsdom",
        include: ["tests/**/*.test.js"],
        exclude: [...configDefaults.exclude, "tests/e2e/**"],
        silent: true,
        isolate: true,
        coverage: {
          provider: "v8", // or "istanbul"
          reporter: ["text", "html"],
          reportsDirectory: "./test-results/coverage",
          include: ["src/**"],
          exclude: ["src/cfg/**", "src/examples/**", "tests/mocks/**", "src/trace/**"],
        },
      },
    }),
  ),
);

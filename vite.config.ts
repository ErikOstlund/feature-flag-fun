import { fileURLToPath } from "node:url";
import babel, { defineRolldownBabelPreset } from "@rolldown/plugin-babel";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Keep in sync with compilerOptions.paths in tsconfig.app.json
const SRC_ROOT_FOLDERS = [
  "assets",
  "components",
  "features",
  "routes",
  "styles",
  "theme",
  "types",
  "utils",
];

// Babel only runs on modules that mention styled-components
const styledComponentsPreset = defineRolldownBabelPreset({
  preset: () => ({
    plugins: [["babel-plugin-styled-components", { pure: true }]],
  }),
  rolldown: { filter: { code: /styled-components/ } },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [styledComponentsPreset] })],
  resolve: {
    alias: Object.fromEntries(
      SRC_ROOT_FOLDERS.map((folder) => [
        folder,
        fileURLToPath(new URL(`./src/${folder}`, import.meta.url)),
      ])
    ),
  },
});

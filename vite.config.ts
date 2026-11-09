import { fileURLToPath } from "node:url";
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: Object.fromEntries(
      SRC_ROOT_FOLDERS.map((folder) => [
        folder,
        fileURLToPath(new URL(`./src/${folder}`, import.meta.url)),
      ])
    ),
  },
});

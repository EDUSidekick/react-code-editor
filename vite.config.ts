import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  resolve: {
    alias: {
      "@edusidekick/react-code-editor": resolve(
        __dirname,
        "packages/react-code-editor/src"
      ),
      "@edusidekick/react-code-editor/style.css": resolve(
        __dirname,
        "packages/react-code-editor/src/styles.css"
      ),
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  resolve: {
    alias: {
      "@edusidekick/react-code-editor": "/packages/react-code-editor/src",
      "@edusidekick/react-code-editor/style.css":
        "/packages/react-code-editor/src/styles.css",
    },
  },
});

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), tsConfigPaths()],
  }
})

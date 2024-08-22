import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@app", replacement: "/src/app" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@features", replacement: "/src/features" },
      { find: "@entities", replacement: "/src/entities" },
      { find: "@shared", replacement: "/src/shared" },
    ],
  },
});

import { defineConfig, InlineConfig, UserConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: "./src/app/setupTests.ts",
  },
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
} as VitestConfigExport);

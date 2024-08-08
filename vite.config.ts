import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/public/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@mocks", replacement: "/src/mocks" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@stores", replacement: "/src/stores" },
      { find: "@stories", replacement: "/src/stories" },
      { find: "@tests", replacement: "/src/tests" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@datas", replacement: "/src/datas" },
      { find: "@interfaces", replacement: "/src/interfaces" },
      { find: "@reducers", replacement: "/src/reducers" },
      { find: "@api", replacement: "/src/api" },
    ],
  },
});

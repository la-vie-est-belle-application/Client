import { FlatCompat } from "@eslint/eslintrc";
import boundariesPlugin from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const settings = [
  ...compat.extends("next", "next/core-web-vitals"),

  {
    files: ["app/**/*.{js,jsx,ts,tsx}", "src/**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules/**"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      import: importPlugin,
      boundaries: boundariesPlugin,
    },
    rules: {
      "import/no-unresolved": "error",
      "import/order": "warn",
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: "app",
              allow: [
                "app",
                "views",
                "widgets",
                "features",
                "entities",
                "shared",
              ],
            },
            {
              from: "views",
              allow: ["widgets", "features", "entities", "shared"],
            },
            {
              from: "widgets",
              allow: ["widgets", "features", "entities", "shared"],
            },
            { from: "features", allow: ["features", "entities", "shared"] },
            { from: "entities", allow: ["entities", "shared"] },
            { from: "shared", allow: [] },
          ],
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
      "boundaries/elements": [
        { type: "app", pattern: "app/*" },
        { type: "views", pattern: "views/*" },
        { type: "widgets", pattern: "widgets/*" },
        { type: "features", pattern: "features/*" },
        { type: "entities", pattern: "entities/*" },
        { type: "shared", pattern: "shared/*" },
      ],
    },
  },
];

export default settings;

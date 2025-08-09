import svelte from "eslint-plugin-svelte"
import svelteConfig from "./svelte.config.js"
import js from "@eslint/js"
import ts from "typescript-eslint"
import globals from "globals"
import prettier from "eslint-config-prettier"
import storybook from "eslint-plugin-storybook"
import { includeIgnoreFile } from "@eslint/compat"
import { fileURLToPath } from "node:url"

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url))

export default ts.config(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Style
      "no-undef": "off",
      indent: ["error", 2, { "SwitchCase": 1 }],
      quotes: ["warn", "double"],
      semi: ["warn", "never"],

      // Good Practices
      curly: ["warn", "all"],
      "no-console": "warn",
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "warn",
      "func-style": ["error", "expression"],
      "prefer-arrow-callback": "warn",

      // Typescript
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "^_$",
          "argsIgnorePattern": "^_$",
          "ignoreRestSiblings": true
        }
      ]

    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
  storybook.configs["flat/recommended"]
)

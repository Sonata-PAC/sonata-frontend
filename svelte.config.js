import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      // this will match a file
      "my-file": "path/to/my-file.js",

      // this will match a directory and its contents
      "@/*": "./src/*",
      "atoms/*": "./src/lib/components/atoms/*",
      "molecules/*": "./src/lib/components/molecules/*",
      "organisms/*": "./src/lib/components/organisms/*",
      "templates/*": "./src/lib/components/templates/*",
      "images/*": "./src/lib/images/*",
      "hooks/*": "./src/lib/hooks/*",

      // an alias ending /* will only match
      // the contents of a directory, not the directory itself
      "my-directory/*": "path/to/my-directory/*",
    },
  },
}

export default config

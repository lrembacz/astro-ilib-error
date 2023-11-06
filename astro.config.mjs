import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

import excludeModulePlugin from "./plugins/exclude-module-plugin.js";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [excludeModulePlugin()],
    external: ['ilib', './lib/ilib-qt.js', './lib/ilib-rhino.js', './lib/ilib-ringo.js']
  },
});
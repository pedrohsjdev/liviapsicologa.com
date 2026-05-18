import node from "@astrojs/node";
// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});

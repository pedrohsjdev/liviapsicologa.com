import vercel from "@astrojs/vercel/serverless";
// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});

import vercel from "@astrojs/vercel/serverless";
// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.liviapsicologa.com.br",
  output: "server",
  adapter: vercel(),
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      PUBLIC_CAL_LINK: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
});

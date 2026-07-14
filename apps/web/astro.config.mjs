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

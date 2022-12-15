import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    solidPlugin(),
    federation({
      name: "solid-remote",
      filename: "remoteEntry.js",
      exposes: { "./web-components": "./src/index.tsx" },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});

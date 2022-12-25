import { defineConfig } from "vite";
import { resolve } from "path";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.tsx"),
      name: "SolidLeaflet",
      fileName: "solid-leaflet",
    },
    rollupOptions: {
      external: ["solid-js", "leaflet"],
    },
  },
});

import { resolve } from "path";
import { defineConfig } from "vite";

import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "video_quiz",
    },
    rollupOptions: {
      external: [],
      output: { globals: {} },
    },
  },
  plugins: [dts({rollupTypes: true})],
});

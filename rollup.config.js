import merge from "deepmerge";
import { createSpaConfig } from "@open-wc/building-rollup";
import copy from "rollup-plugin-copy";

const baseConfig = createSpaConfig({
  developmentMode: process.env.ROLLUP_WATCH === "true",
  injectServiceWorker: false
});

export default merge(baseConfig, {
  input: "./index.html",
  output: {
    dir: "./docs"
  },
  plugins: [
    copy({
      targets: [
        // { src: 'src/index.html', dest: 'dist/public' },
        // { src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'docs/public/fonts' },
        { src: "assets/**/*", dest: "docs/assets" }
      ]
    })
  ]
});

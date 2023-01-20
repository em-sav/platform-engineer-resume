import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';
import copy from "rollup-plugin-copy-assets";

const baseConfig = createSpaConfig({
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false
});

export default merge(baseConfig, {
  input: './index.html',
  output: {
    dir: './docs'
  },
  plugins: [
    copy({
      assets: [
        "../../assets"
      ],
    }),
  ],
});
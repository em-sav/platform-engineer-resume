import { copy } from "@web/rollup-plugin-copy";
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import nodeResolve from "@rollup/plugin-node-resolve";


export default {
  output: {
    dir: "./docs",
  },
  plugins: [
    html({
      input: 'index.html',
    }),
    copy({ patterns: 'assets/**/*'}),
    nodeResolve()
  ]
};

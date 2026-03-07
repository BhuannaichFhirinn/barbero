import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named',
    },
    // Strip comments only — consumers run their own bundler with full tree-shaking context
    plugins: [resolve(), commonjs(), terser({ compress: false, mangle: false })],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'es',
    },
    // Strip comments only — consumers run their own bundler with full tree-shaking context
    plugins: [resolve(), commonjs(), terser({ compress: false, mangle: false })],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'Barbero',
      exports: 'named',
    },
    // Full minification — UMD targets direct browser <script> use with no bundler
    plugins: [resolve(), commonjs(), terser()],
  },
];

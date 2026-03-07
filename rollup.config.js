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
    // No minification — consumers bundle and minify themselves
    plugins: [resolve(), commonjs()],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'es',
    },
    // No minification — consumers bundle and minify themselves
    plugins: [resolve(), commonjs()],
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

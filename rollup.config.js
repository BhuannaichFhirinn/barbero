import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    plugins: [resolve(), commonjs(), terser()],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'es',
    },
    plugins: [resolve(), commonjs(), terser()],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'Barbero',
    },
    plugins: [resolve(), commonjs(), terser()],
  },
];

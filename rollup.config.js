// Rollup plugins
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      mainFields: ['module', 'main', 'jsnext:main','browser'],
      // module: true,
      // jsnext: true,
      // main: true,
      // browser: true,
      extensions: ['.js']
    }),
    commonjs(),
    eslint({
      exclude: [
        'node_modules/**',
        'dist/**'
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    terser()
  ],
  output: [
    {
      name: 'vueMediaQueries',
      file: pkg.main,
      format: 'umd',
      moduleName: 'vueMediaQueries',
      exports: 'named',
      sourceMap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
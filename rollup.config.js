// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

let pkg = require('./package.json');

export default {
  entry: 'src/index.js',
  plugins: [
    resolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true,
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
  ],
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'vueMediaQueries',
      exports: 'named',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
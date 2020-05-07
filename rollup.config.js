import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    url({ exclude: ['**/*.svg'] }),
    resolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],
      extensions
    }),
    commonjs(),
    babel({
      exclude: [
        "node_modules/**",
        '**/*.json'
      ],
      extensions: extensions
    }),
  ]
}

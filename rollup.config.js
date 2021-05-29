/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: packageJson.types,
      format: 'es',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    dts(),
    typescript(),
    postcss({
      extensions: ['.css'],
    }),
  ],
}

import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/status-indicators.js',
    format: 'amd'
  },
  plugins: [
    vue(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      mainFields: ['browser', 'jsnext', 'module', 'main'],
      include: 'node_modules/**',
      preferBuiltins: true
    }),
    filesize(),
    terser()
  ]
}
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import filesize from 'rollup-plugin-filesize'
import requireContext from 'rollup-plugin-require-context'
import postcssImport from 'postcss-import'
import postcssCustomMedia from 'postcss-custom-media'
import postcssNested from 'postcss-nested'
import postcssSortMediaQueries from 'postcss-sort-media-queries'
import cssnano from 'cssnano'
import babel from 'rollup-plugin-babel'
import font from "rollup-plugin-font";

const production = !process.env.ROLLUP_WATCH
const port = 8080

const postCssPlugins = [
  postcssImport(),
  postcssCustomMedia(),
  postcssNested(),
  postcssSortMediaQueries(),
  production && cssnano(),
]

export default {
  input: 'packages/index.js',
  output: {
    dir: 'dist/assets',
    entryFileNames: 'app.js',
    format: 'es',
    // sourcemap: !production ? 'inline' : false,
    // name: 'myLib',
  },
  external: ['vue', 'element-ui'],
  plugins: [
    // font({
    //   "include": [
		// 		"node_modules/element-ui/**" //这里根据自己使用的库修改
		// 	],
		// 	"svg":"node_modules/element-ui/**",
		// 	"outDir":"./dist/webfonts"
    // }),
    json(),
    alias({
      entries: [{ find: '@', replacement: __dirname + '/src/' }],
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    image(),
    postcss({ extract: 'app.css', plugins: postCssPlugins }),
    requireContext(),
    // nodeResolve({
    //   jsnext: true,
    //   main: true,
    //   browser: true,
    // }),
    commonjs(),
    vue({ css: false }),
    // replace({
    //   'process.env.NODE_ENV': production ? '"production"' : '"development"',
    //   preventAssignment: true,
    // }),
    // esbuild({
    //   // minify: production,
    //   target: 'es2015',
    // }),
    !production &&
      serve({
        open: true,
        contentBase: 'dist',
        historyApiFallback: true,
        port,
      }),
    !production && livereload({ watch: 'dist' }),
    production && filesize(),
  ],
  watch: {
    clearScreen: true,
  },
}

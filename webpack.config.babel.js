import 'babel-polyfil'
import path from 'path'
import webpack from 'webpack'

const DEBUG = !process.argv.includes('--release')
const VERBOSE = !process.argv.includes('--verbose')

export default {
  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE
  },

  entry: './src/app.js'
  output: {
    publicPath: '/',
    sourcePrefix: '',
    path: path.join(__dirname, 'dist')
    filename: 'app.js'
  },
  target: 'electron-main',

  devtool: DEBUG ? 'cheap-module-eval-sourcemap': false,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: [path.resolve(__dirname, 'src')], loader: 'babel' },
    ],
  },
}
var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var path = require('path')
var distDir = path.join(__dirname, '../dist')

var outputFile = 'vue-montase-slider'
var globalName = 'VueMontaseSlider'

module.exports = merge(base, {
  output: {
    path: distDir,
    filename: outputFile + '.common.js',
    library: 'vue-montase-slider',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: {
    vue: 'vue'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),
  ],
})

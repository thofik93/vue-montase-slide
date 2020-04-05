var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var path = require('path')
var distDir = path.join(__dirname, '../dist')

var outputFile = 'vue-montase-slide'
var globalName = 'VueMontaseSlide'

module.exports = merge(base, {
  output: {
    path: distDir,
    filename: outputFile + '.common.js',
    library: 'vue-montase-slide',
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

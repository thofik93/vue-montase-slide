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
    library: globalName,
    libraryTarget: 'umd',
  },
  devtool: 'eval-source-map',
})

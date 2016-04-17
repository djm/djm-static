var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  entry: [
    './js/app.js',
    './styles/main.scss'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '../assets/static/compiled'),
    publicPath: '/static/compiled/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!sass?sourceMap!postcss')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  postcss: function () {
    return [autoprefixer]
  },
  plugins: [
    new ExtractTextPlugin('main.css', {
      allChunks: true,
      publicPath: '/static/compiled/'
    })
  ]
}

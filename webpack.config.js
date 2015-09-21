var path = require('path');
var webpack = require('webpack');
var WebpackOnBuildPlugin = require('on-build-webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var childProcess = require('child_process');

module.exports = {
  target: 'web',
  debug: false,
  devtool: 'inline-source-map',
  entry: {
    app: [
      './client_app/Index'
    ]
  },
  output: {
    path: path.join(__dirname, 'themes/phase/source/js'),
    publicPath: '/',
    filename: '[name].js'
  },
  jshint: {
    esnext: true
  },
  plugins: [
    new WebpackOnBuildPlugin(function (stats) {
      childProcess.exec('hexo generate');
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new webpack.optimize.DedupePlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' },
      { test: /\.scss$/, loader: 'style!css!scss' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.gif(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.html(\?v=\d+\.\d+\.\d+)?$/, exclude: /node_modules/, loader: 'file?name=[path][name].[ext]&context=src' }
    ]
  }
};

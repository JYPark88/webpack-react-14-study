var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    tutorial: ['./app/js/main']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new Clean(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.jsx$|\.js$/,
      loader: 'eslint-loader',
      include: path.join(__dirname, 'app/js'),
      exclude: /bundle\.js$/
    }],
    loaders: [{
      test: /\.jsx$|\.js$/,
      include: path.join(__dirname, 'app/js'),
      exclude: /node_modules/,
      loader: "babel"
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
}

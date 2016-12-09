const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');

const loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
}, {
  test: /\.json$/,
  loader: 'json-loader',
}, {
  test: /\.gif$/,
  loader: 'url-loader?mimetype=image/png',
}, {
  test: /\.less$/,
  loader: 'style-loader!css-loader!less-loader',
}, {
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader',
}, {
  test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
  loader: 'url-loader',
}];

const postcss = $webpack => [
  postcssImport({ addDependencyTo: $webpack }),
  postcssUrl('inline'),
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('.', 'src', 'entry.jsx'),
  resolve: {
    root: path.resolve('.', 'src'),
    modulesDirectories: ['node_modules', path.resolve('.', 'node_modules')],
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      react: path.resolve('.', 'node_modules', 'react'),
    },
  },
  output: {
    path: path.resolve('.', 'build'),
    filename: '[name].js',
    publicPath: '',
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'bluebird',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
    }),
  ],
  module: { loaders },
  postcss,
};

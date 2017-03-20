const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');

const DEV = process.env.NODE_ENV === 'development';

const loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
}, {
  test: /\.json$/,
  loader: 'json-loader',
}, {
  test: /\.md$/,
  loader: 'raw-loader',
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
},
];

const postcss = () => [
  postcssImport(),
  postcssUrl('inline'),
];

const config = {
  target: 'web',
  devtool: 'source-map',
  entry: path.resolve('.', 'src', 'entry'),
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
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.ProvidePlugin({
      Promise: 'bluebird',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('.', 'src', 'index.html'),
      inject: 'body',
    }),
  ],
  module: { loaders },
  postcss,
};


if (!DEV) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }));
}


module.exports = config;

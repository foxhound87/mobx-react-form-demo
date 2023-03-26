const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const DEV = process.env.NODE_ENV === 'development';

const rules = [{
  test: /\.(ts|tsx)$/,
  use: ["ts-loader"],
}, /*{
  test: /\.json$/,
  use: [{ loader: "json-loader", }],
}, {
  test: /\.gif$/,
  use: [{ loader: "url-loader?mimetype=image/png", }],
},*/ {
  test: /\.md$/,
  use: [{ loader: "raw-loader", }],
}, {
  test: /\.less$/,
  use: ["style-loader", "css-loader", "less-loader"],
}, {
  test: /\.css$/,
  use: ["style-loader", "css-loader", "postcss-loader"],
}, /*{
  test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
  use: [{ loader: "url-loader", }],
},*/
];

const config = {
  mode: DEV ? "development" : "production",
  target: 'web',
  devtool: 'source-map',
  entry: path.resolve('.', 'src', 'entry'),
  optimization: {
    minimize: !DEV,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true
        }
      }),
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve('.', 'node_modules')],
    extensions: ['.js', '.ts', '.tsx', '.json', '.css'],
    alias: {
      react: path.resolve('.', 'node_modules', 'react'),
    },
  },
  output: {
    path: path.resolve('.', 'build'),
    filename: '[name].js',
    // publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('.', 'src', 'index.html'),
      inject: 'body',
    }),
  ],
  module: { rules },
};

module.exports = config;

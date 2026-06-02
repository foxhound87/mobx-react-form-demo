const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const DEV = process.env.NODE_ENV === 'development';

const rules = [{
  oneOf: [{
    resourceQuery: /raw/,
    type: 'asset/source',
  }, {
    test: /\.(ts|tsx)$/,
    use: [{
      loader: "ts-loader",
      options: {
        transpileOnly: true,
        compilerOptions: {
          module: "esnext",
        },
      },
    }],
  }],
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
      mobx: path.resolve('.', 'node_modules', 'mobx'),
      'mobx-react': path.resolve('.', 'node_modules', 'mobx-react'),
    },
  },
  output: {
    path: path.resolve('.', 'build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: 'auto',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('.', 'src', 'index.html'),
      inject: 'body',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'google*.html', to: '.', context: path.resolve('.'), noErrorOnMissing: true },
      ],
    }),
  ],
  module: { rules },
};

module.exports = config;

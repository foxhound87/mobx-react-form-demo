const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const DEV = process.env.NODE_ENV === "development";

// Resolve mobx-react-form to submodule source dir first (src/ has no package.json, so exports field is irrelevant), fallback to npm package
const mrfSrc = fs.existsSync(
  path.resolve(".", "modules", "mobx-react-form", "src"),
)
  ? path.resolve(".", "modules", "mobx-react-form", "src")
  : path.resolve(".", "node_modules", "mobx-react-form", "lib");

// Resolve mobx-react-form-devtools to submodule source first, fallback to npm package src
const mrfDevtoolsSrc = fs.existsSync(
  path.resolve(".", "modules", "mobx-react-form-devtools", "src"),
)
  ? path.resolve(".", "modules", "mobx-react-form-devtools", "src")
  : path.resolve(".", "node_modules", "mobx-react-form-devtools", "src");

const rules = [
  {
    oneOf: [
      {
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              compilerOptions: {
                module: "esnext",
              },
            },
          },
        ],
      },
    ],
  },
  {
    test: /\.md$/,
    use: [{ loader: "raw-loader" }],
  },
  {
    test: /\.less$/,
    use: ["style-loader", "css-loader", "less-loader"],
  },
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader", "postcss-loader"],
  },
];

const config = {
  mode: DEV ? "development" : "production",
  target: "web",
  devtool: "source-map",
  entry: path.resolve(".", "src", "entry"),
  optimization: {
    minimize: !DEV,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true,
        },
      }),
    ],
  },
  resolve: {
    modules: ["node_modules", path.resolve(".", "node_modules")],
    extensions: [".js", ".ts", ".tsx", ".json", ".css"],
    alias: {
      react: path.resolve(".", "node_modules", "react"),
      mobx: path.resolve(".", "node_modules", "mobx"),
      "mobx-react": path.resolve(".", "node_modules", "mobx-react"),
      "mobx-react-form$": mrfSrc,
      "mobx-react-form-devtools": mrfDevtoolsSrc,
    },
  },
  output: {
    path: path.resolve(".", "build"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    publicPath: "auto",
  },
  devServer: {
    hot: true,
    liveReload: true,
    static: {
      directory: path.resolve('.', 'public'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(".", "src", "index.html"),
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "google*.html",
          to: ".",
          context: path.resolve("."),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  module: { rules },
};

module.exports = config;

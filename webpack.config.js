const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devServer: {
    host: "0.0.0.0",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: false,
            },
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
    ],
  },
  mode: "production",
  plugins: [
    new HTMLWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};

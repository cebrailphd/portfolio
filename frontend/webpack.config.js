const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin({ filename: "../css/[name].css" })],
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: "source-map",
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".css", ".js"],
    modules: ["node_modules"],
  },
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
};

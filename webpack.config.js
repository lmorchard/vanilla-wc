const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDev = process.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: "source-map",
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html.ejs" 
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"]
      }
    ],
  },
};

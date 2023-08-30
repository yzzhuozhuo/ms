// webpack.config.js

const path = require("path");

module.exports = {
  mode: "development", // production 会对代码进行压缩和混淆
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
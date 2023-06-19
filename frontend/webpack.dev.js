const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 7001,
    client: {
      overlay: {
        // errors: false,
        // errors: true,
        warnings: true,
        runtimeErrors: true,
      },
    },
    compress: true,
  },
});

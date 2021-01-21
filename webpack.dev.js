const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common,{
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "192.168.0.129",
    port: 8080
  }

})

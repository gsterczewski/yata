const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "index.bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      alias: {
        assets: path.resolve(__dirname,"assets"),
        components: path.resolve(__dirname,"src/components"),
        hooks: path.resolve(__dirname,"src/hooks")
      }
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
              test: /\.(png|jp(e*)g|svg)$/,  
              use: [{
                  loader: 'url-loader',
                  options: { 
                      limit: 8000, // Convert images < 8kb to base64 strings
                      name: 'images/[hash]-[name].[ext]'
                  } 
              }]
            }
        ]},
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: "./public/index.html"
        })
      ]
  }
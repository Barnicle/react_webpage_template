const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "./dist",
    port: 3000,
    hot: true,
    open: true,
    clientLogLevel: "silent",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "main-[hash:8].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: path.resolve(__dirname, "src/images/"),
              outputPath: "dist/",
              useRelativePaths: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: (resourcePath, context) => {
          //       return path.relative(path.dirname(resourcePath), context) + "/";
          //     }
          //   }
          // },
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};

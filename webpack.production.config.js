const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./app/index"],

  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/public/",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: [path.resolve(__dirname, "app")],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                [
                  "@babel/preset-env",
                  { targets: { browsers: "last 2 versions" } }
                ],
                "@babel/preset-typescript",
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "react-hot-loader/babel"
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "autoprefixer-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],

  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: {
      Images: path.resolve(__dirname, "app/assets/images/")
    }
  }
};

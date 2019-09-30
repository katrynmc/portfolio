const path = require("path");
const webpack = require("webpack");

const ENV = process.env.NODE_ENV || "development";

module.exports = {
  entry: ["./app/index"],

  output: {
    path: path.resolve(__dirname, "build"),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    publicPath: "/build/",
    // the url to the output directory resolved relative to the HTML page
    filename: "bundle.js"
    // the filename template for entry chunks
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
                "@babel/preset-react"
              ],
              plugins: [
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: ENV !== "development" ? "source-map" : "eval-source-map",

  devServer: {
    compress: true,
    contentBase: ["./build"],
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    inline: true,
    port: 8080
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    alias: {
      Images: path.resolve(__dirname, "app/assets/images"),
      Config: path.resolve(__dirname, "app/config"),
      Components: path.resolve(__dirname, "app/components"),
      Styles: path.resolve(__dirname, "app/assets/styles")
    }
  }
};

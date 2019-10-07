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
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader"
            }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
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

   // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
  //   externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // },

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
    modules: [
      path.resolve(__dirname, "app"),
      path.resolve(__dirname, "node_modules")
    ],
  }
};

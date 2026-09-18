const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  devtool: "sourcemap",
  output: {
    filename: "openmrs-esm-icrc-overrides.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "system"
  },
  module: {
    rules: [
      {
        parser: {
          system: false
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true
  },
  externals:[/^@openmrs\/esm/],
  plugins: []
};

const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./lib/client'),
      path.resolve('./node_modules')
    ],
  },
  entry: ["babel-polyfill", "./lib/client/index.js"],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "react",
              "env",
              "stage-2"
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
    ]
  }
};
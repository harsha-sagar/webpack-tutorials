const webpack = require("webpack");
module.exports = {
  entry: ['./app.js', './util.js'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'jshint-loader',
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        jshint: {
          camelcase: true,
          emitErrors: false,
          failOnHint: false,
          reporter: function(errors) { }
        }
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.es6']
  }
}

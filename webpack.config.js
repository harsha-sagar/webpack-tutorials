const path    = require('path');

module.exports = {
  context: path.resolve('js'),
  entry: ["./app"],
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  }
}

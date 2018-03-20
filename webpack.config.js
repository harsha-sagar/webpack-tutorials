const path    = require('path');

module.exports = {
  context: path.resolve('js'),
  entry: ["./app"],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
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
        use: ['style-loader', 'css-loader',  "postcss-loader"]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader',  "postcss-loader", 'less-loader']
      }      
    ]
  }
}

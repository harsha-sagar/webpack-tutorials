const path    = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve('js'),
  entry: {
    home: './home_page.js',
    about: './about_page.js',
    contact: './contact_page.js'
  },
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "shared",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  }
}

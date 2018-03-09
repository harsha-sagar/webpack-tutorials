const devConfig = require("./webpack.config.js");

const webPackStrip  = require("strip-loader");
const stripLoader   = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: webPackStrip.loader('console.log')
}

devConfig.module.rules.push(stripLoader);
module.exports  = devConfig;

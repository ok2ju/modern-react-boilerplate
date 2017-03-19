const webpack = require('webpack');
const merge = require('webpack-merge');
const { base } = require('./webpack.config.base');

const prod = merge(base, {
  devtool: 'cheap-module-source-map',
  entry: './index',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],
});

module.exports = prod;

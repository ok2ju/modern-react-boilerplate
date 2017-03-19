const webpack = require('webpack');
const merge = require('webpack-merge');
const { base, sourcePath } = require('./webpack.config.base');

const dev = merge(base, {
  cache: true,
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: sourcePath,
    historyApiFallback: true,
    hot: true,
  },
});

module.exports = dev;

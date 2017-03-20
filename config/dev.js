const webpack = require('webpack');
const merge = require('webpack-merge');
const { common, sourcePath } = require('./base');

module.exports = function(env) {
  return merge(common, {
    cache: true,
    devtool: 'eval',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index',
    ],
    plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('development')
          }
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: sourcePath,
      historyApiFallback: true,
      hot: true,
    },
  });
}
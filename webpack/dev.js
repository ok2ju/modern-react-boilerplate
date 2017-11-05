const webpack = require('webpack');
const merge = require('webpack-merge');
const { dir, common } = require('./base');

module.exports = function(env) {
  return merge(common, {
    cache: true,
    devtool: 'eval',
    output: {
      filename: '[name].js',
      path: dir.build,
    },
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index',
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: dir.source,
      historyApiFallback: true,
      hot: true,
    },
  });
}

const webpack = require('webpack');
const merge = require('webpack-merge');
const { common } = require('./base');

module.exports = function(env) {
  return merge(common, {
    devtool: 'cheap-module-source-map',
    entry: './index',
    plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production'),
          }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
    ],
  });
}

const webpack = require('webpack');
const merge = require('webpack-merge');
const { dir, common } = require('./base');

module.exports = function(env) {
  return merge(common, {
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'scripts/[name].[chunkhash:8].js',
      path: dir.build,
    },
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
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        sourceMap: true,
      }),
    ],
  });
}

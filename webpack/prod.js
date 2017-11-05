const { join } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { dir, common } = require('./base');

module.exports = function(env) {
  return merge(common, {
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'scripts/[name].[chunkhash:8].js',
      path: dir.build,
    },
    entry: './index',
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: join(__dirname, './postcss.config.js'),
                },
              },
            },
          ],
        }),
      }],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        }
      }),
      new ExtractTextPlugin({
        filename: 'styles/[name].[contenthash:8].css',
        allChunks: true,
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

const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = join(__dirname, '..', 'src');
const buildPath = join(__dirname, '..', 'dist');

const common = {
  context: sourcePath,
  output: {
    filename: '[name].js',
    path: buildPath,
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: [{ loader: 'eslint-loader', options: { rules: { semi: 0 } } }],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      join(__dirname, '..', 'node_modules'),
      sourcePath,
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      title: 'Modern Boilerplate',
    }),
    new webpack.NamedModulesPlugin(),
  ],
};

module.exports = {
  common,
  sourcePath,
  buildPath,
};

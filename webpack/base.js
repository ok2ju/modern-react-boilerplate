const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = {
  source: join(__dirname, '..', 'src'),
  build: join(__dirname, '..', 'dist'),
  modules: join(__dirname, '..', 'node_modules'),
};

const common = {
  context: dir.source,
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
      dir.modules,
      dir.source,
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

module.exports = { dir, common };

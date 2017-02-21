const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = join(__dirname, 'src');
const buildPath = join(__dirname, 'dist');

module.exports = (env) => {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      title: 'Modern Boilerplate',
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
    new webpack.NamedModulesPlugin(),
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }

  return {
    context: sourcePath,
    devtool: isProd ? 'source-map' : 'eval',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index'
    ],
    output: {
      filename: '[name].js',
      path: buildPath,
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      }],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        join(__dirname, 'node_modules'),
        sourcePath,
      ],
    },
    plugins,
    devServer: {
      contentBase: sourcePath,
      historyApiFallback: true,
      hot: !isProd,
    },
  };
};

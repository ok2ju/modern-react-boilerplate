const { resolve } = require('path');
const webpack = require('webpack');

const sourcePath = resolve(__dirname, 'src');
const buildPath = resolve(__dirname, 'dist');

module.exports = function(env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new webpack.NamedModulesPlugin(),
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
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
    entry: {
      main: './index.js',
      vendor: [
        'react',
        'react-dom'
      ],
    },
    output: {
      filename: '[name].js',
      path: buildPath,
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]'
            },
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', 'jsx'],
      modules: [
        resolve(__dirname, 'node_modules'),
        sourcePath,
      ],
    },
    plugins,
    devServer: {
      contentBase: sourcePath,
      historyApiFallback: true,
      port: 3000,
      hot: !isProd,
      compress: isProd,
      inline: !isProd,
    },
  };
};

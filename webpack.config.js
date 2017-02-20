const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = resolve(__dirname, 'src');
const buildPath = resolve(__dirname, 'dist');

module.exports = (env) => {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
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
    entry: {
      main: './index.js',
      vendor: [
        'react',
        'react-dom',
      ],
    },
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

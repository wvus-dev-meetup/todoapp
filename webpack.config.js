/*
    ./webpack.config.js
*/

const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m',
  },
};

module.exports = function() {
  const isProd = process.env && process.env.NODE_ENV === 'production';
  const nodeEnv = isProd ? 'production' : 'development';
  console.log('isProd', isProd);
  
  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      children: true,
      minChunks: 2,
    }),

    // setting production environment will strip out
    // some of the development code from the app
    // and libraries
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),

    // create css bundle
    // new ExtractTextPlugin('style-[contenthash:8].css'),

    // create index.html
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      production: isProd,
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    // make sure script tags are async to avoid blocking html render
    // new ScriptExtHtmlWebpackPlugin({
    //   defaultAttribute: 'async',
    // }),

    // preload chunks
    // new PreloadWebpackPlugin(),
  ];
  
  if(isProd) {
    plugins.push(
      // minify remove some of the dead code
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    );
  } else {

  }
  console.log(new UglifyJSPlugin());

  return {
    // entry: ['./vendor/formdata-polyfill/formdata.js', './src/index.js'],
    entry: ['./src/index.js'],
    devtool: '#source-map',
    output: {
      path: path.resolve('dist'),
      filename: 'checkout_bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    },
    plugins: plugins,
    stats: stats,
  }
}
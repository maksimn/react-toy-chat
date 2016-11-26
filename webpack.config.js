var debug = process.env.NODE_ENV !== "production";
var isProd = !debug;

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const STYLE_NAME_TEMPLATE = isProd ? '[hash:base64:5]' : '[name]_[local]_[hash:base64:5]';
const FILENAME_TEMPLATE = isProd ? '[name].[hash]' : '[name]';

module.exports = {
  context: path.join(__dirname, "Client"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(
                'style?sourceMap',
                "css?modules&localIdentName=" + STYLE_NAME_TEMPLATE + "!postcss-loader"
          )
      }
    ]
  },
  output: {
    path: __dirname + "/Views/Home",
    filename: "index.js"
  },
  plugins: debug ? [
          new ExtractTextPlugin(FILENAME_TEMPLATE + ".css", {
              allChunks: true
          })
      ] 
      : [
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
      ],
   postcss: [
        require('postcss-modules-values'),
        require("postcss-color-function"),
        require('autoprefixer')
    ]
};

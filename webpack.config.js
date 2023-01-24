const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

 entry: {
   index: './src/index.js',
   print: './src/print.js',
 },

 plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),

],

devServer: {
  static: './dist',
},
  output: {

   filename: 'bundle.js',

   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    runtimeChunk: 'single',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
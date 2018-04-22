const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const webpack = require('webpack');

module.exports = {
   entry: {
     output: './src/js/output-module.js'
   },
   module : {
    rules :[
      {
         test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
               use: 'css-loader'
           })
      },
      {
        test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
      }
    ]
  },
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
     new ExtractTextPlugin("styles.css"),

   ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   watch: true

};

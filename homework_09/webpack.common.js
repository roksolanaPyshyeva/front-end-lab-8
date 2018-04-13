const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const webpack = require('webpack');

 module.exports = {
   entry: {
     app: './src/app.js',
   },
   module : {
		rules :[
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader"
						}
						]
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
     new CleanWebpackPlugin(['bin']),
     new HtmlWebpackPlugin({
    	filename: 'index.html',
    	template: './src/app.html',
    	minify: {
        	removeComments: true,
        	collapseWhitespace: true
      	}
    }),
     new ExtractTextPlugin("style.css"),
     new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
   ],
   output: {
     filename: 'app.bundle.js',
     path: path.resolve(__dirname, 'bin')
   }
};

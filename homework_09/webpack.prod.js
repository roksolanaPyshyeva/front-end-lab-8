const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
   	plugins: [
        new UglifyJSPlugin(),
        new OptimizeCssAssetsPlugin(),
        new UglifyJsPlugin()
   	]
});

const { config } = require('./webpack.config')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = Object.assign(config, {
	devtool: 'cheap-module-source-map',

	devServer: false,

	entry: ['./index.js', './style.css'],

	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new HtmlWebpackPlugin({
			template: `${__dirname}/src/index.html`,
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false
		}),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify('production') }
		}),
		new ExtractTextPlugin({
			filename: './styles/style.css',
			disable: false,
			allChunks: true
		})
	]
})

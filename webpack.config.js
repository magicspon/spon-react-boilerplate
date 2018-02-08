const { resolve } = require('path')

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const port = 8080

const appBase = path.resolve(process.env.PWD, 'src', 'app')

const config = {
	devtool: 'cheap-module-eval-source-map',

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./index.js',
		'./style.css'
	],

	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist'),
		publicPath: ''
	},

	context: resolve(__dirname, 'src'),

	devServer: {
		port: port,
		hot: true,
		open: true
	},

	resolve: {
		alias: {
			'@': appBase
		}
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: 'url-loader?limit=15000&name=images/[name].[ext]'
			},
			{
				test: /\.eot(\?v=\d+.\d+.\d+)?$/,
				use: 'file-loader?&name=fonts/[name].[ext]'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use:
					'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
			},
			{
				test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
				use:
					'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use:
					'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]'
			}
		]
	},

	plugins: [
		new webpack.LoaderOptionsPlugin({
			test: /\.js$/,
			options: {
				eslint: {
					configFile: resolve(__dirname, '.eslintrc'),
					cache: false
				}
			}
		}),
		new HtmlWebpackPlugin({
			template: `${__dirname}/src/index.html`,
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new ExtractTextPlugin({
			filename: './styles/style.css',
			disable: false,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config

const config = {
	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.resolve(__dirname, '../'),
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader'
				]
			}
		]
	}
}

module.exports = config

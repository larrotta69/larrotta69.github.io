module.exports = {
	entry: {
		main: './src/main.js'
	},
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
}

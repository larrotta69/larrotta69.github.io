var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

module.exports = {
	entry: "./src/main.js",
    output: {
		path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					'style',
					'css?sourceMap!sass?sourceMap'
				),
				options: {
					minimize: true
				}
			},
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				loaders: ['babel']
			}
        ]
    },
	plugins: [
        new ExtractTextPlugin('[name].css'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
    ]
}

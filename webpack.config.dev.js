import webpack from 'webpack'
import path from 'path'

export default {
	debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
	entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/main')
    ],
	target: 'web',
	output: {
        path: __dirname + '/build', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
	devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				loader: 'babel',
				query: {
					presets: ["react-hmre"]
				}
			},
			{
				test: /(\.scss)$/,
				loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
			}
		]
	}
}

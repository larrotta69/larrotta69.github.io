import express from 'express'
import path from 'path'
import webpack from 'webpack'
import config from '../webpack.config.dev'
import open from 'open'

const app = express()
const compiler = webpack(config)
const port = 3000

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function(req, res) {
	res.sendFile(path.join( __dirname, '../build/index.html'))
})

app.listen(port, function(err) {
	if (err) {
		console.log(err)
	} else {
		open(`http://localhost:${port}`)
	}
})

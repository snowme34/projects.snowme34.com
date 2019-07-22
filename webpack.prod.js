const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: './src/index.jsx',
		// vendor: ['react', 'react-dom', 'geopattern', 'react-router-dom', 'redux']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader
				},
				{
					loader: "css-loader",
					options: {
						sourceMap: true,
						modules: true,
						localIdentName: "[local]___[hash:base64:5]"
					}
				},
				{
					loader: 'postcss-loader'
				}
			]
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		"alias": {
			"react": "preact-compat",
			"react-dom": "preact-compat"
		}
	},
	output: {
		path: __dirname + '/public/dist',
		publicPath: '/public/dist/',
		filename: 'bundle.js'
	},
	node: { Buffer: false },  // https://github.com/btmills/geopattern/issues/32
	plugins: [
		new MiniCssExtractPlugin(),
		// vendor: https://webpack.github.io/docs/code-splitting.html#split-app-and-vendor-code
		// new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
		// no need for vendor optimization as it is very small
	]
};

const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
			use: [{
				loader: 'css-loader',
				options: { importLoaders: 1, modules: true, localIdentName: '[local]-[hash:base64:5]' },
			}],
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
		new ExtractTextPlugin('styles.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    })
		// vendor: https://webpack.github.io/docs/code-splitting.html#split-app-and-vendor-code
		// new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
		// no need for vendor optimization as it is very small
	]
};

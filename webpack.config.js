module.exports = {
	entry: {
		contactone: "./src/index.js"
	},
  node: {
    fs: "empty"
  },
	output: {
		filename: "./public/bundle.js",
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: ['node_modules'],
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
};

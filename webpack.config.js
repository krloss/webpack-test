const path = require('path');

module.exports = {
	entry: {
		index:'./src/index.js'
	},
	output: {
		filename:'[name].bundle.js',
		chunkFilename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist/')
	},
	module: {
		rules: [
			{ test:/\.css$/, use:'css-loader' }
		]
	}
};

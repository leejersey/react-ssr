var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports={
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')
  },
  externals:[nodeExternals()],
  module:{
    rules:[
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
}

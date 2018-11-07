const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
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
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules:true,
              localIdentName: '[name]_[local]_[hash:base64:6]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = merge(baseConfig,serverConfig);

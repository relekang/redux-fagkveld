var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['./src/index'],
  devServer: {stats: {chunks: false}},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: ['style', 'css'],
        exclude: /node_modules/,
      },
    ],
  },
}

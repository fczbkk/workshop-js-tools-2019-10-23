const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/calculator.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  }
}

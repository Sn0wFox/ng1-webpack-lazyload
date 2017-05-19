const path  = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: {
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app/bower_components')
    ]
  },
  devServer: {
    contentBase: './app'
  },
  performance: {
    hints: false
  }
};
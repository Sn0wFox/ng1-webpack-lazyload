const path  = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: {
    filename: 'app.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // If source maps are broken, try to play with the following.
            // Leads to a wacky build, but may be necessary to use source maps correctly
            // using babel, which are kinda broken since a bit earlier than version 6.x
            // retainLines: true,
            // sourceMaps: 'both',
            presets: [
              'es2015'
            ],
            plugins: ['syntax-dynamic-import']
          }
        },
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
  devtool: 'eval-source-map', // dev
  // devtool: 'source-map',      // prod
  performance: {
    hints: false
  }
};
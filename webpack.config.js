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
            // Leads to a wacky build, but necessary to use source maps correctly using firefox
            // and babel, which are broken with babel since a bit earlier than version 6.x
            // TODO: change that in prod
            retainLines: true,
            // To make source maps works on Chrome
            sourceMaps: 'both',
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
  devtool: 'eval',  // TODO: better option for prod
  performance: {
    hints: false
  }
};
const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/app.js'),
    vendor: ['angular']
  },
  output: {
    filename: '[name].js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
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
              plugins: [
                'syntax-dynamic-import',
                'angularjs-annotate'    // To enable minimization to work with AngularJS
              ]
            }
          }],
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2
    }),
    // Only for PROD, or at least without evaluated source maps
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    })
  ],
  devServer: {
    contentBase: './app'
  },
  // devtool: 'eval-source-map', // DEV
  devtool: 'source-map',      // PROD
  performance: {
    hints: false
  }
};
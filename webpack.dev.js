const { EnvironmentPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: './public',
    historyApiFallback: true,
    port: 8080
  },
  plugins: [
    new EnvironmentPlugin({
      API_URL: 'http://fordevs.herokuapp.com/api'
    }),
    new HtmlWebpackPlugin({
      template: './template.dev.html'
    })
  ]
})

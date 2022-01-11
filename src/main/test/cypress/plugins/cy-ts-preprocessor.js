// Copy of https://github.com/bahmutov/cypress-angular-unit-test/blob/master/cypress/plugins/cy-ts-preprocessor.js
const wp = require('@cypress/webpack-preprocessor')

module.exports = wp({
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: 'ts-loader'
      }
    ]
  }
})

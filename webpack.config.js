const path = require('path');
const ScssConfigWebpackPlugin = require('scss-config-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: [
      './src/app.js'
  ],
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  module: {
      rules: [
        // ... другие правила
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
  plugins: [
          new ScssConfigWebpackPlugin(),
          new VueLoaderPlugin()
      ]
}
